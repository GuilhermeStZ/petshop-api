import mongoose from 'mongoose';

async function connect() {
    const uri = "connectrionstring";
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

export { connect };