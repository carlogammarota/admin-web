//buscar todos (limite 50 se puede extender a infinito)
feathers.default.blog.find({
    query: {
        read: false,
        roomId: 2,
        $limit: 100
    }
}).then((data) => {
    console.log('data', data)
})
.catch(console.log)


// Buscar individual por id
feathers.default.blog
    .get(this.$route.params.id
    ) 
    .then((data) => {
        console.log('data', data)
    })
    .catch(console.log)


//Editar por id
//Si el servicio es con authentication hay que mandarle el token
const config = {
    // headers: { Authorization: `Bearer ` + localStorage.token }
    headers: { Authorization: `Bearer ` + this.Token }
};

feathers.default.blog
.update('id a actualizar', 'json con nueva data', config
) 
.then((data) => {
    console.log('se actualizo correctamente', data)
})
.catch(console.log)


// crear nuevo
//el config lo lleva solo si el servicio necesita auth
feathers.default.blog.create('json data a crear', config).then(data => {
    console.log("Creado!", data)
}).catch(err => {
    console.log("Error al crear evento!", err)
});


//eliminar
//config si hace falta sino no
// feathers.default.blog.remove('id a eliminar', config)
feathers.default.blog.remove('id a eliminar').then(data => {
    console.log('Eliminado', data)
}).catch(err => {
    console.log('err', err)
});






