import { Avatar } from './Avatar';
import { Comment } from './Comment.jsx'

import narutoProfile from '../assets/naruto-profile.jpg'

import styles from './Post.module.css';
import { useState } from 'react';

// estados = variáveis que eu quero que  o componente monitore

export const Post = ({ author, content, publishedAt }) => {

  const [comments, setComments] = useState([
    'Muito bom, parabéns!!!'
  ]);

  const [newCommentText, setNewCommentText] = useState('')

  const handleCreateNewComment = () => {
    event.preventDefault();

    const newCommentText = event.target.comment.value;

    //imutabilidade
    // spread operator = ...comments -- pega todos valores do array/obj
    setComments([...comments, newCommentText ]);
    
    setNewCommentText('');
    
  }

  const handleNewComment = () => {
    console.log(event.target.value);

    setNewCommentText(event.target.value)

  }

  const deleteComment = (comment) => {
    console.log(`Deletar ${comment}`)
  }

  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>
              {author.name}
            </strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="18 de junho às 08:13h" dateTime="2023-06-18 01:32:20" >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }
          else
            return <a key={line.content}>{line.content}</a>
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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Deixe seu comentario'
          onChange={handleNewComment}

        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>

        {
          comments.map(comment => {
            return (
              <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
            )
          })
        }

      </div>

    </article>
  );
}

// Programação imperativa
// o que deve ser feito (passo-a-passo)

// Receita de bolo 

//1. Ligar o forno a 180;
//2. Abrir a porta do forno;
//3. Colocar a massa numa forma;
//4. Colocar a forma com a massa dentro do forno;

// Programa~c"ao declarativa

// Quais as condições para eu ter o resultado

//Receita de bolo

//1. O forno precisa estar a 180;
//2. Quando o forno estiver quente, colocar a massa para assar;
//3. Após 40 minutos retirar o bolo do forno.

//Key no react
// por que única?

//3 principais momentos em que um component é renderizado novamento no React.

// 1. Quando o estado é alterado;
//2. Quando uma propriedade é alterada;
//3. Quando um componente pai renderiza novamente;
//(Quando isso acontece precisamos das keys para que todos os filhos não sejam renderizados de novo)
//------------------

// Não é bom utilizar indices do array como key, pois os arrays podem mudar de posição excluir itens, assim bugando o react.


