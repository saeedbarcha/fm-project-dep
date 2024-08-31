"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoanApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoanApplication.init(
    {
      hearAbout: DataTypes.STRING,
      financialSolution: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      dob: DataTypes.DATE,
      ssn: DataTypes.STRING,
      phoneHome: DataTypes.STRING,
      address1: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      driversLicense: DataTypes.STRING,
      driversLicenseState: DataTypes.STRING,
      requestedAmount: DataTypes.DECIMAL,
      loanPurpose: DataTypes.STRING,
      credit: DataTypes.STRING,
      ownHome: DataTypes.STRING,
      employerName: DataTypes.STRING,
      monthsAtCompany: DataTypes.INTEGER,
      incomeType: DataTypes.STRING,
      monthlyIncome: DataTypes.DECIMAL,
      payDate1: DataTypes.DATE,
      payFrequency: DataTypes.STRING,
      directDeposit: DataTypes.STRING,
      bankName: DataTypes.STRING,
      bankAccountType: DataTypes.STRING,
      bankABA: DataTypes.STRING,
      bankAccountNumber: DataTypes.STRING,
      ipAddress: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LoanApplication",
    }
  );
  return LoanApplication;
};
