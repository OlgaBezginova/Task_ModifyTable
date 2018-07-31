function randomNumber(min, max) {
	return min + Math.floor(Math.random() * (max + 1 - min));
}

/*Create table of td-elements*/

let tdList = document.querySelectorAll("td");
let trList = document.querySelectorAll("tr");

let tdArray = [];
let k = 0;

for(let i = 0; i < 10; i++) {
    tdArray[i] = [];
    for(let j = 0; j < 10; j++) {
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








