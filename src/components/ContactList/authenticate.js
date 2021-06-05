import axios from 'axios'

const endpoint = 'http://localhost:3000'

export const authenticate = async () => {
    try {
        const res = await axios.post(endpoint + '/users/auth/login', {
            email: 'test@test.com',
            password: '123456'
        });
        return res.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}