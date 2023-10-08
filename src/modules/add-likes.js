import axios from 'axios';
import getAppName from './localstorage.js';
import errorMsg from './error-message.js';

const likeMovie = async (movieId) => {
  try {
    const response = await axios.post(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${getAppName()}/likes`, {
      item_id: movieId,
    });
    errorMsg(`Movie like ${response.data}`, 'green');
  } catch (error) {
    errorMsg('Error liking the movie', 'red');
  }
};

export default likeMovie;