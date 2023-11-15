const getAdminInitialValues = fname => ({
  details: fname?.details || '',
});

export default getAdminInitialValues;