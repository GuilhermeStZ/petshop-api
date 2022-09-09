import animalRepository from '../repositories/animal.repository.js';

async function createAnimal(animal){
    return animalRepository.insertAnimal(animal);
};

async function updateAnimal(animal){
    return await animalRepository.updateAnimal(animal);
};

async function deleteAnimal(animal_id){
    return await animalRepository.deleteAnimal(animal_id);
};

async function getAnimais(){
    return await animalRepository.selectAnimais();
};

async function getAnimal(animal_id){
    const animal = await animalRepository.selectAnimal(animal_id);
    if(animal.length == 0){
        throw new Error("Animal não encontrado!");
    }
    return animal;
};

async function getAnimalProprietario(proprietario_id){
    return await animalRepository.selectAnimaisProprietario(proprietario_id);
};

export default {createAnimal, updateAnimal, deleteAnimal, getAnimais, getAnimal, getAnimalProprietario }