// Mr Nonchalant Config Hub

let configs = JSON.parse(localStorage.getItem("configs")) || [];

const configList = document.getElementById("config-list");
const searchInput = document.querySelector(".search input");


function displayConfigs(items){

    configList.innerHTML = "";


    if(items.length === 0){

        configList.innerHTML = `
        <div class="empty">

        <i class="fas fa-folder-open"></i>

        <h3>No Configurations Uploaded Yet</h3>

        <p>
        Upload configurations from the admin panel.
        </p>

        </div>
        `;

        return;
    }


    items.forEach(config => {


        let card = document.createElement("div");

        card.className = "card";


        card.innerHTML = `

        <i class="fas fa-file-shield"></i>

        <h3>${config.name}</h3>

        <p>
        <b>Type:</b> ${config.type}
        </p>

        <p>
        ${config.description}
        </p>

        <a href="${config.link}" target="_blank">
        DOWNLOAD CONFIG
        </a>

        `;


        configList.appendChild(card);


    });

}



searchInput.addEventListener("input",()=>{


let search = searchInput.value.toLowerCase();


let filtered = configs.filter(config =>

config.name.toLowerCase().includes(search) ||

config.type.toLowerCase().includes(search)

);


displayConfigs(filtered);


});



displayConfigs(configs);
