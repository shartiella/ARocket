
let guidecode=0;
let groupname="";
const gamepart = document.getElementById("unity-container");


document.addEventListener("DOMContentLoaded", function (event){
    gamepart.classList.add("hide");
});

function getguidecode(){
    const textinput = document.getElementById("guidecode");
    const grouppart = document.getElementById("group");
    const guidepart = document.getElementById("guide");
    guidecode=textinput.value;
    console.log(guidecode);
    unityInstance.SendMessage('JavascriptHook','getGuideCode');

    guidepart.classList.add("hide");
    grouppart.classList.remove("hide");
}

function getgroupname(){
    const textinput = document.getElementById("groupname");
    const pregamepart = document.getElementById("pregame");
    groupname=textinput.value;
    console.log(groupname);
    unityInstance.SendMessage('JavascriptHook','getGroupName');

    pregamepart.classList.add("hide");
    gamepart.classList.remove("hide");
}

