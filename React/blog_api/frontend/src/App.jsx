import { useEffect, useState } from "react";

import API from "./services/api";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {

        try {
            const response = await API.get("/users");
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserCreated = () => {
      fetchUsers();
    };

    return (
        <div className="app">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="logo">
                      My Blog
                    </div>

                    <div className="navbar-text">
                        FastAPI + React
                    </div>
                </div>
            </nav>

            <main className="container">

                <h1 className="page-title">
                    Blog Management System
                </h1>

                {/* Create Forms */}
                <div className="grid">
                    <div className="card">
                        <UserForm
                            onUserCreated={
                                handleUserCreated
                            }
                        />
                    </div>

                    <div className="card">
                        <PostForm
                            users={users}
                        />
                    </div>
                </div>

                {/* Users */}
                <div className="card">

                    <UserList />
                </div>

                <hr className="divider" />
                {/* Posts */}
                <div className="card">
                    <PostList />
                </div>

            </main>
            <footer className="footer">

                <p>
                    Blog API • FastAPI + PostgreSQL + React
                </p>

            </footer>

        </div>
    );
}

export default App;