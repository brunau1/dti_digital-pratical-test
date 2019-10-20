function getDataInfo(data) {
  return {
    date: data.split(' ')[0],
    smallDogs: data.split(' ')[1],
    bigDogs: data.split(' ')[2]
  };
}

function verifyIfIsEndOfWeek(date) {
  const newDate = new Date(date).toDateString();
  const verifiedDate = newDate.split(' ')[0].toLowerCase();
  const isEndOfWeek =
    verifiedDate == 'sun' || verifiedDate == 'sat' ? true : false;
  if (!!isEndOfWeek) return true;
  else return false;
}

module.exports = {
  getDataInfo,
  verifyIfIsEndOfWeek
};
