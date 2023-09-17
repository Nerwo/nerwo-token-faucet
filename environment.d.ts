declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_ALCHEMY_API_KEY: string;
            NEXT_PUBLIC_NERWO_TOKEN_ADDRESS: Address;
            NEXT_PUBLIC_NERWO_TOKEN_SYMBOL: string;
            NEXT_PUBLIC_NERWO_TOKEN_DECIMALS: number;
        }
    }
}

export { };
