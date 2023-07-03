const { Sequelize, DataTypes, Model } = require('sequelize');

const DB_DATABASE = process.env.DB_DATABASE || "kubedevnews";
const DB_USERNAME = process.env.DB_USERNAME || "kubedevnews";
const DB_PASSWORD = process.env.DB_PASSWORD || "Pg#123";
const DB_HOST = process.env.DB_HOST || "postgres";

console.log("DB_DATABASE:", DB_DATABASE);
console.log("DB_USERNAME:", DB_USERNAME);
console.log("DB_PASSWORD:", DB_PASSWORD);
console.log("DB_HOST:", DB_HOST);

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

class Post extends Model {}

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  summary: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Post'
});

exports.initDatabase = async () => {
  await sequelize.sync({ alter: true });
};

exports.Post = Post;