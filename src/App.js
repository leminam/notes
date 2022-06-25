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

  const handleAction = () => {
    if (title.trim().length) {
      addNote(title, body);
      setTitle("");
      setBody("");
    }
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
      <NoteList />
    </div>
  );
}

export default App;
