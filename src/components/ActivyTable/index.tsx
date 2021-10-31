import { Container } from "./styles";

export function ActivyTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Currícular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>8.50</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Implementação de autenticação</td>
                        <td>9.00</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Física Quantica</td>
                        <td>10.00</td>
                        <td>05/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}