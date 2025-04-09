import { Button, Card, Col, Row } from "antd";
import { useList } from "../../hooks";
import { useCart } from "../../contexts/carContext";
const { Meta } = Card;

function Homepage() {
  const { data: products } = useList({
    resource: "products",
  });
  const { addToCart } = useCart();

  return (
    <Row gutter={[16, 16]}>
      {products?.map((product: any) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <Card
            hoverable
            cover={<img alt={product.name} src={product.image} />}
          >
            <Meta title={product.name} description={product.price} />
            <Button onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Homepage;
