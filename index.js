function isEmailRegEx(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isPasswordRegEx(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    return passwordRegex.test(password);
}

function isPhoneNumberRegEx(phoneNumber) {
    
    const phoneRegex = /^\+\d{1,3}\d{8,}$/;
    return phoneRegex.test(phoneNumber);
}

function isUsernameRegEx(username, minLength, maxLength) {
    const usernameRegex = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9_.-]{${minLength - 1},${maxLength - 1}}$`);
    return usernameRegex.test(username);
  }

function isCodeRegEx(code, length) {
    const codeRegex = new RegExp(`^[a-zA-Z0-9]{${length}}$`);
    return codeRegex.test(code);
  }
    
function isUrlRegEx(url) {
    const urlRegex = /^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return urlRegex.test(url);
  }

function isUsSSNRegEx(SSN) {
    const SSNRegex = /^\d{3}-\d{2}-\d{4}$/;
    return SSNRegex.test(SSN);
  }

function isCardRegEx(Card) {
    const CardRegex =  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return CardRegex.test(Card);
  }
  
function isIPRegEx(IP) {
    const IPRegex =  /^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$/;
    return IPRegex.test(IP);
  }

function isUsZipCodeRegEx(ZIP) {
    const ZIPRegex =  /^\d{5}(?:[-\s]\d{4})?$/;
    return ZIPRegex.test(ZIP);
  }
  
function isDateMmDdYyyySlashRegEx(date) {
    const dateRegex =  /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d{2})$/;
    return dateRegex.test(date);
  }
function isDateDdMmYyyySlashRegEx(date) {
    const dateRegex =  /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(date);
  }
function isDateYyyyMmDdSlashRegEx(date) {
    const dateRegex =  /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
    return dateRegex.test(date);
  }
function isDateMmDdYySlashRegEx(date) {
    const dateRegex =  /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{2}$/;
    return dateRegex.test(date);
  }
  
function isDateYyyyMmDdHyphenRegEx(date) {
    const dateRegex =  /^(?:(?:19|20)[0-9]{2})[-\/.](?:0?[1-9]|1[0-2])[-\/.](?:0?[1-9]|[12][0-9]|3[01])$/;
    return dateRegex.test(date);
  }

function isDateDdMmYyyyHyphenRegEx(date) {
    const dateRegex =  /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    return dateRegex.test(date);
  }

function isDateMmDdYyyyHyphenRegEx(date) {
    const dateRegex =  /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/;
    return dateRegex.test(date);
  }

function isHeksadeximalColorCodeRegEx(colorCode) {
    const colorCodeRegex =  /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    return colorCodeRegex.test(colorCode);
  }
    
function isMACAdressRegEx(MACAddress) {
    const MACAddressRegex =  /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return MACAddressRegex.test(MACAddress);
  }

function isSubnetMaskRegEx(subnetMask) {
    const subnetMaskRegex = /^((128|192|224|240|248|252|254)\.0\.0\.0)|(255\.(0|128|192|224|240|248|252|254)\.0\.0)|(255\.255\.(0|128|192|224|240|248|252|254)\.0)|(255\.255\.255\.(0|128|192|224|240|248|252|254))$/;
    return subnetMaskRegex.test(subnetMask);
  }

  function randomPasswordGeneration(){
      const randomPassword =
      Math.random().toString(36).slice(5) +
      Math.random().toString(36)
          .toUpperCase().slice(5);
      return randomPassword
  }
  
function validatePassword(password) {
  // Define regular expressions for different password strengths
  const weakRegex = /^[a-zA-Z]+$/;
  const moderateRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/;
  const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]+$/;

  // Check the strength of the password
  if (weakRegex.test(password)) {
    return "Weak password";
  } else if (moderateRegex.test(password)) {
    return "Moderate password";
  } else if (strongRegex.test(password)) {
    return "Strong password";
  } else {
    return "Invalid password";
  }
}


module.exports={
    isEmailRegEx,
    isPasswordRegEx,
    isPhoneNumberRegEx,
    isUsernameRegEx,
    isCodeRegEx,
    isUrlRegEx,
    isUsSSNRegEx,
    isCardRegEx,
    isIPRegEx,
    isUsZipCodeRegEx,
    isDateMmDdYyyySlashRegEx,
    isDateDdMmYyyySlashRegEx,
    isDateYyyyMmDdSlashRegEx,
    isDateMmDdYySlashRegEx,
    isDateYyyyMmDdHyphenRegEx,
    isDateDdMmYyyyHyphenRegEx,    
    isDateMmDdYyyyHyphenRegEx,
    isHeksadeximalColorCodeRegEx,
    isMACAdressRegEx,
    isSubnetMaskRegEx,
    randomPasswordGeneration,
    validatePassword
}