import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewHouse = () => {
    const { id } = useParams();
    const [house, setHouse] = useState(null);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8001/api/room_rents/${id}`)
            .then((response) => {
                setHouse(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    if (!house) return <div>Loading...</div>;

    return (
        <div className="container my-5">
            <div className="card">
                <img
                    src={house.image_path || "https://via.placeholder.com/600"}
                    className="card-img-top"
                    alt={house.title}
                    style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h3 className="card-title">{house.title}</h3>
                    <p className="card-text">
                        <strong>Price:</strong> {house.price}
                    </p>
                    <p className="card-text">
                        <strong>Location:</strong> {house.location}
                    </p>
                    <p className="card-text">
                        <strong>Bedrooms:</strong> {house.bedrooms}
                    </p>
                    <p className="card-text">
                        <strong>Bathrooms:</strong> {house.bathrooms}
                    </p>
                    <p className="card-text">
                        <strong>Balconies:</strong> {house.balconies}
                    </p>
                    <p className="card-text">
                        <strong>Furnished Status:</strong>{" "}
                        {house.furnished_status}
                    </p>
                    <p className="card-text">
                        <strong>Super Built-up Area:</strong>{" "}
                        {house.super_built_up_area} sqft
                    </p>
                    <p className="card-text">
                        <strong>Price per sqft:</strong> {house.price_per_sqft}
                    </p>
                    <p className="card-text">
                        <strong>Floor:</strong> {house.floor}
                    </p>
                    <p className="card-text">
                        <strong>Total Floors:</strong> {house.total_floors}
                    </p>
                    <p className="card-text">
                        <strong>Facing:</strong> {house.facing}
                    </p>
                    <p className="card-text">
                        <strong>Age of Construction:</strong>{" "}
                        {house.age_of_construction} years
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link to="/" className="btn btn-primary mt-3">
                            Back to Home
                        </Link>
                        <Link
                            to={`/edit-house/${house.id}`}
                            className="btn btn-warning mt-3"
                        >
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewHouse;
