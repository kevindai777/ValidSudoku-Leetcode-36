//Objective is to see if a sudoku puzzle is valid


//O(1) solution since we are always checking a 9x9 board

let rows = new Set()
let cols = new Set()
let boxes = new Set()
    
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let currRowElement = board[i][j]
        let currColElement = board[j][i]
        let currBoxElement = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]
        
        //Make sure the current row, column, and box all don't have the current element
        if (rows.has(currRowElement)) {
            return false
        }
        if (currRowElement !== '.') {
            rows.add(currRowElement)
        }
            
        if (cols.has(currColElement)) {
            return false
        }
        if (currColElement !== '.') {
            cols.add(currColElement)
        }
            
        if (boxes.has(currBoxElement)) {
            return false
        }
        if (currBoxElement !== '.') {
            boxes.add(currBoxElement)
        }
    }
    //Clear everything once we enter a new box
    rows.clear()
    cols.clear()
    boxes.clear()
}
    
    return true