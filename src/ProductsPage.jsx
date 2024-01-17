import Product from "./Product";
import Data from './Model';

function ProductsPage() {
    return (
        <div className="products">
            {Data.map(item => {
                const { id, image, name, price, isLiked, hasGift, hasFreeShipping } = item;
                return <Product image={image} name={name} price={price} isLiked={isLiked}
                    hasGift={hasGift} hasFreeShipping={hasFreeShipping} id={id} />
            })}
        </div>
    )
}

export default ProductsPage;