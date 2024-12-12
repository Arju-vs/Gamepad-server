const jsonServer = require('json-server')

const GServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

GServer.use(middleware)
GServer.use(route)

GServer.listen(PORT,()=>{
    console.log(`GServer started....`);
})