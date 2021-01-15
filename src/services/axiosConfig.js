import axios from 'axios'

export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjAxYzBhODJmYmNjZjc3MTFhNjUwZjI4ZjY5MzMxYyIsInN1YiI6IjYwMDE2MWFkNzM5MGMwMDAzZGY3MjU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6OpkY_EWnRwZ6Pwyfsfo_BOc9b7t7p36E-4e8qnetUg'
    }
})