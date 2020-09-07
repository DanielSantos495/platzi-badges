import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

import Gravatar from './Gravatar';

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges);
  React.useMemo( () => {
    const result = badges.filter( badge =>
    `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase() ) );

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {

  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if(filteredBadges.length === 0) {

      return (
        <div>
          <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className="form-control"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <h3>
            Not badges were found
          </h3>
            <Link className="btn btn-primary" to="/badges/new">Create new Badge</Link>
        </div>
      )
    }

    return (
      <div className="BadgesList">

        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <ul className="list-unstyled">

          {filteredBadges.slice(0).reverse().map(badge => {

            return (

              <li className="BadgesList__li" key={badge.id}>
                <Link to={`/badges/${badge.id}`}>
                  <div>
                    <Gravatar className="BadgeList__avatar" email={badge.email} alt="Avatar" />

                  </div>
                </Link>

                  <div>
                    <p>{badge.firstName} {badge.lastName}</p>
                    <a href="https://www.twitter.com" >
                    <img className="BadgesList__icon" src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Icono Twitter"/>
                    @{badge.twitter}
                    </a>
                    <p>{badge.jobTitle}</p>
                  </div>
              </li>

            );

          })}

        </ul>
      </div>

    );


}

export default BadgesList;