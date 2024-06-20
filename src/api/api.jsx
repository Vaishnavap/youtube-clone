import axios from 'axios';

const API_KEY = 'AIzaSyCICYNlAVwohMYPF6JJKRkOi4XBoDTKNKA';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async () => {
  try {
    // Generate a random number to include in the query params
    const randomParam = Math.floor(Math.random() * 1000000000);

    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 40,
        q: 'programming',
        type: 'video',
        key: API_KEY,
        // Add a random or timestamp-based parameter
        refresh: randomParam, // or use Date.now() for timestamp
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
