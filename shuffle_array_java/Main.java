//shuffle_Array_Code
import java.util.*;

public class Main{
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = Arrays.asList(array);
        Collections.shuffle(list);
        System.out.println("Shuffled array: " + list);
    }
}