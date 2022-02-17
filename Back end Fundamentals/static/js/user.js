let users = document.getElementById('show')
let userData = []

fetch('/api/users')
.then((res) => {
    return res.json()})
.then((data) => {
    userData = data
    renderUsers()
})

function eliminar(id){
    fetch("/api/users/"+id, { method:"DELETE" })
    .then((res) => {return res.json})
    .then((data) => {
        /*userData = data 
        filterUser(id)
        renderUsers()*/
        window.location.reload()
    })
}

function editar(id){
    window.location.href = "/edit";
    fetch("/edit/"+id, { method:"POST" })
    .then((res) => {return res.json})
    .then((data) => { window.location.href = "/";})
}

/*function filterUser(){
    let newUsers = []

    for(let u of userData){
        if(u.id !== id){
            userData.push(u)
        }
    }
    userData = newUsers
}*/

function renderUsers(){
    let year = new Date().getFullYear();
    users.innerHTML = ""
    for(let user of userData){
        let edad = year - parseInt(user.birthday)
        users.innerHTML = users.innerHTML + `
        <div class="alluser">
            <img src='${user.picture}' class="imgcard">
            <p class="nombre">${user.name}</p>
            <p class="textcard"><b>Edad:</b> ${edad}</p>
            <p class="textcard"><b>Genero:</b> ${user.gender}</p>
            <p class="textcard"><b>Profesión:</b> ${user.profession}</p>
            <p class="textcard"><b>Salario:</b> $ ${user.salary}</p>
            <p class="finaltext"><b>Hobby:</b> ${user.about}</p>
            <div class="btndiv">
                <div class="btndivhijo">
                    <button onclick="editar(${user.id})" class="btnup"> Modificar</button>
                    <button onclick="eliminar(${user.id})" class="btndel">Eliminar</button>
                </div>
            </div>
        </div>
    `
    }
}

