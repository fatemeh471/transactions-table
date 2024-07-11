
export const numberWithCommas = (x: { toString: () => string; }) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

 export const toFarsiNumber =(n: string) => {
    const farsiDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n
        .toString()
        .replace(/\d/g, (x) => farsiDigits[Number(x)]);
}

export const formatCardNumber = (cardNumber: string) => {
   let formattedNumber = cardNumber.replace(/(.{4})/g, '$1-');
    formattedNumber = formattedNumber.replace(/-$/, '');

    return formattedNumber;
  };

 export const convertPersianDate = (persianDateTime: string) =>{
    const persianMonths = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", 
        "مرداد", "شهریور", "مهر", "آبان", 
        "آذر", "دی", "بهمن", "اسفند"
    ];
    let [persianDate, time] = persianDateTime.split('-');
    let dateParts = persianDate.split('/')
    let year = dateParts[0];
    let month = Number(dateParts[1]) 
    let day = dateParts[2];
    let monthName = persianMonths[month];
    let formattedDate = `${day} ${monthName} ${year}`;
    let [hours, minutes] = time.split(':');
    let formattedTime = `${hours}:${minutes}`;

    return `${formattedDate}  ${formattedTime}`;
}