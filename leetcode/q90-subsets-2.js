// https://leetcode.com/problems/subsets-ii
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(nums.length === 0) return [];

    let map = {}, result = [[]];

    for(let num of nums) {
        if(map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    let keys = Object.keys(map);
    let getSubsets = function(map, keys, index, cur, result) {
        if(index >= keys.length) {
            if(cur.length !== 0) {
                result.push(cur);
            }

            return;
        }

        let num = keys[index];
        let freq = map[num];

        for(let i = 0; i <= freq; i++) {
            let temp = [];
            for(let j = 0; j < i; j++) {
                temp.push(parseInt(num));
            }

            getSubsets(map, keys, index + 1, cur.concat(temp), result);
        }
    }

    getSubsets(map, keys, 0, [], result);

    return result;
};