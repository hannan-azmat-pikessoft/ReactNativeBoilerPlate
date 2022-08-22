export const AdmittedPatientSelector = state => {
  const loading = state.admittedPatient.loading;
  const Data = state.admittedPatient.data;
  return {
    loading,
    Data,
  };
};
