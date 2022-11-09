import ProductCard from "./ProductCard"

const ProductCardList = ({ products }) => (
  <div className="row">
    {products?.map((id) => (
      <div
        key={id}
        className={`
          col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12
          d-flex align-item-center justify-content-center
          mb-3
        `}
      >
        <ProductCard />
      </div>
    ))}
  </div>
)

export default ProductCardList
