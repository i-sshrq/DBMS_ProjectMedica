module.exports = class Patient {
  constructor(
    patient_id,
    birth_reg,
    patient_name,
    passport_number,
    blood_group,
    patient_dob,
    health_issues,
    other_info,
    address,
    phone_number,
    email
  ) {
    this.patient_id = patient_id;
    this.birth_reg = birth_reg;
    this.patient_name = patient_name;
    this.passport_number = passport_number;
    this.blood_group = blood_group;
    this.patient_dob = patient_dob;
    this.health_issues = health_issues;
    this.other_info = other_info;
    this.address = address;
    this.phone_number = phone_number;
    this.email = email;
  }
};
