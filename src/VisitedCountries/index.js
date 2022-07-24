import './index.css'

const VisitedCountries = props => {
  const {visitedCountries, removeCountry} = props
  const {id, name, imageUrl, isVisited} = visitedCountries

  const handleRemove = () => {
    removeCountry(id)
  }

  return (
    isVisited && (
      <li className="visited-country-item">
        <img src={imageUrl} className="image" alt="thumbnail" />
        <div className="bottom">
          <p className="name">{name}</p>
          <button
            type="button"
            className="remove-button"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </li>
    )
  )
}
export default VisitedCountries
