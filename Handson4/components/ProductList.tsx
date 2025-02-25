import React from "react";
import Product from "./Product";

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: "Laptop",
            price: 20000,
            description: "Laptop High Performance and use for gaming and work",
            imageUrl: "https://images.unsplash.com/photo-1679124500499-88d6a0d3774b?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            name: "Nebula",
            price: 50000,
            description: "Nebula is a beautiful sky with a lot of stars",
            imageUrl: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },


        {
            name: "Blue - YungKai",
            price: 70000,
            description: "Remind me of your blue eyes and your smile",
            imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            name: "Swiss Paradise",
            price: 80000,
            description: "Swiss Paradise is a beautiful mountain with a clear blue sky and green grass",
            imageUrl: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },


        {
            name: "Sunrise",
            price: 40000,
            description: "When the life begins, the sunrise is the first thing we see",
            imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

    ]
    return (
        <>
        <h1>Product List</h1>
        {
            product.map((product, index) => {
                return <Product key={index} {...product}/>

            })
        }
        </>
    )
}
export default ProductList;