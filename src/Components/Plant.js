import React, { Component } from 'react'

class Plant extends Component {
  state = {
    query: '',
    results: []
  }

  // getInfo = () => {
  //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data // MusicGraph returns an object named data, 
  //                            // as does axios. So... data.data                             
  //       })
  //     })
  // }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <div id="plant">
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
          <button type="submit" className="btn btn-primary">Search</button>  
        </form>
        <span>
          <img src="/images/plant1.jpg"></img>  {/*here we need to get the image from DB for the specific chioce */}
        </span>
      </div>
    )
  }
}

export default Plant