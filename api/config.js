module.exports = {
    base: {
        name: 'auth',
        protocol: 'http',
        host: 'localhost',
        port: 8889
    },
    db: {
        login: 'qwerty',
        password: 'qwerty123',
        uri: 'mongodb://localhost/polyclinic',
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    jwt: {
        accessSecret: 'kfshdjerJGYUgfdhj78yufhesjf327574jfdkshrefsJGHhj',
        refreshSecret: '86734tryesfgDDhjt5TYR8678GHJGdfdgDSRr4tryfCGFDS'
    },
    corsWhitelist: [
        'http://localhost:8080',
        'http://localhost:3000',
        'http://localhost:8085'
    ],
};
