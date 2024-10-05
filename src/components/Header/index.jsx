import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
	return (
		<header className={styles.header}>
			<div>
				<h2>Mary Modas</h2>
			</div>
			<nav>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>

					<Link to="/about">
						<li>Sobre</li>
					</Link>
					<Link to="/contact">
						<li>Contato</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}

export default Header
