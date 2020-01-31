import mongoose from 'mongoose';

export async function connect() {
   try {
        await mongoose.connect('mongodb://localhost/graphql', {
            useNewUrlParser: true
        })
        console.log('>>> DB is connected');
   } catch(e) {
        console.log('something goes wrong: ' + e);
   }
}

