import Axios from 'axios';

//hae kaikki sanat tietokannasta --> ArvattavaSana
let getAllWords = async () => {
    let result = await Axios.get('http://localhost:3000/words')
    return result.data;
}


export { getAllWords}