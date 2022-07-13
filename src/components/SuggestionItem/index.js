import './index.css'

const SuggestionItem = props => {
  const {eachItem, filteredList} = props
  const {id, suggestion} = eachItem

  const setInputValue = () => {
    console.log('clicked')
    filteredList(id, suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        onClick={setInputValue}
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
