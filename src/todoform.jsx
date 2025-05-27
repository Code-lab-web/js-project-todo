import { useState } from "react"

export const Form = () => {
  const [answer, setAnswer] = useState("")
// Removed unused state
// Removed unused todoButton function
const [TODO, setTodo] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: answer }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodo((prevTodo) => [newTodo, ...prevTodo]);
        setAnswer("");
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Text area
        <input
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
      </label>
      <button type="submit">Send</button>
        </form>
      );
    };
