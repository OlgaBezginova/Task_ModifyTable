function randomNumber(min, max) {
	return min + Math.floor(Math.random() * (max + 1 - min));
}


/*Create table*/

let tableSize = 10;

let table = document.createElement('table');
let tbody = document.createElement('tbody');
let tr    = document.createElement('tr');
let td    = document.createElement('td');

document.body.appendChild(table);
table.appendChild(tbody);

for(let i = 0; i < tableSize; i++) {
    let newTd = td.cloneNode(true);
    tr.appendChild(newTd);
}

for(let i = 0; i < tableSize; i++) {
    let newTr = tr.cloneNode(true);
    tbody.appendChild(newTr);
}


/*Create matrix of td-elements*/

let tdList = document.querySelectorAll('td');
let trList = document.querySelectorAll('tr');

let tdArray = [];
let k = 0;

for(let i = 0; i < tableSize; i++) {
    tdArray[i] = [];
    for(let j = 0; j < tableSize; j++) {
        tdArray[i][j] = tdList[k];
        tdArray[i][j].textContent = randomNumber(-99, 99);
        k++;
    }
}


/*Paint perimeter cells*/

for(let i = 0; i < trList.length; i++) {
    let cells = trList[i].children;
    console.log(cells);
    if(!trList[i].previousElementSibling || !trList[i].nextElementSibling) {
        for(let j = 0; j < cells.length; j++){
            cells[j].className = 'perimeter';
        }
    }
    else{
        trList[i].lastElementChild.className  = 'perimeter';
        trList[i].firstElementChild.className = 'perimeter'; 
    }   
}


/*Highlight main diagonal*/

for(let i = 0; i < tableSize; i++) {
    tdArray[i][i].className = 'diagonal';
}


/*Highlight antidiagonal*/

let word = 'апельсин';

for(let i = 1; i < tableSize-1; i++) {
    tdArray[i][tableSize - 1 - i].className = 'antidiagonal';
    tdArray[i][tableSize - 1 - i].textContent = word.charAt(tableSize - 2 - i);    
}





