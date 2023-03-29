import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/defaultAvatar.png';
import signUp from '../assets/signUp.png';
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
  const [userType, setUserType] = useState('candidate');
  const [thumbnail, setThumbnail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState();
  const [valid, setValid] = useState();
  const [spinner, setSpinner] = useState(false);

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleLastName = e => {
    setLastname(e.target.value);
  };
  const handleCity = e => {
    setCity(e.target.value);
  };
  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value);
  };
  const handleFirstName = e => {
    setFirstName(e.target.value);
  };
  const handleAvatar = e => {
    setAvatar(e.target.files[0]);

    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = e => {
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
      // formData.append('userType', userType);
      handlePost(formData);
    }
  };

  const handlePost = async user => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/user/signup',
        user
      );
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
    <div className="w-full">
      <div className="w-[80%] mx-auto flex flex-col sm:flex-row justify-center items-start bg-gradient-to-tr from-white to-bg-200">
        {/* left side */}
        <div className="hidden md:block md:w-1/2 xl:w-2/3 rounded-tr-[20%] my-auto">
          <img src={signUp} alt="" className="h-full w-full" />
        </div>
        {/* Signup form */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-6 sm:p-12 md:border-double md:border-l-4 md:rounded-tl-[15%]">
          <h1 className="text-2xl font-bold text-center">Create an account</h1>
          <form
            onSubmit={handleSubmit}
            className="mt-6"
            action="#"
            method="POST"
          >
            {/* avatar and name */}
            <div className="flex shadow-lg w-[60%] p-2  gap-2 mx-auto rounded-tr-3xl rounded-bl-xl rounded-tl-3xl rounded-br-3xl">
              <div className="mt-2 flex flex-1 flex-col gap-2 justify-center items-center ">
                <img
                  src={thumbnail ? thumbnail : defaultAvatar}
                  alt="thumbnail"
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 border-4 border-smoke-500 rounded-tl-full"
                />
                <div className="mt-2 mb-2">
                  <label
                    htmlFor="avatar"
                    className="relative cursor-pointer shadow-inner hover:drop-shadow-xl bg-white text-black
                     hover:bg-gray-200 font-medium py-2 px-4 rounded"
                  >
                    {thumbnail ? 'Edit' : 'Upload'}
                    <input
                      onChange={handleAvatar}
                      type="file"
                      name="avatar"
                      id="avatar"
                      placeholder="Avatar"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <div className="hidden relative mt-2 h-20 flex-1 sm:flex justify-start items-center overflow-hidden ">
                <p className="absolute font-bold ">
                  {firstName || lastName
                    ? `${firstName} ${lastName}`
                    : 'Hi, what is your name?'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-start p-2">
              <button
                type="button"
                className={`${
                  userType === 'candidate'
                    ? 'bg-secondary text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                } text-gray-700 font-bold py-2 px-4 rounded-l-lg`}
                onClick={() => setUserType('candidate')}
              >
                I'm a candidate
              </button>
              <button
                type="button"
                className={`${
                  userType === 'recruiter'
                    ? 'bg-secondary text-white shadow-lg scale-110'
                    : 'bg-gray-200'
                } text-gray-700 font-bold py-2 px-4 rounded-r-lg`}
                onClick={() => setUserType('recruiter')}
              >
                I'm a recruiter
              </button>
            </div>

            <div className="flex flex-col sm:flex-row mt-2 gap-2">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">
                  First Name
                </label>
                <input
                  onChange={handleFirstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">
                  Last Name
                </label>
                <input
                  onChange={handleLastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                onChange={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                onChange={handlePassword}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                onChange={handlePasswordConfirm}
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirm Password"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 font-medium">City</label>
              <input
                onChange={handleCity}
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
              />
            </div>
            <div className="mt-2">
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                onChange={handlePhoneNumber}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-black focus:bg-white focus:outline-none"
              />
            </div>
            <div className="mt-2 flex justify-end">
              <p className={valid ? ' ' : 'text-red-500'}>{error}</p>
              <button
                type="submit"
                className="w-[40%] disabled block bg-bt-100 hover:bg-bt-200 hover:scale-105 focus:bg-teal-700 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                {spinner ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1zm0 0h1v1a7 7 0 007-7H4v1zm0 0v1h1a7 7 0 007 7V4h-1zm0 0v1a8 8 0 018 8h-1a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
          <hr className="mt-6 border-gray-300 w-full " />
          <p className="mt-2 pb-2 font-semibold">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
