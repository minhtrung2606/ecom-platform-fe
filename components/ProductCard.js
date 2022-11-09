import styled from "styled-components"
import { ColorPalette } from "../libs/Colors"

const ProductCardWrapper = styled.a`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 2rem 0rem;
  border-radius: 0.8rem;
  background: ${ColorPalette.BaseGray100};
  height: 100%;
  box-shadow: 0 .125rem .25rem ${ColorPalette.BaseGray400};
  max-width: 20rem;
  text-decoration: none;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: 0 .5rem 1rem ${ColorPalette.BasePrimary100};
    cursor: pointer;
  }
`

const ProductContent = styled.div`
  padding: 0 0.5rem;
`

const ProductImg = styled.img`
  min-height: 16rem;
  background-color: ${ColorPalette.BaseGray300};
  display: inline-block;
  width: 100%;
`

const ProductPrice = styled(ProductContent)`
  color: ${ColorPalette.BasePrimary700};
`
const ProductName = styled(ProductContent)`
  color: ${ColorPalette.BaseGray700};

  h5 {
    margin-bottom: 0;
  }
`

const ProductDesc = styled(ProductContent)`
  color: ${ColorPalette.BaseGray500};
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
