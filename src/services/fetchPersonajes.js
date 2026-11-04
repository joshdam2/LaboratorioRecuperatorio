const URL_API = "https://rickandmortyapi.com/api/character";

export async function obtenerPersonajes() {
  const resultado = await fetch(URL_API);

  if (!resultado.ok) {
    throw new Error("No se pudieron cargar los personajes");
  }

  const datos = await resultado.json();
  return datos.results.slice(0, 8);
}