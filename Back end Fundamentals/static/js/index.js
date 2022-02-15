fetch('/')
.then((res) => {
    console.log(res)
    return res.json()})
.then((data) => {
    let users = document.getElementById('users')
    for(let user of data){
        users.innerHTML = `
        <div class="user">
            <h3>${user.name}</h3>
            <p>${user.birthday}</p>
            <p>${user.gender}</p>
            <p>${user.profession}</p>
            <p>${user.salary}</p>
        </div>
    `
    }
    console.log(data)}) 