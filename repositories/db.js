import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    "connectionstring",
    {
        dialect: "database",
        define: {
            timestamps: false
        }
    }    
);

export default sequelize;