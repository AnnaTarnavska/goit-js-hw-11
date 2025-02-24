import axios from "axios";



export function getImage(imageTitle) {
    const baseUrl = 'https://pixabay.com/api/';
    const API_KEY = '48985063-5c5813c169e3db6e477352dc5';
    
    return axios.get(baseUrl, {
        params: {
            key: API_KEY,
            q: imageTitle,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',

        },
    });
};



