//users table model

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        uid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        if_company: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
        },
        comp_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        street: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        resume: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        doc1: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        doc2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        doc3: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'users'
    });

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Job, {
            onDelete: "cascade"
        });
    };


    return User;
};

/*
BACKUP: 
//users table model

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        uid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        if_company: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
        },
        comp_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        street: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        resume: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        doc1: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        doc2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        doc3: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'users'
    });
};
*/