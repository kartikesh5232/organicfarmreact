import React from 'react';
import { delItem,addProfile,delProfile } from '../redux/action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Basket = () => {

    const state =useSelector((state)=>state.handleBasket);
  

    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                  
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                            <p  className='mt-0 '>Qty:{cartItem.qty}   <button  onClick={() => handleClose(cartItem)} >-</button></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div>
            {state.length !== 0 && state.map(cartItems)}
        </div>
    );

}

export default Basket;
