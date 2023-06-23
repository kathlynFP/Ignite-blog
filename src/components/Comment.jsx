import { ThumbsUp, Trash } from '@phosphor-icons/react';

import sasukeProfile from '../assets/sasuke-profile.jpg'

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export const Comment = () => {
  return (
    <div className={styles.comment}>

      <Avatar hasBorder={false} src={sasukeProfile} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong> Sasuke Uchira</strong>
              <time title="18 de junho às 08:13h" dateTime="2023-06-18 01:32:20" >Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}></Trash>
            </button>
          </header>

          <p>Muito bom parabens!!</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>

        </footer>
      </div>
    </div>
  );
}