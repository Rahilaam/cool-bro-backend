"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */

    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });

    const user2 = await User.findOne({
      where: { email: "a@a.com" },
    });
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "My coding Journey",
          description: "A tell all tale",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          title: "I am not a robo",
          backgroundColor: "#40C076",
          color: "#EDEDED",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
