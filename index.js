const URL = "https://jsonplaceholder.typicode.com/users";
let userData = [];

window.onload = () => {
    populatePage(URL);
}

const populatePage = async (myURL) => { //myURL = URL
    userData = await fetch(myURL)
    userData = await userData.json()
    userData.map(user => addUser(user))
    userData.map(user => populateModal(user.name));
}

const addUser = user => {
    let containerDiv = document.querySelector(".userData")
    let userDiv = `
    <div class="col-12 col-md-6 col-lg-4 pb-2">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa fa-user"></i> ${user.username}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fa fa-envelope-o"></i> ${user.email}</li>
                    <li class="list-group-item"><i class="fa fa-phone"></i> ${user.phone}</li>
                    <li class="list-group-item"><i class="fa fa-star"></i> ${user.website}</li>
                </ul>
            </div>
        </div>
    </div>`
    containerDiv.innerHTML += userDiv;
}

const searchUser = async () => {
    let searchText = document.querySelector("#search").value
    if (searchText.length > 3) {        
        let searchType = document.querySelector("#searchTypeID").value        
        let containerDiv = document.querySelector(".userData")
        containerDiv.innerHTML = "";
        let filteredUserData = [];
        filteredUserData = userData.filter(user => user[searchType].includes(searchText));

        // switch (searchType) {
        //     case "email":
        //         filteredUserData = userData.filter(user => user.email.includes(searchText));
        //         break;
        //     case "name":
        //         filteredUserData = userData.filter(user => user.name.includes(searchText));
        //         break;
        //     case "username":
        //         filteredUserData = userData.filter(user => user.username.includes(searchText));
        //         break;
        // }
        console.log(filteredUserData)
        filteredUserData.map(user => addUser(user))
    }
}

populateModal = (userName) => {
    document.querySelector(".onlyNames").innerHTML += `<li class="list-group-item">${userName}</li>`
}