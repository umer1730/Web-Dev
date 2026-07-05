import Info from "./info_stu"
import Product from "./product_map"
import Book from "./array_books"

function App() {
  const students = [
    "Ali",
    "Asad",
    "Ammar",
    "Usama"
  ]
  return (
    <>
      {
        students.map((student) => (<h2>{student}</h2>))
      }
      <hr />
      <Info />
      <hr />
      <Product />
      <hr />
      <Book />
    </>
  )
}

export default App
