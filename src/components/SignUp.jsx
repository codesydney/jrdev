import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/defaultAvatar.png';
import avatarBackground from '../assets/avatarBackground.jpg';
import { useContext } from 'react';
import UserContext from '../context/UserInfo';
import axios from 'axios';
function SignUp() {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState();
  const [valid, setValid] = useState();
  const [login, setLogin] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleLastName = (e) => {
    setLastname(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.files[0]);
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('Password do not match!');
    } else {
      setSpinner(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('city', city);
      formData.append('phone', phoneNumber);
      formData.append('avatar', avatar);

      handlePost(formData);
    }
  };

  const handlePost = async (user) => {
    try {
      const res = await axios.post('http://localhost:3000/api/user/signup', user);
      if (res.status === 200) {
        setError('');
        setValid(true);
        setIsLoggedIn(true);
        navigate('/userdashboard');
      }
    } catch (error) {
      setSpinner(false);
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="text-center center">
      <div className="signin">
        <div className="w-100 m-auto">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
            <div
              className="d-flex justify-content-center p-3 rounded mb-2"
              style={{
                backgroundImage: `url(${avatarBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <label htmlFor="avatarUpload">
                <img
                  src={thumbnail ? thumbnail : defaultAvatar}
                  alt="Preview"
                  className="rounded-circle"
                  role="button"
                  style={{
                    width: '5rem',
                    height: '5rem',
                    border: '3px solid rgb(242,245,246)',
                  }}
                />
              </label>
              <input
                type="file"
                id="avatarUpload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleAvatar}
              />
            </div>
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control rounded"
                id="firstNameInput"
                placeholder="First Name"
                onChange={handleFirstName}
                value={firstName}
              />
              <label htmlFor="firstNameInput">First Name</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control rounded"
                id="lastNameInput"
                placeholder="LastName"
                onChange={handleLastName}
                value={lastName}
              />
              <label htmlFor="lastNameInput">Last Name</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="email"
                className="form-control rounded"
                id="emailInput"
                placeholder="name@example.com"
                onChange={handleEmail}
                value={email}
              />
              <label htmlFor="emailInput">Email address</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="password"
                className="form-control rounded"
                id="passwordInput"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
              />
              <label htmlFor="passwordInput">Password</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="password"
                className="form-control rounded"
                id="passwordConfirmdInput"
                placeholder="Confirm Password"
                onChange={handlePasswordConfirm}
                value={passwordConfirm}
              />
              <label htmlFor="passwordConfirmdInput">Confirm Password</label>
            </div>

            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control rounded"
                id="cityInput"
                placeholder="Sydney"
                onChange={handleCity}
                value={city}
              />
              <label htmlFor="cityInput">City</label>
            </div>

            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control rounded"
                id="phoneNumberInput"
                placeholder="phoneNumber"
                onChange={handlePhoneNumber}
                value={phoneNumber}
              />
              <label htmlFor="phoneNumberInput">Phone</label>
            </div>

            <p className={valid ? 'text-success' : 'text-danger'}>
              {error} {login && <Link to="/signin">Sign In</Link>}
            </p>

            {!spinner ? (
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign Up
              </button>
            ) : (
              <button class="w-100 btn btn-lg btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
