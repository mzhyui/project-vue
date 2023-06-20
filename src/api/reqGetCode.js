import axios from 'axios';

// Define the API endpoint for retrieving the code
const CODE_API_URL = '/api/code'; // Replace with your actual API endpoint URL

// Function to make the API request and retrieve the code
export async function reqGetCode() {
  try {
    const response = await axios.get(CODE_API_URL);
    return response.data.code;
  } catch (error) {
    // Handle error cases
    throw new Error('Failed to retrieve the code');
  }
}
