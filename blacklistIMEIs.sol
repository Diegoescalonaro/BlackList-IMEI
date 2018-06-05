pragma solidity ^0.4.24;
//pragma experimental ABIEncoderV2;

contract BlackList{
    
    struct BlackListElement{
        uint imei;
        string date;
        uint operator;
        bool blocked;
    }
    
    // Arrays
    BlackListElement[] public blackListArray; // Array de IMEIs bloqueados con detalle
    address[] private allowedOperatorArray; // Array de operadores permitidos
    
    // Mappings
    mapping (uint => BlackListElement) private IMEIToBlackListElement;
    mapping (uint => uint) private IMEIToArrayIDs;  // Relaciona 
    //mapping (uint => uint) public TransactionToArrayID; // Relaciona cada transaccion con la posicion de blackListArray
    
    //mapping(address => uint) private AddressToOperator;
    
    // Addresses
    address public creatorAddress;
   // address adminAddress = ""; // Direccion si quisiera dar derechos de admin
    
    // Events
    event blockIMEIEvent(uint imei, string date, uint operator, bool blocked);
    event unblockIMEIEvent(uint imei, string date, uint operator, bool blocked);
    
    
    /* Constructor del contrato */
    constructor() public{
        creatorAddress = msg.sender;
    }
    
    
    /* Un operador que este en la lista de operadores permitidos puede bloquear un IMEI, en cuyo caso entrara a formar parte
    del array: blackListArray */
    function blockIMEI(uint _imei, string _date, uint _operator, bool _blocked) public{
        require(isOperator());
        uint id = blackListArray.push(BlackListElement(_imei, _date, _operator, _blocked)) -1;
        IMEIToBlackListElement[_imei] = BlackListElement(_imei, _date, _operator, _blocked);
        // Aqui habria que asignar el mapping, relacionando la posicion en el array con el IMEI
        IMEIToArrayIDs[id] = _imei;
        
        emit blockIMEIEvent(_imei, _date, _operator, _blocked); // event
    }
    
    /* Un operador que este en la lista de operadores permitidos puede desbloquear un IMEI, en cuyo caso se guardara el nuevo estado
    de "desbloqueo" en el array: blackListArray
    function unblockIMEI(uint _imei, string _date, uint _operator) public{
        require(isOperator());
        uint id = blackListArray.push(BlackListElement(_imei, _date, _operator, false)) -1;
        IMEIToBlackListElement[_imei] = BlackListElement(_imei,_date,_operator,false);
        IMEIToArrayID[id] = _imei;
        emit blockIMEIEvent(_imei,_date,_operator,false); // event
        
        
    }
    */
    
    /* Solo el administrador podrá añadir operadores a la lista de operadores permitidos: allowedOperatorArray*/
    function addOperator(address _operator) public{
        require(msg.sender == creatorAddress); // Solo admin
        allowedOperatorArray.push(_operator);
    }
    
    /* Funcion para la comprobacion de que un usuario es operador */
    function isOperator() public view returns(bool){
        bool result = false;
        if ( allowedOperatorArray.length == 0)
            return;
        for (uint i = 0; i < allowedOperatorArray.length; i++){
            if(msg.sender == allowedOperatorArray[i]){
                result = true;
                break;
            }else{
                result = false;
            }
        }
        return result;
    }
    
    /* Cualquier usuario podrá consultar si un IMEI se encuentra bloqueado, en qué fecha y por qué operador        */
    function consultarIMEI(uint _imei) public view returns (string date , uint operator, bool blocked){
        BlackListElement memory ble = IMEIToBlackListElement[_imei];
        // v1: cambiar para que solo sea el estado actual ( ultimo estado en el array de blackListArray)
        // v2: sin cambiar nada, cuando hago consulta me muestra el ultimo directamente, ya que el IMEIToBlackListElement apunta al ultimo :)
        return (ble.date , ble.operator, ble.blocked);
    }
    
    /*
    //uint[] public operatorsArray;
    //bool[] public statesArray;
     
    function historicoIMEI(uint _imei) public view returns(uint, bool){
       
        bool[]  memory statesArray = new bool[](10);
        uint[] memory operatorsArray = new uint[](10);
    
        for(uint i = 0; i < blackListArray.length; i++){
            if(_imei == IMEIToArrayIDs[i]){
                
                //operatorsArray.push(blackListArray[i].date);
                // añado al array
            }else{
                break;
            }
        } 
        
        // cuando recorro todo el array, devuelvo lo que he metido en los arrays (date y uint...)
    }
    */
    
    /* SOLO PERMITIDO EN pragma experimental
    function getBlackListArray() public view returns(BlackListElement[]){
       return blackListArray;
    }
    */
    /* SOLO PERMITIDO EN pragma experimental
    function getBlackListArrayElement(uint position) public view returns(BlackListElement){
       return blackListArray[position];
    }
    */
   
    function getBlackListArrayElement2(uint position) public view returns(uint imei, string date, uint operator, bool blocked){
       return (blackListArray[position].imei, blackListArray[position].date, blackListArray[position].operator, blackListArray[position].blocked );
    }
    
    function getAllowedOperatorArrayElement(uint position) public view returns(address){
        return (allowedOperatorArray[position]);
        
    }
    
    function getAllowedOperatorArrayLength() public view returns(uint){
        return allowedOperatorArray.length;
    }
    
    function getBlacklistArrayLength() public view returns(uint){
        return blackListArray.length;
    }
    

    
        
    /* Para poder borrar del array blackListArray, necesito saber el index(posicion) donde esta el elemento a borrar
     por ello, lo mas razonable es hacer un mapping del IMEI a la posicion (IMEIToArrayID)
     Ademas, para rellenar los huecos que queden vacios, se puede implementar de alguna forma asignando la posicion a una variable
     para que cuando en el siguiente blockIMEI, el push se haga justo en la posicion libre
    
    function deleteIMEI(uint _imei) public{
        //require(isOperator());
        uint position = IMEIToArrayID[_imei];
        delete blackListArray[position];
        delete IMEIToBlackListElement[_imei];
        nextPosition = position;
        emit deleteIMEIEvent(_imei); // event
    }
    */
    
}