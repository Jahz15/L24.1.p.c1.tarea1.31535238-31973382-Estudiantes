export default class Cl_estudiante {
    constructor(cedula, sexo, notap1, notap2, notap3) {
        this.cedula = cedula;
        this.sexo = sexo;
        this.notap1 = notap1;
        this.notap2 = notap2;
        this.notap3 = notap3;
    }
    set cedula(cedula) {
        this._cedula = cedula; }
    get cedula() {
        return this._cedula; }
    
    set sexo(sexo) {
        this._sexo = sexo; }
    get sexo() {
        return this._sexo; }
    
    set notap1(notap1) {
        this._notap1 = notap1; }
    get notap1() {
        return this._notap1; }
    
    set notap2(notap2) {
        this._notap2 = notap2; }
    get notap2() {
        return this._notap2; }
    
    set notap3(notap3) {
        this._notap3 = notap3; }
    get notap3() {
        return this._notap3; }

    calcNotaTotal() {
        return this.notap1 + this.notap2 + this.notap3;
    }
}