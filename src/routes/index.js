import express from "express";
import pacientes from "./pacientesRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Desafio MV"})

    })

    app.use(
        express.json(),
        pacientes
    )
}

export default routes