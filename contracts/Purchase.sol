pragma solidity ^0.5.0; /* Solitidy version to compile */

contract Purchase {
    address[16] public buyers;

    function buy(uint plantId) public returns (uint) {
        require(plantId >= 0 && plantId <= 15);

        buyers[plantId] = msg.sender;
        return plantId;
    }

    // Retrieving the adopters
    function getBuyers() public view returns (address[16] memory) {
        return buyers;
    }

}