//created with:$ sequelize model:create --name Burgers --attributes "name:string, devoured:boolean"

'use strict';

module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: 
		{
      type: DataTypes.STRING, 
			allowNull: false, 
			validate:{
				len: [1,100]
			}
		},
		devoured: 
		{
			type: DataTypes.BOOLEAN, 
			allowNull: false, 
			defaultValue: false 
		},

	}, {
		classMethods: {
			associate: function(models){

			}
		}
});
return Burger;
};


