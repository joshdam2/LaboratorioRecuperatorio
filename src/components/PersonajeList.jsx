import PersonajeCard from "./PersonajeCard";

function PersonajeList({ listaPersonajes, verificarFavorito, alAlternar }) {
  return (
    <div className="grid">
      {listaPersonajes.map((item) => (
        <PersonajeCard
          key={item.id}
          personaje={item}
          marcado={verificarFavorito(item.id)}
          alAlternar={alAlternar}
        />
      ))}
    </div>
  );
}

export default PersonajeList;