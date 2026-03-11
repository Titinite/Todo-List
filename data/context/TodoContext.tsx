import { createContext, FC, PropsWithChildren, useState } from "react";
import {
  createTodosOnDummyJson,
  getTodosOnDummyJson,
  Todo,
} from "../api/dummyJsonApi";

interface TodoContextProps {
  todos: Todo[];
  getTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  getTodos: async () => {},
  addTodo: async (title: string) => {},
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const apiTodos = await getTodosOnDummyJson();
    if (apiTodos === null) {
      // dddd
    } else {
      setTodos(apiTodos.todos);
    }
  };

  const addTodo = async (title: string) => {
    const apiCreateTodo = await createTodosOnDummyJson({
      id: todos.length + 1,
      todo: title,
      completed: false,
      userId: 1,
    });
    if (apiCreateTodo === null) {
      // dddd
    } else {
      setTodos([...todos, apiCreateTodo]);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, getTodos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
