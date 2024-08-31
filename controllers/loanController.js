const { LoanApplication } = require("../models");
exports.submitLoanApplication = async (req, res, next) => {
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "dob",
    "ssn",
    "phoneHome",
    "address1",
    "zipCode",
    "driversLicense",
    "driversLicenseState",
    "credit",
    "ownHome",
    "employerName",
    "monthsAtCompany",
    "incomeType",
    "monthlyIncome",
    "payDate1",
    "payFrequency",
    "directDeposit",
    "bankName",
    "bankAccountType",
    "bankABA",
    "bankAccountNumber",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "error",
      message: ` ${missingFields.join(", ")} is required`,
    });
  }


  try {
    const newApplication = await LoanApplication.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Data submitted successfully",
      data: newApplication,
    });
  } catch (error) {
    res.status(201).json({
      status: "error",
      error,
    });
  }
};
