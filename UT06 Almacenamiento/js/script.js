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
  query,
  where,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

//*** Enlace a las bibliotecas Firebase -> https://firebase.google.com/docs/web/learn-more?authuser=0#libraries-cdn

window.onload = () => {
  // ****** Firebase ************************************/
  let datos = document.getElementById("datos"); // Contenedor de datos.
  let informacion = document.getElementById("informacion"); // Contenedor de información.

  /** Conexión con la base de datos.
   *
   * getFirestone   -> Conexión al servicio Firestone.
   * collection     -> Enlace a la colección de la base de datos.
   *
   */
  const db = getFirestore(app);
  const discentesColeccion = collection(db, "discentes");

  /** Leer datos.
   *
   *  doc         ->  Obtiene la referencia a un documento.
   *                  Parámetros -> referencia a una colección y un id.
   *  getDoc      ->  Obtiene los datos de un documento.
   *                  Parámetro -> referencia a un documento.
   *  getDocs     ->  Obtiene todos los documentos de una colección.
   *                  Parámetro -> referencia a una colección.
   *  onSnapShot  ->  Obtiene enlace en tiempo real a la base de datos.
   *                  Parámetros -> referencia a una colección y función.
   *  data()      ->  Método para acceder a la información del documento.
   *  id          ->  Propiedad identificacdor del documento (está fuera del método data()).
   *  exists()    ->  Método que comprueba si el documento existe (boleano).
   *
   * */

  /**
   *
   *  Trabajando con un sólo documento -> getDoc.
   *
   * */

  const pruebaDoc = async (id) => {
    // Referencia al documento (sólo el id).
    // No es necesario await ya que los identificadores se obtienen en la conexión.
    const pruebaRef = doc(discentesColeccion, id);
    // Es un objeto con una estructura extraña.
    //console.log(pruebaRef);
    // Se obtiene el documento de la colección.
    const pruebaDoc = await getDoc(pruebaRef); // Otro objeto extraño.
    datos.innerHTML = "";
    //Compruebo si el documento existe.
    datos.innerHTML += `<p>El documento existe: ${pruebaDoc.exists()}</p>
    <p>Impreso desde pruebaDoc: con id ${pruebaDoc.id} nombre ${
      pruebaDoc.data().nombre
    } vive en la calle ${
      pruebaDoc.data().direccion.calle
    } y tiene los módulos ${pruebaDoc.data().modulos}
    </p>`;
  };

  //pruebaDoc("B6hAqI7hXq7f3K0kJDaH");

  /**
   *
   *   Trabajando con varios documentos -> getDocs.
   *
   * */

  const obtenerDiscentes = async () => {
    // Se obtienen todos los documentos de la colección.
    const discentesDocumentos = await getDocs(discentesColeccion);
    datos.innerHTML = "";
    // Cuando la base de datos responda, se pintan los datos.
    discentesDocumentos.docs.map((documento) => {
      datos.innerHTML += plantillas.pintarDiscente(documento);
    });
  };

  /**
   *
   * Creando un "listener" a la colección -> onSnapshot.
   *
   * */

  const obtenerDiscentesSnap = async () => {
    // Se obtienen todos los documentos de la colección y se añade una función de callback.
    const discentesDocumentos = await onSnapshot(
      discentesColeccion,
      (coleccion) => {
        datos.innerHTML = "";
        coleccion.docs.map((documento) => {
          datos.innerHTML += plantillas.pintarDiscente(documento);
        });
      }
    );
  };

  //obtenerDiscentes();
  //obtenerDiscentesSnap();

  /**
   *
   *  Filtrar datos
   *   query   ->   Filtrar los resultados de la consulta. 
   *                Parámetros -> colección y sentencia where.
   *   where   ->   Especifica las condiciones que los documentos deben cumplir.
   *                (<, <=, ==, >, >=, !=, array-contains, array-contains-any, in y not-in)
   *   orderBy ->   Ordenar los documentos de una colección. 
   *                Parámetros -> clave y tipo de ordenación.
   *   limit   ->   Limita la cantidad de documentos consultados. 
   *                Parámetros -> número de documentos.
   *
   *  Limitaciones de las consultas (más relevantes).
   *    ->  soporte limitado para OR (in y array-constains-any),
   *    ->  en consultas de comparación, los operadores de rango (mayor y menor)
   *        y de desigualdad deben realizarse sobre el mismo campo,
   *    ->  sólo se puede utilizar un array-contains por consulta,
   *    ->  no es posible combinar in, not-in y array-contais-any en una
   *        misma consulta,
   *    ->  no es posible ordenar por el campo utilizado con == o in.
   */

  // Se crea una función para realizar consultas
  // (es nesesario un ámbito asíncrono).
  const filtrarDiscentes = async (campo, valor) => {
    // Se crea el filtro con los parámetros.
    const consulta = query(
      discentesColeccion,
      where(campo, "array-contains", valor)
    );

    /* const consulta = query(
      discentesColeccion,
      where(campo, "!=", valor),
      orderBy(campo, "desc"),
      limit(5)
    ); */

    /* const consulta = query(
      discentesColeccion,
      where("nombre", "==", "Pedro"),
      where("modulos", "array-contains", "DWC")
    ); */

    const feosFiltrados = await getDocs(consulta);
    // Se comprueba la longitud de la consulta.
    informacion.innerHTML = `<p class='datos'>Se ha(n) obtenido ${feosFiltrados.docs.length} registro(s).</p>`;
    // Se borran los datos del contenedor.
    datos.innerHTML = "";
    if (feosFiltrados.docs.length) {
      feosFiltrados.docs.map((documento) => {
        datos.innerHTML += plantillas.pintarDiscente(documento);
      });
    } else {
      datos.innerHTML = `<p class='error'>No se han encontrado datos.</p>`;
    }
  };

  filtrarDiscentes("modulos", "DWSs");
}; // Fin window.load.
