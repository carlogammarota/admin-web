const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');

const app = feathers();

const restClient = rest('http://localhost:3030')
// const restClient = rest('https://api-eventos.yendo.site')
const axios = require('axios');

app.configure(restClient.axios(axios));

const blog = app.service('blog');
const users = app.service('users');
const myBlogs = app.service('my-blogs');
// const eventosNoAprobados = app.service('eventos-pendientes');

export default {blog,users, myBlogs};