import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import signIn from '../assets/signIn.png';
import { useContext, useState } from 'react';
import UserContext from '../context/UserInfo';
function SignIn() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSpinner(true);
    const data = { email, password };
    handlePost(data);
  };

  const handlePost = async user => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/user/login',
        user
      );
      handleLogin(res.data.status, res.data.token, res.data.id);
    } catch (error) {
      setSpinner(false);
      handleLogin();
      console.log('err', error);
    }
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = (info, token, userId) => {
    if (info === 'succses') {
      setSuccessMessage('success');
      setSuccess(true);
      setIsLoggedIn(true);
      localStorage.setItem('authToken', token);
      navigate('/userdashboard');
    } else {
      setSuccessMessage('Invalid Email or Password');
      setSuccess(false);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-[80%] min-h-screen flex flex-col sm:flex-row justify-center items-center mx-auto bg-gradient-to-tr from-white to-bg-200">
        {/* SignIn form */}
        <div className="w-full h-screen flex items-center justify-center flex-col md:w-1/2 xl:w-1/3 p-6 sm:p-12 md:border-double md:border-r-4 md:rounded-tr-[15%]">
          <h1 className="text-2xl font-bold text-center mb-5">
            Please Sign In
          </h1>
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="border-2 w-full border-gray-300 p-2 rounded-lg m-2"
              type="email"
              placeholder="Email"
              onChange={handleEmail}
            />
            <input
              className="border-2 w-full border-gray-300 p-2 rounded-lg m-2"
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
            <p className={success ? 'text-text-200' : 'text-red-500'}>
              {successMessage}
            </p>
            <button
              type="submit"
              className="w-full disabled block bg-bt-100 hover:bg-bt-200 hover:scale-105 focus:bg-teal-700 text-white font-semibold rounded-lg px-4 py-3 mt-6"
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
                  Logining...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          <hr className="mt-6 border-gray-300 w-full " />
          <p className="mt-2 pb-2 font-semibold">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
        {/* Right side */}
        <div className="hidden md:block md:w-1/2 xl:w-2/3  ">
          <img src={signIn} alt="" className="h-full w-full  " />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
