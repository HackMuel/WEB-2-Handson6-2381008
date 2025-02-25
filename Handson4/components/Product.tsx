
import React from 'react';

interface Product{
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

const Product:React.FC<Product> = ({name, price, description, imageUrl}) => {
    console.log(name)
    console.log(price)
    console.log(description)
    console.log(imageUrl)
    return (
        <div className="product"style={{border:"1px solid black", margin:"20px", borderRadius:"20px"}}>
            <img src={imageUrl} alt="name" className='product-image' width={100} height={100}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>

        </div>
    )}
    export default Product;