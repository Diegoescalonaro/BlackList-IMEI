
const Web3 = require('web3');
// ATENCION: web3.version.api -> 0.20.6   ! ! ! ! 

// Para instanciar el contrato (blacklist): a partir del ABI y dirreccion de contrato
// varriable  blacklistABI = ... importado en el js blacklist_abi 

// --------- Conectando al nodo en localhost con genochi-cli: 127.0.0.1:7545 ----------
//
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var blacklistContract = web3.eth.contract(blacklistABI);
// Contract address a probar en Testnet Local: 0xd0d0ea3aa15bec696c3fcead5b80adef1c3bf8f7
var blacklist = blacklistContract.at("0x45debb43e071a71fad46cdf6ce1f670e1c451f51"); // en local cambia cada vez que ejecutemos genochi-cli
console.log(blacklist);


web3.eth.defaultAccount = sessionStorage.getItem("Address");
if (web3.eth.defaultAccount==""){
  web3.eth.defaultAccount = web3.eth.accounts[0];
}
console.log("Default usser account:" +web3.eth.defaultAccount);
console.log("Balance account:" +web3.eth.getBalance(web3.eth.defaultAccount))
//

// --------- Conectando al nodo GETH en testnet RINKEBY -------------------------------
/* 10.95.116.171 (gestión) ----proxy-----> 195.235.92.200 (pública) 

var web3 = new Web3(new Web3.providers.HttpProvider("http://195.235.92.200:8545"));

var blacklistContract = web3.eth.contract(blacklistABI);
// Contract address a probar en Testnet Rinkeby: 0x30adc959e7b9077cc062ab7cb2a76d27e557de7a
var blacklist = blacklistContract.at("0x36c2c2e8bff1c24ddb1f03a0e61d12f40d870e77");
console.log(blacklist);
//web3.eth.defaultAccount = web3.eth.accounts[0];
web3.eth.defaultAccount = "0xae060f062f0f21b7f528085138171b2a9b5bea4a";
console.log("Default usser account:" +web3.eth.defaultAccount);
console.log("Balance account:" +web3.eth.getBalance(web3.eth.defaultAccount));


// ---------- Conectando al nodo en infura --------------------------------------------
// Contract address a probar en Testnet local: 
/*
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/A2XhSrcS32AkPt1lepuy:8545"));
web3.eth.defaultAccount = "YOUR_ADDRESS_REMIX....";


/* ---------- Si cambias de cuenta, se cambia a la que se usa ---------------

  //var accountInterval = setInterval(function() {
          // Comprobar si la cuenta ha sido cambiada
          //if (web3.eth.accounts[0] !== userAccount) {
            //userAccount = web3.eth.accounts[0];
            // Llamar la función que va a updatear la UI with de la nueva cuenta
          //}
        //}, 100);
        // Empieza aquí
  

    ---------------------- */


    // MINAR Y DEPLOY CONTRACT
    /*var blacklist = blacklistContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b5033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061084a806100616000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806310e91ad91461007d57806343eeff10146101315780635085187c146101ae5780635729c1441461025b5780639870d7fe146102c8578063e927fc5c1461030b575b600080fd5b34801561008957600080fd5b506100a860048036038101908080359060200190929190505050610362565b6040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156100f45780820151818401526020810190506100d9565b50505050905090810190601f1680156101215780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561013d57600080fd5b506101ac60048036038101908080359060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190505050610433565b005b3480156101ba57600080fd5b506101d9600480360381019080803590602001909291905050506105e3565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561021f578082015181840152602081019050610204565b50505050905090810190601f16801561024c5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561026757600080fd5b50610286600480360381019080803590602001909291905050506106ac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102d457600080fd5b50610309600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106ea565b005b34801561031757600080fd5b50610320610753565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008181548110151561037157fe5b9060005260206000209060030201600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b5050505050908060020154905083565b60006001600060606040519081016040528087815260200186815260200185815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010190805190602001906104a6929190610779565b50604082015181600201555050039050606060405190810160405280858152602001848152602001838152506002600086815260200190815260200160002060008201518160000155602082015181600101908051906020019061050b929190610779565b50604082015181600201559050508360036000838152602001908152602001600020819055507fc7f5af43472f889175591f11e3eb206610b4bde36925d7a2506e6b762e06c9f28484846040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156105a1578082015181840152602081019050610586565b50505050905090810190601f1680156105ce5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a150505050565b6060600080600260008581526020019081526020016000209050806001018160020154818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561069b5780601f106106705761010080835404028352916020019161069b565b820191906000526020600020905b81548152906001019060200180831161067e57829003601f168201915b505050505091509250925050915091565b6001818154811015156106bb57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107ba57805160ff19168380011785556107e8565b828001600101855582156107e8579182015b828111156107e75782518255916020019190600101906107cc565b5b5090506107f591906107f9565b5090565b61081b91905b808211156108175760008160009055506001016107ff565b5090565b905600a165627a7a72305820697e43f1611723d5b5b32e1bc3c1d8a041a259dbf3a222a2e8079096e596c0640029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
  */
  
  
  // Para saber en que test network estoy  
  web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    case "4":
      console.log('This is the Rinkeby test network.')
      break
    case "42":
      console.log('This is the Kovan test network.')
      break
    default:
      console.log('This is an unknown network.')
  }
})
  
  /* ------- FUNCIONES PARA INVOCAR METODOS DEL CONTRATO (CALL y SEND)    -------- */

  	function blockIMEI() {
        var IMEIinput = document.getElementById("IMEIinput").value;
        var dateinput = document.getElementById("dateinput").value;
        var operatorinput = document.getElementById("operatorinput").value;

        if(IMEIinput == "" | dateinput == "" | operatorinput == ""){
          alert("Por favor, rellene los campos obligatorios.");
          return;
        }

        var transaction = blacklist.blockIMEI(IMEIinput, dateinput, operatorinput, true, {gas: 300000}); // Si no pongo gas, da error de gas
        

        console.log("Imei "+IMEIinput+" bloqueado. Transaccion:"+transaction); 
        document.getElementById("blockinfo").innerHTML = "El IMEI "+IMEIinput+" ha sido bloqueado. <a href='https://etherscan.io/tx/"+transaction+"'>Ver transaccion </a> "; // Enlace a etherscan
        return;
        //blacklist.blockIMEI.sendTransaction(1234,"date11",1234);
        //return; 
        // send ya que crea una transaccion...
    }
    function unblockIMEI(){
        var IMEIinput = document.getElementById("IMEIinput").value;
        var dateinput = document.getElementById("dateinput").value;
        var operatorinput = document.getElementById("operatorinput").value;

        if(IMEIinput == "" | dateinput == "" | operatorinput == ""){
          alert("Por favor, rellene los campos obligatorios.");
          return;
        }

        var transaction = blacklist.blockIMEI(IMEIinput, dateinput, operatorinput, false, {gas: 300000}); // Si no pongo gas, da error de gas
        console.log("Imei "+IMEIinput+" desbloqueado. Transaccion:"+transaction);
        document.getElementById("blockinfo").innerHTML = "El IMEI "+IMEIinput+" ha sido desbloqueado. <a href='https://etherscan.io/tx/"+transaction+"'>Ver transaccion </a> "; // Enlace a etherscan
        return;
    }


    function addOperator(){
        var addOperatorInput = document.getElementById("addOperatorInput").value;
        if(addOperatorInput !== ""){
            var transaction = blacklist.addOperator(addOperatorInput);
            document.getElementById("addOperatorInfo").innerHTML ="Se ha añadido el operador con dirección: ["+addOperatorInput+ "] <a href='https://etherscan.io/tx/"+transaction+"'> Ver transaccion </a> ";
            return;
        }else
            document.getElementById("addOperatorInfo").innerHTML = "Introduzca un operador a añadir";
            console.log("Introduzca un operador valido");
        //blacklist.addOperator.sendTransaction(0x5091acea97da17e01a0ea6cc98e270e618a68953);      
    }


    // si en el smart contract pongo 2 returns, error -> Error: new BigNumber() not a base 16 number
    // New: tengo 2 returns y no me da error BigNumber  
    function consultarIMEI(){ 
      var IMEIinput = document.getElementById("IMEIinput3").value;

      if(IMEIinput==""){
        alert("Introduzca un IMEI");
        return;
      }
      
      var date = blacklist.consultarIMEI.call(IMEIinput)[0];
      if(date == ""){
        document.getElementById("estadoIMEI").innerHTML = "IMEI no encontrado.";
        return;
      }

      var operator = blacklist.consultarIMEI(IMEIinput)[1];     // 2 formas de invocar metodo call... comprobar cual es mejor
      var blocked = blacklist.consultarIMEI(IMEIinput)[2];
      console.log("Operador bloqueo:" +operator)
      console.log("Fecha de bloqueo:" +date);


      document.getElementById("estadoIMEI").innerHTML = "";
      document.getElementById("estadoIMEI").innerHTML += "<b>Imei: </b>"+IMEIinput+"<br>";
      document.getElementById("estadoIMEI").innerHTML += "<b>Fecha: </b>"+date+"<br>";
      document.getElementById("estadoIMEI").innerHTML += "<b>Operador: </b>"+operator+"<br>";

      if (blocked){
        console.log("Estado: bloqueado");
        document.getElementById("estadoIMEI").innerHTML += "<br> <b> - BLOQUEADO - </b> <br><br>";

      }else{
        console.log("Estado: desbloqueado");
        document.getElementById("estadoIMEI").innerHTML += "<br> <b> - DESBLOQUEADO - </b> <br><br>";
      }

      return;  
    }

    function historicoIMEI(){
      var length = blacklist.getBlacklistArrayLength();
      
      document.getElementById("historico").innerHTML = "<br>"; // Borro lo que habia antes, para rellenar
      // se podria hacer una tabla : <table> <tr> <th> IMEI </th> <th> Fecha </th> <th> Operador </th> <th> Bloqueado </th> </tr>
      var i;
      for ( i = 0; i < length; i++){
        console.log("Posicion en el array Nº "+i+": "+ blacklist.getBlackListArrayElement2(i));
            var element = blacklist.getBlackListArrayElement2(i);

            document.getElementById("historico").innerHTML += "<b> - Imei: </b>"+element[0]+ " [_] ";
            document.getElementById("historico").innerHTML += "<b> - Fecha: </b>"+element[1]+ "  [_] ";
            document.getElementById("historico").innerHTML += "<b> - Operador: </b>"+element[2]+ " [_] ";
            if(element[3]){
              document.getElementById("historico").innerHTML += "<b> => [BLOQUEADO] <br><br>";
            }else{
              document.getElementById("historico").innerHTML += "<b> => [DESBLOQUEADO] <br><br>";
            }
      }
      return;
    }

    function historicoIMEIfiltrado(){
      var length = blacklist.getBlacklistArrayLength();
      var IMEIinputfiltro = document.getElementById("IMEIinputfiltro").value;

      document.getElementById("historico").innerHTML = "<br>"; // Borro lo que habia antes, para rellenar

      var i;
      for (i = 0; i < length; i++){
        if (IMEIinputfiltro == blacklist.getBlackListArrayElement2(i)[0].c[0]){
            console.log("Posicion en el array Nº "+i+": "+blacklist.getBlackListArrayElement2(i));
            //document.getElementById("historico").innerHTML += blacklist.getBlackListArrayElement2(i) +"<br>";
            var element = blacklist.getBlackListArrayElement2(i);
            document.getElementById("historico").innerHTML += "<b> - Imei: </b>"+element[0]+ "  [_] ";
            document.getElementById("historico").innerHTML += "<b> - Fecha: </b>"+element[1]+ "  [_] ";
            document.getElementById("historico").innerHTML += "<b> - Operador: </b>"+element[2]+ "  [_] ";
            if(element[3]){
              document.getElementById("historico").innerHTML += "<b> => [BLOQUEADO]  </b> <br><br>";
            }else{
              document.getElementById("historico").innerHTML += "<b> => [DESBLOQUEADO] </b> <br><br>";
            }
        }
      }
      return;
    }

    function historicoOperadores(){
      var length = blacklist.getAllowedOperatorArrayLength();

      document.getElementById("historicoOp").innerHTML = "";

      var i;
      for ( i = 0; i < length; i++){
        var element = blacklist.getAllowedOperatorArrayElement(i);
        console.log("Posicion en el array Nº "+i+": "+element); 
        document.getElementById("historicoOp").innerHTML += "<b> > Operador "+i+": </b>"+element+"<br>";
                        
      }
      return;
            
            
      }

      
      
      // PARA GESTIONAR EL LOGIN 
      
      //window.onload = loadAccount;

      

      

      function loadAccount(){


      }


       

        function login(){

          // Para que todo vuelva a normal, lo suyo seria refrescar pero... 
          document.getElementById("botonAdmin").disabled=true;
          document.getElementById("botonAdmin").style.backgroundColor = "grey";
          document.getElementById("botonOperator").disabled= true;
          document.getElementById("botonOperator").style.backgroundColor = "grey";
          document.getElementById("botonUser").disabled= true;
          document.getElementById("botonUser").style.backgroundColor = "grey";
          
          

          addressInput = document.getElementById("addressInput").value;

          if(addressInput !== ""){
             console.log("Va a logearse como: "+addressInput);
             web3.eth.defaultAccount = ""+addressInput+"";
             sessionStorage.setItem("Address",addressInput);
             console.log("En storage el usuario es:"+sessionStorage.getItem("Address"));
          
          }

          document.getElementById("usuarioLogged").innerHTML ="Usuario en uso: "+web3.eth.defaultAccount;


          // Si el usuario es ADMIN
          if (web3.eth.defaultAccount == blacklist.creatorAddress()){
            document.getElementById("botonAdmin").disabled=false;
            document.getElementById("botonAdmin").style.backgroundColor = "black";
            document.getElementById("usuarioLogged").innerHTML +="<br> <h2>(ADMIN)</h2>";
          }

          // Si el usuario es Operador
          else if(blacklist.isOperator()){  //Permito operador
            document.getElementById("botonOperator").disabled= false;
            document.getElementById("botonOperator").style.backgroundColor = "black";
            document.getElementById("usuarioLogged").innerHTML +="<br> <h2>(Operator)</h2>";
          }

          else{
            document.getElementById("botonUser").disabled= false;
            document.getElementById("botonUser").style.backgroundColor = "black";
            document.getElementById("usuarioLogged").innerHTML +="<br> <h2> (User) </h2>";


          }



          // if ( web3.eth.defaultAccount == blacklist.creatorAddress) permito admin 
          //$('#botonAdmin').attr("disabled", true);
          //document.getElementById("botonAdmin").disabled = true;
          //document.getElementById("botonOperator").disabled = true;

          return;

        }




            
                /*
                function deleteIMEI(){"
      
      var IMEIinput2 = document.getElementById("IMEIinput2").value;
      var transaction = blacklist.deleteIMEI(IMEIinput2, );
      console.log("IMEI "+IMEIinput2+" borrado de la lista (desbloqueado). Transaccion:"+transaction);

      return;
    }
    */
