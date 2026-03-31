import Table from "./Table";

function Message({ message }) {
  if (message.role === "user") {
    return (
      <article className="message user-message">
        <p>{message.prompt}</p>
      </article>
    );
  }

  return (
    <article className="message ai-message">
      <div className="message-meta">Asistente</div>
      <div className="message-content">
        <p className="message-label">Prompt enviado</p>
        <p className="prompt-block">{message.prompt}</p>

        <p className="message-label">SQL generado</p>
        <pre className="sql-block">{message.sql}</pre>

        <p className="message-label">Resultados</p>
        <Table rows={message.rows} />
      </div>
    </article>
  );
}

export default Message;
