import storage from "./util/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.complete,
    completed: (todo) => todo.complete,
  },
  editIndex: null,
};

const actions = {
  ADD({ todos }, title) {
    if (title) {
      todos.push({
        title,
        complete: false,
      });
      storage.set(todos);
    }
  },
  TOGGLE({ todos }, index) {
    const todo = todos[index];
    todo.complete = !todo.complete;

    storage.set(todos);
  },
  TOGGLE_ALL({ todos }, complete) {
    todos.forEach((todo) => {
      todo.complete = complete;
    });
    storage.set(todos);
  },
  DESTROY({ todos }, index) {
    // delete todos[index]
    todos.splice(index, 1);

    storage.set(todos);
  },
  SWITCH_FILTER(state, type) {
    state.filter = type;
    storage.set(state.todos);
  },
  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },
  START_EDIT(state, indexItem) {
    state.editIndex = indexItem;
  },
  END_EDIT(state, title) {
    if (state.editIndex !== null) {
      if(title) {
        state.todos[state.editIndex].title = title;
        storage.set(state.todos);
      } else {
        this.DESTROY(state, state.editIndex)
      }
      state.editIndex = null;
    }
  },
  CANCEL_EDIT(state) {
    state.editIndex = null;
  }
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
