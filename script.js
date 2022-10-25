
const typePara = document.createElement("p");
const typeSelector = document.getElementById("typewriter");
const whackSelector = document.getElementById("whack-container");

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

const randIntStr = () => {
    return String(Math.ceil(Math.random()*5000));
};

const returnElement = () => {
    let span = document.createElement("span");
    span.id = "span" + randIntStr();
    span.className = "circle";
    return span;
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

typeSelector.appendChild(typePara);

typeWrite("TEST");

for (let i = 0, len = 12; i < len; i++) {
    whackSelector.appendChild(returnElement());
};
