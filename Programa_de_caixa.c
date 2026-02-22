#include <stdio.h>

int main()
{
    float valor_bruto = 0;
    float valor_liquido = 0;
    float valor_desconto = 0;
    int qtd_pessoas = 0;

    printf("\nDigite o valor total da conta: ");
    scanf("%f", &valor_bruto);

    printf("Digite a quantidade de pessoas: ");
    scanf("%d", &qtd_pessoas);

    printf("Digite o desconto (em porcentagem): ");
    scanf("%f", &valor_desconto);

    // Cálculo do valor com desconto
    valor_liquido = valor_bruto - (valor_bruto * valor_desconto / 100);

    printf("\nValor total com desconto: %.2f\n", valor_liquido);

    // Evita divisão por zero
    if (qtd_pessoas > 0)
    {
        printf("Valor a ser pago por pessoa: %.2f\n", valor_liquido / qtd_pessoas);
    }
    else
    {
        printf("Quantidade de pessoas inválida!\n");
    }

    return 0;
}