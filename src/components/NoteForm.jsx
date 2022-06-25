const NoteForm = ({ title, body, setTitle, setBody, addNote }) => {
  return (
    <div className="form">
      <form>
        <div>
          <span>Заголовок</span>
          <input
            placeholder="Укажите заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <span>Описание</span>
          <input
            placeholder="Укажите описание"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button className="create_button" onClick={addNote}>
          добавить заметку
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
