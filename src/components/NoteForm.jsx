const NoteForm = ({ title, body, setTitle, setBody, addNote }) => {
  return (
    <div className="form">
      <div>
        Заголовок
        <input
          placeholder="Укажите заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        Описание
        <input
          placeholder="Укажите описание"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button className="create_button" onClick={addNote}>
        добавить заметку
      </button>
    </div>
  );
};

export default NoteForm;
