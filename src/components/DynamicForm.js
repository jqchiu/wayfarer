import React from 'react'

class DynamicForm extends React.Component {
  state = {
    title: '',
    body: '',
    city: '',
    currentCity: '',
    new: true
  }

  componentDidMount() {
    if (this.props.edit) {
      this.setState({new: false})
      fetch(`https://abjj-wayfarer-api.herokuapp.com/post/${
        this.props.post
      }`).then((res) => res.json()).then((jsonData) => {
        this.setState({city: jsonData.city, title: jsonData.title, body: jsonData.body})
      })
      fetch(`https://abjj-wayfarer-api.herokuapp.com/city/${
        this.props.city
      }`).then((res) => res.json()).then((jsonData) => {
        this.setState({currentCity: jsonData})
      })
    } else {
      this.setState({currentCity: this.props.currentCity, city: this.props.currentCity._id})
    }

  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const requestBody = {
      city: this.state.city,
      title: this.state.title,
      body: this.state.body
    }
    console.log(`request body: ${requestBody}`)
    if (requestBody.city && (requestBody.title.length > 0) && (requestBody.title.length < 200) && requestBody.body) {
      console.log(`all true!`)
      if (this.state.new) {
        fetch('https://abjj-wayfarer-api.herokuapp.com/post/', {
          method: 'post',
          // enctype: 'multipart/form-data',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        }).then((response) => { // console.log(response)
          return response.json()
        }).then((jsonData) => { // console.log(jsonData)
        }).then(this.props.updatePosts).catch((err) => {
          throw err
        }).then(this.props.closeForm)
      } else {
        requestBody._id = this.props.post
        fetch('https://abjj-wayfarer-api.herokuapp.com/post/', {
          method: 'put',
          // enctype: 'multipart/form-data',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        }).then((response) => { // console.log(response)
          return response.json()
        }).then((jsonData) => { // console.log(jsonData)
        }).then(this.props.updatePosts).catch((err) => {
          throw err
        }).then(this.props.closeForm)
      }
    } else {
      if (! requestBody.city) {
        alert('Missing City!')
      } else if (requestBody.title.length < 1) {
        alert('Post must include a title')
      } else if (requestBody.title.length > 200) {
        alert('Title too long')
      } else if (! requestBody.body) {
        alert('Post must include a body')
      } else {
        alert('Unknown Error')
      }
    }
  }

  render() {

        if (this.state.new) {
            return(
                <div className="mymodal">
                    <div className="mymodalcontent">
                    <h3 className="create-editTitle">Create a New Post for {this.state.currentCity.name}</h3>
                        <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="title" 
                                name="title" 
                                placeholder="Where did you go?" 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Body</label>
                            <textarea 
                                className="form-control" 
                                onChange={this.handleChange} 
                                name="body" 
                                id="body" 
                                rows="13">
                            </textarea>
                        </div>
                        <div class="col-auto">
                            <button type="submit" className="btn btn-primary mb-3 create-editBtn">Submit</button>
                            <button onClick={this.props.closeForm} className="btn btn-primary mb-3 create-editClose">Close</button>
                        </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="mymodal">
                <div className="mymodalcontent">
                <h3 className="create-editTitle">Edit Post on {this.state.currentCity.name}</h3>
                    <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title"
                            name="title"
                            placeholder="Where did you go?" 
                            onChange={this.handleChange} 
                            value={this.state.title} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                        <textarea 
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.body} 
                            name="body" 
                            id="body" 
                            rows="13">
                        </textarea>
                    </div>
                    <div class="col-auto">
                        <button type="submit" className="btn btn-primary mb-3 create-editBtn">Submit</button>
                        <button onClick={this.props.closeForm} className="btn btn-primary mb-3 create-editClose">Close</button>
                    </div>
                    </form>
                </div>
            </div>
            )
        }
    }
}
export default DynamicForm
