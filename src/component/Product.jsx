import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addItem(product));
    }


    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }
        , []
    );

    const Loading = () => {

        return (
            <>

                <div className='col-md-3'>
                    <Skeleton height={500} width={500} />

                </div>

            </>
        );
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'>

                    <h4 className='text-uppercase text-black-50'>

                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>

                    <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>Add to Cart</button>


                    <NavLink className="btn btn-dark mx-2 py-2 px-3" to={`/basket`} >
                        Go to Cart
                    </NavLink>
                </div>

            </>
        );
    }

    return (
        <>
            <div>
                <div className='container'>

                    <div className='row'>
                        {loading ? <Loading /> : <ShowProducts />}

                    </div>
                </div>
            </div>

        </>
    );
}


export default Product;
