import Proprietario from '../models/proprietario.model.js';

async function insertProprietario(proprietario){
    try{
        return await Proprietario.create(proprietario);
    }
    catch(err){
        throw err;
    }
};

async function updateProprietario(proprietario){
    try{
        await Proprietario.update(proprietario, {
            where: {
                proprietarioId: proprietario.ProprietarioId
            }
        })
        return await selectProprietario(proprietario.proprietarioId);
    }
    catch(err){
        throw err;
    }
};

async function deleteProprietario(proprietario_id){
    try{
        await Proprietario.destroy({
            where:{
                proprietarioId: proprietario_id
            }
        })
        return "Proprietario excluído!";
    }
    catch(err){
        throw err;
    }
};

async function selectProprietarios(){
    try{
        return await Proprietario.findAll();
    }
    catch(err){
        throw err;
    }
};

async function selectProprietario(proprietario_id){
    try{
        return await Proprietario.findByPK(proprietario_id);
    }
    catch(err){
        throw err;
    }
};

export default {insertProprietario, updateProprietario, deleteProprietario, selectProprietarios, selectProprietario}