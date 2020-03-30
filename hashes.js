const hash_to_patient_ID = birth_cert => {
  return birth_cert % 180000017;
};

module.exports = hash_to_patient_ID;
