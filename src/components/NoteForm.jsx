import React from 'react';

const NoteForm = ({ title, body, setTitle, setBody, addNote }) => {
  return (
    <label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={addNote}>добавить заметку</button>
    </label>
  );
};

export default NoteForm;