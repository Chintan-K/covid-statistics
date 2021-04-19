import React from 'react';

import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import Title from './Components/Title/Title';
import { fetchData } from './api';
import './App.css';

class App extends React.Component {
    state = {
      data: {},
      country: '',
      
    }
 
    async componentDidMount() {
      const data = await fetchData();
      
      this.setState({ data });
      
    }
  
    handleCountryChange = async (country) => {
      const data = await fetchData(country);
  
      this.setState({ data, country: country });
    }
  
    render() {
      const { data, country } = this.state;
     
      return (
        
        <div className='container'>
          <Title/>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Charts /> 
        </div>
      );
    }
  }
  
  export default App;