import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    
    return (
        <div className="container">
            <Head>
                <title>Biblioteca On-line</title>
            </Head>

            <main>
                <h1>Biblioteca On-line</h1>
                <div>
                    <Link href="/details">
                        <a >Pagina de Detalhes</a>
                    </Link>
                    {"    /    "}
                    <Link href="/editor">
                        <a >Pagina de Edição de Livro</a>
                    </Link>
                </div>
                

                <Table striped hover size='md'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Autor</th>
                            <th>Isbn</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>O Chamado do cuco</td>
                            <td>J K Rowlling</td>
                            <td>135.457.8.6</td>
                            <td>
                                <Button variant='outline-info'>Editar</Button>{' '}
                                <Button variant='outline-danger'>Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>O Bicho da Seda</td>
                            <td>J K Rowlling</td>
                            <td>135.457.8.6</td>
                            <td>
                                <Button variant='outline-info'>Editar</Button>{' '}
                                <Button variant='outline-danger'>Excluir</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Vocação para o Mau</td>
                            <td>J K Rowlling</td>
                            <td>135.457.8.6</td>
                            <td>
                                <Button variant='outline-info'>Editar</Button>{' '}
                                <Button variant='outline-danger'>Excluir</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>


                
            </main>
        </div>
    )
}
