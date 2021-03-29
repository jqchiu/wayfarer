import CityListCard from './CityListCard';

const CityList = (props) => {
  const cities = props.cities.map((city) => {
    return (
      <div 
        onClick={() => {
        props.updateCurrentCity(city);
        props.updatePosts();
        }} 
        key={city._id} >
        <CityListCard key={city._id} city={city} />
      </div>
    )
  })
  return (
    <div className="col-6 col-md-4" id="cities-container">
      <span className="cities-card">Cities</span>
      {cities}
    </div>
  )
}

export default CityList;