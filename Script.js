import { db } from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const configList = document.getElementById("config-list");
const searchInput = document.querySelector(".search input");


let configs = [];


// Load configs from Firebase

async function loadConfigs(){

const q = query(
collection(db,"configs"),
orderBy("date","desc")
);


const snapshot = await getDocs(q);


configs = [];


snapshot.forEach((doc)=>{

configs.push(doc.data());

});


displayConfigs(configs);

}



// Display configs

function displayConfigs(items){

configList.innerHTML="";


if(items.length === 0){

configList.innerHTML=`

<div class="empty">

<i class="fas fa-folder-open"></i>

<h3>No Configurations Uploaded Yet</h3>

<p>
Be the first to upload a configuration.
</p>

</div>

`;

return;

}



items.forEach(config=>{


let card=document.createElement("div");


card.className="card";


card.innerHTML=`

<i class="fas fa-shield-alt"></i>

<h3>${config.name}</h3>

<p>
<b>Type:</b> ${config.type}
</p>

<p>
<b>Network:</b> ${config.network}
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



// Search

searchInput.addEventListener("input",()=>{


let value=searchInput.value.toLowerCase();


let filtered=configs.filter(config=>

config.name.toLowerCase().includes(value) ||

config.type.toLowerCase().includes(value) ||

config.network.toLowerCase().includes(value)

);


displayConfigs(filtered);


});



loadConfigs();
