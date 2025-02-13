export default class Cl_articulo {
    constructor(codigo, costo, precioVenta) {
        this._codigo = codigo;
        this._costo = costo;
        this._precioVenta = precioVenta;
    }
    set codigo(codigo) {
        this._codigo = +codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set precioVenta(precioVenta) {
        this._precioVenta = +precioVenta;
    }
    get precioVenta() {
        return this._precioVenta;
    }
}