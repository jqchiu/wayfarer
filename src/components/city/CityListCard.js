const CityListCard = (props) => {
  return (
    <div className="card" id="city-container">
        <div className="row g-0" id="city-card">
          <div className="col-md-4 cityImg">
            <img src={props.city.image} alt="..."/>
          </div>
          <div className="col-md-8 cityName">
            <div className="card-body" id="city-body">
              <span className="city-title">{props.city.name}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CityListCard