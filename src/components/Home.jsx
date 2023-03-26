import { Link } from 'react-router-dom';

function AccountType() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-80 p-6 bg-white shadow rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Jr Developer
          </h1>
          <div className="flex justify-center">
            <Link
              to="/signup"
              className="inline-block px-6 py-3 text-lg font-bold leading-none text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="w-full  md:w-80 p-6 bg-white shadow rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Recruiter
          </h1>
          <div className="flex justify-center">
            <Link
              to="/signup"
              className="inline-block px-6 py-3 text-lg font-bold leading-none text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountType;
