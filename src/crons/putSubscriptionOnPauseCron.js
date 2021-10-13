var CronJob = require("cron").CronJob;
let utils = require("../helpers/utils");
require("dotenv").config();
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config")[env];
const SubscribePackage = require("../models").subscribe_packages;
const User = require("../models").users;
const Role = require("../models").roles;
const Student = require("../models").students;
const beforeDays = 7;

async function putSubscriptionOnPauseCron() {
  var job = new CronJob(
    "0 0 * * * *",
    // "0/10 * * * * *",
    async () => {
      console.log(
        " ************ putSubscriptionOnPauseCron started at " +
          new Date() +
          "************"
      );
      
      let date = new Date();
      // date.setDate(date.getDate() + (beforeDays - 1));

      let subscribePackageDetails = await SubscribePackage.findAll({
        where: { gracePeriodEndDate: date, isActive: true },
      });

      if (subscribePackageDetails.length) {
        let studentRole = await Role.findOne({
          attributes: ["id"],
          where: { title: "Student", isMaster: true },
        });

        await User.update(
          { isSubscriptionPause: true },
          {
            where: {
              id: subscribePackageDetails
                .filter((f) => f.roleId !== studentRole.id)
                .map((e) => e.entityId),
            },
          }
        );

        await Student.update(
          { isSubscriptionPause: true },
          {
            where: {
              id: subscribePackageDetails
                .filter((f) => f.roleId === studentRole.id)
                .map((e) => e.entityId),
            },
          }
        );
      }
      console.log(
        " ************ putSubscriptionOnPauseCron completed at " +
          new Date() +
          "************"
      );
    },
    null,
    true
    // "America/Los_Angeles"
  );
  job.start();
}

module.exports = putSubscriptionOnPauseCron;
