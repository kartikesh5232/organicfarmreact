import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delProfile } from '../redux/action';
import { useDispatch } from 'react-redux';

const Navbar = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleBasket)
  const loginStatus = useSelector((state) => state.Profile);


  const Logout = () => {

    localStorage.removeItem('Token');
    localStorage.removeItem('Authority');
    dispatch(delProfile());

  }

  return (
    <div className='mb-3' >
      <nav className="navbar navbar-expand-lg navbar-light   py-0 " >
        <a className="navbar-brand ms-5 fw-bold fs-4 " href="/">OrganicVEGGIE</a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarNav" >
          <ul className="navbar-nav  " >
            <li className="nav-item active ">
              <a className="nav-link mt-2" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mt-2" href="/products">Items</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mt-2" href="about">AboutUs</a>
            </li>
            <li className="nav-item ">
              <button className='btn'>


                <NavLink className='btn mt-0' to={`/basket`}><i className='fa fa-shopping-cart pe-1'></i>Basket({state.length})</NavLink>
              </button>
              <button className='btn mx-auto  btn-sm'>
                <a href='/form' className='btn btn-dark'>Add Items</a>
              </button>
            </li>

          </ul>

          {!loginStatus &&
            <div className="ms-auto">
              <button className='btn me-2'>
                <a href='/login' className='btn '><i className='fa fa-sign-in'></i>Login</a>
              </button>
              <button className='btn'>
                <a href='/register' className='btn btn btn-light'>Register</a>
              </button>
            </div>
          }


          {loginStatus &&
            <div className="ms-auto">
              <button className='btn'>
                <button className='btn btn btn-light' > <i class="fa fa-id-badge" aria-hidden="true"></i></button>
              </button>

              <button className='btn'>
                <button className='btn btn btn-light' onClick={() => Logout()}  ><i className='fa fa-sign-out'></i>Logout</button>
              </button>
            </div>
          }


        </div>
      </nav>
    </div>
  );

}

export default Navbar;
