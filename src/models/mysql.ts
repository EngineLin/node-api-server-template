import mysql, {MysqlError, ConnectionConfig} from 'mysql'

const config: ConnectionConfig = {
    host: 'localhost',
    port: 3333,
    user: 'engine',
    password: '1234',
    database: 'test_db'
}
const connection = mysql.createConnection(config);

connection.connect((err: MysqlError) => {
  if(err) {
      console.log(`connection error: ${err}`);
      return;
  }
    console.log('connecting success');
});

export function query<T>( sql: string, values?: any ): Promise<T> {
    return new Promise(( resolve, reject ) => {
        connection.query(sql, values, function (err, rows) {
            if ( err ) {
                reject( err )
            } else {
                resolve( rows )
            }
        })
    })
}

export default connection;
