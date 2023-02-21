import {Component} from 'react'
import Loader from 'react-loader-spinner'

import PackageItem from '../PackageItem'
import './index.css'

class TravelGuidePackages extends Component {
  state = {
    packagesList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({
        packagesList: updatedData,
        isLoading: false,
      })
    }
  }

  renderPackageList = () => {
    const {packagesList} = this.state
    return (
      <ul className="packages-list">
        {packagesList.map(eachPackage => (
          <PackageItem packageData={eachPackage} key={eachPackage.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="packages-list-heading">Travel Guide</h1>
        {isLoading ? this.renderLoader() : this.renderPackageList()}
      </div>
    )
  }
}

export default TravelGuidePackages
