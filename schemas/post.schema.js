import mongoose from 'mongoose';
import ComentarioSchema from './comentario.schema.js';

const PostSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    titulo: {
        type: String
    },
    conteudo: {
        type: String
    },
    comentarios: [ComentarioSchema]
}, { collection: "posts" });

export default PostSchema;