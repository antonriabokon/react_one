import {useEffect, useState} from 'react';
import TodoCard from '../components/TodoCard/TodoCard';
import axios from 'axios';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const [userFilter, setUserFilter] = useState("all");

    const simulateLoading = (callback) => {
        setTimeout(callback, 2000);
    }
  
    useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
        .then(res => setTodos(res.data))
        .catch(console.error)
    }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(setUsers)
        .catch(console.error)
    }, []);

    useEffect(() => {
        if(todos.length && users.length) {
            simulateLoading(() => setLoading(false));
        }
    }, [todos, users]);

    const filteredData = todos.filter((todo) => {
        const matchStatus = 
        statusFilter === 'all' 
        ? true 
        : statusFilter === 'completed' 
        ? todo.completed 
        : !todo.completed;

        const matchUser = 
        userFilter === 'all' 
        ? true 
        : todo.userId === Number(userFilter);

        return matchStatus && matchUser;
    })

    console.log("todos", todos);
    console.log("users", users);

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <div>
            <label htmlFor="user-select">Choose a user:</label>

            <select value={userFilter} 
            name="user-select" 
            id="user-select"
             onChange={(e) => 
             setUserFilter(e.target.value)}>

            <option value="all">All</option>

            {users.map((user) => (
                <option key={user.id}
                 value={user.id}>
                    {user.name}
                    </option>))}
            
            </select>

            <label htmlFor="status-select">Choose a status:</label>

            <select 
            value={statusFilter} 
            name="status" 
            id="status-select" 
            onChange={(e) => 
            setStatusFilter(e.target.value)}>

            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
           
            </select>
            {filteredData.map((todo) => {
                const user = users.find((user) => user.id === todo.userId);
                return (
                <TodoCard 
                key={todo.id} 
                username={user?.name || "Unknown"} 
                title={todo.title} 
                completed={todo.completed} 
                />
                );
            })}
            </div>
        </div>
    ); 
};

export default Todos;