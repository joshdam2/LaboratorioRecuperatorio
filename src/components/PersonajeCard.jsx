function PersonajeCard({ personaje, marcado, alAlternar }) {
  return (
    <div className={`card ${marcado ? "fav" : ""}`}>
      <img src={personaje.image} alt={personaje.name} />
      <h4>{personaje.name}</h4>
      <p className={`estado estado-${personaje.status.toLowerCase()}`}>
        {personaje.status} - {personaje.species}
      </p>
      <button onClick={() => alAlternar(personaje)}>
        {marcado ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
      </button>
    </div>
  );
}

export default PersonajeCard;