const inputEl = document.querySelector("#input");
const generateBtn = document.querySelector("#generate");
const divsContainer = document.querySelector(".divs-container");

generateBtn.addEventListener("click", ()=>{
    divsContainer.innerHTML = "";
    let noOfDivs = parseInt(inputEl.value);
    for(i=1; i<=noOfDivs; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for(j=1; j<=noOfDivs; j++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridRow.appendChild(gridItem);
        }
        divsContainer.appendChild(gridRow);
    }
    inputEl.value = "";

    function hexColors(){
        let randomNo = Math.floor(Math.random() * 999999);
        let hexColor = `#${randomNo}`;
        return hexColor;
    }

    let gridItem = divsContainer.querySelectorAll(".grid-item");
    console.log(gridItem);
    gridItem.forEach(item=>{
        item.addEventListener("mouseover", (e)=>{
            e.target.style.backgroundColor = hexColors();
        })
    })
})


