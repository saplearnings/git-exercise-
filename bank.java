import java.util.Scanner;

public class bank {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String accountHolder;
        int accountNumber = 101;
        int balance = 0;

        System.out.println("Enter Account Holder Name");
        accountHolder = input.nextLine(); 

        int option; 

        do {

            System.out.println("\nWhat would you like to do?");
            System.out.println("1 - Deposit");
            System.out.println("2 - Withdraw");
            System.out.println("3 - Check Balance"); 
            System.out.println("0 - Exit"); 

            option = input.nextInt(); 

            switch (option) {
                case 1: 
                System.out.println("Enter the deposit Amount:");
                int deposit = input.nextInt(); 

                if (deposit > 0) {
                    balance = balance + deposit; 
                    System.out.printf("Deposit successful. Available balance is: %d", balance);
                } else {
                    System.out.println("Invalid amount");
                }

            break;


            case 2: 
            System.out.println("Enter withdrawal amount:");
            int withdraw = input.nextInt();

            if (withdraw < 1) {
                System.out.println("Invalid amount");
            } else if ( withdraw > balance) {
                System.out.println("Insuffieient balance");
            } else {
                balance = balance - withdraw; 
                System.out.printf("Please collect your Money. Available balance is %d:", balance);
            }
            break;

            case 3: 
            System.out.printf("Available balance is %d: ", balance);
            break;

            case 0: 
            System.out.printf("Thanks for banking with us, ", accountHolder);
            break;

             default:
                    System.out.println("Invalid choice. Please try again.");

        }
       
    } while (option != 0);
     input.close();
}
}