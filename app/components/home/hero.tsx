import {Container, Button, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router';

interface MyComponentProps {
  
}

export default function Hero(props: MyComponentProps) {
  return (
    <div 
        className="
            bg-primary  
            text-white
            d-flex align-items-center
            "
            style={{ minHeight: "80vh"}}
      >
        <Container>
            <Row className="align-items-center py-4">
                <Col 
                    xs={12}
                    md={6}
                    className="
                        text-center
                        text-md-start 
                        mb-4 
                        mb-md-0"
                        >
                    <h1 className="display-5 fw-bold">Welcome to ProdManage</h1>
                    <p className="lead">Hi, welcome</p>

                    <Link to="/products">
                        <Button variant="light" size="lg" className="mt-3">
                        Explore Products
                        </Button>
                    </Link>
                </Col>

                <Col 
                    xs={12}
                    md={6}
                    className="
                        d-flex 
                        justify-content-center 
                        justify-content-md-end"
                    >
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/1533/1533926.png'
                        alt='Product illustration'
                        className='img-fluid mt-md-0'
                    />
                </Col>
            </Row>
        </Container>
    </div>
  );
}
