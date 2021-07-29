import pg from "pg";

// postgresqlの設定
const pool = new pg.Pool({
  database: "whale-db",
  user: "whale",
  password: "root",
  host: "localhost",
  port: 5432
});

export default pool;