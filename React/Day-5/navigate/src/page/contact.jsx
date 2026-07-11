import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Contact Page</h1>

      <button onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default Contact;