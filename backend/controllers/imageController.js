const axios = require('axios');

// @desc    Get random images from Picsum
// @route   GET /api/images
// @access  Private
const getImages = async (req, res) => {
  try {
    const imagePromises = [];
    const numberOfImages = 10;

    // Create array of promises to fetch 10 random images
    for (let i = 0; i < numberOfImages; i++) {
      const imageId = Math.floor(Math.random() * 1000) + 1;
      const imageUrl = `https://picsum.photos/400/300?random=${imageId}`;
      
      // Create image object with metadata
      imagePromises.push({
        id: imageId,
        url: imageUrl,
        download_url: imageUrl,
        width: 400,
        height: 300,
        author: `Author ${imageId}`,
        description: `Random image ${imageId} from Picsum Photos`
      });
    }

    // Resolve all promises
    const images = await Promise.all(imagePromises);

    res.json({
      message: 'Images retrieved successfully',
      success: true,
      count: images.length,
      images: images
    });
  } catch (error) {
    console.error('Get images error:', error);
    res.status(500).json({
      message: 'Server error while fetching images',
      success: false,
      error: error.message
    });
  }
};

// @desc    Get specific image by ID
// @route   GET /api/images/:id
// @access  Private
const getImageById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: 'Invalid image ID provided',
        success: false
      });
    }

    const imageUrl = `https://picsum.photos/400/300?random=${id}`;
    
    const image = {
      id: parseInt(id),
      url: imageUrl,
      download_url: imageUrl,
      width: 400,
      height: 300,
      author: `Author ${id}`,
      description: `Image ${id} from Picsum Photos`
    };

    res.json({
      message: 'Image retrieved successfully',
      success: true,
      image: image
    });
  } catch (error) {
    console.error('Get image by ID error:', error);
    res.status(500).json({
      message: 'Server error while fetching image',
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getImages,
  getImageById
};
