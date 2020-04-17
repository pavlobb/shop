//next = dispatch 
//midlleware between 
//headers заголовки
//axios.get = axios['get'] , endpoint = '' = '/url'
import axios from 'axios';

const api = (
    {
        
        url = '',
        endpoint = '',
        method = 'GET',
        body ={},
        headers ={},

    }
) => {
    const methodUpgrated = method.toUpperCase();
    axios.create({
        baseURL: url,
        headers
    })

    

    return new Promise((resolve, reject) => {
        axios[methodUpgrated](endpoint, body)
        .then(response => resolve(response))
        .catch(err => reject(err))

    })

}



export default state => next => action => {
    
    const {
        
        url = '',
        endpoint = '',
        method = 'GET',
        body ={},
        headers ={},

    } = action
    
    const onSuccess = (responce) => {

     }
     const onError = (err) => {

     }

     
}