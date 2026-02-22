package Agenda_8;

import java.util.Scanner;

public class notas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int qtdÓtimo = 0;
        int qtdRuim = 0;
        int qtdPéssimo = 0;

        for (int i = 1; i < 5; i++) {
            System.out.println(" Entrevistado " + i);

            // Coleta de idade
            System.out.println("Digite sua idade");
            String idade = input.next();

            // Coleta de notas
            System.out
                    .println(" Entrevistado por favor, digite uma nota para o filme ( 1- Ótimo, 4- Ruim, 5- Péssimo):");
            int entrevista = input.nextInt();

            // Estrutura de decisão para contabilizar as respostas
            if (entrevista == 1) {
                qtdÓtimo++;

            } else if (entrevista == 4) {
                qtdRuim++;

            } else if (entrevista == 5) {
                qtdPéssimo++;

            }

            System.out.println();
        }
        System.out.println("Quantidade de entrevistados 'Ótimo':" + qtdÓtimo);
        System.out.println("Quantidade de entrevistados'Ruim':" + qtdRuim);
        System.out.println(" Quantidade de entrevistados'Péssimo':" + qtdPéssimo);

    }

}
