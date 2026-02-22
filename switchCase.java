import javax.swing.JOptionPane;

public class switchCase {
    public static void main(String[] args) {
        // "declaração de variáveis"
        int placa; // variável para armazenamento de placa

        // entrada de dados com conversão de tipos juntas;
        placa = Integer.parseInt(JOptionPane.showInputDialog("Informe o número da placa"));

        // Processamento dos dados
        switch (placa) {

            case 1:
                JOptionPane.showMessageDialog(null, "Placa Final 1 Pagamento é até 30/04");
                break;

            case 2:
                JOptionPane.showMessageDialog(null, "Placa Final 2 Pagamento é até 31/05");
                break;

            case 3:
                JOptionPane.showMessageDialog(null, "Placa Final 3 Pagamento é até 30/06");
                break;

            case 4:
                JOptionPane.showMessageDialog(null, "Placa Final 4 Pagamento é até 31/07");
                break;

            case 5:
                JOptionPane.showMessageDialog(null, "Sua Placa Final é 5. O Pagamento é até 30/08");
                break;

            case 6:
                JOptionPane.showMessageDialog(null, "Sua Placa Final é 6. O Pagamento é até 31/09");
                break;

            case 7:
                JOptionPane.showMessageDialog(null, "Sua Placa Final é 7. O Pagamento é até 30/10");
                break;

            case 8:
                JOptionPane.showMessageDialog(null, "Sua Placa Final é 8. O Pagamento é até 31/11");
                break;

            case 9:
                JOptionPane.showMessageDialog(null, "Sua Placa Final é 9 ou 0. O Pagamento é até 31/12 ");
                break;

            default:

                JOptionPane.showMessageDialog(null, " O valor digitado está incorreto");

                break;

        }

    }

}