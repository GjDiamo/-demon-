//部署智能合约到真实的rankeby网络；
const Web3 = require('web3');//部署到网络
const {interface,bytecode}=require('./compile');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "shadow note swear barely boss ensure exercise float inmate lesson sock under"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/36a3fbc090bd447b9b9d75c4748f4171");
const web3 = new Web3(provider);
deploy= async()=>{
    //首先先获得一个account;
    const accounts = await web3.eth.getAccounts();
    const money = await web3.eth.getBalance(accounts[0]);
    console.log(web3.utils.fromWei(money,'ether'))
    console.log(accounts);
        //为什么要添加一个new 解决（将智能合约Contract创造出来）
        //如果看到一个变量由大写字母开头，则需要new出来,并且要塞入ABI的接口。
        const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({
                data: bytecode,
                //这下面的'abc'会变成为智能合约里面的message
                arguments: ['abc']
            }).send({
                //这里的send 即为将信息发送到区块链上去；来自哪个账户，愿意花多少汽油；
                from: accounts[0],
                gas:'3000000'
            });
         console.log('address'+result.options.address)
};
deploy();
