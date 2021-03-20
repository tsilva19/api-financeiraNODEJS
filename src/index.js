const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const customers = []
/**
 * cpf - string
 * name - string
 * id - uuid
 * statement(extrato)[] 
 */

app.post("/account", (req, res) =>{
    const{cpf, name }= req.body;

    const customersAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if(customersAlreadyExists){
        return res.status(400).send({error: "Customer already exists !! " })
    }


    customers.push({
        cpf, 
        name,
        id: uuidv4(),
        statement: []
    });

    return res.status(201).send();

});



app.listen(3333);