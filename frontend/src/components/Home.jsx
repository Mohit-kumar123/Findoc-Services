import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('https://findoc-services.onrender.com/api/images', config);
        setImages(response.data.images);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to fetch images. Please login again.');
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <p className="text-red-500 text-lg p-4 font-montserrat-regular">{error}</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-montserrat-semi-bold text-white tracking-wide">Image Gallery</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 text-white font-montserrat-semi-bold bg-red-500 rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
          >
            Logout
          </button>
        </div>
        <div className="space-y-10">
          {images.map((image) => (
            <div key={image.id} className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 p-6">
              <img
                src={image.url}
                alt={image.description}
                className="w-full h-auto rounded-lg mb-4 object-cover"
              />
              <h2 className="text-2xl font-montserrat-semi-bold text-gray-800 mb-2">{image.author}</h2>
              <p className="text-gray-600 font-montserrat-regular line-clamp-2">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
