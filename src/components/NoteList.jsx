import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, removeNote }) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem removeNote={removeNote} key={note.id} {...note} />
      ))}
    </ul>
  );
};

export default NoteList;
