import React, { useState } from "react"
import styles from '../styles/blog.module.css'
import Post from "../../assets/types/post"
import Header from "../features/header"
interface Props {
  posts: Post[]
}

const Blog: React.FC<Props> = ({
  posts
}) => {
  const [activePost, setActivePost] = useState<Post>(posts[0])
  return (
    <div className={styles.main}>
      <Header
        active={'blog'}
        title={"Blog"}
      />
      <div className={styles.mainRow}>
        <div className={styles.leftNav}>
          {
            posts.map((post, index)=>
              <div 
                key={index}
                className={activePost.title == post.title ? styles.inactiveNavLink : styles.navLink}
                onClick={()=>setActivePost(post)}
              >
                {post.title}
              </div>
            )
          }
        </div>
        <div className={styles.postContainer}>
          <div className={styles.topRow}>
            <div className={styles.title}>
              {activePost.title}
            </div>
            <div className={styles.date}>
              {activePost.date}
            </div>
          </div>
          <div className={styles.body}>
            {
              activePost.body.map((line, index)=>
                <div 
                  key={index}
                  className={styles.postLine}
                >
                  {line}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog