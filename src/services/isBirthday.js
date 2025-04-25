const isTodayBirthday = (dateOfBirth) => {
    const today = new Date();
    const birthday = new Date(dateOfBirth);
  
    return (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() === birthday.getDate()
    );
  };
  
  module.exports = isTodayBirthday;
  