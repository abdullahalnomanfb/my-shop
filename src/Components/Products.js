import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {

    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {

        const { id, title, image, price, category } = product;

        return (<div className="col-md-4 col-lg-3" key={id}>

        
            <Card className=" mb-3" style={{}} >
                <div style={{with:'200px'}} className="text-center">
                <Card.Img variant="top" src={image} style={{height:'250px',width:'250px',padding:'10px'}} />
                </div>
                <Card.Body style={{height:'150px'}}>
                    <Card.Title>{title}</Card.Title>
                        <div >
                            <h4>$ {price}</h4>
                            <p className="text-secondary">{category}</p>
                        </div>
               
                </Card.Body>
                <Link to={`/product/${id}`}>
                <div className="text-center p-3"><Button variant="primary"> Buy Now</Button></div>
                </Link>
            </Card>



            {/* <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title} />

                    </div>
                    <div className="content">
                        <div className="header"> {title} </div>
                        <div className="meta price"> ${price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div> */}
        </div >)
    })


    return (
        <> {renderList} </>
    );
};

export default Products;