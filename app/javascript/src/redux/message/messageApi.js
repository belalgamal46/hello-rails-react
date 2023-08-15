import axios from "axios";

export const fetchRandomGreetingMessage = async () => {
  try {
    const {data} = await axios.get('http://127.0.0.1:3000/api/random_greeting')
    return data.data;
  } catch (error) {
    return error
  }
}