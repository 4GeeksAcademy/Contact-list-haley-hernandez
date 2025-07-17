export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      };
    // build a delete contacts case not sure if i did this correctly
    case 'delete_contacts':
      return {
        ...store,
        contacts: store.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'set_needs_refresh':
      return {
        ...store,
        needsRefresh: action.payload,
      };

    default:
      throw Error('Unknown action.');
  }
}
