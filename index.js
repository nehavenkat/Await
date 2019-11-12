window.onload = () => {
    populatePage()

}

const populatePage = async () => {
    let userData = await fetch("https://jsonplaceholder.typicode.com/users")
    userData = await userData.json()
    userData.map(user => addUser(user))//

}

const addUser = user => {
let containerDiv= document.querySelector(".userData")
let userDiv = `<div class="card col-lg-4 mx-2 my-2">
     <div class="card-body">
     <h5 class="card-title">${user.name}</h5>
     <h6 class="card-subtitle mb-2 text-muted"><i class="fa fa-user"></i> ${user.username}</h6>
     <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fa fa-envelope-o"></i> ${user.email}</li>
        <li class="list-group-item"><i class="fa fa-phone"></i> ${user.phone}</li>
        <li class="list-group-item"><i class="fa fa-star"></i> ${user.website}</li>
     </ul>
     </div>
     </div>`
containerDiv.innerHTML += userDiv;
}
