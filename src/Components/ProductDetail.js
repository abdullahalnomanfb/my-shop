import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProduct } from '../redux/actions/productActions';


const ProductDetail = () => {

    const product = useSelector((state) => state.product);

    const { productId } = useParams();
    const dispatch = useDispatch();

    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, []);

    const { title, image, price, category, description } = singleProduct;

    return (
        <section>
            <div className="container">
                <div style={{border:'3px solid #6c415d', borderRadius:'10px',padding:'10px'}} className="row mb-3">
                    <div className="col-md-6">
                        <div style={{width:'400px'}}>
                            <img src={image} alt="" style={{maxWidth:'100%'}}/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-2">
                        <h4>{title}</h4>
                        <h3 className="pl-3 p-2 my-3" style={{width:'200px', backgroundColor:'#7aff00',borderRadius:"23px 0px 0px 23px"}} >Price: ${price}</h3>
                        <p style={{backgroundColor:'#f2f2ff',padding:'8px',color:'#1c1819'}}>{category}</p>
                        <p style={{backgroundColor:'#ddd',padding:'10px'}}>{description}</p>
                        <div>
                            <div className="btn">
                               <div onClick={()=>alert("We do not currently have this product. Thank you..")} style={{borderRadius:'7px',width:'200px'}} className="btn-danger p-2">
                               Add to cart
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;