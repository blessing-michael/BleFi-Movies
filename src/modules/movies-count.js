import axios from 'axios';

const movieCount = document.querySelector('.movie-count');

const fetchAndDisplayEpisodeCount = async () => {
  try {
    const response = await axios.get('https://api.tvmaze.com/shows/1/episodes');
    const episodes = response.data;

    const episodeCount = episodes.length;

    movieCount.textContent = `(${episodeCount})`;
  } catch (error) {
    console.error('Error:', error);
  }
};

export default fetchAndDisplayEpisodeCount;
