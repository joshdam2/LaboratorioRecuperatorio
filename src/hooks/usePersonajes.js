import { useState, useEffect } from "react";
import { obtenerPersonajes } from "../services/fetchPersonajes";

export function useListaPersonajes() {
  const [listaPersonajes, setListaPersonajes] = useState([]);
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState(null);

  useEffect(() => {
    const traerDatos = async () => {
      try {
        const datos = await obtenerPersonajes();
        setListaPersonajes(datos);
      } catch (err) {
        setMensajeError(err.message);
      } finally {
        setCargando(false);
      }
    };
    traerDatos();
  }, []);

  const alternarFavorito = (personaje) => {
    setListaFavoritos((anterior) =>
      anterior.some((item) => item.id === personaje.id)
        ? anterior.filter((item) => item.id !== personaje.id)
        : [...anterior, personaje]
    );
  };

  const verificarFavorito = (id) =>
    listaFavoritos.some((item) => item.id === id);

  return {
    listaPersonajes,
    listaFavoritos,
    cargando,
    mensajeError,
    alternarFavorito,
    verificarFavorito,
  };
}