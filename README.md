# Plant Shop Truffle Box

This box has all you need to get start using the Plant Shop at RSK Network. It includes network configs for Mainnet and Testnet.

## Installation

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```javascript
    truffle unbox plant-shop
    ```

3. Run the development console. 
You can start a truffle console for any RSK network
    ```javascript
    # Console for Mainnet
    truffle console --network mainnet

    # Console forn Testnet
    truffle console --network testnet
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    
    # Migrate for Mainnet
    migrate --network mainnet

    # Migrate for Testnet
    migrate --network testnet

    ```

5. Run the `liteserver` development server (outside the development console) for front-end hot reloading. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run dev
    ```
## FAQ

* __How do I use this with the EthereumJS TestRPC?__

    It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 16 of `src/js/app.js`.
