/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number
 */

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by oo185015 on 4/8/17.
 */
public class LetterCombinations {
    private static HashMap<Integer, Character[]> map = new HashMap<>();
    static {
        map.put(2, new Character[]{'a', 'b', 'c'});
        map.put(3, new Character[]{'d', 'e', 'f'});
        map.put(4, new Character[]{'g', 'h', 'i'});
        map.put(5, new Character[]{'j', 'k', 'l'});
        map.put(6, new Character[]{'m', 'n', 'o'});
        map.put(7, new Character[]{'p', 'q', 'r', 's'});
        map.put(8, new Character[]{'t', 'u', 'v'});
        map.put(9, new Character[]{'w', 'x', 'y', 'z'});
    }

    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if(digits.length() < 1) return result;

        recurse(digits, 0, "", result);

        return result;
    }

    private void recurse(String digits, int index, String cur, List<String> result) {
        if(index >= digits.length()) {
            result.add(cur);
            return;
        }

        int digit = Character.getNumericValue(digits.charAt(index));
        Character[] letters = map.get(digit);

        for(int i = 0, l = letters.length; i < l; i++) {
            recurse(digits, index + 1, cur + Character.toString(letters[i]), result);
        }
    }
}
