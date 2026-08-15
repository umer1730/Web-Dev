import { useEffect,useState } from "react";
import API from "../services/api";

function PostList(){
    const[posts, setPosts] = useState([]);
    const[editingPost,setEditingPost] = useState(null);
    const[title,setTitle] = useState("");
    const[content,setContent]  = useState("");
    const[published,setPublished] = useState(false);
    const[ownerId,setOwnerId] = useState("");

    useEffect(() =>{fetchPosts();
    },[]);

    const fetchPosts = async() =>{
        try{
            const response = await API.get("/posts");
            setPosts(response.data);
        }catch(error){
            console.error(error);
        }
    };

    /*start editing */
    const handleEdit = (post) =>{
        setEditingPost(post);
        setTitle(post.title);
        setContent(post.content);
        setPublished(post.published);
        setOwnerId(post.owner_id);
    };

    /* update post */
    const handleUpdate = async(e) => {
        e.preventDefault();
        try{
            await API.put(`/posts/${editingPost.id}`,
            {
                title: title,
                content: content,
                published: published,
                owner_id: Number(ownerId)
            }
        );
        alert("Post updated successfully");
        setEditingPost(null);
        setTitle("");
        setContent("");
        setPublished(false);
        setOwnerId("");

        fetchPosts();
        }catch(error){
            console.error(error);
            alert(error.response?.data?.detail ||
                "Failed to update post"
            );
        }
    };

    /*Delete post */
    const handleDelete = async(postId) =>{
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this post"
        );
        if(!confirmDelete){
            return;
        }
        try{
            await API.delete(`/posts/${postId}`);
            alert("Post deleted successfully")
            fetchPosts();
        }catch(error){
            console.error(error);
            alert(error.response?.data.detaail || 
                "Failed to delete post"
            );
        }
    };

return (

    <div>

        <h2 className="section-title">
            Blog Posts
        </h2>

        {editingPost && (

            <form
                className="update-form form"
                onSubmit={handleUpdate}
            >

                <h3>Update Post</h3>

                <input
                    type="text"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <textarea
                    value={content}
                    onChange={(e) =>setContent(e.target.value)
                    }
                />

                <label className="checkbox">

                    <input
                        type="checkbox"
                        checked={published}
                        onChange={(e) =>setPublished(
                                e.target.checked
                            )
                        }
                    />
                    Published
                </label>

                <input
                    type="number"
                    value={ownerId}
                    onChange={(e) =>
                        setOwnerId(e.target.value)
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
                            setEditingPost(null)
                        }
                    >
                        Cancel
                    </button>

                </div>

            </form>

        )}

        {posts.length === 0 ? (

            <div className="empty">
                No posts found.
            </div>

        ) : (
            posts.map((post) => (

                <div
                    className="item-card"
                    key={post.id}
                >
                    <h3>
                        {post.title}
                    </h3>
                    <p>
                        {post.content}
                    </p>
                    <p>
                        {post.published ? (
                            <span className="status status-published">
                                Published
                            </span>

                        ) : (

                            <span className="status status-draft">
                                Draft
                            </span>
                        )}
                    </p>
                    <p>
                        Owner ID: {post.owner_id}
                    </p>

                    <div className="button-group">
                        <button
                            className="btn-edit"
                            onClick={() =>
                                handleEdit(post)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="btn-delete"
                            onClick={() =>
                                handleDelete(post.id)
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
export default PostList