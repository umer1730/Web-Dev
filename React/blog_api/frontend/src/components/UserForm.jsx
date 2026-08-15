import { useState } from "react";
import API from "../services/api";

function UserForm({ onUserCreated }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            const response = await API.post("/users", {
                name,
                email,
                age: age ? Number(age) : null
            });

            alert("User created successfully!");

            onUserCreated(response.data);

            setName("");
            setEmail("");
            setAge("");

        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.detail ||
                "Failed to create user"
            );
        }
    };

    return (
        <>
            <h2 className="section-title">
                Create User
            </h2>

            <form
                className="form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) =>
                        setAge(e.target.value)
                    }
                />

                <button
                    className="btn-primary"
                    type="submit">
                    Create User
                </button>
            </form>
        </>
    );
}

export default UserForm;