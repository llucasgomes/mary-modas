//Products

import { comments } from '../../assets/data/dataComments.js'
import { products } from '../../assets/data/dataProducts.js'

//components
import Banner from '../../components/Banner'
import Comments from '../../components/Comments'
import Products from '../../components/Products'

function Home() {
	return (
		<>
			<Banner />
			<Products products={products} />
			<Comments comments={comments} />
		</>
	)
}

export default Home
