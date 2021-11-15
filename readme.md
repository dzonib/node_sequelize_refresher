cli sequelize commad: npx sequelize db:create --- creates database specified by configuration
command: npx sequelize model:generate --name User --attributes name:string,email:string,role:string --- creates model

in psql
(describe) \dt --- shows all tables
(describe table) \d "Users" --- shows column on user table

User.init({
name: {type: DataTypes.STRING, allowNull: false}, --- added allowNull: false
email: {type: DataTypes.STRING, allowNull: false},
role: {type: DataTypes.STRING, allowNull: false}
}, {
sequelize,
tableName = 'users', --- added to change table name to lowercase
modelName: 'User',
});
return User;
};

in psql
select \* from users;
