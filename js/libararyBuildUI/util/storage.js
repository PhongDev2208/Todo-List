const TODOS_SRORAGE_KEY = 'TODOS'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODOS_SRORAGE_KEY)) || []
    },
    set(todos) {
        localStorage.setItem(TODOS_SRORAGE_KEY,JSON.stringify(todos))
    }
}