// https://leetcode.com/problems/diagonal-traverse
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return [];
    let result = [];
    let point = new Point(0, 0);
    let direction = "up";
    
    while(true) {
        result.push(matrix[point.x][point.y]);
        let nextPoint = getNext(point);
        if(nextPoint) {
            point = nextPoint;
        } else {
            break;
        }
    }
    
    function getNext(point) {
        let upPoint = getUpPoint(point);
        let up = isUpValid(upPoint);
        let downPoint = getDownPoint(point);
        let down = isDownValid(downPoint);
        let rightPoint = getRightPoint(point);
        let right = isRightValid(rightPoint);
        let leftPoint = getLeftPoint(point);
        let left = isLeftValid(leftPoint);
        
        if(direction === "up") {
            if(up && right) {
                return new Point(upPoint.x, rightPoint.y);
            } else if(right) {
                direction = "down";
                return new Point(point.x, rightPoint.y);
            } else {
                if(down) {
                    direction = "down";
                    return new Point(downPoint.x, point.y);
                } else {
                    return null;
                }
            }
        } else {
            if(down && left) {
                return new Point(downPoint.x, leftPoint.y);
            } else if(down) {
                direction = "up";
                return new Point(downPoint.x, point.y);
            } else {
                if(right) {
                    direction = "up";
                    return new Point(point.x, rightPoint.y);
                } else {
                    return null;
                }
            }
        }
    }
    
    function isUpValid(point) {
        if(point.x >= 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function isDownValid(point) {
        if(point.x < matrix.length) {
            return true;
        } else {
            return false;
        }
    }
    
    function isRightValid(point) {
        if(point.y < matrix[0].length) {
            return true;
        } else {
            return false;
        }
    }
    
    function isLeftValid(point) {
        if(point.y >= 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function getUpPoint(point) {
        return new Point(point.x - 1, point.y);
    }
    
    function getDownPoint(point) {
        return new Point(point.x + 1, point.y);
    }
    
    function getRightPoint(point) {
        return new Point(point.x, point.y + 1);
    }
    
    function getLeftPoint(point) {
        return new Point(point.x, point.y - 1);
    }
    
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    
    return result;
};