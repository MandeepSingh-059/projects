let defaultProperties = {
    text: "",
    "font-weight": "",
    "font-style": "",
    "text-decoration": "",
    "text-align": "left",
    "background-color": "#ffffff",
    "color": "#000000",
    "font-family": "Arial",
    "font-size": "14px"
}

let cellData = {
    "Sheet1": {

    }
}

let selectedSheet = "Sheet1";
let totalSheets = 1;


$(document).ready(function (){

    //Logic for align item buttons
    // const alignIcon = document.querySelectorAll(".align-icon");
    // alignIcon.forEach((icon) => {
    //     icon.addEventListener("click", function () {
    //         document.querySelector(".align-icon.selected").classList.remove("selected");
    //         icon.className += " selected";
    //     });
    // });
    $(".align-icon").click(function(){
        $(".align-icon.selected").removeClass("selected");
        $(this).addClass("selected");
    });
    
    
    //Logic for style (italics, bold, undeline) buttons
    const styleIcon = document.querySelectorAll(".style-icon");
    styleIcon.forEach((icon) => {
        icon.addEventListener("click", function () {
    
            icon.classList.toggle("selected");
    
            // if(icon.classList.contains("selected")){
            //     icon.classList.remove("selected");
            // }else{
            //     icon.className += " selected";
            // }
        });
    });
    
    
    
    
    
    //Calculating column name
    function calcCol(n) {
        let ans = "";
    
        while (n > 0) {
            rem = n % 26;
    
            if (rem === 0) {
                ans = "Z" + ans;
                n = Math.floor(n / 26) - 1;
            }
            else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }
        return ans;
    }
    
    //Create and add column to the page
    function createCol(n) {
        const columnNameContainer = document.querySelector(".column-name-container");
    
        const columnName = document.createElement("div");
        columnName.textContent = calcCol(n);
        columnName.setAttribute("class", "column-name");
        columnName.setAttribute("data-colCode", columnName.textContent);
        columnName.setAttribute("data-colId", n);
    
        columnNameContainer.appendChild(columnName);
        return columnName.textContent;
    }
    
    //Create and add row to the page
    function createRow(n) {
        const columnNameContainer = document.querySelector(".row-name-container");
    
        const rowName = document.createElement("div");
        rowName.textContent = n;
        rowName.setAttribute("class", "row-name");
        rowName.setAttribute("data-rowId", n);
    
        columnNameContainer.appendChild(rowName);
        return rowName;
    }
    
    //creating the cell
    function createCell(row, col, colCode) {
        const cell = document.createElement("div");
        cell.setAttribute("class", "input-cell");
        cell.setAttribute("contenteditable", "true");
        // cell.setAttribute("data-row", row);
        // cell.setAttribute("data-col", col);
        cell.setAttribute("id", `row-${row}-col-${col}`);
        cell.setAttribute("data-code", colCode);
        cell.setAttribute("display", "flex");
        cell.setAttribute("contenteditable", "false");
        return cell;
    }
    
    //function to get row and column code
    function getRowCol(ele) {
        let idArray = $(ele).attr("id").split("-");
        let rowId = parseInt(idArray[1]);
        let colId = parseInt(idArray[3]);
        return [rowId,colId];
    }
    
    //populating the data container
    function populateDataContainer(maxRow, maxCol, inputCellContainer) {
        for (let i = 1; i <= maxRow; i++) {
            createRow(i);//this create row is for rows in row name container div
            const row = document.createElement("div");
            row.setAttribute("class", "row");
            row.style.display = "flex";
    
            for (let j = 1; j <= maxCol; j++) {
                let code;
                if (i == 1) {
                    code = createCol(j);
                }
                const cell = createCell(i, j, code);
                row.appendChild(cell);
            }
            inputCellContainer.appendChild(row);
        }
    }
    
    let maxRow = maxCol = 100;
    const inputCellContainer = document.getElementsByClassName('input-cell-container')[0]; //get 0th element with class name this
    
    populateDataContainer(maxRow, maxCol, inputCellContainer);
    
    
    //Logic to select Cells
    document.querySelector(".input-cell").className += " selected";
    const inputCell = document.querySelectorAll(".input-cell");
    inputCell.forEach((cell) => {
    
        cell.addEventListener("click", (e) => {
            if (e.ctrlKey) {
                let [rowId, colId] = getRowCol(cell);
                if (rowId > 1) {
                    let topCellSelected = $(`#row-${rowId - 1}-col-${colId}`).hasClass("selected");
                    if (topCellSelected) {
                        $(cell).addClass("top-cell-selected");
                        $(`#row-${rowId - 1}-col-${colId}`).addClass("bottom-cell-selected");
                    }
                }
                if (rowId < 100) {
                    let bottomCellSelected = $(`#row-${rowId + 1}-col-${colId}`).hasClass("selected");
                    if (bottomCellSelected) {
                        $(cell).addClass("bottom-cell-selected");
                        $(`#row-${rowId + 1}-col-${colId}`).addClass("top-cell-selected");
                    }
                }
                if (colId > 1) {
                    let leftCellSelected = $(`#row-${rowId}-col-${colId - 1}`).hasClass("selected");
                    if (leftCellSelected) {
                        $(cell).addClass("left-cell-selected");
                        $(`#row-${rowId}-col-${colId - 1}`).addClass("right-cell-selected");
                    }
                }
                if (colId < 100) {
                    let rightCellSelected = $(`#row-${rowId}-col-${colId + 1}`).hasClass("selected");
                    if (rightCellSelected) {
                        $(cell).addClass("right-cell-selected");
                        $(`#row-${rowId}-col-${colId + 1}`).addClass("left-cell-selected");
                    }
                }
                cell.className += " selected";

            }
            else {
                $(".input-cell.selected").removeClass("selected top-cell-selected bottom-cell-selected left-cell-selected right-cell-selected");
                cell.className += " selected";
            }
            changeHeader(cell);
        })

    
        //make cell editable on doubleclick
        cell.addEventListener("dblclick", function () {
    
            document.querySelector(".input-cell.selected").classList.remove("selected");
            cell.className += " selected";
            cell.contentEditable = "true";
            cell.focus();
    
        });

    });
    
    function changeHeader(ele){
        let [rowId, colId] = getRowCol(ele);
        let cellInfo = defaultProperties;
        if(cellData[selectedSheet][rowId] && cellData[selectedSheet][rowId][colId]){
            cellInfo = cellData[selectedSheet][rowId][colId];
        }

        cellInfo["font-weight"] ? $(".icon-bold").addClass("selected") : $(".icon-bold").removeClass("selected")
        cellInfo["font-style"] ? $(".icon-italic").addClass("selected") : $(".icon-italic").removeClass("selected")
        cellInfo["text-decoration"] ? $(".icon-underline").addClass("selected") : $(".icon-underline").removeClass("selected")

        let alignment = cellInfo["text-align"];
        $(".align-icon.selected").removeClass("selected");
        $(".icon-align-" + alignment).addClass("selected");
        $(".text-color-picker").val(cellInfo["color"]);
        $(".font-family-selector").val(cellInfo["font-family"]);
        $(".font-size-selector").val(cellInfo["font-size"]);
    }

    //removing contenteditable on focus loss
    $(".input-cell").blur(function(){
        $(".input-cell.selected").attr("contenteditable", false);
    })
    
    //Adding properties to cells (bold italics etc))
    function updateCell(property, value, defaultPossible){
        $(".input-cell.selected").each(function(){
            $(this).css(property, value); 
            //updating cell data object
            let [rowId, colId] = getRowCol(this);
            //Case when the data of row of selected cell already exists
            if(cellData[selectedSheet][rowId]){
                //Case when both row and col data exists so we only need to update the properties
                if(cellData[selectedSheet][rowId][colId]){
                    cellData[selectedSheet][rowId][colId][property] = value;
                }
                //case when row data exists but we now update a cell on a new column
                else{
                    //copy defaultProperties to colId
                    cellData[selectedSheet][rowId][colId] = {...defaultProperties};
                    cellData[selectedSheet][rowId][colId][property] = value;
                }
            }
            //case when a new row is selected 
            else{
                cellData[selectedSheet][rowId] = {};
                cellData[selectedSheet][rowId][colId] = {...defaultProperties};
                cellData[selectedSheet][rowId][colId][property] = value;
            }
            //checking if cell propperties are default or not by stringifying both and comparing
            if(defaultPossible && JSON.stringify(cellData[selectedSheet][rowId][colId]) === JSON.stringify(defaultProperties)){
                delete cellData[selectedSheet][rowId][colId];
                //if after deleting that colId data our row array is empty then delete that as well
                if(Object.keys(cellData[selectedSheet][rowId]).length == 0){
                    delete cellData[selectedSheet][rowId];
                }
            }
        });
    }

    $(".icon-bold").click(function (){
        if($(this).hasClass("selected")){
            updateCell("font-weight", "", true);
        }else{  
            updateCell("font-weight", "bold", false);
        }
    })
    $(".icon-italic").click(function (){
        if($(this).hasClass("selected")){
            updateCell("font-style", "", true);
        }else{  
            updateCell("font-style", "italic", false);
        }
    })
    $(".icon-underline").click(function (){
        if($(this).hasClass("selected")){
            updateCell("text-decoration", "", true);
        }else{  
            updateCell("text-decoration", "underline", false);
        }
    })

    $(".icon-align-left").click(function (){
        if($(this).hasClass("selected")){
            updateCell("text-align", "left", true);
        }
    })
    $(".icon-align-center").click(function (){
        if($(this).hasClass("selected")){
            updateCell("text-align", "center", false);
        }
    })
    $(".icon-align-right").click(function (){
        if($(this).hasClass("selected")){
            updateCell("text-align", "right", false);
        }
    })


    $(".font-size-selector").change(function (){
        updateCell("font-size", $(this).val(), true);
    });
    $(".font-family-selector").change(function (){
        updateCell("font-family", $(".font-family-selector :selected").val(), true);
    });
    

    $(".icon-color-text").click(function (){
        $(".text-color-picker").click();
    });
    $(".text-color-picker").change(function (){
        updateCell("color", `${$(".text-color-picker").val()}`, true);
    });
    




    //Making row and column scroll with input-cell-container
    inputCellContainer.addEventListener("scroll", function () {
    
        document.querySelector(".column-name-container").scrollLeft = inputCellContainer.scrollLeft;
        document.querySelector(".row-name-container").scrollTop = inputCellContainer.scrollTop;
    
    });

})