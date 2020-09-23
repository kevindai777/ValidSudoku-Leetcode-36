//Java Solution

class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<Character> rows = new HashSet<>();
        Set<Character> cols = new HashSet<>();
        Set<Character> boxes = new HashSet<>();
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                char rowElement = board[i][j];
                char colElement = board[j][i];
                char boxElement = board[(int) (3 * Math.floor(i / 3)) + (int) Math.floor(j / 3)][((i * 3) % 9) + (j % 3)];
                
                if (rows.contains(rowElement)) {
                    return false;
                }
                if (rowElement != '.') {
                    rows.add(rowElement);
                }
                
                if (cols.contains(colElement)) {
                    return false;
                }
                if (colElement != '.') {
                    cols.add(colElement);
                }
                
                if (boxes.contains(boxElement)) {
                    return false;
                }
                if (boxElement != '.') {
                    boxes.add(boxElement);
                }
            }
            
            rows.clear();
            cols.clear();
            boxes.clear();
        }
        
        return true;
    }
}