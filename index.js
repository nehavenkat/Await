const URL = "https://jsonplaceholder.typicode.com/users";// Assigning the URL to a const
let userData = [];// global variable

window.onload = () => {
    populatePage(URL);
}

const populatePage = async (myURL) => { //using async function to fetch URl
    userData = await fetch(myURL)
    userData = await userData.json()
    userData.map(user => addUser(user))
    userData.map(user => populateModal(user.name));
    adddressAsString(userData);
}

const addUser = user => {
    let containerDiv = document.querySelector(".userData")// getting the information from HTML
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
    containerDiv.innerHTML += userDiv;// Setting the value of innerHTML lets us easily replace the existing contents of an element with new content.
}

const searchUser = async () => {
    let searchText = document.querySelector("#search").value
    if (searchText.length > 3) { // when user types in more then 3 letters then the searching from doc starts
        let searchType = document.querySelector("#searchTypeID").value // The value property sets or returns the value of the value attribute of a text field.     
        let containerDiv = document.querySelector(".userData")// selecting the data from "containerDiv"
        containerDiv.innerHTML = "";// clearing it first
        let filteredUserData = [];
        switch (searchType) {
            case "email":
                filteredUserData = userData.filter(user => user.email.includes(searchText));
                break;
            case "name":
                filteredUserData = userData.filter(user => user.name.includes(searchText));
                break;
            case "username":
                filteredUserData = userData.filter(user => user.username.includes(searchText));
                break;
        }
        console.log(filteredUserData)
        filteredUserData.map(user => addUser(user))
    }
}

const populateModal = (userName) => {// here wen we click the names button we get only the names
    document.querySelector(".onlyNames").innerHTML += `<li class="list-group-item">${userName}</li>`
}

const adddressAsString = (userData) =>{
    let addressString= userData.reduce((address,currentUser)=>{
     return console.log(currentUser.address);

    })


}