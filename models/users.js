module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Personal"
        }


        /*
        first_name
        last_name
        email
        password
        if_company
        comp_name
        street
        city
        state
        zip
        resume
        doc1
        doc2
        doc3


        */

    });
    return Post;
};