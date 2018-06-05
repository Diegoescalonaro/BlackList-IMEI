var blacklistABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "imei",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "date",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "operator",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "blocked",
				"type": "bool"
			}
		],
		"name": "unblockIMEIEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "imei",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "date",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "operator",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "blocked",
				"type": "bool"
			}
		],
		"name": "blockIMEIEvent",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_operator",
				"type": "address"
			}
		],
		"name": "addOperator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_imei",
				"type": "uint256"
			},
			{
				"name": "_date",
				"type": "string"
			},
			{
				"name": "_operator",
				"type": "uint256"
			},
			{
				"name": "_blocked",
				"type": "bool"
			}
		],
		"name": "blockIMEI",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "blackListArray",
		"outputs": [
			{
				"name": "imei",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "operator",
				"type": "uint256"
			},
			{
				"name": "blocked",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_imei",
				"type": "uint256"
			}
		],
		"name": "consultarIMEI",
		"outputs": [
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "operator",
				"type": "uint256"
			},
			{
				"name": "blocked",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creatorAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "position",
				"type": "uint256"
			}
		],
		"name": "getAllowedOperatorArrayElement",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllowedOperatorArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "position",
				"type": "uint256"
			}
		],
		"name": "getBlackListArrayElement2",
		"outputs": [
			{
				"name": "imei",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "operator",
				"type": "uint256"
			},
			{
				"name": "blocked",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBlacklistArrayLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOperator",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]