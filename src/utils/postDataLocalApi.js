import axios from 'axios';

export const postData = (data) => {
  axios.post('http://127.0.0.1:3001/api/teams',
    data,
     {
      headers: {
        'Content-Type': 'application/json',
        }
    })
    .catch(e => {
      console.log(e)
    })
}