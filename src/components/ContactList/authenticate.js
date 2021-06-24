import axios from 'axios'
import { API_BASE_URL } from '../../app/config'
import AlertService from '../alertService/AlertService'

export const authenticate = async () => {
    try {
        const res = await axios.post(API_BASE_URL + '/users/auth/login', {
            email: 'test@test.com',
            password: '123456'
        });
        return res.data;
    } catch (err) {
        console.error(err);
        // AlertService.error("Error", "Hubo un problema al intentar realizar la operación")
    }
}

