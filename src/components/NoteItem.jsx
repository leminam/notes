import React from "react";

const NoteItem = ({ id, body, title, removeNote }) => {
  return (
    <li>
      <div>{title}</div>
      <div>{body}</div>
      <button onClick={() => removeNote(id)} style={{ color: "red" }}>
        &times;
      </button>
    </li>
  );
};

export default NoteItem;
