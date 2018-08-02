// //测试代码
// const assert=require('assert');//测试断言
// const ganache=require('ganache-cli');//
// const Web3 = require('web3');//部署到网络
// const web3 = new Web3(ganache.provider());
// const {interface,bytecode}=require('../compile');
// describe('测试智能合约',()=>{
//     //it代表每一个测试用力
//     // it('测试web3的版本',()=>{
//     //        console.log(web3.version)
//     //      })
//     // it('测试web3的网络',()=>{
//     //      console.log(web3.currentProvider)
//     // })
//     // it('测试web3的API',async()=>{
//     //     //转化成16进制
//     //     // var str = "abcABC";
//     //     // var obj = {abc: 'ABC'};
//     //     // var hstr = web3.utils.toHex(str);
//     //     // var hobj = web3.utils.toHex(obj);
//     //     // console.log(hstr);
//     //     // console.log(hobj);
//     //     //美国信息交换标准码转换成中文()
//     //     // var str = web3.utils.toAscii("0x657468657265756d000000000000000000000000000000000000000000000000");
//     //     // console.log(str);
//     //     //美国信息交换标准码转换成ascii码()
//     //     // var str = web3.utils.fromAscii('ethereum');
//     //     // console.log(str); // "0x657468657265756d"
//     //     // var str2 = web3.utils.fromAscii('ethereum', 32);
//     //     // console.log(str2); //
//     //
//     //
//     // });
//     // it('测试web3的账户信息', async ()=> {
//     //     // let accounts= await web3.eth.getAccounts();
//     //     //  console.log(accounts)
//     //     //测试账户余额(这个方法并不好用，要使用Es6的方法为佳)
//     //     // web3.eth.getBalance('0x42Fe18A4d265707B092cD35a24169572c3E2214b').then(
//     //     //     (balance)=>{
//     //     //         console.log(balance)
//     //     //     }
//     //     // )
//     // });
//     //
//     // it('测试部署智能合约',async()=>{
//     //     const accounts=await web3.eth.getAccounts();
//     //       //为什么要添加一个new 解决（后面的Contract 构造函数需要new出来）？
//     //     const result = await new web3.eth.Contract(JSON.parse(interface))
//     //         .deploy({
//     //             data:bytecode,
//     //             arguments:['abc']
//     //         }).send({
//     //             from:accounts[0],
//     //             gas:1000000
//     //         });
//     //     console.log('address'+result.options.address)
//     // });
// })