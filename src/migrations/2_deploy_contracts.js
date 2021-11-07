const TodoList = artifacts.require("../contracts/ToDo_List.sol");

module.exports = function(deployer) {
    deployer.deploy(TodoList);
};