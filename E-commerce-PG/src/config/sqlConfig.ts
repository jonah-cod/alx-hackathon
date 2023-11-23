import pg from 'pg'

const pool = new pg.Pool({
    user: 'postgres' as string,
    password: 'postgresAdmin' as string,
    database: 'e_commerce' as string,
    host: 'localhost' as string,
    port: 5432
 })

export default pool