import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">

                {/* Error Code */}
                <h1 className="text-7xl font-bold text-red-500">404</h1>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                    Something went wrong
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                        Go Back Home
                    </button>
                </Link>

                {/* Image */}
                <div className="mt-8">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                        alt="Error"
                        className="w-40 mx-auto opacity-80"
                    />
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;