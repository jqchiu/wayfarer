import React from 'react'
import DynamicForm from './DynamicForm'
import ReactDOM from 'react-dom'
import PostShow from './PostShow'
import image1 from '../images/wayfarer-logo-small.jpg'

class PostCard extends React.Component {
  constructor() {
    super()
    this.closeForm = this.closeForm.bind(this)
  }

  closeForm = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'))
  }

  launchEdit = () => {
    ReactDOM.render(
      <DynamicForm 
        closeForm={this.closeForm} 
        edit={true} 
        post={this.props.postData._id}
        city={this.props.postData.city} 
        updatePosts={this.props.updatePosts} 
        />, document.getElementById('modal-root'))
  }

  truncate = (str) => {
    return str.length > 1000 ? str.substring(0, 997) + '...' : str
  }

  showPost = () => {
    ReactDOM.render(
      <PostShow 
        postData={this.props.postData} 
        closeForm={this.closeForm} />, document.getElementById('modal-root'))
  }

  render() {
  return (

    <div className="card mb-3 post-content">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={image1} className="postImage" alt="..." />
        </div>
        <div className="col-md-8 postContent">
          <div className="card-body postBody" onClick={this.showPost}>
            <h5 className="card-title postTitle">{this.props.postData.title}</h5>
            <p className="card-text postText">{this.truncate(this.props.postData.body)}</p>
          </div>
          <hr/>
          <div className="EDbtn">
            <div className="edit-btn" onClick={this.launchEdit}>
            <p className="editBtn">EDIT</p>
            </div>
            <div className="delete-btn">
            <p className="deleteBtn" onClick={() => {
                this.props.deletePost(
                this.props.postData._id, 
                this.props.postData.city
                )
              }
              }>DELETE
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export default PostCard;