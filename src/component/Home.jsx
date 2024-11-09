import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="bg-light bg-gradient">
            <div className="card bg-dark text-black border-0 " >
                <img className="card-img" src="assets/bg.jpg" alt="Card image" height={700} />
                <div className="card-img-overlay d-flex flex-column justify-content-top">
                    <div className="container  ">

                        <h5 className="card-title display-3 fw-bolder mb-0 text-center">FRESH VEGETABLES</h5>
                        <p class="card-text lead fs-4 text-center">We have zero chemical contaminated vegetables and Fruits, Specially made with organic fertilizers</p>
                       
                    </div>
                </div>
            </div>

            <Products />
        </div>
    );

}

export default Home;
