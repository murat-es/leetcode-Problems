public class validParentheses {
    public static void main(String[] args) {
        System.out.println(isValid("(])"));
    }
    public static boolean isValid(String s){

        String prnths="";
        int j=0;

        for (int i = 0; i <s.length() ; i++) {

            switch (s.charAt(i)){
               case '{':
                   prnths+='{';
                   j++;
                   break;

               case '(':
                   prnths+='(';
                   j++;
                   break;

               case '[':
                   prnths+='[';
                   j++;
                   break;

               case '}':
                   if(j==0){
                       return false;
                   }
                   if (prnths.charAt(j-1)=='{'){
                       prnths=prnths.substring(0,j-1);
                       j--;
                   }
                   else
                       return false;

                   break;

               case ')':
                   if(j==0){
                       return false;
                   }
                   if (prnths.charAt(j-1)=='('){
                       prnths=prnths.substring(0,j-1);
                       j--;
                   }
                   else
                       return false;

                   break;

               case ']':
                   if(j==0){
                       return false;
                   }
                   if (prnths.charAt(j-1)=='[') {
                       prnths = prnths.substring(0, j - 1);
                       j--;
                   }
                   else
                       return false;
                   break;
           }
        }
        return prnths.equals("");
    }
}