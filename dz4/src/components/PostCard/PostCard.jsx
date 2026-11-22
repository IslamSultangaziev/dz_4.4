import classes from './PostCard.module.css'

export const PostCard = ({ post, onDelete }) => {
  return (
    <article className={classes.card}>
      <div className={classes.cardHeader}>
        <h3 className={classes.title}>{post.title}</h3>
        <button
          className={classes.deleteBtn}
          onClick={() => onDelete(post.id)}
          aria-label="Удалить пост"
          title="Удалить"
        >
          ✕
        </button>
      </div>

      <p className={classes.content}>{post.body}</p>

      <span
        className={`${classes.status} ${
          post.status ? classes.statusActive : classes.statusDraft
        }`}
      >
        {post.status ? '● Опубликован' : '○ Черновик'}
      </span>
    </article>
  )
}