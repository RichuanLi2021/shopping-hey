import Card from 'react-bootstrap/Card';
import { FaEdit, FaTrash } from "react-icons/fa";
import type { ProductCardProps } from '~/types/product';

export const ProductCard = ({
      product, 
      onDelete, 
      onEdit
    }: ProductCardProps & {
      onEdit: () => void, 
      onDelete: () => void
    }
) => {
  return (
     <Card className="h-100" key={product.id}>
      <Card.Img variant="top" src={product.banner} className="product-image" />
      <Card.Body>
        <Card.Title className="text-truncate">{product.name}</Card.Title>
        <Card.Text className="text-truncate">{product.description}</Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
             <div>
                <h5 className="fw-bold text-primary">${product.price}</h5>
            </div>
                <div className="d-flex gap-3 mt-2">
                    <FaEdit role="button" className="text-success" title="Edit" onClick={onEdit}/>
                    <FaTrash role="button" className="text-danger" title="Delete" onClick={onDelete}/>
                </div>
        </div>
      </Card.Body>
    </Card>
  );
}