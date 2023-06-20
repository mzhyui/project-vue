import axios from 'axios';
const LOGIN_API_URL = '/api/login'; // Replace with the actual URL of your login endpoint
export async function reqLogin(data) {
    try {
        const response = await axios.post(LOGIN_API_URL, data);
        return response.data; // Modify this line according to your API response structure
    } catch (error) {
        // Handle error cases
        throw new Error('Failed to login');
    }
}
