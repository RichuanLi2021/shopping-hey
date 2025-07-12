import Card from 'react-bootstrap/Card';
import { FaEdit, FaTrash } from "react-icons/fa";
import type { ProductCardProps } from '~/types/product';
import Button from 'react-bootstrap/Button';
import { setSelectedProduct } from '~/redux/actions/products/productCreators';
import { useDispatch, useSelector } from 'react-redux';
import type { AppState } from '~/redux/store';
import type { AppDispatch } from '~/redux/store';
import { useState } from 'react';

export const ProductCard = ({
      product, 
      onAddToCart
    }: ProductCardProps
) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, isAuthenticated } = useSelector((state: AppState) => state.auth);
  const { selectedProductId } = useSelector((state: AppState) => state.products);

  const [mode, setMode] = useState<'edit' | 'delete' | null>(null);

  const handleEdit = (id: string) => {
    console.log("product id is: ", product.id);
    dispatch(setSelectedProduct(id));
    setMode('edit');
    // open edit modal, etc.
  };

  const handleDelete = (id: string) => {
    console.log("product id is: ", product.id);
    dispatch(setSelectedProduct(id));
    setMode('delete');
    // open delete confirmation modal, etc.
  };

  // Helper to check permissions
  const canEditOrDelete = () => {
    if (!isAuthenticated || !currentUser) return false;
    return currentUser.accessLevel === 'ADMIN' || currentUser.accessLevel === 'SELLER';
  };

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
                    {canEditOrDelete() && (
                      <>
                        <FaEdit 
                          role="button" 
                          className="text-success" 
                          title="Edit" 
                          onClick={() => handleEdit(product.id)} 
                        />
                        <FaTrash 
                          role="button" 
                          className="text-danger" 
                          title="Delete" 
                          onClick={() => handleDelete(product.id)} 
                        />
                      </>
                    )}
                    {onAddToCart && 
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      onClick={() => onAddToCart(product.id)}>
                        Add to Cart
                    </Button>}
                </div>
        </div>
      </Card.Body>
    </Card>
  );
}