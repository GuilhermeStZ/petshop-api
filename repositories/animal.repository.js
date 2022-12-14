import {connect} from './db.js';

async function insertAnimal(animal){
    const conn = await connect();
    try{
        const sql = 'INSERT INTO animais (nome, tipo, proprietario_id) VALUES($1, $2, $3) RETURNING *';
        const values = [animal.nome, animal.tipo, animal.proprietario_id];

        const res = await conn.query(sql, values);
        return res.rows[0];
    }
    catch(err){
        throw err;
    }
    finally{
        conn.release();
    }
};

async function updateAnimal(animal){
    const conn = await connect();
    try{
        const sql = 'UPDATE animais set nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *';
        const values = [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id];

        const res = await conn.query(sql, values);
        return res.rows[0];
    }
    catch(err){
        throw err;
    }
    finally{
        conn.release();
    }
};

async function deleteAnimal(animal_id){
    const conn = await connect();
    try{
        const sql = 'DELETE FROM animais WHERE animal_id = $1';
        const value = [animal_id];

        const res = await conn.query(sql, value);
        return "Animal excluído!";
    }
    catch(err){
        throw err;
    }
    finally{
        conn.release();
    }
};

async function selectAnimais(){
    const conn = await connect();
    try{
        const sql = 'SELECT * FROM animais';
        
        const res = await conn.query(sql);
        return res.rows;
    }
    catch(err){
        throw err;
    }
    finally{
        conn.release()
    }
};

async function selectAnimal(animal_id){
    const conn = await connect();
    try{
        const sql = 'SELECT * FROM animais WHERE animal_id = $1';
        const value = [animal_id];

        const res = await conn.query(sql, value);
        return res.rows;
    }
    catch(err){
        throw err;
    }
    finally{
        conn.release();
    }
};

async function selectAnimaisProprietario(proprietario_id){
    const conn = await connect();
    try{
        const sql = 'SELECT * FROM animais WHERE proprietario_id = $1';
        const value = [proprietario_id];

        const res = await conn.query(sql, value);
        return res.rows;
    }
    catch(err){
        next(err);
    }
    finally{
        conn.release();
    }
};

export default {selectAnimaisProprietario, insertAnimal, updateAnimal, deleteAnimal, selectAnimais, selectAnimal}