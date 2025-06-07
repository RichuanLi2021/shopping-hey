import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router';
import type { ProductCardProps } from '~/types/product';

export const ProductCard = (
    {product}: ProductCardProps
) => {
  return (
     <Card className="h-100" key={product.id}>
      <Card.Img variant="top" src={product.banner} />
      <Card.Body>
        <Card.Title className="text-truncate">{product.name}</Card.Title>
        <Card.Text className="text-truncate">{product.description}</Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
             <div>
                <h5 className="fw-bold text-primary">${product.price}</h5>
            </div>
                <div className="d-flex gap-3 mt-2">
                    {/* <Link to={`/itemuct/${product.id}`}>
                        <Button variant="primary" size="sm">
                            View
                        </Button>
                    </Link> */}
                    <FaEdit role="button" className="text-success" title="Edit" />
                    <FaTrash role="button" className="text-danger" title="Delete" />
                </div>
        </div>
      </Card.Body>
    </Card>
  );
}