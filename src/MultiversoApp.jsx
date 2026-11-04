import { useListaPersonajes } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

function MultiversoApp() {
  const {
    listaPersonajes,
    listaFavoritos,
    cargando,
    mensajeError,
    alternarFavorito,
    verificarFavorito,
  } = useListaPersonajes();

  return (
    <div>
      <h1>Rick and Morty Universo</h1>

      {cargando && <p className="mensaje">Cargando...</p>}
      {mensajeError && <p className="mensaje error">Error: {mensajeError}</p>}

      {!cargando && !mensajeError && (
        <div className="layout">
          <PersonajeList
            listaPersonajes={listaPersonajes}
            verificarFavorito={verificarFavorito}
            alAlternar={alternarFavorito}
          />
          <FavoritesPanel
            listaFavoritos={listaFavoritos}
            alAlternar={alternarFavorito}
          />
        </div>
      )}
    </div>
  );
}

export default MultiversoApp;