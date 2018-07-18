/* Smart contract para el caso de uso de BlackList de IMEIs */

pragma solidity ^0.4.24;
//pragma experimental ABIEncoderV2;

contract BlackList{
    
    struct BlackListElement{
        uint imei;
        string date;
        uint operator;
        bool blocked;
    }
    
    // - Arrays -
    BlackListElement[] public blackListArray; // Array de IMEIs bloqueados/desbloqueados con info
    address[] private allowedOperatorArray; // Array de Operadores permitidos
    
    // - Mappings -
    mapping (uint => BlackListElement) private IMEIToBlackListElement;
    mapping (uint => uint) private IMEIToArrayIDs;  // Relaciona 
    //mapping(address => uint) private AddressToOperator;
    
    // - Addresses -
    address public creatorAddress;
   //address adminAddress = ""; // Direccion si quisiera dar derechos de admin
    
    // - Events -
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
    
    
    /* Solo el administrador podrá añadir operadores a la lista de operadores permitidos: allowedOperatorArray*/
    function addOperator(address _operator) public{
        require(isAdmin()); // Solo admin
        allowedOperatorArray.push(_operator);
    }
    
    
    /* Funcion para la comprobacion de que el usuario es OPERADOR */
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
    
    /* Funcion para la comprobacion de que el usuario es ADMIN */
    function isAdmin() public view returns(bool){
        if (msg.sender == creatorAddress)
            return true;
        else
            return false;
    }
    
    /* Cualquier usuario podrá consultar si un IMEI se encuentra bloqueado, en qué fecha y por qué operador    */
    function consultarIMEI(uint _imei) public view returns (string date , uint operator, bool blocked){
        BlackListElement memory ble = IMEIToBlackListElement[_imei];
        // v1: cambiar para que solo sea el estado actual ( ultimo estado en el array de blackListArray)
        // v2: sin cambiar nada, cuando hago consulta me muestra el ultimo directamente, ya que el IMEIToBlackListElement apunta al ultimo :)
        return (ble.date , ble.operator, ble.blocked);
    }

   /* Funcion para implementar bucle for en el JS y obtener todo el historico de IMEIs */
    function getBlackListArrayElement2(uint position) public view returns(uint imei, string date, uint operator, bool blocked){
       return (blackListArray[position].imei, blackListArray[position].date, blackListArray[position].operator, blackListArray[position].blocked );
    }
    /* Funcion para implementar bucle for en el JS y obtener todo el historico de OPERADORES validados */
    function getAllowedOperatorArrayElement(uint position) public view returns(address){
        return (allowedOperatorArray[position]);
    }
    
    // -------------------------------------------------------------------------
    /* Length array operadores para depurar */
    function getAllowedOperatorArrayLength() public view returns(uint){
        return allowedOperatorArray.length;
    }
    /* Length array blacklist para depurar */
    function getBlacklistArrayLength() public view returns(uint){
        return blackListArray.length;
    }
    // -------------------------------------------------------------------------
        
        
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
    
}