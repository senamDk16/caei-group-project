
const express = require('express');
const ClientService = require('./clients.service');
const routerClient = express.Router();



routerClient.get('/', (req, res) => {
    try {
        const clients = ClientService.getAll();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


routerClient.get('/:id', (req, res) => {
    try {
        const client = ClientService.getById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: "Client non trouvé" });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


routerClient.post('/', (req, res) => {
    try {
        const { nom, prenom, telephone, adresse } = req.body;
        if (!nom || !prenom) {
            return res.status(400).json({ error: "Le nom et le prénom sont obligatoires" });
        }
        const newClient = ClientService.create({ nom, prenom, telephone, adresse });
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


routerClient.put('/:id', (req, res) => {
    try {
        const { nom, prenom, telephone, adresse } = req.body;
        const updatedClient = ClientService.update(req.params.id, { nom, prenom, telephone, adresse });
        res.json(updatedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


routerClient.delete('/:id', (req, res) => {
    try {
        ClientService.delete(req.params.id);
        res.json({ message: "Client supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = routerClient;