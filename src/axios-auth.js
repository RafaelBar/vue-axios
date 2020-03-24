import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vue-axios-ed9e4.firebaseio.com'
})

instance.defaults.headers.common['something'] = 'something'

export default instance