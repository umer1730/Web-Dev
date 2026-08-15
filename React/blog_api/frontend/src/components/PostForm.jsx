import { useState } from "react";
import API from "../services/api";

function PostForm({ users }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [published, setPublished] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await API.post("/posts", {

                title,
                content,
                published,
                owner_id: Number(ownerId)
            });
            alert("Post created successfully!");

            setTitle("");
            setContent("");
            setOwnerId("");
            setPublished(false);

        } catch (error) {

            console.error(error);

            alert(error.response?.data?.detail ||
                "Failed to create post"
            );
        }
    };

    return (
        <>
            <h2 className="section-title">
                Create Post
            </h2>

            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Post title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    required
                />

                <textarea
                    placeholder="Write your post..."
                    value={content}
                    onChange={(e) =>
                        setContent(e.target.value)
                    }
                    required
                />

                <select
                    value={ownerId}
                    onChange={(e) =>
                        setOwnerId(e.target.value)
                    }
                    required
                >
                    <option value="">
                        Select author
                    </option>

                    {users.map((user) => (

                        <option
                            key={user.id}
                            value={user.id}
                        >
                            {user.name}
                        </option>

                    ))}

                </select>

                <label className="checkbox">

                    <input
                        type="checkbox"
                        checked={published}
                        onChange={(e) =>
                            setPublished(
                                e.target.checked
                            )
                        }
                    />
                    Published
                </label>

                <button
                    className="btn-primary"
                    type="submit">
                    Create Post
                </button>
            </form>
        </>
    );
}

export default PostForm;