$(document).ready(function (){

    //Logic for align item buttons
    const alignIcon = document.querySelectorAll(".align-icon");
    alignIcon.forEach((icon) => {
        icon.addEventListener("click", function () {
            document.querySelector(".align-icon.selected").classList.remove("selected");
            icon.className += " selected";
        });
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
                document.querySelector(".input-cell.selected").classList.remove("selected");
                cell.className += " selected";
            }
    
        })
    
        //make cell editable on doubleclick
        cell.addEventListener("dblclick", function () {
    
            document.querySelector(".input-cell.selected").classList.remove("selected");
            cell.className += " selected";
            cell.contentEditable = "true";
            cell.focus();
    
        });

    });

    //removing contenteditable on focus loss
    $(".input-cell").blur(function(){
        $(".input-cell.selected").attr("contenteditable", false);
    })
    
    //Adding properties to cells (bold italics etc))
    function updateCell(property, value){
        $(".input-cell.selected").each(function(){
            $(this).css(property, value);  
        })
    }

    $(".icon-bold").click(function (){
        if($(this).hasClass("selected")){
            updateCell("font-weight", "");
        }else{  
            updateCell("font-weight", "bold");
        }
    })
    $(".icon-italic").click(function (){
        if($(this).hasClass("selected")){
            updateCell("font-style", "");
        }else{  
            updateCell("font-style", "italic");
        }
    })
    $(".icon-underline").click(function (){
        if($(this).hasClass("selected")){
            updateCell("text-decoration", "");
        }else{  
            updateCell("text-decoration", "underline");
        }
    })

    
    //Making row and column scroll with input-cell-container
    inputCellContainer.addEventListener("scroll", function () {
    
        document.querySelector(".column-name-container").scrollLeft = inputCellContainer.scrollLeft;
        document.querySelector(".row-name-container").scrollTop = inputCellContainer.scrollTop;
    
    });

})


