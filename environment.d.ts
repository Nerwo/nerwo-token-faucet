declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_ALCHEMY_APIKEY: string;
            NEXT_PUBLIC_NERWO_TOKEN_ADDRESS: Address;
            NEXT_PUBLIC_NERWO_TOKEN_DECIMALS: number;
        }
    }
}

export { };
