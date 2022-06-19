import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteItem";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = () => {
    if (title.trim().length) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title,
          body,
        },
      ]);
      setTitle("");
      setBody("");
    }
  };

  const removeNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="App">
      <NoteForm
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        addNote={addNote}
      />
      <NoteList notes={notes} removeNote={removeNote} />
    </div>
  );
}

export default App;
