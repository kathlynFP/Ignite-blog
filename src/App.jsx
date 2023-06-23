import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Naruto Uzumaki" content="Sasukeeeeeeeeeeeeee" />
          <Post author="Naruto Uzumaki" content="Narutoooooooooooooo" />          
        </main>
      </div>
    </>
  )
}

