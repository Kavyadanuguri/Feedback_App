// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {value: true}

  displayCard = () => {
    this.setState({value: false})
  }

  render() {
    const {value} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    console.log(resources)
    console.log(loveEmojiUrl)
    console.log(value)

    return (
      <div className="bg-container">
        {value && (
          <div className="container1">
            <h1 className="h1">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="con1">
              {emojis.map(each => (
                <li className="con2" key={each.id}>
                  <button
                    className="button"
                    type="button"
                    onClick={this.displayCard}
                  >
                    <img
                      src={each.imageUrl}
                      alt={each.name}
                      className="image"
                    />
                    <p className="p">{each.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!value && (
          <div className="container1">
            <img className="image2" alt="love emoji" src={loveEmojiUrl} />
            <h1>Thank You !</h1>
            <p className="p2">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
