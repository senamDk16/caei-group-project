// backend/database.js
const Database = require('better-sqlite3');
const path = require('path');

// Crée ou ouvre le fichier de base de données SQLite dans le dossier backend
const dbPath = path.resolve(__dirname, 'cabinet.db');
const db = new Database(dbPath, { verbose: console.log });

// Fonction d'initialisation des tables
function initDatabase() {
    const schema = `
        -- 1. Table Clients
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            telephone TEXT,
            adresse TEXT,
            date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 2. Table Consultations
        CREATE TABLE IF NOT EXISTS consultations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_id INTEGER NOT NULL,
            montant REAL NOT NULL,
            motif TEXT NOT NULL,
            mode_paiement TEXT CHECK(mode_paiement IN ('Espèces', 'Mobile Money', 'Virement', 'Carte')),
            date_consultation DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
        );

        -- 3. Table Documents
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_id INTEGER NOT NULL,
            client_document TEXT,
            path TEXT,
            date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
        );

        -- 4. Table Fichiers
        CREATE TABLE IF NOT EXISTS fichiers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            document_id INTEGER NOT NULL,
            path TEXT NOT NULL,
            type_fiche TEXT,
            nom_fichier TEXT NOT NULL,
            date_ajout DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (document_id) REFERENCES documents(id) ON DELETE CASCADE
        );

        -- 5. Table Décharges (Paiements)
        CREATE TABLE IF NOT EXISTS decharges (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_client INTEGER NOT NULL,
            montant REAL NOT NULL,
            dossier TEXT,
            mode_paiement TEXT CHECK(mode_paiement IN ('Espèces', 'Mobile Money', 'Virement', 'Carte')),
            motif TEXT NOT NULL,
            reference_recu TEXT UNIQUE NOT NULL,
            date_decharge DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_client) REFERENCES clients(id) ON DELETE CASCADE
        );

        -- 6. Table Dépenses
        CREATE TABLE IF NOT EXISTS depenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            montant REAL NOT NULL,
            libelle TEXT NOT NULL,
            date_depense DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `;

    db.exec(schema);
    console.log("✅ Base de données SQLite initialisée avec succès !");
}

initDatabase();

module.exports = db;