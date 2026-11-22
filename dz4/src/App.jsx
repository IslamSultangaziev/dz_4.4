import classes from './App.module.css'
import { Header, Loader, PostForm, PostList, Footer } from './components'
import { useEffect, useState } from 'react'

export const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const getPosts = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://dummyjson.com/posts', {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const data = await response.json()

        const half = data.posts.length / 2
        const postsWithStatus = data.posts.map((post, index) => ({
          ...post,
          status: index < half,   
        }))

        setPosts(postsWithStatus)
      } catch (e) {
        if (e.name === 'AbortError') return
        setError(e.message || 'Ошибка загрузки')
        setPosts([])
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    getPosts()
    return () => controller.abort()
  }, [])

  const handleDeletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id))
  }

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <PostForm setPosts={setPosts} />

        {loading ? (
          <Loader />
        ) : error ? (
          <p>Ошибка: {error}</p>
        ) : posts.length === 0 ? (
          <p>Пока нет постов. Создайте первый!</p>
        ) : (
          <PostList posts={posts} onDelete={handleDeletePost} />
        )}
      </main>
      <Footer />
    </div>
  )
}
  