import { apiKey } from './apiKey';
import { fetchApi, postBackend } from './apiCalls';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export const cleanMovies = movieData => {
  return movieData.results.map(movie => {
    return {
      title: movie.title,
      movie_id: movie.id,
      poster_path: `${imageUrl}${movie.poster_path}`,
      overview: movie.overview,
      favorite: false,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    };
  });
};

export const fetchMovies = async () => {
  try {
    const movieFetch = await fetchApi(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );
    return cleanMovies(movieFetch);
  } catch (error) {
    throw new Error('fetchMovies failed to fetch data');
  }
};

export const findRequestedUser = (allUsers, email, password) => {
  return allUsers.data.find(user => {
    return user.email === email && user.password === password;
  });
}

export const fetchUser = async (email, password) => {
  try {
    const allUsers = await fetchApi('/api/users/');
    return findRequestedUser(allUsers, email, password);
  } catch (error) {
    throw new Error('fetchUser failed to fetch data');
  }
};

export const postNewUser = async (body) => {
  try {
    return await postBackend('/api/users/new', body)
  } catch (error) {
    throw new Error(`postNewUser failed to post to backend: ${error}`)
  }
}

