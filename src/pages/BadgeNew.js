import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {

  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
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

      await api.badges.create(this.state.form);
      this.setState({loading: false});

      this.props.history.push('/badges');

    } catch(error) {

      this.setState({loading: false, error: error});
    }

  }

  render() {
    console.log('test');

    if (this.state.loading)  {
      return <PageLoading />
    }
    return (

      <React.Fragment>

        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
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
              <h1>New Attendant</h1>

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

export default BadgeNew;