import React, { useState,useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import api from "../utils/axios";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const response = await api.get("/todos");
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error.response?.data?.message);
    }
  };

  // Add a new todo
  const addTodo = async (task) => {
    try {
      const response = await api.post("/todos", { task });
      setTodos([...todos, response.data.data]);
    } catch (error) {
      console.error("Error adding todo:", error.response?.data?.message);
    }
  };



  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error.response?.data?.message);
    }
  };

  // Toggle todo completion status
  const toggleComplete = async (id, completed) => {
    try {
      const updatedTodo = todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !completed } : todo
      );
      setTodos(updatedTodo);

      await api.put(`/todos/${id}`, { completed: !completed });
    } catch (error) {
      console.error("Error updating todo:", error.response?.data?.message);
    }
  };

  // Edit a todo
  const editTodo = async (task, id) => {
    try {
      const updatedTodo = todos.map((todo) =>
        todo._id === id ? { ...todo, task } : todo
      );
      setTodos(updatedTodo);

      await api.put(`/todos/${id}`, { task });
    } catch (error) {
      console.error("Error editing todo:", error.response?.data?.message);
    }
  };

  // const addTodo = (todo) => {
  //   setTodos([
  //     ...todos,
  //     { id: uuidv4(), task: todo, completed: false, isEditing: false },
  //   ]);
  // }

  // const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  // const toggleComplete = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // }

  // const editTodo = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // }

  // const editTask = (task, id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  return (
    <>
      <div className="mb-5">
        <Link to="/login" className="me-3">
              <Button variant="primary">Login</Button>
        </Link>
        <Link to="/signup">
              <Button variant="primary">SignUp</Button>
        </Link>
      </div>
      <div className="TodoWrapper">
       
      <h1 style={{ color: 'white' }}>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo,index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTodo} task={todo} key={index} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
    </>
    
  );
};
