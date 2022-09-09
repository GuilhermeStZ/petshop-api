import servicoService from '../services/servico.service.js';

async function createServico(req, res, next){
    try{
        const servico = req.body;
        if(!servico.descricao || !servico.valor || !servico.animalId){
            throw new Error('Descrição, valor e id do animal são obrigatórios!');
        }
        res.send(await servicoService.createServico(servico)); 
    }
    catch(err){
        next(err);
    }
};

async function getServicos(req, res, next){
    try{
        if(req.query.proprietario_id){
            res.send(await servicoService.getServicosProprietarios(req.query.proprietario_id));
        }
        else{
            res.send(await servicoService.getServicos());
        }
        
    }
    catch(err){
        next(err);
    }
}

export default {createServico, getServicos}
