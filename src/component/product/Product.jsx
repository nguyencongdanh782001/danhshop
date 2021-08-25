import { Button, Card } from 'react-bootstrap'
import { MdAddShoppingCart } from "react-icons/md";
const Product = ({product, onAddCart}) => {
    return (
        <Card className="product">
            <Card.Img variant="top" src = {product.media.source} title={product.name} className="img-product"/>
            <Card.Body>
                <div className="title-product mb-1">
                    <Card.Title as="h5" >{product.name}</Card.Title>
                    <Card.Title as="h5" >{product.price.formatted_with_symbol}</Card.Title>
                </div>
                <Card.Subtitle as="h6" dangerouslySetInnerHTML={{ __html:product.description}} className="mb-2 text-muted"/>
                <div className="icon-product justify-content-end">
                    <Button aria-label="Add to Cart" variant="light" onClick={() => onAddCart(product.id, 1)}>
                        <MdAddShoppingCart/>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product
