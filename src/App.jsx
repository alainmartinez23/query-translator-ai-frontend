import { useEffect, useRef, useState } from "react";
import Chat from "./components/Chat";
import Input from "./components/Input";
import { queryTranslator } from "./services/api";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);

  const handleSubmit = async () => {
    const prompt = input.trim();
    if (!prompt || loading) {
      return;
    }

    setInput("");
    setError("");
    setLoading(true);

    const userId = `${Date.now()}-user`;
    const aiId = `${Date.now()}-ai`;

    setMessages((prev) => [...prev, { id: userId, role: "user", prompt }]);

    try {
      const response = await queryTranslator(prompt);

      setMessages((prev) => [
        ...prev,
        {
          id: aiId,
          role: "assistant",
          prompt,
          sql: response.sql,
          rows: response.rows,
        },
      ]);
    } catch (submitError) {
      setError(submitError.message || "Ha ocurrido un error al consultar.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, error]);

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Query Translator AI</h1>
          <p>Convierte lenguaje natural en SQL y visualiza resultados al instante.</p>
          <p>Puedes hacer preguntas sobre empleados, departamentos y ausencias.</p>
        </div>
      </header>

      <main className="app-main">
        <Chat messages={messages} loading={loading} error={error} endRef={endRef} />
      </main>

      <footer className="app-footer">
        <Input
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          disabled={loading}
        />
      </footer>
    </div>
  );
}

export default App;
