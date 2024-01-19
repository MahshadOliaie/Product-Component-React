import Product from "../Products/Product";
import Data from '../../Model';
import './ProductPage.css'

function ProductsPage() {
    return (
        <div className="products">
            {Data.map(item => {
                return <Product {...item} key={item.id}/>
            })}
        </div>
    )
}

export default ProductsPage;