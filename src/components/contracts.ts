export const nerwoTokenConfig = {
  address: process.env.NEXT_PUBLIC_NERWO_TOKEN_ADDRESS,
  abi: [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
} as const;
