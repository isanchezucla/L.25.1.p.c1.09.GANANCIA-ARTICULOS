export default class Cl_tienda {
    constructor() {
        this.acumGanancia = 0;
        this.mayorVenta = 0;
        this.codigoMayorVenta = 0;
    }
    procesarArticulo(a) {
        this.acumGanancia += (a.precioVenta - a.costo);

        if (a.precioVenta > this.mayorVenta) {
            this.mayorVenta = a.precioVenta;
            this.codigoMayorVenta = a.codigo;
        }
    }
    GananciaTotal() {
        return this.acumGanancia;
    }
}