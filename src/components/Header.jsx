import style from './Header.module.css';

import logoIgnite from '../assets/logo-ignite.svg'

export const Header = () => {

	console.log(logoIgnite);

	return (
		<header className={style.header}>
			<img src={logoIgnite} alt='Logo Ignite' />
			<strong >Ignite Feed</strong>
		</header>
	);
}