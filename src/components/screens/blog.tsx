import React from "react"
import styles from '../styles/blog.module.css'
import Post from "../../assets/types/post"
import Header from "../features/header"
interface Props {
  posts: Post[]
}

const Blog: React.FC<Props> = ({
  posts
}) => {
  return (
    <div className={styles.main}>
      <Header
        active={'blog'}
        title={"Blog"}
      />
      {
        posts.map((post, index) => 
          <div 
            key={index}
            className={styles.postContainer}
          >
            <div className={styles.topRow}>
              <div className={styles.date}>
                {post.date}
              </div>
              <div className={styles.title}>
                {post.title}
              </div>
            </div>
            <div className={styles.body}>
              {post.body}
            </div>
          </div>
        )
      }
    </div>
  )
}
export default Blog