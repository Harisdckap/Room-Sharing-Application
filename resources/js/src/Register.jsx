// Register.js
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', data);
      console.log(response.data);
      // handle success (e.g., redirect to login, show a success message)
    } catch (error) {
      console.error(error.response.data);
      // handle error (e.g., show an error message)
    }
  };

  const password = watch('password', '');

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Enter a valid email',
                      },
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password_confirmation">Confirm Password</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                    {...register('password_confirmation', {
                      required: 'Confirm Password is required',
                      validate: value =>
                        value === password || 'The passwords do not match',
                    })}
                  />
                  {errors.password_confirmation && (
                    <div className="invalid-feedback">{errors.password_confirmation.message}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
