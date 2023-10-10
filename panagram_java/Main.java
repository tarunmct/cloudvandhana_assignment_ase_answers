//panagram or not
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();

        boolean isPangram = sentence.chars().filter(Character::isAlphabetic).distinct().count() == 26;

        System.out.println(isPangram ? "The sentence is a pangram." : "The sentence is not a pangram.");

        scanner.close();
    }
}