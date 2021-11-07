# Eth-ToDo-List

A simple to-do list built using **Solidity** and **ReactJS**, based on the ```Web3``` Protocol


## Setup
A step-by-step guide to run the project is given below.
1. Install truffle
```
npm i truffle -g
```

2. Install Ganache from [Ganache|Truffle Suite](https://www.trufflesuite.com/ganache)



3. Install the Metamask Chrome Extension and set up an account within the Ganache Private Network.<br/>For details, read [Connect Metamask to localhost](https://asifwaquar.com/connect-metamask-to-localhost)


4. Clone the repository
```
git clone https://github.com/kailash360/Eth-ToDo-List
cd Eth-ToDo-List
```

5. Install ReactJS dependencies
```
npm install
```


6. Move to the ```src``` directory and compile the smart contracts
```
cd src
truffle compile
```


7. Deploy the smart contract on the Ganache Private network
```
truffle migrate --reset
```


8. Start the React app and use it
```
npm start
```

