import axios from 'axios'
import { API_BASE_URL } from '../../app/config'

export const authenticate = async () => {
    try {
        const res = await axios.post(API_BASE_URL + '/users/auth/login', {
            email: 'test@test.com',
            password: '123456'
        });
        return res.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}