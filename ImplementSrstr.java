public class ImplementSrstr {
    // Implement of java indexOf method
    public static void main(String[] args) {
       String  haystack = "mississippi", needle = "issipi";
        System.out.println(strStr(haystack,needle));
        System.out.println(haystack.indexOf(needle));

    }
    public static int strStr(String haystack, String needle) {
        if (needle.length()>haystack.length()){
            return -1;
        }
        if (needle.isEmpty()){
            return 0;
        }

        for (int i = 0; i <haystack.length() ; i++) {
            if (haystack.length()-i<needle.length()){
                return -1;
            }
            for (int j = 0; j <needle.length() ; j++) {

                if (needle.charAt(j)!=haystack.charAt(j+i)){
                    break;
                }
                if (j==needle.length()-1){
                    return i;

                }
            }
        }
        return -1;
    }
}