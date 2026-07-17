// Mr Nonchalant Config Hub
// Configuration System

let configs = JSON.parse(localStorage.getItem("configs")) || [];
    // Example format:
    // {
    //   name: "MTN 500MB Daily",
    //   type: "TLS Tunnel",
    //   description: "Fast daily configuration",
    //   link: "#"
    // }
];


const configList = document.getElementById("config-list");
const searchInput = document.querySelector(".search input");


// Display configurations

function displayConfigs(items){

    configList.innerHTML = "";

    if(items.length === 0){

        configList.innerHTML = `
        <div class="empty">
            <i class="fas fa-folder-open"></i>
            <h3>No Configurations Found</h3>
            <p>
            Configurations will appear here after upload.
            </p>
        </div>
        `;

        return;
    }


    items.forEach(config => {

        const card = document.createElement("div");

        card.className = "config-card";

        card.innerHTML = `

        <h3>${config.name}</h3>

        <p>
        <b>Type:</b> ${config.type}
        </p>

        <p>
        ${config.description}
        </p>

        <a href="${config.link}" target="_blank">
        DOWNLOAD
        </a>

        `;

        configList.appendChild(card);

    });

}


// Search system

searchInput.addEventListener("input",()=>{

    const value = searchInput.value.toLowerCase();


    const filtered = configs.filter(config =>

        config.name.toLowerCase().includes(value) ||
        config.type.toLowerCase().includes(value)

    );


    displayConfigs(filtered);

});


// Load startup

displayConfigs(configs);
