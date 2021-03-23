function updateUI (object)  {

    const fragment = document.createDocumentFragment();
    let tableElement = document.createElement('table');
    for (let key in object) {
        let trElement = document.createElement('tr');
        let tdElementKey = document.createElement('td');
        tdElementKey.innerHTML = `<strong>${key.toUpperCase()}</strong>`;
        let tdElementValue = document.createElement('td'); 
        tdElementValue.innerHTML = `${object[key]}`;
        trElement.appendChild(tdElementKey);
        trElement.appendChild(tdElementValue);
        tableElement.appendChild(trElement);
    }
    fragment.appendChild(tableElement);
    const resultElement = document.querySelector('#results');
    resultElement.removeChild(resultElement.firstChild);
    resultElement.appendChild(fragment);
}

export { updateUI }