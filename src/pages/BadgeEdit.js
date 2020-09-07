import React from 'react';

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {

  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  }

  componentDidMount() {

    this.fetchData();

  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try {
                                          //con este objeto podemos acceder a los parametros de la Ruta
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({loading: false, form: data});

    } catch(error) {

      this.setState({loading: false, form: error});

    }
  }

  handleChange = e => {

   this.setState({
    //Este form reescribe los input, debemos hacer que no pase, y que se escriban todos
    form: {
      //usamos el operator spread para que vaya desplegando los valores que se van guardando y así no se reemplazan
      ...this.state.form,
      //Así añadimos solo se reescribe el último valor
      [e.target.name]: e.target.value,
    },

   });

  }

  handleSubmit = async e => {

    e.preventDefault();
    this.setState({loading: true, error: null});

    try {

      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({loading: false});

      this.props.history.push('/badges');

    } catch(error) {

      this.setState({loading: false, error: error});
    }

  }

  render() {

    if (this.state.loading)  {
      return <PageLoading />
    }
    return (

      <React.Fragment>

        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">

              <Badge
                firstName={this.state.form.firstName || 'Fisrt Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email}
                twitter={this.state.form.twitter || 'Twitter'}
                avatar="https://i.imgur.com/Xw0Be34.png"
              />

            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
              />

            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }

}

export default BadgeEdit;