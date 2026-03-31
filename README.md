# Query Translator AI — Frontend

Interfaz web simple tipo ChatGPT para interactuar con el backend de Query Translator AI.

Permite enviar consultas en lenguaje natural y visualizar:

- SQL generado
- resultados en tabla

---

## 🚀 Qué hace

El usuario escribe:

> "empleados con salario mayor a 3000"

Y la app muestra:

- la consulta
- el SQL generado
- los resultados en formato tabla

---

## ⚙️ Stack

- React
- Vite
- CSS nativo (sin frameworks)

---

## 🧠 Diseño

- Basado en layout definido en `/design`
- UI simple, clara y funcional
- Enfoque en legibilidad y uso real

---

## 📡 Integración

Conecta con el backend: POST http://localhost:3000/query

---

## 🧩 Estructura


- App.jsx → estado global
- components/
    - Chat.jsx → listado de mensajes
    - Input.jsx → entrada de usuario
    - Message.jsx → prompt + SQL + resultado
    - Table.jsx → render dinámico de datos
- services/
- api.js → llamada al backend


---

## 🔄 Flujo

1. Usuario introduce prompt  
2. Se envía al backend  
3. Se recibe `{ sql, rows }`  
4. Se renderiza en pantalla  

---

## 🎨 UX

- Estado de carga mientras responde  
- Manejo de errores  
- Scroll automático  
- Responsive (móvil, tablet, desktop)  

---

## ▶️ Cómo ejecutar

- npm install
- npm run dev

App disponible en:


## Código del backend

https://github.com/alainmartinez23/query-translator-ai-backend