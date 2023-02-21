import './index.css'

const PackageItem = props => {
  const {packageData} = props
  const {name, imageUrl, description} = packageData

  return (
    <li className="package-item">
      <img src={imageUrl} alt={name} />
      <div className="info-container">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}
export default PackageItem
