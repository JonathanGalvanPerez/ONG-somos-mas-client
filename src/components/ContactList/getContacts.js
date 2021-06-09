import axios from 'axios'
import { API_BASE_URL } from '../../app/config'

export const getContactList = async () => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(API_BASE_URL + '/contacts', {
            'headers': {
                'Authorization': 'Bearer ' + JSON.parse(token)
            }
        });
        return res.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}