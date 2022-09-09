import Animal from '../models/animal.model.js';

async function insertAnimal(animal){
    try{
        return await Animal.create(animal);
    }
    catch(err){
        throw err;
    }
};

async function updateAnimal(animal){
    try{
        await Animal.update(animal, {
            where: {
                animalId: animal.animalId
            }
        })
        return await selectAnimal(animal.animalId);
    }
    catch(err){
        throw err;
    }
};

async function deleteAnimal(animal_id){
    try{
        await Animal.destroy({
            where:{
                animalId: animal_id
            }
        })
        return "Animal excluído!";
    }
    catch(err){
        throw err;
    }
};

async function selectAnimais(){
    try{
        return await Animal.findAll();
    }
    catch(err){
        throw err;
    }
};

async function selectAnimal(animal_id){
    try{
        return await Animal.findByPK(animal_id);
    }
    catch(err){
        throw err;
    }
};

async function selectAnimaisProprietario(proprietario_id){
    try{
        return await Animal.findAll({
            where:{
                proprietarioId: proprietario_id
            }
        });
    }
    catch(err){
        next(err);
    }
};

export default {selectAnimaisProprietario, insertAnimal, updateAnimal, deleteAnimal, selectAnimais, selectAnimal}