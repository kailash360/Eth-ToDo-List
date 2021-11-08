const BUILD = require('./build/contracts/ToDo_List.json')

module.exports = {

    //To return the aboi
    TRUFFLE_CONTRACT_ABI: BUILD.abi,

    //to return the address of teh contract on a particular networkk id(whch is the first child of the networks object)
    TRUFFLE_CONTRACT_ADDRESS: BUILD.networks[Object.keys(BUILD.networks)[0]].address

}