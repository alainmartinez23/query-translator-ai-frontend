import Message from "./Message";

function Chat({ messages, loading, error, endRef }) {
  return (
    <section className="chat">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {loading && (
        <div className="message ai-message">
          <div className="message-meta">Asistente</div>
          <div className="message-content loading-message">
            Consultando el backend...
          </div>
        </div>
      )}

      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      <div ref={endRef} />
    </section>
  );
}

export default Chat;
