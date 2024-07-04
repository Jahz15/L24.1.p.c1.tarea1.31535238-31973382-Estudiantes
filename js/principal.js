/**
 * En la UCLA, el DCYT desea conocer algunas estadísticas de sus estudiantes. De cada estudiante se conoce: su cédula, sexo y sus tres notas parciales. Se requiere conocer por el 
DCYT: a) nota total obtenida por el estudiante b) la mayor nota obtenida c) De los 
estudiantes femeninos cantidad de estudiantes aprobadas, d) promedio de notas  
El DCYT suministra la siguiente información demostrativa, para 4 estudiantes: (cedula, sexo, 
notap1, notap2, notap3) (13457856, M, 15, 20, 25) (15432551, F, 10, 10, 10) (32455678, M, 
18, 22, 20) (28678900, F, 18, 25, 24), */

import Cl_DCYT from "./Cl_DCYT.js";
import Cl_estudiante from "./Cl_estudiante.js";


let dcyt = new Cl_DCYT();

let est1 = new Cl_estudiante(13457856, "M", 15, 20, 25);
let est2 = new Cl_estudiante(15432551, "F", 10, 10, 10);
let est3 = new Cl_estudiante(32455678, "M", 18, 22, 20);
let est4 = new Cl_estudiante(28678900, "F", 18, 25, 24);    

dcyt.procesarEstudiantes(est1);
dcyt.procesarEstudiantes(est2);
dcyt.procesarEstudiantes(est3);
dcyt.procesarEstudiantes(est4);

let salida = document.getElementById("salida");

salida.innerHTML = `
El estudiante con cedula ${est1.cedula} tiene una nota total de: ${est1.calcNotaTotal()}
<br>El estudiante con cedula ${est2.cedula} tiene una nota total de: ${est2.calcNotaTotal()}
<br>El estudiante con cedula ${est3.cedula} tiene una nota total de: ${est3.calcNotaTotal()}
<br>El estudiante con cedula ${est4.cedula} tiene una nota total de: ${est4.calcNotaTotal()}<br>
<br>La mayor nota es: ${dcyt.mayorNota}
<br>Estudiantes femeninas aprobadas: ${dcyt.cantFemeninas}
<br>Promedio de notas: ${dcyt.calcPromedio()}`