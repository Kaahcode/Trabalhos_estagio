package Agenda_8;

import javax.swing.JOptionPane;

public class switchnota {
    public static void main(String[] args) {
        double num1, num2, num3, resultado;
        int divisao;

        num1 = Double.parseDouble(JOptionPane.showInputDialog("Digite o total da nota Ótima"));
        num2 = Double.parseDouble(JOptionPane.showInputDialog("Digite o total da nota Ruim"));
        num3 = Double.parseDouble(JOptionPane.showInputDialog("Digite o total da nota Péssima"));

        divisao = Integer.parseInt(JOptionPane.showInputDialog("Digite a operação desejada: " +
                "\n1 - Soma" +
                "\n2 - Subtração" +
                "\n3 - Multiplicação" +
                "\n4 - Divisão" +
                "\n3 - Resto da divisão"));

        switch (divisao) {
            case 1:
                resultado = num1 / 5;
                break;

            case 4:
                resultado = num2 / 2;
                break;

            case 5:
                resultado = num3 / 1;
                break;

            default:
                resultado = 0;
                break;

        }

        JOptionPane.showMessageDialog(null, "Resultado da operação é " + resultado);

    }

}