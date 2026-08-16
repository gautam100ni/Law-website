export const lawyerCategories = [
  { title: "CIVIL", caseTypes: ["ACCIDENT CLAIMS", "ALL CIVIL", "CONSUMER COURT", "INSURANCE CLAIM", "NOTARY SERVICES"] },
  { title: "PROPERTY", caseTypes: ["ALL PROPERTY", "CONVEYANCING", "HOUSING LOAN", "PROPERTY DOCUMENT REGISTRATION SERVICES", "REGISTRATION OF LEAVE LICENSE AGREEMENT", "RENT", "SOCIETY REGISTRATION"] },
  { title: "CRIMINAL", caseTypes: ["ALL CRIMINAL", "BAIL", "BOUNCED CHEQUE", "CYBER LAW", "IT LAW"] },
  { title: "FAMILY", caseTypes: ["ALL FAMILY", "CHILD ADOPTION", "DIVORCE", "DOMESTIC VIOLENCE", "MATRIMONIAL", "WILL"] },
  { title: "CORPORATE", caseTypes: ["ALL CORPORATE", "BANKING", "COMMERCIAL LAW", "COMPANY LAW", "COMPANY REGISTRATION", "CORPORATE LAW", "DEBT RECOVERY TRIBUNAL", "DOCUMENTATION", "PARTNERSHIP DISPUTE"] },
  { title: "INTELLECTUAL PROPERTY", caseTypes: ["ALL INTELLECTUAL PROPERTY", "COPYRIGHT", "PATENT", "TRADEMARK"] },
  { title: "OTHERS", caseTypes: ["ALL OTHERS", "ARBITRATION", "FINANCIAL", "IMMIGRATION", "LABOUR LAW"] }
];

export const caseTypes = lawyerCategories.flatMap((category) => category.caseTypes);

export const legalAdviceCategories = [
  "Civil Law",
  "Criminal Law",
  "Property Law",
  "Family Law",
  "Corporate Law",
  "Intellectual Property",
  "Consumer Law",
  "Cyber Law"
];
