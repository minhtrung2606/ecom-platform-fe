export const genProducts = (len) => Array
  .from(Array(len)
    .keys())
  .map(idx => ({
    id: idx,
    name: `Product ${idx + 1}`,
    desc: `This is the product ${idx + 1}`,
    price: Math.round((1 + Number.EPSILON) * 10000) / 100, // Math.random() instead 1
    images: ['/products/thumb.png']
  })
);
