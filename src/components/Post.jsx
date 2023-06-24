import { Avatar } from './Avatar';
import { Comment } from './Comment.jsx'

import narutoProfile from '../assets/naruto-profile.jpg'

import styles from './Post.module.css';




export const Post = ({ author, content, publishedAt }) => {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={narutoProfile} />
          <div className={styles.authorInfo}>
            <strong>
              Naruto Uzumaki
            </strong>
            <span>Sétimo Hokage</span>
          </div>
        </div>

        <time title="18 de junho às 08:13h" dateTime="2023-06-18 01:32:20" >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>
          }
          else
          return <a>{line.content}</a>
        })}
        {/* <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a>👉 jane.design/doctorcare</a></p>
        <p>
          <a>#novoarojeto</a>{' '}
          <a>#nlw </a>{' '}
          <a>#rocketseat</a>{' '}

        </p> */}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentario'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>

        <Comment />
        <Comment />

      </div>

    </article>
  );
}