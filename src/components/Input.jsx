import { useState } from "react";

function Input({ value, onChange, onSubmit, disabled }) {
  const [localError, setLocalError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value.trim()) {
      setLocalError("Escribe una consulta antes de enviar.");
      return;
    }

    setLocalError("");
    onSubmit();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <form className="input-shell" onSubmit={handleSubmit}>
      <div className="input-card">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu consulta en lenguaje natural..."
          rows={2}
          className="prompt-input"
          disabled={disabled}
        />
        <button type="submit" className="send-button" disabled={disabled}>
          {disabled ? "Enviando..." : "Enviar"}
        </button>
      </div>
      <p className="input-help">Enter para enviar, Shift + Enter para salto de línea.</p>
      {localError ? <p className="input-error">{localError}</p> : null}
    </form>
  );
}

export default Input;
