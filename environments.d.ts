declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PWD: string,
            MYSQL_HOST: string,
            MYSQL_DATABASE: string,
            MYSQL_USER: string,
            MYSQL_PASSWORD: string,
            MYSQL_ROOT_PASSWORD: string,
            NH1_USER: string,
            NH1_PASSWORD: string
        }
    }
}

export {}