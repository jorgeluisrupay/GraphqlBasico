const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

//Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ()=>{
        const usuarioId = 2022;
        return {
            usuarioId
        }
    }
});
//Arrancar el servidor
server.listen().then(({url}) => {
    console.log(`Servidor en la url ${url}`);
})