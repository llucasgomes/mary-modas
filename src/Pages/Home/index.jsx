//Products

import { products } from "../../assets/data/dataProducts.js";
import { comments } from "../../assets/data/dataComments.js";

//components
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import Comments from "../../components/Comments";

function Home() {
  return (
    <>
      <Banner />
      <Products products={products} />
      <Comments comments={comments} />
    </>
  );
}

export default Home;
