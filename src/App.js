import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='countrys-info'>
        <CountriesList />
        <Switch>
          <Route path='/:id' component={CountryDetails}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
