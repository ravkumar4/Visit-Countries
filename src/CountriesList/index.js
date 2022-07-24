import './index.css'

const CountriesList = props => {
  const {countries, addVisit} = props
  const {id, name, isVisited} = countries

  const handleVisit = () => {
    addVisit(id)
  }
  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="non-visited" onClick={handleVisit}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountriesList
