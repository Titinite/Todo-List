export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface GetTodosResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

const TODOS_URL = "https://dummyjson.com/todos";

export const getTodosOnDummyJson =
  async (): Promise<GetTodosResponse | null> => {
    try {
      const response = await fetch(TODOS_URL, { method: "GET" });
      if (response.ok) {
        return (await response.json()) as GetTodosResponse;
      }
      throw new Error(`Could not get todos, status: ${response.status}`);
    } catch (e) {
      console.error(
        "Something went wrong when getting todos from dummyJson API",
        e,
      );
    }
    return null;
  };

export const createTodosOnDummyJson = async (
  newTodo: Todo,
): Promise<Todo | null> => {
  try {
    const response = await fetch(TODOS_URL + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: newTodo.todo,
        completed: newTodo.completed,
        userId: newTodo.userId,
      }),
    });
    if (response.ok) {
      return (await response.json()) as Todo;
    }
    throw new Error(`Could not create todos, status: ${response.status}`);
  } catch (e) {
    console.error(
      "Something went wrong when creating todo from dummyJson API",
      e,
    );
  }
  return null;
};
