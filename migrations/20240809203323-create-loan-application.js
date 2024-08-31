'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LoanApplications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hearAbout: {
        type: Sequelize.STRING
      },
      financialSolution: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      ssn: {
        type: Sequelize.STRING
      },
      phoneHome: {
        type: Sequelize.STRING
      },
      address1: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      driversLicense: {
        type: Sequelize.STRING
      },
      driversLicenseState: {
        type: Sequelize.STRING
      },
      requestedAmount: {
        type: Sequelize.DECIMAL
      },
      loanPurpose: {
        type: Sequelize.STRING
      },
      credit: {
        type: Sequelize.STRING
      },
      ownHome: {
        type: Sequelize.STRING
      },
      employerName: {
        type: Sequelize.STRING
      },
      monthsAtCompany: {
        type: Sequelize.INTEGER
      },
      incomeType: {
        type: Sequelize.STRING
      },
      monthlyIncome: {
        type: Sequelize.DECIMAL
      },
      payDate1: {
        type: Sequelize.DATE
      },
      payFrequency: {
        type: Sequelize.STRING
      },
      directDeposit: {
        type: Sequelize.STRING
      },
      bankName: {
        type: Sequelize.STRING
      },
      bankAccountType: {
        type: Sequelize.STRING
      },
      bankABA: {
        type: Sequelize.STRING
      },
      bankAccountNumber: {
        type: Sequelize.STRING
      },
      ipAddress: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LoanApplications');
  }
};