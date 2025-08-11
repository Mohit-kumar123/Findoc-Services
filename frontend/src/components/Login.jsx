import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pwd);

    return pwd.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.');
      return;
    }

    setLoading(true);
    const url = isRegistering 
      ? 'https://findoc-services.onrender.com/api/auth/register' 
      : 'https://findoc-services.onrender.com/api/auth/login';

    try {
      const response = await axios.post(url, {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        onLogin();
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(`${isRegistering ? 'Registration' : 'Login'} error:`, err.response?.data);
      setError(err.response?.data?.message || `Failed to ${isRegistering ? 'register' : 'login'}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl transform transition duration-300 hover:scale-105">
        <h2 className="text-4xl font-montserrat-semi-bold text-center text-gray-800">
          Findoc {isRegistering ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-montserrat-regular text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-montserrat-regular text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm font-montserrat-regular">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 text-white font-montserrat-semi-bold bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition duration-300 hover:scale-105"
            disabled={loading}
          >
            {loading ? (isRegistering ? 'Registering...' : 'Logging in...') : (isRegistering ? 'Register' : 'Login')}
          </button>
        </form>
        <div className="text-center text-gray-700">
          <p>
            {isRegistering ? 'Already have an account?' : 'Don\'t have an account?'}
            <button 
              onClick={() => setIsRegistering(!isRegistering)}
              className="ml-2 text-blue-600 hover:underline font-montserrat-semi-bold focus:outline-none"
            >
              {isRegistering ? 'Login' : 'Register'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
