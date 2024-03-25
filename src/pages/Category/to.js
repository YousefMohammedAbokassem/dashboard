// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/todo");
//       setTodos(response.data);
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };

//   const addTodo = async () => {
//     console.log('object')
//     try {
//       await axios.post("http://localhost:5000/todo", {
//         title: newTask,
//         completed: false,
//       });
//       fetchTodos();
//       setNewTask("");
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/todo/${id}`);
//       fetchTodos();
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>قائمة المهام</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.title}
//             <button onClick={() => deleteTodo(todo.id)}>حذف</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTodo}>إضافة</button>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
