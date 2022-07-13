import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  filteredList = (id, suggestion) => {
    console.log(id, suggestion)
    this.setState({userInput: suggestion})
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props

    const {userInput} = this.state

    const filteredSuggestions = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="search-container">
            <div className="search-image-input-container">
              <img
                className="search-image"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                className="search-element"
                placeholder="search google"
                onChange={this.onChangeUserInput}
                value={userInput}
              />
            </div>
            <ul className="list-style">
              {filteredSuggestions.map(eachItem => (
                <SuggestionItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  filteredList={this.filteredList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
