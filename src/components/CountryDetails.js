import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component{
    state = {
        name: '',
        capital: '',
        area: '',
        region:''
    }

    fecthCountry = () => {
        const countryId = this.props.match.params.id;
        const foundCountry = countries.find((country) => {
            return country.cca3 === countryId;
        });

        this.setState({
            name: foundCountry.name.common,
            capital: foundCountry.capital,
            area: foundCountry.area,
            region: foundCountry.region
        })
    }

    componentDidMount() {
        this.fecthCountry();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.fecthCountry();
        }
       
    }

    

    render() {
        const { name, capital, area, region } = this.state;
    
        return (
            <div>
                <h1>{name}</h1>
                <p>{capital}</p>
                <p>{area}</p>
                <p>{region}</p>
            </div>        
        )
    }
}




export default CountryDetails