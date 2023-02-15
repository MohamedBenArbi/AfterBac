const mongoose = require('mongoose')

const uniShema = mongoose.Schema({
    Code : {
        type : String 
    },   
Filiere :{
    type : String
},
Universite : {
    type: String
},
Etablissement:{
    type : String
},
Gouvernorat : {
    type : String
},
Criteres: {
    type : String
},
CapaciteAccueil: {
    type : String
},
DureeEtude : {
    type : String
},
ScoreDernierOriente2021:{
    type : String
}
})


module.exports = mongoose.model('Uni',uniShema)