import pacientes from "../models/Paciente.js";

class PacienteController {

static listarPacientes = (req, res) => {
        pacientes.find((err, pacientes) => {
            res.status(200).json(pacientes)
})
}

static listarPacientePorId = (req, res) => {
    const id = req.params.id;

    pacientes.findById(id, (err, pacientes) => {
        if(err) {
            res.status(400).send({message: `${err.message} - id do paciente não localizado.`})
        } else {
            res.status(200).send(pacientes);
        }
    })
}

static cadastrarPaciente = (req, res) => {
  let paciente = new pacientes(req.body);

  paciente.save((err) => {
    if(err) {
        res.status(500).send({menssage: `${err.menssage} - falha ao cadastrar paciente.`})
    } else {
        res.status(201).send(paciente.toJSON())
    }
  })
}

static atualizarPaciente = (req, res) => {
    const id = req.params.id;

    pacientes.findByIdAndUpdate(id, {$set: req.body}, (err) => 
    {
        if(!err) {
            res.status(200).send({menssage: 'Paciente atualizado com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    })
    
}

static excluirPaciente = (req, res) => {
    const id = req.params.id;

    pacientes.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: 'Paciente removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }  
    })
}

}
export default PacienteController