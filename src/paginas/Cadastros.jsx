import "./Cadastros.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Cadastros() {
    const [cliente, setCliente] = useState(null);
    const [clientes, setClientes] = useState([]);

    function getClientes() {
        axios.get("http://localhost:5229/clientes")
            .then((resposta) => {
                setClientes(resposta.data);
            });
    }

    useEffect(getClientes, []);

    function novoCliente() {
        setCliente({
            nome: "",
            cpf: "",
            telefone: "",
            email: ""
        });
    }

    function cancelar() {
        setCliente(null);
    }

    function refresh() {
        cancelar();
        getClientes();
    }

    function onChangeCliente(campo, valor, id) {
        cliente[campo] = valor;
        setCliente({
            ...cliente,
        });
    }

    function salvarCliente() {
        if (cliente.id) {
            axios.put("http://localhost:5229/clientes/" + cliente.id, cliente)
                .then(() => {
                    refresh();
                });
        } else {
            axios.post("http://localhost:5229/clientes", cliente)
                .then(() => {
                    refresh();
                });
        }
    }

    function getFormulario() {
        return (
            <form>
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" />
                <br />
                <label for="pizza">Pizza</label>
                <select name="pizza" id="pizza">
                    <option value="calabresa">Calabresa</option>
                    <option value="marguerita">Marguerita</option>
                    <option value="mussarela">3 queijos</option>
                </select>
                <br />
                <br />
                <p>Observações</p>
                <textarea name="obs" id="" cols="30" rows="10"></textarea>

                <button>Salvar</button>
            </form>
        );
    }

    function excluirCliente(id) {
        axios.delete("http://localhost:5229/clientes/" + id).then(() => {
            getClientes();
        });
    }

    function editarCliente(cliente) {
        setCliente(cliente);
    }

    function getLinha(cliente) {
        return (
            <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>
                <td>
                    <button onClick={() => excluirCliente(cliente.id)}>Excluir</button>
                    <button onClick={() => editarCliente(cliente)}>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        return clientes.map((cliente) => getLinha(cliente));
    }

    function getTabela() {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Pizza</th>
                    <th>Observações</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }

    function getConteudo() {
        if (cliente == null) {
            return (
                <>
                    <button onClick={novoCliente}>Novo</button>
                    {getTabela()}
                </>
            );
        } else {
            return getFormulario();
        }
    }

    return (
        <div className="background">
            <h1>Cadastro de clientes</h1>
            {getConteudo()}
        </div>
    );
}

export default Cadastros;
