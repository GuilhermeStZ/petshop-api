import mongoose from 'mongoose';

const ComentarioSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    conteudo: {
        type: String
    }
}, { collection: "posts" });

export default ComentarioSchema;