/* Cliente */
function salvarCliente(){
    
    if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont)+1;
    }else {
      localStorage.cont = 1;
    }
    
      let nome = document.getElementById("client_name").value;
          let cpf = document.getElementById("client_cpf").value;
          let endereco = document.getElementById("client_endereco").value;
          let email = document.getElementById("client_email").value;
          let telefone = document.getElementById("client_tel").value;
  
  
      localStorage.setItem("idCliente_"+localStorage.cont, nome);
      localStorage.setItem("nomeCliente_"+localStorage.cont, nome);
      localStorage.setItem("cpfCliente_"+localStorage.cont, cpf);
      localStorage.setItem("enderecoCliente_"+localStorage.cont, endereco);
      localStorage.setItem("emailCliente_"+localStorage.cont, email);
      localStorage.setItem("telefoneCliente_"+localStorage.cont, telefone);
      
    alert("Cliente Cadastrado no Sistema!")
  
  }
  
  function salvarProduto(){
      
    if (localStorage.produto) {
      localStorage.produto = Number(localStorage.produto)+1;
    }else {
      localStorage.produto = 1;
    }
    
      let nomeProduto = document.getElementById("product_name").value;
        let fornecedor = document.getElementById("product_fornecedor").value;
        let preco = document.getElementById("product_price").value;
      let idProduto = localStorage.produto;
          
  
      localStorage.setItem("idProduto_"+localStorage.produto, idProduto);
      localStorage.setItem("nomeProduto_"+localStorage.produto, nomeProduto);
      localStorage.setItem("fornecedorProduto_"+localStorage.produto, fornecedor);
      localStorage.setItem("precoProduto_"+localStorage.produto, preco);
      
      
    alert("Produto Cadastrado no Sistema!")
  
  }
  