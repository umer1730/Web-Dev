function Product(){
    const products = [
        "Laptop",
        "Mouse",
        "Keyborad",
        "Phone"
    ]
    return (
        <>
        {
            products.map((products) =>(<h2>{products}</h2>))
        }
        </>
    )
}
export default Product