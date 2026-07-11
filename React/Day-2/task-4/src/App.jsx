function App() {

  function submit(e) {

    e.preventDefault();

    alert("Form Submitted");
  }

  return (

    <form onSubmit={submit}>

      <input type="text" />

      <button>
        Submit
      </button>

    </form>

  );
}

export default App;