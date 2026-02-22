#include <stdio.h>

int main()
{
    int x, y;

    x = 10;
    y = x++;
    printf("y = x++ : valor de y => %d\n", y);
    printf("y = x++ : valor de x => %d\n", x);

    x = 10;
    y = x--;
    printf("y = x-- : valor de y => %d\n", y);
    printf("y = x-- : valor de x => %d\n", x);

    x = 10;
    y = ++x;
    printf("y = ++x : valor de y => %d\n", y);
    printf("y = ++x : valor de x => %d\n", x);

    x = 10;
    y = --x;
    printf("y = --x : valor de y => %d\n", y);
    printf("y = --x : valor de x => %d\n", x);

    printf("%d", 4 > 10); // É zero porque falso é 1 e verdadeiro é zero

    return 0;
}