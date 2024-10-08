import styles from './Products.module.css'

function Products({ products }) {
	return (
		<section className={styles.produtos}>
			<h1>Alguns de nossos produtos</h1>
			<p>
				Conheça um pouco mais sobre algumas de nossas linhas. Temos certeza que uma delas será o diferencial para você.
			</p>
			<div className={styles.container_itens}>
				{products.map(item => (
					<div className={styles.box_item} key={item.description}>
						<img
							src={item.image}
							className={styles.imagem}
							alt={item.title ? `Imagem de ${item.title}` : 'Imagem do produto'}
						/>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Products
