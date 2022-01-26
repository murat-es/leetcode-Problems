public class FindSingleNumber {
    public static void main(String[] args) {
        int[] nums = {2,2,1,3,5,7,5,8,3,1,8};
        System.out.println(singleNumber(nums));


    }
    public static int singleNumber(int[] nums) {
        int result = 0;
        for(int i : nums) {
            result ^= i;
        }
        return result;
    }
}
