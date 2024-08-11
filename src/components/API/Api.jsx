import axios from "axios";
export  const API_KEY_TMDB = '1c6932c63db86d0dbc05ca527fa0b6a9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';

export const getMovieDetails = async (movieId) => {
try {
    const response = await axios.get(`movie/${movieId}?language=en-US`, {
        params: {
        api_key: API_KEY_TMDB,
        },
    });
    return response.data;
} catch (error) {
    throw new Error('Eroare la preluarea detaliilor filmului');
}
};
export const getCastDetails = async (movieId) => {
    try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            params: {
              api_key: API_KEY_TMDB,
            },
          }
        );
        return response.data.cast; 
    } catch (error) {
        throw new Error("Eroare la preluareea membrilor din casting");
        
    }

};
export const getReviews = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
            {
                params: {
                    api_key: API_KEY_TMDB,
                },
            }
        );
     
        return response.data;
       
    } catch (error) {
        throw new Error('Eroare la preluareea review-urilor');
    }
};
