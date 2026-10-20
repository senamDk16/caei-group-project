const db = require("../../database");


const ClientService = {

    getAll: () => {
        const stmt = db.prepare('SELECT * FROM clients ORDER BY id DESC');
        return stmt.all();
    },

    getById: (id) => {
        const stmt = db.prepare('SELECT * FROM clients WHERE id = ?');
        return stmt.get(id);
    },


    create: (data) => {
        const { nom, prenom, telephone, adresse } = data;
        const stmt = db.prepare(`
            INSERT INTO clients (nom, prenom, telephone, adresse) 
            VALUES (?, ?, ?, ?)
        `);
        const info = stmt.run(nom, prenom, telephone, adresse);
        return { id: info.lastInsertRowid, nom, prenom, telephone, adresse };
    },


    update: (id, data) => {
        const { nom, prenom, telephone, adresse } = data;
        const stmt = db.prepare(`
            UPDATE clients 
            SET nom = ?, prenom = ?, telephone = ?, adresse = ? 
            WHERE id = ?
        `);
        stmt.run(nom, prenom, telephone, adresse, id);
        return { id, nom, prenom, telephone, adresse };
    },


    delete: (id) => {
        const stmt = db.prepare('DELETE FROM clients WHERE id = ?');
        return stmt.run(id);
    }
};

module.exports = ClientService;