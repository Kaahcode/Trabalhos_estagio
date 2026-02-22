import java.util.Scanner;

public class pesquisa {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int qtdExcelente = 0;
        int qtdBom = 0;
        int qtdRuim = 0;

        for (int i = 1; i < 3; i++) {
            System.out.println(" Entrevistados " + i);

            // Coleta de nome
            System.out.println("Digite o nome");
            String nome = input.next();

            // Coleta de idade
            System.out.println("Digite sua idade");
            String idade = input.next();

            // Coleta de opinião do entrevistado
            System.out.println("Opiniao do entrevistado ( 1-Excelente, 2-Bom, 3-Ruim):");
            int opiniao = input.nextInt();

            // Estrutura de decisão para contabilizar as respostas

            if (opiniao == 1) {
                qtdExcelente++;

            } else if (opiniao == 2) {
                qtdBom++;

            } else if (opiniao == 3) {
                qtdRuim++;

            }

            System.out.println();
        }
        System.out.println("Quantidade de resposta 'Excelente':" + qtdExcelente);
        System.out.println("Quantidade de resposta 'Bom':" + qtdBom);
        System.out.println("Quantidade de resposta 'Ruim':" + qtdRuim);
    }
}
