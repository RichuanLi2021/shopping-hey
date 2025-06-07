import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import type { ProductListProps } from '~/types/product';
import { ProductCard } from './productCard';

export const ProductList = (
    {products}: ProductListProps
) => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {products.map((item) => (
        <Col key={item.id}>
          <ProductCard product={item} />
        </Col>
      ))}
    </Row>
  );
}