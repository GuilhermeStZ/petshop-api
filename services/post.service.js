import postRepository from "../repositories/post.repository.js";

async function createPost(post) {
    try {
        return await postRepository.createPost(post);
    }
    catch (err) {
        throw err;
    }
};

async function getPosts() {
    try {
        return postRepository.getPosts();
    }
    catch (err) {
        throw err;
    }
};

async function createComentario(comentario) {
    try {
        return await postRepository.createComentario(comentario);
    }
    catch (err) {
        throw err;
    }
};

export default { createPost, getPosts, createComentario };