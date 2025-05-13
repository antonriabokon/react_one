function TodoCard ({title, completed, username}) {
  return (
    <div className="do-card-container">
      <div className="do-card-header">
        <h2>{title}</h2>
      <div className="do-card-image">
      <h3>{title}</h3>
      <p>{completed ? "✅" : "❌"}</p>
      <p>{username}</p>
        </div>
      </div>
    </div>
  );
};
export default TodoCard;