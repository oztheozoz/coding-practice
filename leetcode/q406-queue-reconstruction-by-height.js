/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let i = 0;
    let l = people.length;

    while(i < l) {
        let numPeopleAllowedInFrontOfYou = people[i][1];
        let numPeopleGreaterOrEqualToYourHeight = getNumPeopleGreaterOrEqualToYourHeight(people[i]);

        if(numPeopleGreaterOrEqualToYourHeight ===  numPeopleAllowedInFrontOfYou) {
            i++;
        } else if (numPeopleGreaterOrEqualToYourHeight > numPeopleAllowedInFrontOfYou) {
            swapDown(people[i], numPeopleGreaterOrEqualToYourHeight, i);
        } else {
            swapUp(people[i], numPeopleGreaterOrEqualToYourHeight, i);
        }
    }

    function getNumPeopleGreaterOrEqualToYourHeight(person) {
        let count = 0;

        for(let j = i - 1; j >= 0; j--) {
            if(people[j][0] > person[0]) {
                count++;
            }
        }

        return count;
    }

    function swapDown(person, numPeopleGreaterOrEqualToYourHeight, index) {
        for(let k = index - 1; k >= 0 && numPeopleGreaterOrEqualToYourHeight > person[1]; k--, index--) {
            if(people[k][0] >= person[0]) {
                numPeopleGreaterOrEqualToYourHeight--;
            }

            swap(k,index);
        }
    }

    function swapUp(person, numPeopleGreaterOrEqualToYourHeight, index) {
        for(let h = index + 1, length = people.length; h < length && numPeopleGreaterOrEqualToYourHeight < person[1]; h++, index++) {
            if(people[h][0] < person[0]) {
                numPeopleGreaterOrEqualToYourHeight++;
            }

            swap(h,index);
        }
    }

    function swap(index1, index2) {
        let temp = people[index1];
        people[index1] = people[index2];
        people[index2] = temp;
    }

    return people;
};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));