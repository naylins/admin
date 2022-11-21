const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível listar os clientes.")
      
    })
}

const criarCliente = (nome,email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        })
        .then(resposta =>{
            if(resposta.ok){
                return resposta.body
            }
            throw new Error("Não foi possível criar um cliente.")            
    })
}

const removerCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',    
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error("Não foi possível deletar o cliente.")
        }
    })
}

const detalharCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível detalhar o cliente.")
        
    })
}

const atualizarCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        }) 
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error("Não foi possível atualizar o cliente.")
    })
}

export const clienteService = {
    listaClientes, 
    criarCliente,
    removerCliente,
    detalharCliente,
    atualizarCliente
}