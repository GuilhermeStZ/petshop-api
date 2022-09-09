import servicoRepository from '../repositories/servico.repository.js';

async function createServico(servico) {
    try {
        return await servicoRepository.createServico(servico);
    }
    catch (err) {
        throw err;
    }
};

async function getServicos() {
    try {
        return await servicoRepository.selectServicos();
    }
    catch (err) {
        throw err;
    }
};

async function getServicosProprietarios(proprietario_id) {
    try {
        return await servicoRepository.selectServicosProprietarios(proprietario_id);
    }
    catch (err) {

    }
};

export default { createServico, getServicos, getServicosProprietarios };