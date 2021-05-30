import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Products';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch(setProducts(data)))
            .catch((err) => {
                console.log("error", err);
            })

    }, [])

    console.log("products:", products);

    return (
        <div className="container" >
            <div className="row">
                <Products />
            </div>
        </div>
    );
};

export default ProductListing;