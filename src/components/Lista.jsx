import React, { useState, useEffect } from "react";
import './lista.css';
const Lista = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/lista")
      .then((resp) => resp.json())
      .then((data) => setPersonas(data))
      .catch((error) => {
        console.log("No se pudo obtener las personas", error);
      });
  }, []);

  // const personas = ['Melina','Gastón','Jorge','Emilio'];
  return (
    <>
      <div className="lista-persona">
        <h1>Personas</h1>
        <ul>
          {personas.map((persona, index) => (
            <li key={index}> {persona.nombre} - {persona.apellido}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Lista;
