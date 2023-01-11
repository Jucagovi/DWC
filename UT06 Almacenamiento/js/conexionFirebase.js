"use strict";
// Importar las funciones necesarias desde su biblioteca.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// Importar función para crear acceso al servicio de autentificación.
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// Configurar el objeto con los datos de acceso de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBxev8HfvYlLHvGDkMDK_aUGkaNEy-RAW0",
  authDomain: "feos-b3d29.firebaseapp.com",
  projectId: "feos-b3d29",
  storageBucket: "feos-b3d29.appspot.com",
  messagingSenderId: "1037808310371",
  appId: "1:1037808310371:web:b4382086cba60acf688056",
};
// Crear el enlace a la aplicación.
const app = initializeApp(firebaseConfig);
// Crear el acceso al servicio de autentificación.
const autentificacion = getAuth(app);
// Exportar el objeto aplicación.
export { app, autentificacion };
