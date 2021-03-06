module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    owner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Answer, {
      onDelete: "RESTRICT",
    });
    User.hasMany(models.Post, {
      onDelete: "RESTRICT",
    });
    User.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return User;
};
