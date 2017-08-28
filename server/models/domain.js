module.exports = function FreeDomain(sequelize, DataTypes) {
    const FreeDomain = sequelize.define('freedomains', {
            sldlength: DataTypes.INTEGER,
            tld: DataTypes.STRING,
            sld: DataTypes.STRING,
            domain: DataTypes.STRING,
            price: DataTypes.STRING,
            roubleprice: DataTypes.STRING,
            available: DataTypes.STRING,
            definitive: DataTypes.STRING
        },
        {
            timestamps: false
        });
    return FreeDomain;
};
