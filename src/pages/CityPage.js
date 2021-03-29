import React from 'react';
// import image1 from '../images/london.jpg';
import CityShow from '../components/city/CityShow';

class CityPage extends React.Component {
  state = {
      cityData: [],
      currentCity: {},
    }

  componentDidMount() {
    fetch('https://abjj-wayfarer-api.herokuapp.com/cities/')
    .then((res) => res.json())
    .then((jsonData) => {
      console.log('CIty Page JSON: ', jsonData[0])
      this.setState({
        cityData: jsonData,
        currentCity: jsonData[0]
      })
    }).catch((err) => console.log(err))
  }

  updateCurrentCity = (city) => {
    this.setState({
      currentCity: city
    })
  }

  render() {
    return (

      <>
        <div className="container-fluid cities">
            <CityShow 
              cities={this.state.cityData}
              currentCity={this.state.currentCity}
              updateCurrentCity={this.updateCurrentCity}
            />
        </div>
        <div id="modal-root"></div>
      </>

    )
  }
}

export default CityPage;