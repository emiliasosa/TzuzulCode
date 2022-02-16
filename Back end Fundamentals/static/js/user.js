fetch('/api/users')
.then((res) => {
    return res.json()})
.then((data) => {
    let users = document.getElementById('show')
    for(let user of data){
        console.log(user)
        users.innerHTML = users.innerHTML + `
        <div class="alluser">
            <p class="nombre">${user.name}</p>
            <p>${user.birthday}</p>
            <p>${user.gender}</p>
            <p>${user.profession}</p>
            <p>${user.salary}</p>
            <div class="btndiv">
            <button class="btnup">Modificar</button>
            <button onclick='userController.delete(${user.id})' class="btndel">Eliminar</button>
            </div>
        </div>
    `
    }
})