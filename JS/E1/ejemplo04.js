let auto = {
    fabricante: "Toyota",
    modelo:"RAV4",
    color:"Rojo",
    cilindrada:2.0,
    detalle(){
        console.log("Fabricante: "+this.fabricante+ " Modelo: "+this.modelo);
    },
    detalle2(){
        console.log("Color: "+this.color+" Cilindrada: "+this.cilindrada);
    }
}
auto.detalle();
auto.detalle2();