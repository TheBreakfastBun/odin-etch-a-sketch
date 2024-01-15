const body = document.querySelector('body');
const container = document.createElement("div");
container.style = "display: flex; height: 100vh; width: 100%;"
body.appendChild(container);

for (let x = 0; x < 16; ++x){
    const div = document.createElement('div');
    div.style = "border: 1px solid white; flex: auto; display: flex; flex-direction: column;";
    container.appendChild(div);
    for (let y = 0; y < 16; ++y){
        const yDiv = document.createElement('div');
        yDiv.style = "border: 1px solid white; flex: auto;";
        div.appendChild(yDiv);
        yDiv.addEventListener('mouseover', () => {
            yDiv.style = "border: 1px solid white; flex: auto; background-color: white;"
        })
    }
}
