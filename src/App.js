import React from 'react';

import { Cards, CountryStat, Chart} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    moroccodata: {},
    countryMr: 'Morocco',
  }
  

  async componentDidMount() {
    const data = await fetchData();
    const moroccodata = await fetchData();
    this.setState({ data });
    this.setState({ moroccodata });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    
    this.setState({ data, country: country });
  }




  
  render() {
    const { data, country} = this.state;

    return (
       
        <div className={styles.container}>
            
        <img className={styles.image} src={image} alt="COVID-19" />
        
        <Cards data={data} />
        
        <CountryStat handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        
      </div>
      
    );
  }
}

export default App;