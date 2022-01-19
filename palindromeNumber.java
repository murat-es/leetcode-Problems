public class palindromeNumber {

    public static void main(String[] args) {
        System.out.println(isPalindrome(-23));
    }

    public static boolean isPalindrome(int x){
        if (x>=0){
            String xToString = Integer.toString(x);

            for (int i = 0; i <xToString.length()/2 ; i++) {
                if (xToString.charAt(i) != xToString.charAt(xToString.length()-i-1)){
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}