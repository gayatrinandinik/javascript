#include <stdio.h>

int main(void)
{
    double firstNumber;
    double secondNumber;

    printf("Enter the first number: ");
    scanf("%lf", &firstNumber);

    printf("Enter the second number: ");
    scanf("%lf", &secondNumber);

    printf("Sum: %.2f\n", firstNumber + secondNumber);

    return 0;
}
