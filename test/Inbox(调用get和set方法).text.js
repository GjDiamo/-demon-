// //测试代码
// const assert=require('assert');//测试断言
// const ganache=require('ganache-cli');//
// const Web3 = require('web3');//部署到网络
// const web3 = new Web3(ganache.provider());
// const {interface,bytecode}=require('../compile');
// // describe('测试智能合约',()=>{
// //     it('测试部署智能合约', async () => {
// //         const accounts = await web3.eth.getAccounts();
// //         //为什么要添加一个new 解决（将智能合约Contract创造出来）
// //         //如果看到一个变量由大写字母开头，则需要new出来,并且要塞入ABI的接口。
// //         const result = await new web3.eth.Contract(JSON.parse(interface))
// //             .deploy({
// //                 data: bytecode,
// //                 //这下面的'abc'会变成为智能合约里面的message
// //                 arguments: ['abc']
// //             }).send({
// //                 //这里的send 即为将信息发送到区块链上去；来自哪个账户，愿意花多少汽油；
// //                 from: accounts[0],
// //                 gas: 1000000
// //             });
// //         let call = await result.methods.getMessage().call();
// //         console.log(call);
// //         assert.equal(call, 'abc');
// //         await result.methods.setMessage('haha').send({
// //             from: accounts[0],
// //             gas: 100000
// //         });
// //         call = await result.methods.getMessage().call();
// //         console.log(call);
// //         assert.equal(call, 'haha');
// //     });
// // })