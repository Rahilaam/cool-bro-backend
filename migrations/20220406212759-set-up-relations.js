"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
    //  */
    await queryInterface.addColumn("spaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("stories", "spaceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "spaces",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ //
    await queryInterface.removeColumn("spaces", "userId");
    await queryInterface.removeColumn("stories", "spaceId");
  },
};
