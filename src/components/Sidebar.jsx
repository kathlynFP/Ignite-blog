import { PencilLine } from '@phosphor-icons/react';

import narutoProfile from '../assets/naruto-profile.jpg'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<img 
				className={styles.cover}        
				src="https://images.unsplash.com/photo-1563863251222-11d3e3bd3b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
			/>

			<div className={styles.profile}>
				<Avatar className={styles.avatar} src={narutoProfile}/>
				<strong>Naruto Usumaki</strong>
				<span>Sétimo Hokage</span>
			</div>

			<footer>
				<a href='#'>
					<PencilLine/>
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);

}