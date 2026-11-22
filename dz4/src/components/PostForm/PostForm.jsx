import { useState } from 'react'
import classes from './PostForm.module.css'

export const PostForm = ({ setPosts }) => {  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAddPost = (e) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) return

    setPosts((prev) => [
      {
        id: Date.now(),
        title: title.trim(),
        body: description.trim(),
        status: true,          
      },
      ...prev,
    ])

    setTitle('')
    setDescription('')
  }

  return (
    <form className={classes.form} onSubmit={handleAddPost}>
      <h2 className={classes.title}>Новый пост</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={classes.input}
        type="text"
        placeholder="Заголовок поста"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={classes.textarea}
        placeholder="Текст поста ..."
        rows={6}
      />
      <div className={classes.footer}>
        <button className={classes.button} type="submit">
          Опубликовать
        </button>
      </div>
    </form>
  )
}