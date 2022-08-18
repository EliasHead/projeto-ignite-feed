import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/eliashead.png',
      name: 'Elias Costa',
      role: 'CTO HeadTech'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu repositorio, É um projeto no NLW return, eventos da Rocketseat. O nome do projeto é DoctorCare.'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-17 17:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/oloko64.png',
      name: 'Reinaldo',
      role: 'CTO Simbiose'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu repositorio, É um projeto no NLW return, eventos da Rocketseat. O nome do projeto é DoctorCare.'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-10 18:00:00'),
  },
]
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
