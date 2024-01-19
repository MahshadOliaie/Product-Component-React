import Product from "./Product";
import Data from './Model';

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