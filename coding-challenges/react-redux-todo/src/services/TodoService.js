import axios from 'axios'


export default class TodoService {

    getTodos = (filterCriteria) => {
        return axios.get('/api/todos', { params: filterCriteria } )
    }

    addTodo = (todoText) => {
        return axios.post('/api/todos', { text: todoText })
    }
}
