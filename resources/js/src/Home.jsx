import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8001/api/room_rents')
            .then(response => {
                console.log(response.data);  // Check the image path here
                setHouses(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    

    return (
        <div className="d-flex bg-light flex-column align-items-center w-100 min-vh-100">
            <div className="container-sm">
                <h3 className="mb-3">List of Houses</h3>
                <div className="row">
                    {houses.map(house => (
                       
                        <div key={house.id} className="col-md-4 mb-4">
                            <div className="card">
                            <img src={house.image_path} className="card-img-top" alt={house.title} />

                                <div className="card-body">
                                    <h5 className="card-title">{house.title}</h5>
                                    <p className="card-text">Price: {house.price}</p>
                                    <p className="card-text">Location: {house.location}</p>
                                    <p className="card-text">Bedrooms: {house.bedrooms}</p>
                                    <p className="card-text">Bathrooms: {house.bathrooms}</p>
                                    <p className="card-text">Balconies: {house.balconies}</p>
                                    <p className="card-text">Furnished Status: {house.furnished_status}</p>
                                    <Link to={`/house-details/${house.id}`} className="btn btn-info mr-2">
                                        View
                                    </Link>
                                    {/* Add delete functionality if needed */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
