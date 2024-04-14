import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js"
let totalbalance:number = 10000
const pincode:number = 1234

let pinintered = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pincode",
            type:"number",
        }
    ]
)
if (pinintered.pin == pincode){

    let atmQuestions = await inquirer.prompt([
    {
        name:"accountType",
        message:"select your account type",
        type:"list",
        choices:[
            "current account",
            "saving account",
            ]
    },
    {
        name:"transMethod",
        message:"select your transaction method",
        type:"list",
        choices:[
            "Cash Withdraw",
            "Fast Cash"
            ]

    }
]);
if(atmQuestions.transMethod == "cash withdraw")
{
    let cashwithdrawaccount = await inquirer.prompt([
        {
            name:"withdraw",
            message:"Enter the amount you want to withdreaw",
            type:"number",
            }
]);
if(totalbalance >= cashwithdrawaccount.withdraw)
    {
    totalbalance = cashwithdrawaccount.cashwithdraw
    console.log(`your total balance is :${totalbalance}`)
    }
    else{
        console.log("Insufficient Balance")
    }
    }
    else {
    let fastCashAmount = await inquirer.prompt(
    [
        {
            name:"fastcash",
            message:"Select the amount you want to with draw",
            type:"list",
            choices:[
                "1000",
                "3000",
                "5000"
            ]
        }
    ]
)
if (totalbalance >= fastCashAmount.fastcash){
    totalbalance -= fastCashAmount.fastcash
    console.log(`your total balance ${totalbalance}`)
    }
    else{
        console.log("Insufficient")
        }
    }
}
