import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    alert("Logged Out");

    navigate("/login");
  }

  return (
    <button onClick={logout}>
      Dashboard
    </button>
  );
}

export default Dashboard;