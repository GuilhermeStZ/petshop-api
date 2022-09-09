import animalService from '../services/animal.service.js';

async function createAnimal(req, res, next){
    try {
        const animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Nome, tipo e id do proprietário são obrigatórios!")
        }
        res.send(await animalService.createAnimal(animal));
    }
    catch(err){
        next(err);
    }
};

async function updateAnimal(req, res, next){
    try{
        const animal = req.body;
        if(!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Id, nome, tipo e id do proprietário são obrigatórios!");
        }
        res.send(await animalService.updateAnimal(animal));
    }
    catch(err){
        next(err);
    }
};

async function deleteAnimal(req, res, next){
    try{
        const animal_id = req.params.id;
        res.send(await animalService.deleteAnimal(animal_id));
    }
    catch(err){
        next(err);
    }
};

async function getAnimais(req, res, next){
    try{
        if(req.query.proprietario_id){
            res.send(await animalService.getAnimalProprietario(req.query.proprietario_id))
        }
        else{
            res.send(await animalService.getAnimais());
        }
        
    }
    catch(err){
        next(err);
    }
};

async function getAnimal(req, res, next){
    try{
        const animal_id = req.params.id;
        res.send(await animalService.getAnimal(animal_id));
    }
    catch(err){
        next(err);
    }
};

export default {createAnimal, updateAnimal, deleteAnimal, getAnimais, getAnimal};