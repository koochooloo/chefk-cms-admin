"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const subjects = await queryInterface.sequelize.query("SELECT id,title FROM subjects");

    const CCMathId = subjects[0].find((e) => e.title.toLowerCase() === "cc math").id;
    const NGSSId = subjects[0].find((e) => e.title.toLowerCase() === "ngss").id;
    const ELAId = subjects[0].find((e) => e.title.toLowerCase() === "ela").id;
    const NCSSId = subjects[0].find((e) => e.title.toLowerCase() === "ncss").id;

    await queryInterface.bulkInsert("skills", [
      // CC Math Skills
      {
        title: "Counting",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Writing numbers",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Adding and subtracting",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Decomposition",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Composition and decomposition",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Measuring",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Comparison",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Classifying",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Describing",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Naming shapes",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Modelling",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Subtracting",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Adding",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Understanding the equal sign",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Understanding tens and ones",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Ordering",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Telling time",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of shapes",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Addition and subtraction",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Operations",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Understanding odd and even",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Understanding hundreds, tens, and ones",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Reading and writing numbers",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Numbers and operations",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Word problems",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Recognizing shapes",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Multiplication and division",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Properties of operation",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Division",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Patterns",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Place value",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Multiplication",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Fractions",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Volume",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Representation of data",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Data skills",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Finding area",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Multipyling and dividng",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Factoring",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of place value",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Area and perimeter formulas",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Angles",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Geometry",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Expressions",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Decimals",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Measurement",
        subject_id: CCMathId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // NGSS Skills
      {
        title: "Investigating",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Analyzing data",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Describing patterns",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Observing",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Constructing arguments",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Modelling",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Forecasting",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Science communication",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Building",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Plan and conduct investigations",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Evidence-based reasoning",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of light and sound",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Design",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Find patterns",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Make observations",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Use observations",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of shapes",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Analysis",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Arguing with evidence",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Using evidence",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Solving problems",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of water",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Cause and effect relationships",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Design problem",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Constructing argument",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Data analysis",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Data representation",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Climate knowledge",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Fair tests",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Energy",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Plants and aimals",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Natural resources",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Ecology",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Design problems",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Design solutions",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Measuring",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of gravity",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of plants",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Brightness",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Data",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Use of science",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Problem solving",
        subject_id: NGSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // ELA Skills
      {
        title: "Reading literature",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Reading informational text",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Foundational reading skills",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Writing skills",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Speaking and listening skills",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Foundational language skills",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Language skills",
        subject_id: ELAId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // NCSS Skills
      {
        title: "Citizenship skills",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Recognition of national symbols and icons",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of jobs",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of human and physical geography",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of time",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of history",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of citizenship",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of national and state symbols",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of work",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Locating skills",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of symbols, icons, and traditions",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of times and places",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of American citizens",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of economic concepts",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of money",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Map skills",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of government",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of economics",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Physical and human geography",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of American Indian nations",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of life prior to colonization",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of life during colonization",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of California",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of preColumbian settlements",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of early exploreres",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of early American history",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of colonial history",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of American Revolution",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of American Constitution",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Knowledge of states",
        subject_id: NCSSId,
        status: true,
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("skills", null, {});
  },
};
