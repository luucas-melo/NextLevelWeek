// servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses} = require('./pages')

//configuração nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configuração de arquivos estáticos
server.use(express.static("public"))
    //rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)