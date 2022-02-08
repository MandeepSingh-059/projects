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
    return columnName.textContent;
}

//Create and add row to the page
function createRow(n){
    const columnNameContainer = document.querySelector(".row-name-container");
    
    const rowName = document.createElement("div");
    rowName.textContent = n;
    rowName.setAttribute("class", "row-name");
    rowName.setAttribute("data-rowId",n);

    columnNameContainer.appendChild(rowName);
    return rowName;
}

//creating the cell
function createCell(row, col, colCode){
    const cell = document.createElement("div");
    cell.setAttribute("class", "input-cell");
    cell.setAttribute("contenteditable", "true");
    cell.setAttribute("data-row", row);
    cell.setAttribute("data-col", col);
    cell.setAttribute("data-code", colCode);
    cell.setAttribute("display", "flex");
    return cell;
}

//populating the data container
function populateDataContainer(maxRow, maxCol, inputCellContainer){
    for(let i=1; i<=maxRow; i++){
        createRow(i);//this create row is for rows in row name container div
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.style.display = "flex";
    
        for(let j=1; j<=maxCol; j++){
            let code;
            if(i==1){
               code = createCol(j);
            }
            const cell = createCell(i,j, code);
            row.appendChild(cell);
        }
        inputCellContainer.appendChild(row);
    }
}



let maxRow = 50;
let maxCol = 50;
const inputCellContainer = document.getElementsByClassName('input-cell-container')[0]; //get 0th element with class name this

populateDataContainer(maxRow, maxCol, inputCellContainer);