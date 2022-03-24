const autos = require('./autos')

let concesionaria = {
    autos: autos,
  
    buscarAuto: function(patente){
        let resultado = this.autos.find(item => item.patente === patente);
        
        if(resultado === undefined){
            return null
        } else {return resultado}
    },

    venderAuto: function(patente){
        
        let auto = this.buscarAuto(patente)
        if(auto !== undefined){
            return null
        } else {auto.vendido = true; return auto}
        
    },

    autosParaLaVenta: function(){
        let resultado = this.autos.filter( item => item.vendido === false)
        return resultado
    },

    autosNuevos: function(){
        let arrayAutosNuevos = this.autosParaLaVenta()
        let resultado = arrayAutosNuevos.filter(item => item.km < 100)
        return resultado        
    },

    puedeComprar: function(auto, persona){

    }
}

console.log(concesionaria.venderAuto('JJK11'))

