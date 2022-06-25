import { useDispatch } from "react-redux";

const NoteItem = ({ id, body, title }) => {
  const dispatch = useDispatch();

  const deleteNote = (note) => {
    dispatch({ type: "DELETE_NOTE", payload: note.id });
  };

  return (
    <div className="note">
      <div className="note_title">{title}</div>
      <div>{body}</div>
      <button
        className="delete_button"
        onClick={() => deleteNote({ id })}
      ></button>
    </div>
  );
};

export default NoteItem;
