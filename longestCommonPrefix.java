public class longestCommonPrefix {
    public static void main(String[] args) {

        String[] array={"flow","as","flower"};
        System.out.println(longCommonPrefix(array));

    }
    public static String longCommonPrefix(String[] strs){

        //find shortest string length
        int shortest=strs[0].length();
        for (int i = 1; i <strs.length; i++) {
            if (strs[i].length()<shortest){
                shortest=strs[i].length();
            }
        }


        String longCommon="";
        for (int i = 0; i <shortest ; i++) {
            for (int j=1; j <strs.length ; j++) {

                if (strs[0].charAt(i)!=strs[j].charAt(i))
                    return longCommon;
            }
            longCommon+=strs[0].charAt(i);
        }

        return longCommon;
    }
}