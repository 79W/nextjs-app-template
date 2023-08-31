import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("testchat01","testchat01","testchat01",{
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    timezone: '+08:00',
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },
    logging: (sql: string, timing?: number) => {
        console.log(sql)
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
    sequelize
      .sync()
      .then(() => console.log("Mysql: Database & tables created!"))
      .catch((err: any) =>
        console.error("Mysql: Unable to create database & tables", err)
      );
  })
  .catch((err: any) => console.error("数据库连接失败", err));
