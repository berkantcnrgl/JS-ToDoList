// "x" button
let nodeList = document.getElementsByTagName("li");
for (let i=0; i < nodeList.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

// hide item by clicking on the "x" button
let close = document.getElementsByClassName("close");
for (let i=0; i<close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display="none";
    }
}

// check symbol
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName == "LI"){
        ev.target.classList.toggle('checked');
    }
});

// "add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === ''){
        $('.toast').toast('show');
    } 
    else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("task").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i=0; i<close.length; i++){
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display="none";
        }
    }
}