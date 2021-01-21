import axios from 'axios';

export const AXIOS = axios.create(({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjQ3NmJhODk4NWEyMzQ3ZWRjZWQwMTkxYzkzY2Q0NCIsInN1YiI6IjYwMDA2NTJlMmQzNzIxMDAzZjg2ODQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.do-PcQAwJW5NDBECDeFa3WVHGFbibKKbdgf_PCGAUnw'
    }
}))