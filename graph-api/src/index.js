import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { connect } from './db'


const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    // context = para pasar datos entro los resolvers.
    context: {
        messageId: 'test'
    }
}));

app.listen(3000, () => console.log('Server on port 3000'));