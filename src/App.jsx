import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Elias Costa'
            conteudo='O maior estadio do mundo'
          />
          <Post
            author='Amanda Corado'
            conteudo='Projeto PGNI'
          />
        </main>
      </div>
    </div>
  )
}
