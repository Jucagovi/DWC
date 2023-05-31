"use strict";

new Promise((resolver, rechazar) => {
  setTimeout(() => {
    return resolver(1);
  }, 1000);
})
  .then((res_p1) => {
    console.log(res_p1);
    return res_p1 + 1;
  })
  .then((res_p2) => {
    console.log(res_p2);
    return res_p2 + 1;
  })
  .then((res_p3) => {
    console.log(res_p3);
    return res_p3 + 1;
  })
  .catch(() => {
    console.log("Se ha producido un error.");
  })
  .finally(() => {
    console.log("Proceso de encadenamiento de promesas terminado.");
  });
