import React from 'react';
import PostList from '../post/PostList'
import CityList from './CityList';
import ReactDOM from 'react-dom'
import DynamicForm from '../DynamicForm'

class CityShow extends React.Component {
  constructor() {
    super()
    this.updatePosts = this.updatePosts.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.state = {
      posts: [],
      currentCity: {}
    }
  }

  postFetcher = () => {
    fetch(`https://abjj-wayfarer-api.herokuapp.com/posts`).then((res) => res.json()).then((jsonData) => {
      const filteredPosts = jsonData.filter((post) => {
        return post.city === this.props.currentCity._id
      })
      this.setState({posts: filteredPosts, currentCity: this.props.currentCity})
    }).catch((err) => console.log(err))
  }

  componentDidMount() {
    this.postFetcher()
  }

  componentDidUpdate(prevProps) { // throw postFetcher in here after if check.
    if (this.props.currentCity._id && this.props.currentCity._id !== prevProps.currentCity._id) {
      this.postFetcher();
      console.log('hit it')
    }
  }

  updatePosts = () => {
    console.log('new post called')
    this.postFetcher()
  }

  deletePost = (postId, cityId) => {
    let confirmed = window.confirm('Are you sure?');
    if (confirmed) {
      fetch(`https://abjj-wayfarer-api.herokuapp.com/post/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {_id: postId, city: cityId}
        )
      }).then((res) => res.json()).then((jsonData) => { // console.log(jsonData)
        const filteredPosts = this.state.posts.filter((post) => {
          return postId !== post._id
        });
        this.setState({posts: filteredPosts})
      })
    }
  }
  showForm = () => {
    ReactDOM.render (
      <DynamicForm closeForm={
          this.closeForm
        }
        currentCity={
          this.state.currentCity
        }/>,
      document.getElementById('modal-root')
    )
  }

  closeForm = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'))
    this.updatePosts();
  }

  render() {
    console.log(this.state)
    return (
      <>
        <CityList 
          cities={this.props.cities}
          currentCity={this.props.currentCity}
          updateCurrentCity={this.props.updateCurrentCity}
          updatePosts={this.updatePosts }
          />
        <div className="container-fluid right-column">
          <div className="row city-content">
            <div className="col city-name">
              <p className="CityName">{this.props.currentCity.name}</p>
              <p className="CitySubtitle">{this.props.currentCity.country}</p>
            </div>
            <div className="col city-image">
              <img src={this.props.currentCity.image}
                id="main-city-image"
                alt=""/>
              <div className="create-button">
              <div className="buttonHolder">
                <i onClick={this.showForm} className="fas fa-plus-circle"id="plusBtn"></i>
              </div>
              </div>
            </div>
          </div>
          <div className="post-container">
            <PostList postData={this.state.posts}
              deletePost={this.deletePost}
              updatePosts={this.updatePosts}/>
          </div>
        </div>
      </>
    )
  }
}

export default CityShow;
