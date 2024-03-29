"use strict";

require("dotenv").config();
const env = process.env.NODE_ENV || "development";
const config = require(".././config/config")[env];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let gcURL =
      "https://storage.googleapis.com/" + config.gc_bucket + "/images";

    const countryModuleId = await queryInterface.rawSelect(
      "module_master",
      { where: { module_key: "country" } },
      ["id"]
    );

    await queryInterface.bulkInsert("images", [
      {
        image: gcURL + "/Afghanistan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 1,
      },
      {
        image: gcURL + "/Albania.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 2,
      },
      {
        image: gcURL + "/Algeria.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 3,
      },
      {
        image: gcURL + "/Angola.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 4,
      },
      {
        image: gcURL + "/Andorra.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 5,
      },
      {
        image: gcURL + "/Argentina.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 6,
      },
      {
        image: gcURL + "/Armenia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 7,
      },
      {
        image: gcURL + "/Australia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 8,
      },
      {
        image: gcURL + "/Austria.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 9,
      },
      {
        image: gcURL + "/Azerbaijan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 10,
      },
      {
        image: gcURL + "/Bahamas.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 11,
      },
      {
        image: gcURL + "/Bangladesh.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 12,
      },
      {
        image: gcURL + "/Belarus.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 13,
      },
      {
        image: gcURL + "/Belgium.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 14,
      },
      {
        image: gcURL + "/Belize.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 15,
      },
      {
        image: gcURL + "/Benin.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 16,
      },
      {
        image: gcURL + "/Bhutan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 17,
      },
      {
        image: gcURL + "/Bolivia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 18,
      },
      {
        image: gcURL + "/Bosnia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 19,
      },
      {
        image: gcURL + "/Botswana.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 20,
      },
      {
        image: gcURL + "/Brazil.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 21,
      },
      {
        image: gcURL + "/Brunei.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 22,
      },
      {
        image: gcURL + "/Bulgaria.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 23,
      },
      {
        image: gcURL + "/Burkina_Faso.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 24,
      },
      {
        image: gcURL + "/Burundi.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 25,
      },
      {
        image: gcURL + "/Cambodia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 26,
      },
      {
        image: gcURL + "/Cameroon.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 27,
      },
      {
        image: gcURL + "/Canada.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 28,
      },
      {
        image: gcURL + "/Central_African_Republic.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 29,
      },
      {
        image: gcURL + "/Chad.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 30,
      },
      {
        image: gcURL + "/Chile.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 31,
      },
      {
        image: gcURL + "/China.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 32,
      },
      {
        image: gcURL + "/Colombia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 33,
      },
      {
        image: gcURL + "/Comoros.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 34,
      },
      {
        image: gcURL + "/Democratic_Republic_of_the_Congo.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 35,
      },
      {
        image: gcURL + "/Costa_Rica.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 36,
      },
      {
        image: gcURL + "/Côte_d'Ivoire.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 37,
      },
      {
        image: gcURL + "/Croatia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 38,
      },
      {
        image: gcURL + "/Cuba.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 39,
      },
      {
        image: gcURL + "/Cyprus.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 40,
      },
      {
        image: gcURL + "/Czech_Republic.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 41,
      },
      {
        image: gcURL + "/Denmark.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 42,
      },
      {
        image: gcURL + "/Djibouti.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 43,
      },
      {
        image: gcURL + "/Dominican_Republic.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 44,
      },
      {
        image: gcURL + "/Ecuador.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 45,
      },
      {
        image: gcURL + "/Egypt.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 46,
      },
      {
        image: gcURL + "/El_Salvador.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 47,
      },
      {
        image: gcURL + "/Equatorial_Guinea.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 48,
      },
      {
        image: gcURL + "/Eritrea.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 49,
      },
      {
        image: gcURL + "/Estonia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 50,
      },
      {
        image: gcURL + "/Ethiopia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 51,
      },
      {
        image: gcURL + "/Falkland_Islands.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 52,
      },
      {
        image: gcURL + "/Fiji.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 53,
      },
      {
        image: gcURL + "/Finland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 54,
      },
      {
        image: gcURL + "/France.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 55,
      },
      {
        image: gcURL + "/French_Polynesia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 56,
      },
      {
        image: gcURL + "/Gabon.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 57,
      },
      {
        image: gcURL + "/Gambia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 58,
      },
      {
        image: gcURL + "/Georgia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 59,
      },
      {
        image: gcURL + "/Germany.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 60,
      },
      {
        image: gcURL + "/Ghana.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 61,
      },
      {
        image: gcURL + "/Greece.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 62,
      },
      {
        image: gcURL + "/Greenland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 63,
      },
      {
        image: gcURL + "/Guatemala.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 64,
      },
      {
        image: gcURL + "/Guinea.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 65,
      },
      {
        image: gcURL + "/Guinea_Bissau.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 66,
      },
      {
        image: gcURL + "/Guyana.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 67,
      },
      {
        image: gcURL + "/Haiti.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 68,
      },
      {
        image: gcURL + "/Honduras.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 69,
      },
      {
        image: gcURL + "/Hungary.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 70,
      },
      {
        image: gcURL + "/Iceland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 71,
      },
      {
        image: gcURL + "/India.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 72,
      },
      {
        image: gcURL + "/Indonesia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 73,
      },
      {
        image: gcURL + "/Iran.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 74,
      },
      {
        image: gcURL + "/Iraq.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 75,
      },
      {
        image: gcURL + "/Ireland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 76,
      },
      {
        image: gcURL + "/Israel.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 77,
      },
      {
        image: gcURL + "/Italy.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 78,
      },
      {
        image: gcURL + "/Jamaica.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 79,
      },
      {
        image: gcURL + "/Japan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 80,
      },
      {
        image: gcURL + "/Jordan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 81,
      },
      {
        image: gcURL + "/Kazakhstan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 82,
      },
      {
        image: gcURL + "/Kenya.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 83,
      },
      {
        image: gcURL + "/North_Korea.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 84,
      },
      {
        image: gcURL + "/South_Korea.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 85,
      },
      {
        image: gcURL + "/Kuwait.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 86,
      },
      {
        image: gcURL + "/Kyrgyzstan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 87,
      },
      {
        image: gcURL + "/Laos.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 88,
      },
      {
        image: gcURL + "/Latvia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 89,
      },
      {
        image: gcURL + "/Lebanon.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 90,
      },
      {
        image: gcURL + "/Lesotho.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 91,
      },
      {
        image: gcURL + "/Liberia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 92,
      },
      {
        image: gcURL + "/Libya.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 93,
      },
      {
        image: gcURL + "/Lithuania.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 94,
      },
      {
        image: gcURL + "/Luxembourg.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 95,
      },
      {
        image: gcURL + "/Macedonia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 96,
      },
      {
        image: gcURL + "/Madagascar.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 97,
      },
      {
        image: gcURL + "/Malawi.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 98,
      },
      {
        image: gcURL + "/Malaysia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 99,
      },
      {
        image: gcURL + "/Mali.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 100,
      },
      {
        image: gcURL + "/Mauritania.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 101,
      },
      {
        image: gcURL + "/Mexico.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 102,
      },
      {
        image: gcURL + "/Moldova.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 103,
      },
      {
        image: gcURL + "/Mongolia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 104,
      },
      {
        image: gcURL + "/Serbia_and_Montenegro.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 105,
      },
      {
        image: gcURL + "/Morocco.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 106,
      },
      {
        image: gcURL + "/Mozambique.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 107,
      },
      {
        image: gcURL + "/Myanmar.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 108,
      },
      {
        image: gcURL + "/Namibia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 109,
      },
      {
        image: gcURL + "/Nepal.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 110,
      },
      {
        image: gcURL + "/Netherlands.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 111,
      },
      {
        image: gcURL + "/Netherlands_Antilles.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 112,
      },
      {
        image: gcURL + "/New_Zealand.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 113,
      },
      {
        image: gcURL + "/Nicaragua.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 114,
      },
      {
        image: gcURL + "/Niger.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 115,
      },
      {
        image: gcURL + "/Nigeria.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 116,
      },
      {
        image: gcURL + "/Norway.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 117,
      },
      {
        image: gcURL + "/Oman.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 118,
      },
      {
        image: gcURL + "/Pakistan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 119,
      },
      {
        image: gcURL + "/Palestine.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 120,
      },
      {
        image: gcURL + "/Panama.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 121,
      },
      {
        image: gcURL + "/Papua_New_Guinea.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 122,
      },
      {
        image: gcURL + "/Paraguay.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 123,
      },
      {
        image: gcURL + "/Peru.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 124,
      },
      {
        image: gcURL + "/Philippines.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 125,
      },
      {
        image: gcURL + "/Poland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 126,
      },
      {
        image: gcURL + "/Portugal.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 127,
      },
      {
        image: gcURL + "/Puerto_Rico.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 128,
      },
      {
        image: gcURL + "/Qatar.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 129,
      },
      {
        image: gcURL + "/Romania.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 130,
      },
      {
        image: gcURL + "/Russian_Federation.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 131,
      },
      {
        image: gcURL + "/Rwanda.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 132,
      },
      {
        image: gcURL + "/Saudi_Arabia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 133,
      },
      {
        image: gcURL + "/Senegal.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 134,
      },
      {
        image: gcURL + "/Serbia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 135,
      },
      {
        image: gcURL + "/Sierra_Leone.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 136,
      },
      {
        image: gcURL + "/Slovakia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 137,
      },
      {
        image: gcURL + "/Slovenia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 138,
      },
      {
        image: gcURL + "/Soloman_Islands.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 139,
      },
      {
        image: gcURL + "/Somalia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 140,
      },
      {
        image: gcURL + "/South_Africa.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 141,
      },
      {
        image: gcURL + "/Soviet_Union.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 142,
      },
      {
        image: gcURL + "/Spain.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 143,
      },
      {
        image: gcURL + "/Sri_Lanka.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 144,
      },
      {
        image: gcURL + "/Sudan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 145,
      },
      {
        image: gcURL + "/Suriname.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 146,
      },
      {
        image: gcURL + "/Swaziland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 147,
      },
      {
        image: gcURL + "/Sweden.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 148,
      },
      {
        image: gcURL + "/Switzerland.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 149,
      },
      {
        image: gcURL + "/Syria.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 150,
      },
      {
        image: gcURL + "/Taiwan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 151,
      },
      {
        image: gcURL + "/Tajikistan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 152,
      },
      {
        image: gcURL + "/Tanzania.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 153,
      },
      {
        image: gcURL + "/Thailand.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 154,
      },
      {
        image: gcURL + "/Timor-Leste.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 155,
      },
      {
        image: gcURL + "/Togo.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 156,
      },
      {
        image: gcURL + "/Trinidad_and_Tobago.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 157,
      },
      {
        image: gcURL + "/Tunisia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 158,
      },
      {
        image: gcURL + "/Turkey.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 159,
      },
      {
        image: gcURL + "/Turkmenistan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 160,
      },
      {
        image: gcURL + "/Uganda.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 161,
      },
      {
        image: gcURL + "/Ukraine.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 162,
      },
      {
        image: gcURL + "/UAE.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 163,
      },
      {
        image: gcURL + "/United_Kingdom.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 164,
      },
      {
        image: gcURL + "/United_States_of_America.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 165,
      },
      {
        image: gcURL + "/Uruguay.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 166,
      },
      {
        image: gcURL + "/Uzbekistan.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 167,
      },
      {
        image: gcURL + "/Vanuatu.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 168,
      },
      {
        image: gcURL + "/Venezuela.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 169,
      },
      {
        image: gcURL + "/Vietnam.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 170,
      },
      {
        image: gcURL + "/Vatican_City.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 171,
      },
      {
        image: gcURL + "/Yemen.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 172,
      },
      {
        image: gcURL + "/Zambia.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 173,
      },
      {
        image: gcURL + "/Zimbabwe.png",
        module_id: countryModuleId,

        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
        transaction_id: 174,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const countryModuleId = await queryInterface.rawSelect(
      "module_master",
      { where: { module_key: "country" } },
      ["id"]
    );

    await queryInterface.bulkDelete(
      "images",
      {
        module_id: countryModuleId,
      },
      {}
    );
  },
};
