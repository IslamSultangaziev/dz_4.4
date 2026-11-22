import classes from './PostList.module.css'
import { PostCard } from '../PostCard/PostCard.jsx'

export const PostList = ({ posts, onDelete }) => {
  return (
    <section className={classes.list}>
      <h2 className={classes.title}>Лента постов</h2>
      <div className={classes.grid}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={onDelete}     
          />
        ))}
      </div>
    </section>
  )
}