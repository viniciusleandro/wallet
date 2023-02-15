import { Transaction, Wallet } from "./types"

const myWallet: Wallet = {
    Enable: true,
    transactions: []
}

function addTransaction(transaction: Transaction){
    myWallet.transactions.push(transaction)
}

addTransaction({description: "salario", type:"C", value: 13890})
addTransaction({description:"lanche", type:"D", value: 200})
addTransaction({description:"ps5", type:"D", value:4500})

console.log(myWallet)