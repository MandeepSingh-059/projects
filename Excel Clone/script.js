//Calculating column name
function calcCol(n){
    let ans = "";

    while (n>0){
        rem = n % 26;
        
        if(rem === 0){
            ans = "Z" + ans;
            n = Math.floor(n / 26) - 1;
        }
        else{
            ans = String.fromCharCode(rem-1 + 65) + ans;
            n = Math.floor(n/26);
        }
    }
    return ans;
}

//Create and add column to the page
function createCol(n){
    const columnNameContainer = document.querySelector(".column-name-container");
    
    const columnName = document.createElement("div");
    columnName.textContent = calcCol(n);
    columnName.setAttribute("class", "column-name");
    columnName.setAttribute("data-colCode",columnName.textContent);
    columnName.setAttribute("data-colId",n);

    columnNameContainer.appendChild(columnName);
}

//Create and add row to the page
function createRow(n){
    const columnNameContainer = document.querySelector(".row-name-container");
    
    const rowName = document.createElement("div");
    rowName.textContent = n;
    rowName.setAttribute("class", "row-name");
    rowName.setAttribute("data-rowId",n);

    columnNameContainer.appendChild(rowName);
}

for(let i=1; i <= 20; i++){
    createCol(i);
    createRow(i);
}
