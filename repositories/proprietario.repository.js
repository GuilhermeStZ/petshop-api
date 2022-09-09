import { connect } from './db.js';

async function insertProprietario(proprietario) {
    const conn = await connect();
    try {
        const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *';
        const values = [proprietario.nome, proprietario.telefone];

        const res = await conn.query(sql, values);
        return res.rows[0];
    }
    catch (err) {
        throw err;
    }
    finally {
        conn.release();
    }

};

async function updateProprietario(proprietario) {
    const conn = await connect();
    try {
        const sql = 'UPDATE proprietarios set nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *';
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id];

        const res = await conn.query(sql, values);
        return res.rows[0];
    }
    catch (err) {
        throw err;
    }
    finally {
        conn.release();
    }
};

async function deleteProprietario(proprietario_id) {
    const conn = await connect();
    try {
        const sql = 'DELETE FROM proprietarios WHERE proprietario_id = $1';
        const values = [proprietario_id];

        const res = await conn.query(sql, values);
        return "Proprietário excluído!";
    }
    catch (err) {
        throw err;
    }
    finally {
        conn.release();
    }
};

async function selectProprietarios() {
    const conn = await connect();
    try {
        const sql = 'SELECT * FROM proprietarios';

        const res = await conn.query(sql);
        return res.rows;
    }
    catch (err) {
        throw err;
    }
    finally {
        conn.release();
    }
};

async function selectProprietario(proprietario_id) {
    const conn = await connect();
    try {
        const sql = 'SELECT * FROM proprietarios WHERE proprietario_id = $1';
        const value = [proprietario_id];

        const res = await conn.query(sql, value);
        return res.rows;
    }
    catch (err) {
        throw err;
    }
    finally {
        conn.release();
    }
};

export default { insertProprietario, updateProprietario, deleteProprietario, selectProprietarios, selectProprietario }