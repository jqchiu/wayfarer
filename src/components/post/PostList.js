import PostCard from './PostCard'

function dateSort(a, b) {
  return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
}

const PostList = (props) => {
  const sortedPosts = props.postData.sort(dateSort).map((post, index) => {
    return (
        <PostCard 
          postData={props.postData[index]} 
          key={props.postData[index]._id}
          deletePost={props.deletePost}
          launchEditForm={props.launchEditForm}
          updatePosts={props.updatePosts}
        /> 
    )
  })

  return (
    <>
      <span className="posts">Posts</span>
      { sortedPosts }
    </>
  )
}

export default PostList;