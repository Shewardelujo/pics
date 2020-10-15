import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WCFK303MFLmArf4K4exS0Rqsf4MSElrUWYURV6dx99o'
    }
})