import {
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function User() {
  const { id } = useParams();

  return (
    <>
      <h1>👤 User Page</h1>
      <h2>User ID: {id}</h2>
    </>
  );
}

function Product() {
  const { id } = useParams();

  return (
    <>
      <h1>📦 Product Page</h1>
      <h2>Product ID: {id}</h2>
    </>
  );
}

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        {" | "}

        <NavLink to="/user/1">
          User 1
        </NavLink>

        {" | "}

        <NavLink to="/user/2">
          User 2
        </NavLink>

        {" | "}

        <NavLink to="/user/10">
          User 10
        </NavLink>

        {" | "}

        <NavLink to="/product/15">
          Product 15
        </NavLink>
      </nav>

      <hr />

      {/* Sirf ek Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user/:id" element={<User />} />

        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;