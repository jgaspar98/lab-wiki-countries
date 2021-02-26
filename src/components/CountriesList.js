import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
    state = {
        countries:[]
    }

    componentDidMount = () => {
        this.setState({
            countries: countries
        })
    }

    render() {
        const { countries } = this.state;
        return (
            <div>
                <h1>Countrys</h1>
                <div>
                    {countries.map((country) => {
                        return (
                            <div key={country.cca3}>
                                <Link  to={`/${country.cca3}`}>{country.name.common} {country.flag}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CountriesList