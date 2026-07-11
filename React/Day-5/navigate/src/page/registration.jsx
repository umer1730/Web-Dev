import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function register() {
    alert("Registration Complete");

    navigate("/login");
  }

  return (
    <button onClick={register}>
      Register
    </button>
  );
}

export default Register;