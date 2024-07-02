import React, { useState } from 'react';
import axios from 'axios';

const AddHouse = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        balconies: '',
        furnished_status: '',
        super_built_up_area: '',
        price_per_sqft: '',
        floor: '',
        total_floors: '',
        facing: '',
        age_of_construction: '',
        description: '',
        image_path: ''
    });

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        if (image) {
            data.append('image', image);
        }

        axios.post('http://127.0.0.1:8001/api/room_rents', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            alert('Home details submitted successfully');
            // Optionally, reset the form here
            setFormData({
                title: '',
                price: '',
                location: '',
                bedrooms: '',
                bathrooms: '',
                balconies: '',
                furnished_status: '',
                super_built_up_area: '',
                price_per_sqft: '',
                floor: '',
                total_floors: '',
                facing: '',
                age_of_construction: '',
                description: '',
                // image_path: ''
            });
            setImage(null);
        })
        .catch(error => {
            console.error('There was an error submitting the form!', error);
            setError('There was an error submitting the form.');
        });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <h2 className="mb-4">Home Details to Sell</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms</label>
                <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="bathrooms">Bathrooms</label>
                <input type="number" className="form-control" id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="balconies">Balconies</label>
                <input type="number" className="form-control" id="balconies" name="balconies" value={formData.balconies} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="furnished_status">Furnished Status</label>
                <input type="text" className="form-control" id="furnished_status" name="furnished_status" value={formData.furnished_status} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="super_built_up_area">Super Built-Up Area</label>
                <input type="number" className="form-control" id="super_built_up_area" name="super_built_up_area" value={formData.super_built_up_area} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="price_per_sqft">Price per Sqft</label>
                <input type="number" className="form-control" id="price_per_sqft" name="price_per_sqft" value={formData.price_per_sqft} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="floor">Floor</label>
                <input type="number" className="form-control" id="floor" name="floor" value={formData.floor} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="total_floors">Total Floors</label>
                <input type="number" className="form-control" id="total_floors" name="total_floors" value={formData.total_floors} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="facing">Facing</label>
                <input type="text" className="form-control" id="facing" name="facing" value={formData.facing} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="age_of_construction">Age of Construction</label>
                <input type="number" className="form-control" id="age_of_construction" name="age_of_construction" value={formData.age_of_construction} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default AddHouse;




















// import React, { useState } from 'react';
// import axios from 'axios';

// const AddHouse = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         price: '',
//         location: '',
//         bedrooms: '',
//         bathrooms: '',
//         balconies: '',
//         furnished_status: '',
//         super_built_up_area: '',
//         price_per_sqft: '',
//         floor: '',
//         total_floors: '',
//         facing: '',
//         age_of_construction: '',
//         description: '',
//         image_path: ''
//     });

//     const [image, setImage] = useState(null);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const data = new FormData();
//         Object.keys(formData).forEach(key => {
//             data.append(key, formData[key]);
//         });

//         if (image) {
//             data.append('image', image);
//         }

//         axios.post('http://127.0.0.1:8000/api/room_rents', data, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             alert('Home details submitted successfully');
//         })
//         .catch(error => {
//             console.error('There was an error submitting the form!', error);
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="container mt-5">
//             <h2 className="mb-4">Home Details to Sell</h2>
//             <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input type="text" className="form-control" id="title" name="title" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="price">Price</label>
//                 <input type="number" className="form-control" id="price" name="price" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="location">Location</label>
//                 <input type="text" className="form-control" id="location" name="location" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="bedrooms">Bedrooms</label>
//                 <input type="number" className="form-control" id="bedrooms" name="bedrooms" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="bathrooms">Bathrooms</label>
//                 <input type="number" className="form-control" id="bathrooms" name="bathrooms" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="balconies">Balconies</label>
//                 <input type="number" className="form-control" id="balconies" name="balconies" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="furnished_status">Furnished Status</label>
//                 <input type="text" className="form-control" id="furnished_status" name="furnished_status" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="super_built_up_area">Super Built-Up Area</label>
//                 <input type="number" className="form-control" id="super_built_up_area" name="super_built_up_area" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="price_per_sqft">Price per Sqft</label>
//                 <input type="number" className="form-control" id="price_per_sqft" name="price_per_sqft" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="floor">Floor</label>
//                 <input type="number" className="form-control" id="floor" name="floor" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="total_floors">Total Floors</label>
//                 <input type="number" className="form-control" id="total_floors" name="total_floors" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="facing">Facing</label>
//                 <input type="text" className="form-control" id="facing" name="facing" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="age_of_construction">Age of Construction</label>
//                 <input type="number" className="form-control" id="age_of_construction" name="age_of_construction" onChange={handleChange} />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="image">Image</label>
//                 <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//     );
// };

// export default AddHouse;
