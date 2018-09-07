import React from 'react'

class Book extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.book.id,
      status: this.props.book.status
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({
      status: 'reading'
    })
  }

  render () {
    return (
      <div>
        <h3>To read</h3>
        <ul>
          {this.props.toRead.map(book => {
            return (
              <div key={book.id}>
                <Book book={book} />
              </div>
            )
            // <li>{book.title}</li>
            // {/* <button onClick={() => this.handleClick(book.id)}>I am reading</button> */}
            // <button id={id} onClick={() => this.handleClick(id)}>I am reading</button>
          })}
        </ul>
      </div>
    )
  }
}

export default Book
