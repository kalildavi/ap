import mongoose from "mongoose"

const pacienteSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        healthInsuranceCardId: {type: Number, required: true},
        address: {type: String, required: true},
        nacionality: {type: String, required: true},
        createdAt: {type: Date}
    },
    {
        versionKey: false
    }
);

const pacientes= mongoose.model('pacientes', pacienteSchema);

export default pacientes;