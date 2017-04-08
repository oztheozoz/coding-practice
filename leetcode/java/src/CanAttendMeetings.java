import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by oo185015 on 4/8/17.
 * https://leetcode.com/problems/meeting-rooms
 */
public class CanAttendMeetings {
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

    public boolean canAttendMeetings(Interval[] intervals) {
        if(intervals.length < 2) return true;

        Arrays.sort(intervals, (Interval a, Interval b) -> a.start - b.start);

        for(int i = 1, l = intervals.length; i < l; i++) {
            if(intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }

        return true;
    }
}
