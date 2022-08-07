import React, { useState } from 'react'

export default function Product(props) {
const {products} = props;
const [carts, setCarts] = useState([]);

const handelCartItem = (p) => {
    carts.push(p);
    setCarts([...carts])
};
return (
    <>
    {carts.length} Items
    {products.map((product) => <div key={Math.random(5)}><h3>{product.name}</h3> <button onClick={() => handelCartItem(product)}>Add to cart</button></div>)}
    </>
)
}
