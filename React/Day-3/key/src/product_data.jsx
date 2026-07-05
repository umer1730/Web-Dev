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
                products.map((products) => (
                    <div key={products.id}>
                        <h2>{products.name}</h2>
                    </div>
                ))
            }
        </>
    )
}

export default Product