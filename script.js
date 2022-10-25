
const typePara = document.createElement("p");
const divFinder = document.getElementById("typewriter");

function* typeMaker(string) {
    let index = 0;
    while (index < string.length) {
        yield string[index];
        index++;
    };
};

const addText = (string) => {
    typePara.innerText += string;
};

const typeWrite = (string) => {
    let gen = typeMaker(string);
    let myInterval = setInterval(function () {
        let next = gen.next()
        if (next.done){
            clearInterval(myInterval);
        } else {
            addText(next.value)
        };
    }, 500);
};

divFinder.appendChild(typePara);

typeWrite("Prout");
