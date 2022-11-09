import { genProducts } from '../mock_data/products';
import { Card, Container, Row, Col } from 'react-bootstrap';

function ProductCard({name = '', price = '', desc = '', images = 'default.png'}) {
  return (
    <Card style={{ width: '18rem', marginBottom: '2.4rem' }}>
      <Card.Img variant="top" src={`${images}`}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{price}</Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function ProductCardList({count}) {
  const list = genProducts(count);

  return (
    list.map(({id = '', name, price, desc, images}) => (
      <Col key={id} style={{display: 'flex', justifyContent: 'center'}}>
        <ProductCard name={name} price={price} desc={desc} images={images}/>
      </Col>
    ))
  )
}

function ProductCardListContainer ({count}) {
  return (
    <Container>
      <Row>
        <ProductCardList count={count} />
      </Row>
    </Container>
  );
}

export default ProductCardListContainer;
