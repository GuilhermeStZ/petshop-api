import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    "postgres://wraoamnf:cAPubFHoQY5sgGD3E20cWa3D2IT0qiUR@castor.db.elephantsql.com/wraoamnf",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }    
);

export default sequelize;