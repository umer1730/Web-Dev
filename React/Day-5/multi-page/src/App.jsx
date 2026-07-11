import { Routes,Route,NavLink,useNavigate,useParams } from "react-router-dom"

function Home(){
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/contact")}>
        Go to Contact
      </button>
    </>
  )
}

function About(){
  const navigate = useNavigate()

  return (
    <>
      <h1>About Page</h1>
      <button onClick={() =>navigate("/")}>
        Back Home
      </button>
    </>
  )
}

function Contact(){
  return(
    <>
      <h1>Contact Page</h1>
    </>
  )
}

function User(){
  const {id} = useParams()

  return (
    <>
      <h1>User Page</h1>
      <h2>User ID: {id}</h2>
    </>
  )
}


function App() {

  return (
    <>
      <nav>
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
  >
    Home
  </NavLink>

  {" | "}

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
  >
    About
  </NavLink>

  {" | "}

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
  >
    Contact
  </NavLink>

  {" | "}

  <NavLink
    to="/user/1"
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
  >
    User 1
  </NavLink>

  {" | "}

  <NavLink
    to="/user/2"
    className={({ isActive }) =>
      isActive ? "active" : ""
    }
  >
    User 2
  </NavLink>
</nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path = "/about" element={<About />}/>
        <Route path  = "/contact" element={<Contact />}/>
        <Route path  = "/user/:id" element={<User />}/>
      </Routes>
    </>
  )
}

export default App
