import java.util.Arrays;

public class PlusOneArray {
    public static void main(String[] args) {

        int[] digits={9,9,9,9};
        System.out.println(Arrays.toString(plusOne(digits)));
    }
    public static int[] plusOne(int[] digits){
        for (int i = digits.length-1; i>=0 ; i--) {
            if (digits[i]<9){
                digits[i]+=1;
                break;
            }
            digits[i]=0;
            if (i==0){
                int[] expandDigit=new int[digits.length+1];
                expandDigit[0]=1;
                System.arraycopy(digits, 0, expandDigit, 1, expandDigit.length - 1);
                return expandDigit;
            }
        }
        return digits;
    }
}
