import { useDispatch } from "react-redux";

const NoteItem = ({ id, body, title }) => {
  const dispatch = useDispatch();

  const deleteNote = (note) => {
    dispatch({ type: "DELETE_NOTE", payload: note.id });
  };

  return (
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <button onClick={() => deleteNote({id})} style={{ color: "red" }}>
        &times;
      </button>
    </div>
  );
};

export default NoteItem;
