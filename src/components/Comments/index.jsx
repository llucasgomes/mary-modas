import styles from './Comments.module.css'

function Comments({ comments }) {
	return (
		<section className={styles.comentarios}>
			<h1>Escute quem compra da gente</h1>
			<p>Depoimento de clientes Mary's Moda Intima</p>
			<div className={styles.container_comentarios}>
				{comments.map(item => (
					<div className={styles.box_comentario} key={item.comment}>
						<img className={styles.imagem_comentario} src={item.image} alt="Imagem de Perfim do comentario" />

						<h3>
							<span> “</span>
							{item.comment}”
						</h3>
						<p>
							{item.name}, {item.city} - {item.state}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Comments
