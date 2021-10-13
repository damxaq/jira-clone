export const JSON_PLACEHOLDER_BASE_URL = "https://jsonplaceholder.typicode.com";

// Set max amount of todos to fetch to 20,
// because full response returns 200 elements,
// and no one wants to see 200 uncompleted tasks on Jira
const TODOS_LIMIT = 20;

const requests = {
  fetchTodos: `${JSON_PLACEHOLDER_BASE_URL}/todos`,
  fetchTodosWithLimit: `${JSON_PLACEHOLDER_BASE_URL}/todos?_limit=${TODOS_LIMIT}`,
};

export default requests;
