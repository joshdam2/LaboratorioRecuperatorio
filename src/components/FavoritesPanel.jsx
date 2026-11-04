function FavoritesPanel({ listaFavoritos, alAlternar }) {
  return (
    <aside className="favoritos">
      <h3>Favoritos ({listaFavoritos.length})</h3>
      <ul>
        {listaFavoritos.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <button onClick={() => alAlternar(item)}>Quitar</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FavoritesPanel;