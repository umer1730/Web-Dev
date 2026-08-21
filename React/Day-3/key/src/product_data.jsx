const products = [
    {
        id: 101,
        name: "Laptop"
    },
    {
        id: 102,
        name: "Mouse"
    },
    {
        id: 103,
        name: "Phone"
    }
];

function Product(){
    return(
        <>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                    </div>
                ))
            }
        </>
    )
}

export default Product