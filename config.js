const contractABI = require("./build/contracts/InventoryPayment.json");
const Web3 = require("web3");

const web3 = new Web3(process.env.WEB3_PROVIDER || "http://localhost:9545");

module.exports = {
    contractABI,
    web3
};
