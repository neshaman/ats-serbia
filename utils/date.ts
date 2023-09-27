const getMonthName = (month) => {
  switch(month) {
    case 1:
      return 'Januar';
    case 2:
      return 'Februar';
    case 3:
      return 'Mart';
    case 4:
      return 'April';
    case 5:
      return 'Maj';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Avgust';
    case 9:
      return 'Septembar'
    case 10:
      return 'Oktobar'
    case 11:
      return 'Novembar'
    case 12:
      return 'Decembar'
    default:
      return month;
  }
}

const formatDate = (date) => {
  const theDate = new Date(date);

  return `${theDate.getDate()}. ${getMonthName(theDate.getMonth())}, ${theDate.getFullYear()}`
}

export { getMonthName, formatDate };