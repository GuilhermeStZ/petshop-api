import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js'

async function createServico(servico) {
    try {
        console.log(servico);
        return await Servico.create(servico);
    }
    catch (err) {
        throw err;
    }
};

async function selectServicos() {
    try {
        return await Servico.findAll();
    }
    catch (err) {
        throw err;
    }
};

async function selectServicosProprietarios(proprietario_id) {
    try {
        return await Servico.findAll({
            include: [{
                model: Animal,
                where: {
                    proprietarioId: proprietario_id
                }
            }]
        });
    }
    catch (err) {
        throw err;
    }
}

export default { createServico, selectServicos, selectServicosProprietarios };