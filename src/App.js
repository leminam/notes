import { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.sass";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const dispatch = useDispatch();

  const addNote = (title, body) => {
    const note = {
      id: Date.now(),
      title,
      body,
    };
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAction = (e) => {
    if (title.trim().length & body.trim().length) {
      e.preventDefault()
      addNote(title, body);
      setTitle("");
      setBody("");
    }
  };

  const getNotes = (note) => {
    dispatch({ type: "GET_NOTES", payload: note });
  };

  const fetchNotes = () => {
    return (dispatch) => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => dispatch(getNotes(json)));
    };
  };

  return (
    <div className="app">
      <NoteForm
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        addNote={handleAction}
      />
      <button onClick={dispatch(fetchNotes)} className="create_button">
        загрузить заметки
      </button>
      <NoteList />
    </div>
  );
}

export default App;
