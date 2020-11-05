import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from '../firebase'
import FlipMove from "react-flip-move";
import CreatePost from './CreatePost'

function Feed({ createPost, pageTitle }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>{pageTitle}</h2>
      </div>

      { createPost? <CreatePost /> : <TweetBox /> }
    

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

    </div>
  )
}

export default Feed
