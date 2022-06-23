import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const addNote = (title) => {
    const note = {
      id: Date.now(),
      title,
    };
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const removeNote = (note) => {
    dispatch({ type: "DELETE_NOTE", payload: note.id });
  };

  return (
    <div className="App">
      <button onClick={() => addNote(prompt())}>добавить</button>
      {notes.map((note) => (
        <div>
          {note.title}
          <button onClick={() => removeNote(note)}>&times;</button>
        </div>
      ))}
    </div>
  );
}

export default App;
