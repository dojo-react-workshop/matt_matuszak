import axios from 'axios'


export default class TodoService {

    getTodos = (filterCriteria) => {
        return axios.get('/api/todos', { params: filterCriteria } )
    }
}
