function sortByEpisodesAsc() {
    let items = document.querySelector('.characters');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].querySelector('.episode').textContent.split(', ').length < +items.children[j].querySelector('.episode').textContent.split(', ').length) {
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
            else {
                if (+items.children[i].querySelector('.episode').textContent.split(', ').length === +items.children[j].querySelector('.episode').textContent.split(', ').length) {
                    let date1 = new Date(items.children[i].querySelector('.date').textContent.replace(" ", "T"));
                    let date2 = new Date(items.children[j].querySelector('.date').textContent.replace(" ", "T"));
                    if(date1 < date2) {
                        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                        insertAfter(replacedNode, items.children[i]);
                    }
                }
            }
        }
    }
    sortDisplayFix();
}

function sortByEpisodesDesc() {
    let items = document.querySelector('.characters');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].querySelector('.episode').textContent.split(', ').length > +items.children[j].querySelector('.episode').textContent.split(', ').length) {
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
            else {
                if (+items.children[i].querySelector('.episode').textContent.split(', ').length === +items.children[j].querySelector('.episode').textContent.split(', ').length) {
                    let date1 = new Date(items.children[i].querySelector('.date').textContent.replace(" ", "T"));
                    let date2 = new Date(items.children[j].querySelector('.date').textContent.replace(" ", "T"));
                    if(date1 < date2) {
                        let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                        insertAfter(replacedNode, items.children[i]);
                    }
                }
            }
        }
    }
    sortDisplayFix();
}

function sortByDateAsc() {
    let items = document.querySelector('.characters');
    for (let i = 0; i < items.children.length - 1; i++) {
        let date1 = new Date(items.children[i].querySelector('.date').textContent.replace(" ", "T"));
        for (let j = i; j < items.children.length; j++) {
            let date2 = new Date(items.children[j].querySelector('.date').textContent.replace(" ", "T"));
            if (date1 > date2) {
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
    sortDisplayFix();
}

function sortByDateDesc() {
    let items = document.querySelector('.characters');
    for (let i = 0; i < items.children.length - 1; i++) {
        let date1 = new Date(items.children[i].querySelector('.date').textContent.replace(" ", "T"));
        for (let j = i; j < items.children.length; j++) {
            let date2 = new Date(items.children[j].querySelector('.date').textContent.replace(" ", "T"));
            if (date1 < date2) {
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
    sortDisplayFix();
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function sortDisplayFix() {
    let items = document.querySelector('.characters');
    if (items.childElementCount > 10 && document.querySelector("[style='display: none;']") !== null) {
        for (let k = 0; k < 10; k++){
            if (items.children[k].style.display = 'none') {
                items.children[k].style.display = '';
            }
        }
        for (let k = 10; k < items.childElementCount; k++){
            items.children[k].style.display = 'none';
        }
    }
    else {
        for (let k = 0; k < items.childElementCount; k++){
            items.children[k].style.display = '';
        }
    }
}

export { sortByDateAsc, sortByDateDesc, sortByEpisodesAsc, sortByEpisodesDesc, insertAfter }