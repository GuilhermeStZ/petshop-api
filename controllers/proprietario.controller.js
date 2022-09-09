import proprietarioService from '../services/proprietario.service.js';

async function createProprietario(req, res, next) {
    try {
        const proprietario = req.body;
        if (!proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome e telefone são obrigatórios!");
        };
        res.send(await proprietarioService.createProprietario(proprietario));
    }
    catch (err) {
        next(err);
    }
};

async function updateProprietario(req, res, next) {
    try {
        const proprietario = req.body;
        if (!proprietario.proprietarioId || !proprietario.nome || !proprietario.telefone) {
            throw new Error("Id, nome e telefone são obrigatórios!");
        };
        res.send(await proprietarioService.updateProprietario(proprietario));
    }
    catch (err) {
        next(err);
    }
};

async function deleteProprietario(req, res, next) {
    try {
        const proprietario_id = req.params.id;
        res.send(await proprietarioService.deleteProprietario(proprietarioId));
    }
    catch (err) {
        next(err);
    }
};

async function getProprietarios(req, res, next) {
    try {
        res.send(await proprietarioService.getProprietarios())
    }
    catch (err) {
        next(err);
    }
};

async function getProprietario(req, res, next) {
    try {
        const proprietario_id = req.params.id;
        res.send(await proprietarioService.getProprietario(proprietarioId));
    }
    catch (err) {
        next(err);
    }
};

export default { createProprietario, updateProprietario, deleteProprietario, getProprietarios, getProprietario }