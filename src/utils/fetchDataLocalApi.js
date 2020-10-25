import axios from 'axios';

async function getTeams(){
      try {
        const res = await axios.get('http://127.0.0.1:3001/api/teams')
        return(res.data)
      }
      catch(e){
        console.log(e);
      }
}

export default getTeams;
