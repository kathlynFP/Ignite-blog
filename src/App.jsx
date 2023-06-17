import { Post } from "./components/Post"
import { Header } from "./components/Header"

import './global.css';

export function App() {

  return (
    <>
      <Header />
      <Post author="Naruto Uzumaki" content="Sasukeeeeeeeeeeeeee" />
      <Post author="Sasuke Uchira" content="Narutoooooooooooooo" />
    </>
  )
}

