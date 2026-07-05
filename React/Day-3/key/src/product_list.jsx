const products = [
  {
    id: 1,
    name: "Laptop",
    price: 90000,
  },
  {
    id: 2,
    name: "Phone",
    price: 45000,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 3000,
  },
];

function List() {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </>
  );
}

export default List;