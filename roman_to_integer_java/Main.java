//roman number as input and convert it to integer
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a Roman numeral: ");
        String roman = scanner.nextLine().toUpperCase();

        int result = romanToInt(roman);

        System.out.println("Roman numeral " + roman + " is equal to integer " + result);

        scanner.close();
    }

    public static int romanToInt(String s) {
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

        int num = 0;
        int i = 0;

        while (i < s.length()) {
            for (int j = 0; j < symbols.length; j++) {
                if (s.startsWith(symbols[j], i)) {
                    num += values[j];
                    i += symbols[j].length();
                    break;
                }
            }
        }

        return num;
    }
}