//jobs table model

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        jid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        job_title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        job_desc: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        job_posted: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        if_remote: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: '0'
        },
        job_type_id: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        job_type_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        if_ft: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: '1'
        },
        comp_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        comp_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        comp_loc: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        comp_logo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        apply_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        job_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        hr_feedback: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        hr_if_hired: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
        }
    }, {
        tableName: 'jobs'
    });

    Job.associate = function(models) {
        // We're saying that a Job should belong to an User
        // A Job can't be created without an User due to the foreign key constraint
        Job.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Job;
};


/*
 BACKUP:
//jobs table model

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Job', {
        jid: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        job_title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        job_desc: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        job_posted: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        if_remote: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: '0'
        },
        job_type_id: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        job_type_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        if_ft: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: '1'
        },
        comp_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        comp_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        comp_loc: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        comp_logo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        apply_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        job_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        hr_feedback: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        hr_if_hired: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '0'
        },
        uid: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'users',
                key: 'uid'
            }
        }
    }, {
        tableName: 'jobs'
    });
};



*/