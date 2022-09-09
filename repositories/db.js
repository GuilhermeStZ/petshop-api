import pg from 'pg';

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://wraoamnf:cAPubFHoQY5sgGD3E20cWa3D2IT0qiUR@castor.db.elephantsql.com/wraoamnf"
    });
    global.connection = pool;
    return pool.connect();
};

export {connect}