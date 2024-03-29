const body = document.querySelector('body');

const btnGrid = document.createElement('button');
btnGrid.textContent = "Change Grid Layout";
body.appendChild(btnGrid);

const container = document.createElement("div");
container.style = "display: flex; height: 100vh; width: 100%;"
body.appendChild(container);

let opacity = 0;

for (let x = 0; x < 16; ++x){
    const div = document.createElement('div');
    div.style = "border: 1px solid white; flex: auto; display: flex; flex-direction: column;";
    container.appendChild(div);
    for (let y = 0; y < 16; ++y){
        const yDiv = document.createElement('div');
        yDiv.style = "border: 1px solid white; flex: auto;";
        div.appendChild(yDiv);
        yDiv.addEventListener('mouseover', () => {
            opacity += 10;
            yDiv.style = "border: 1px solid white; flex: auto; background-color: white; opacity: " + opacity.toString() + "%";

            if (opacity >= 100)
                opacity = 0;
        })
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//Grid change Function
btnGrid.addEventListener('click', () => {
    removeAllChildNodes(container);

    opacity = 0;

    let gridSize = prompt("How many squares per side do you want?");

        for (let x = 0; x < gridSize; ++x){
            const div = document.createElement('div');
            div.style = "border: 1px solid white; flex: auto; display: flex; flex-direction: column;";
            container.appendChild(div);
                for (let y = 0; y < gridSize; ++y){
                const yDiv = document.createElement('div');
                yDiv.style = "border: 1px solid white; flex: auto;";
                div.appendChild(yDiv);
                yDiv.addEventListener('mouseover', () => {
                    opacity += 10;
                    yDiv.style = "border: 1px solid white; flex: auto; opacity: " + opacity.toString() + "%; background-color: rgb(" 
                    + Math.floor(Math.random() * 256).toString() + ", " + Math.floor(Math.random() * 256).toString() 
                    + ", " + Math.floor(Math.random() * 256).toString() + ");";

                    if (opacity >= 100)
                    opacity = 0;
                })
            }
        }
})


console.log(Math.floor(Math.random() * 256));