import postService from "../services/post.service.js";

async function createPost(req, res, next) {
    try {
        const post = req.body;
        if (!post.titulo || !post.conteudo) {
            throw new Error('Título e conteudo são obrigatórios!');
        }
        res.send(await postService.createPost(post));
    }
    catch (err) {
        next(err);
    }
};

async function getPosts(req, res, next) {
    try {
        res.send(await postService.getPosts());
    }
    catch (err) {
        next(err);
    }
};

async function createComentario(req, res, next) {
    try {
        const comentario = req.body;
        if (!comentario.postId || !comentario.nome || !comentario.conteudo) {
            throw new Error('Id do post, nome e conteúdo são obrigatórios!');
        }
        res.send(await postService.createComentario(comentario));
    }
    catch (err) {
        next(err);
    }
}

export default { createPost, getPosts, createComentario };