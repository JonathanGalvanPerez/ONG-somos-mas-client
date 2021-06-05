import axios from 'axios'

const endpoint = 'http://localhost:3000'

export const getContactList = async () => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(endpoint + '/contacts', {
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