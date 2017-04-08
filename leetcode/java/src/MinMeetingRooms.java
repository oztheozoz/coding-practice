import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by oo185015 on 4/8/17.
 * https://leetcode.com/problems/meeting-rooms-ii
 */
public class MinMeetingRooms {
    private class Interval {
        int start;
        int end;

        Interval() {
            start = 0;
            end = 0;
        }

        Interval(int s, int e) {
            start = s;
            end = e;
        }
    }

    public int minMeetingRooms(Interval[] intervals) {
        int numMeetingRooms = 0;
        final int length = intervals.length;
        if (length < 1) return numMeetingRooms;

        Integer[] intervalsByStart = new Integer[length];
        Integer[] intervalsByEnd = new Integer[length];

        Comparator<Integer> comparator = new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
                return a - b;
            }
        };

        for (int i = 0; i < length; i++) {
            intervalsByStart[i] = intervals[i].start;
            intervalsByEnd[i] = intervals[i].end;
        }

        Arrays.sort(intervalsByStart, comparator);
        Arrays.sort(intervalsByEnd, comparator);

        System.out.println(Arrays.toString(intervalsByStart));
        System.out.println(Arrays.toString(intervalsByEnd));

        int startIndex = 0, endIndex = 0;

        while (startIndex < length) {
            if (intervalsByStart[startIndex] < intervalsByEnd[endIndex]) {
                numMeetingRooms++;
            } else {
                endIndex++;
            }

            startIndex++;
        }

        return numMeetingRooms;
    }
}
