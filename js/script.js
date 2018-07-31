function randomNumber(min, max) {
	return min + Math.floor(Math.random() * (max + 1 - min));
}

let tdList = document.querySelectorAll("td");

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



