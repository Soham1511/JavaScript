const addLang = (lang) => {
    const li = document.createElement("li");
    li.innerHTML = lang;
    document.querySelector(".language").appendChild(li);
}
addLang("java");

const addAnotherLang = (lang) =>
    {
        const li = document.createElement("li");
        li.innerText = lang;
        document.querySelector(".language").appendChild(li);
    }
addAnotherLang("Rust");

const lang = (addLang) => 
    {
        const li = document.createElement("li");
        li.innerText = addLang;
        document.querySelector(".language").appendChild(li);
    }
lang("swift");
lang("ruby");
addAnotherLang("typescript");
addLang("python"); // this is not a optimized way to add language to the list.

// optimized way ->
const addLangOptimized = (lang) => 
{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(lang));
    document.querySelector(".language").appendChild(li)
}
addLangOptimized("c++");

const addLangOpti = (lang) =>
    {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(lang));
        document.querySelector(".language").appendChild(li)
    }
addLangOpti("D jango");

// edit an elament ->

const second = document.querySelector("li:nth-child(7)");
// second.innerHTML = "mojo";
const newLi = document.createElement("li");
newLi.textContent = "mojo";
second.replaceWith(newLi);

const first = document.querySelector("li:first-child");
first.outerHTML = '<li>css</li>';

// remove an element ->
const last = document.querySelector("li:last-child");
last.remove()