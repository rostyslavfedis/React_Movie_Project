import {AXIOS} from './axiosConfig';

class GenreService{
    async getGenres(){
        const {data}= await  AXIOS.get('/genre/movie/list')
        return data
    }
}
export const  genreService = new GenreService();