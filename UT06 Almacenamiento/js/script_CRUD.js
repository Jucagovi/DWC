"use strict";
import * as plantillas from "./plantillasFirebase.js";
import { app } from "./conexionFirebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  deleteField,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

window.onload = () => {
  // ****** Firebase ************************************/
  const datos = document.getElementById("datos"); // Contenedor de datos.
  const informacion = document.getElementById("informacion"); // Contenedor de información.
  const idEjemplo = "TozegXfLGprnScbUJQrk"; // Identificador de un documento para las demostraciones.

  /** Conexión con la base de datos. */
  const db = getFirestore(app);
  const discentesColeccion = collection(db, "discentes");

  /** Se añaden los eventos. */
  document.getElementById("guardar").addEventListener("click", () => {
    guardarDiscente(nuevoDiscente);
    //guardarDiscente(otroDiscente);
  });

  datos.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.classList.contains("borrar")) {
      borrarDiscente(e.target.id);
    }
  });

  // Se obtienen todos los documentos de la colección.
  const obtenerDiscentesSnap = () => {
    onSnapshot(discentesColeccion, (coleccion) => {
      datos.innerHTML = "";
      coleccion.docs.map((documento) => {
        datos.innerHTML += plantillas.pintarDiscente(documento);
      });
    });
  };

  obtenerDiscentesSnap();

  /**
   *  ***** Guardar datos en Firebase.
   *
   *   doc     -> Crear un enlace a un documento.
   *              Parámetros -> referencia a una colección y un id válido.
   *   addDoc  -> Crea el documento en la colección.
   *              Parámetros -> referencia a una colección y documento válido.
   *   setDoc  -> Modifica la estructura y/o datos del documento.
   *              Parámetros -> referencia a documento y documento "nuevo".
   *
   */

  // Construir un documento nuevo (JSON).
  const nuevoDiscente = {
    nombre: "Albert",
    apellidos: "Einstein",
    modulos: ["DWC", "DWS", "DIW", "DAW"],
    direccion: {
      calle: "De la luz",
      numero: "300.000",
      localidad: "Relativa",
      provincia: "Alicante",
    },
  };

  const otroDiscente = {};

  // Crear la función asíncrona para guardar el objeto en la base de datos.
  const guardarDiscente = async (objeto) => {
    const feoGuardado = await addDoc(discentesColeccion, objeto);
    console.log(feoGuardado);
    informacion.innerHTML = `<p class='bien'>Discente guardado con el id ${feoGuardado.id}</p>`;
    plantillas.borrar(informacion);
  };

  /**
   * ***** Añadir datos con setDoc.
   *
   *  ¡¡¡CUIDADO!!!
   *  Se sobrescriben todos los datos del documento.
   *  Y además:
   *    ->  las caves no especificadas se eliminan,
   *    ->  las claves nuevas se añaden al documento.
   *
   */

  const guardarDiscenteSet = async (id) => {
    // Se obtiene la referencia del documento.
    const pruebaRef = await doc(discentesColeccion, id);

    await setDoc(pruebaRef, {
      nombre: "Juan",
      apellidos: "Lopez",
      edad: 87,
      modulos: ["Ninguno"],
    });
  };

  //guardarDiscenteSet(idEjemplo);

  /**
   * ***** Actualizar datos en Firestone.
   *
   *  updateDoc   ->  Actualiza las claves de un documento.
   *                  Parámetros -> referencia a un documento y documento nuevo.
   *                  A tener en cuenta:
   *                    -> las claves no definidas no se alteran,
   *                    -> las claves nuevas se añaden al documento (como en setDoc).
   *  arrayUnion  ->  Si la clave es un array, añade los valores nuevos (no duplica).
   *  arrayRemove ->  Si la clave es un array, elimina los valores indicados.
   *
   */

  const actualizarDiscente = async (id) => {
    // Se obtiene la referencia del documento.
    const pruebaRef = await doc(discentesColeccion, id);
    await updateDoc(pruebaRef, {
      nombre: "Juana",
      modulos: ["DWC"], // Sobrescribe el array entero.
      direccion: {
        calle: "La flauta mágica",
        numero: "45",
        localidad: "Alicante",
        provincia: "Alicante",
      }, // Se añade una nueva clave para este documento.
    });
  };

  const actualizarDiscenteOtraVez = async (id) => {
    // Se obtiene la referenica del documento.
    const pruebaRef = await doc(discentesColeccion, id);
    await updateDoc(pruebaRef, {
      nombre: "Juanita",
      apellidos: "López",
      claveNueva: "Grande", // Añade esta clave a la estructura del objeto.
      modulos: arrayUnion("DWS", "DAW"),
      // Añade "DWS" y "DAW" como elementos del array módulos.
      // Si ya existen no se duplican.
    });
  };

  //actualizarDiscente(idEjemplo);
  //actualizarDiscenteOtraVez(idEjemplo);

  /**
   *  ***** Tratamiento de errores
   *    Es posible con try/catch (como en Java).
   *    También con la notación de punto de promesas (.then/.catch).
   *
   */

  const actualizarTratandoErrores = async (id) => {
    const documento = await doc(discentesColeccion, id);
    updateDoc(documento, {
      modulos: arrayRemove("DAW", "DIW"),
    })
      .then(() => {
        informacion.innerHTML = `<p class='bien'>Discente actualizado con el id ${documento.id}</p>`;
      })
      .catch((error) => {
        informacion.innerHTML = `<p class='error'>Error al eliminar: ${error}.</p>`;
      });
    plantillas.borrar(informacion);
  };

  //actualizarTratandoErrores(idEjemplo);

  const eliminarModulo = async (id) => {
    const pruebaRef = await doc(discentesColeccion, id);
    await updateDoc(pruebaRef, {
      modulos: arrayRemove("DWS"), // Elimina "DWS" del array "modulos".
    });
  };

  //eliminarModulo(idEjemplo);

  /**
   * ***** Eliminar documentos en Firestone.
   *
   *  deleteDoc     ->  Elimina el documento de la colección.
   *                    Parámetros -> referencia del documento.
   *  deleteField   ->  Elimina la clave indicada del documento (durante updateDoc).
   *
   */

  const borrarDiscente = async (id) => {
    const resultado = await deleteDoc(doc(discentesColeccion, id));
    // Devuelve "undefined" siempre, luego no es posible controlar errores de este modo.
    // console.log(resultado);
    informacion.innerHTML = `<p class='bien'>${id} borrado con éxito.</p>`;
    plantillas.borrar(informacion);
  };

  //borrarDiscente("feo");

  const borrarCampo = async (id) => {
    const pruebaRef = await doc(discentesColeccion, id);
    await updateDoc(pruebaRef, {
      edad: deleteField(),
    });
    console.log(`Edad de ${pruebaRef.id} borrado.`);
  };

  //borrarCampo(idEjemplo);
}; // Fin window.load.
