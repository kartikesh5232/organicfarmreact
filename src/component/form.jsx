import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [authority, setAuthority] = useState(null);



    useEffect(() => {
        const getAuthority = async () => {
            try {
                const auth = await localStorage.getItem("Authority");

                setAuthority(auth);
            } catch (error) {
                console.error("Failed to fetch authority from localStorage:", error);
            }
        };
        getAuthority();
    }, []);




    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        price: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {

            setFormData(prevUser => ({
                ...prevUser,
                file: files[0]

            }));

        } else {

            setFormData(prevUser => ({
                ...prevUser,
                [name]: value
            }));
        }

    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('category', formData.category);
        data.append('price', formData.price);
        data.append('file', formData.file);



        try {

            const response = await axios.post('http://localhost:9002/image/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Form submitted successfully');
        } catch (error) {

            console.error('Error uploading form data:', error);

        }


    }




    return (
        <>

            {authority == null && <div class="d-flex align-items-top justify-content-center vh-50 bg-light mt-5">
                <div class="text-center border border-danger p-4 rounded bg-white shadow">
                    <h1 class="text-danger mb-3">
                        <i class="bi bi-exclamation-circle-fill"></i> Access Denied
                    </h1>
                    <h1 class="text-secondary fs-4">
                        You don't have admin access to add items.Please login with admin user
                    </h1>
                    <p class="text-secondary fs-5">
                        Please login with admin user
                    </p>
                </div>
            </div>}



            {authority !== null &&

                <div className="container">
                    <div className=" text-center mt-5 ">

                        <h1 >Add your Item deatils</h1>


                    </div>


                    <div className="row ">
                        <div className="col-lg-7 mx-auto">
                            <div className="card mt-2 mx-auto p-4 bg-light">
                                <div className="card-body bg-light">

                                    <div className="container">
                                        <form id="contact-form" role="form" onSubmit={handleFileUpload}>



                                            <div className="controls">

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="form_name">Title *</label>
                                                            <input id="form_name" type="text" onChange={handleChange} name="title" className="form-control" required="required" />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="form_lastname">Description *</label>
                                                            <input id="form_lastname" type="text" onChange={handleChange} name="description" className="form-control" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="form_name">Price *</label>
                                                            <input id="form_name" type="text" onChange={handleChange} name="price" className="form-control" required="required" />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="form_lastname">Category *</label>
                                                            <input id="form_lastname" type="text" name="category" onChange={handleChange} className="form-control" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 mt-2 ">

                                                        <label for="formFileLg" className="form-label">Upload item Picture</label>
                                                        <input className="form-control form-control-lg" name="file" id="formFileLg" onChange={handleChange} type="file" />
                                                    </div>


                                                    <div className="col-md-12 mt-2">

                                                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Submit" />

                                                    </div>

                                                </div>


                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </div>


                        </div>


                    </div>
                </div>
            }
        </>
    );

}

export default Form;
