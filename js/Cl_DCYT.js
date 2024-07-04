export default class Cl_DCYT{
    constructor(){
        this.mayorNota = 0;
        this.acumNotas = 0;
        this.cantFemeninas = 0;
    }

    procesarEstudiantes(e){
        if (e.sexo==="F" && e.calcNotaTotal()>=48){
            this.cantFemeninas++;
        }
        this.acumNotas += e.calcNotaTotal();
        if (e.calcNotaTotal()>this.mayorNota){
            this.mayorNota = e.calcNotaTotal();
        }
    }
    calcPromedio(){
        return this.acumNotas/4;
    }
}