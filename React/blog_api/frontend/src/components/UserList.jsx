import { useEffect,useState } from "react";
import API from "../services/api";

function UserList(){
    const [users, setUsers] = useState([]);

    const[editingUser, setEditingUser] = useState(null);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const [age,setAge] = useState("");

    useEffect(() => {fetchUsers();
    },[])

    const fetchUsers = async () => {
        try{
            const response = await API.get("/users");
            setUsers(response.data);
        }
        catch(error){
            console.error(error);
        }
    };

    /*start editing */
    const handleEdit = (user) =>{
        setEditingUser(user);
        setName(user.name);
        setAge(user.age ?? "");
    };

    /*update user */
    const handleUpdate = async(e) =>{
        e.preventDefault();

        try{
            await API.put(`/users/${editingUser.id}`,{
                name: name,
                email: email,
                age: age ? Number(age) : null
            });

            alert("User updated successfully");
            setEditingUser(null);
            setName("");
            setEmail("");
            setAge("");

            fetchUsers();
        }catch(error){
            console.error(error)
            alert("Failed to update user");
        }
    };

    /*delete user */
    const handleDelete = async (userId) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this user");
        if (!confirmDelete){
            return;
        }
        try{
            await API.delete(`/users/${userId}`);
            alert("User deleted Successfully");
            fetchUsers();
        }catch(error){
            console.error(error);
            alert(
                error.response?.data?.detail ||
                "Failed to delete user"
            );
        }
    };
    return (

    <div>

        <h2 className="section-title">
            Users
        </h2>

        {editingUser && (
            <form
                className="update-form form"
                onSubmit={handleUpdate}
            >
                <h3>Update User</h3>

                <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="number"
                    value={age}
                    onChange={(e) =>
                        setAge(e.target.value)
                    }
                />

                <div className="button-group">

                    <button
                        className="btn-primary"
                        type="submit"
                    >
                        Save Changes
                    </button>

                    <button
                        className="btn-cancel"
                        type="button"
                        onClick={() =>
                            setEditingUser(null)
                        }
                    >
                        Cancel
                    </button>
                </div>
            </form>

        )}

        {users.length === 0 ? (

            <div className="empty">
                No users found.
            </div>
            ) : (
            users.map((user) => (
                <div
                    className="item-card"
                    key={user.id}
                >
                    <h3>
                        {user.name}
                    </h3>

                    <p>
                        {user.email}
                    </p>
                    <p>
                        Age: {user.age ?? "Not provided"}
                    </p>

                    <div className="button-group">

                        <button
                            className="btn-edit"
                            onClick={() =>
                                handleEdit(user)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="btn-delete"
                            onClick={() =>
                                handleDelete(user.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))
        )}
    </div>
);
}
export default UserList