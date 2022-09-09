import proprietarioRepository from '../repositories/proprietario.repository.js';
import animalRepository from '../repositories/animal.repository.js';

async function createProprietario(proprietario) {
    return await proprietarioRepository.insertProprietario(proprietario);
};

async function updateProprietario(proprietario) {
    return await proprietarioRepository.updateProprietario(proprietario);
};

async function deleteProprietario(proprietario_id) {
    const animais = await animalRepository.selectAnimaisProprietario(proprietario_id);
    if (animais.length > 0) {
        throw new Error("Esse proprietário possui animais vinculados ao seu nome, exclua os animais primeiro antes de excluir o proprietário!");
    }
    else {
        return await proprietarioRepository.deleteProprietario(proprietario_id);
    }
};

async function getProprietarios() {
    return await proprietarioRepository.selectProprietarios();
};

async function getProprietario(proprietario_id) {
    const proprietarios = await proprietarioRepository.selectProprietario(proprietario_id);
    if (proprietarios.length == 0) {
        throw new Error("Proprietário não encontrado!");
    }
    return proprietarios;

}

export default { createProprietario, updateProprietario, deleteProprietario, getProprietarios, getProprietario }