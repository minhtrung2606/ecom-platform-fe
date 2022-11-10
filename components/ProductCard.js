import styled from "styled-components"
import { ColorPalette as CP } from "../libs/Colors"

const ProductCardWrapper = styled.a`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 2rem 0rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: ${CP.BaseGray100};
  height: 100%;
  box-shadow: 0 .125rem .25rem ${CP.BaseGray400};
  max-width: 20rem;
  text-decoration: none;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: 0 .5rem 1rem ${CP.BasePrimary100};
    cursor: pointer;
  }
`

const ProductImg = styled.img`
  min-height: 16rem;
  background-color: ${CP.BaseGray300};
  display: inline-block;
  width: 100%;
`

const ProductContent = styled.div`
  padding: 0 0.5rem;
`

const ProductPrice = styled(ProductContent)`
  color: ${CP.BasePrimary700};
`
const ProductName = styled(ProductContent)`
  color: ${CP.BaseGray900};

  h5 {
    margin-bottom: 0;
  }
`

const ProductDesc = styled(ProductContent)`
  color: ${CP.BaseGray500};
`

const ProductCard = () => (
  <ProductCardWrapper>
    <ProductImg src="/queenflowers-logo.svg" />
    <ProductPrice>
      <h4>
        <strong>$29.99</strong>
      </h4>
    </ProductPrice>
    <ProductName>
      <h5><strong>Lorem Ipsum</strong></h5>
    </ProductName>
    <ProductDesc>This is a product</ProductDesc>
  </ProductCardWrapper>
)

export default ProductCard
