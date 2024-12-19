declare global {
    namespace NodeJS {

        interface ProcessEnv {
            PORT: number;
            DB_HOST: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_DATABASE: string;
        }

    }
}

export { };