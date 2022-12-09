"use strict";
// Importar las funcones necesarias desde su biblioteca.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
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
// Exportar el objeto aplicación.
export { app };
