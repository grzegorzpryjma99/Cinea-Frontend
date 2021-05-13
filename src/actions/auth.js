import axios from 'axios';

const addfilm = () => {
    axios.post(`http://localhost:8080/api/films/add`)
}