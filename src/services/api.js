const BASE_URL = import.meta.env.VITE_API_URL;

export async function queryTranslator(prompt) {
  const response = await fetch(`${BASE_URL}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  // console.log("Respuesta del backend:", response);

  if (!response.ok) {
    console.error("Error en la consulta:", response.statusText);
    throw new Error("No se pudo procesar la consulta.");
  }

  const data = await response.json();

  return {
    sql: typeof data.sql === "string" ? data.sql : "",
    rows: Array.isArray(data.rows) ? data.rows : [],
  };
}
