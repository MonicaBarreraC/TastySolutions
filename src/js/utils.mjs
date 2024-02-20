export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const recipe = urlParams.get(param);
  
    return recipe;
}

export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("../partials/header.html");
    const headerElement = document.querySelector("#main-header");

    const footerTemplate = await loadTemplate("../partials/footer.html");
    const footerElement = document.querySelector("#main-footer");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}

async function loadTemplate(path){
    const res = await fetch(path);
    const tempalte = await res.text();
    return tempalte;
}

function renderWithTemplate (
    template,
    parentElement,
    data,
    callback
    ) {
    parentElement.insertAdjacentHTML("afterbegin",template);
    if (callback){
        callback(data);
    }
}

export function generateListNumbers(nNumbers, maxNumber){    
    let listNumbers = [];
    let number = Math.floor(Math.random() * maxNumber);
    
    // Verify that number is not in the list
    while(listNumbers.length < nNumbers){
        if(listNumbers.includes(number)){
            number = Math.floor(Math.random() * maxNumber);
        } else {
            listNumbers.push(number);
        }
    } return listNumbers;
}