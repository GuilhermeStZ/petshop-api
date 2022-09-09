import { connect } from './mongo.db.js';
import PostSchema from '../schemas/post.schema.js';


async function createPost(post) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model('posts', PostSchema);
        post = new Post(post);
        await post.save()
    }
    catch (err) {
        throw err;
    }
};

async function updatePost(post) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model('posts', PostSchema);
        await Post.findByIdAndUpdate( post._id, { post });
    }
    catch (err) {
        throw err;
    }
};

async function getPosts() {
    try {
        const mongoose = await connect();
        const Post = mongoose.model('posts', PostSchema);
        return await Post.find().exec();
    }
    catch (err) {
        throw err;
    }
};

async function getPost(postId) {
    try {
        const mongoose = await connect();
        const Post = mongoose.model('posts', PostSchema);
        return await Post.findById(postId).exec();
    }
    catch (err) {
        throw err;
    }
};

async function createComentario(comentario) {
    try {
        const post = await getPost(comentario.postId);
        console.log(comentario);
        console.log(post);
        const comentarioPost = {"nome":comentario.nome, "conteudo": comentario.conteudo};
        post.comentarios.push(comentarioPost);
        console.log(post);
        await updatePost(post);
    }
    catch (err) {
        throw err;
    }
};

export default { createPost, getPosts, getPost, createComentario, updatePost }