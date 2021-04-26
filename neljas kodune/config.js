const config = {
    port: 3000,
    saltRounds: 10,
    jwtSecret: 'secret', 
    db: {
        host: 'localhost',
        user: 'root',
        database: 'tunniplaan',
        password: 'pwdpwd'
    }
}


module.exports = config;