import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';

export function getImage(imgName) {
    return axios.get(baseUrl, {
        params: {
        key:'48985063-5c5813c169e3db6e477352dc5',
        q: imgName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',

        },
    })
};


