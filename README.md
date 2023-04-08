#RegHelper

RegHelper is a library that provides functions to easily validate common inputs like email addresses, passwords, phone numbers, date formats and more. With RegHelper, you don't need to write complex regular expressions, just call the appropriate function to perform the validation.

##Installation
You can install RegHelper using NPM:

```console
npm install reg-helper
```

##Usage
Once installed, you can import RegHelper into your project:

```javascript
const regHelper = require('reg-helper');
```

The regHelper object provides several functions that can be used to validate different types of input. Here are some examples:

###Validate Email

```javascript
const isValidEmail = regHelper.isEmailRegEx('test@example.com');
```
that will return true for valid and if not valid, returns false

###Validate Password

```javascript
const isValidPassword = regHelper.isPasswordRegEx('MyP@ssword123');
```
This will return true if the password is valid, and false otherwise. By default, RegHelper requires passwords to be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.

###Validate Phone Number
```javascript
const isValidPhoneNumber = regHelper.isPhoneNumberRegEx('+38344007007');
```
###Validate username
```javascript
const isValidUsername = regHelper.isUsernameRegEx("user.name",5,20);
```
First character must be a letter or digit, any subsequent characters can be letters, digits, underscores, periods, or hyphens, The total length of the string must be between minLength and maxLength (inclusive)

###Validate code
```javascript
const isValidCode = regHelper.isCodeRegEx('PD2Ys8',6);
```
Lower cases, Upper cases, numbers so in a total length of 6 chars.

###Other functions

```javascript
isUrlRegEx('https://github.com/elvirmisini/RegHelper')
isUsSSNRegEx('222-22-2222')
isCardRegEx('4111111111111111')
isIPRegEx('192.158.1.38')
isUsZipCodeRegEx('99577-0727')
isDateMmDdYyyySlashRegEx('12/22/2023')
isDateDdMmYyyySlashRegEx('22/12/2023')
isDateYyyyMmDdSlashRegEx('2023/12/22')
isDateMmDdYySlashRegEx('12/22/22')
isDateYyyyMmDdHyphenRegEx('2023-12-12')
isDateMmDdYyyyHyphenRegEx('12-12-2023')
isDateDdMmYyyyHyphenRegEx('22-12-2023')
isHeksadeximalColorCodeRegEx('#123456')
isMACAdressRegEx('00-B0-D0-63-C2-26')
isSubnetMaskRegEx('255.255.255.0')
```

##Contributing
If you find a bug or want to contribute to the development of RegHelper, please submit a pull request on the GitHub repository.

##License
RegHelper is licensed under the --- License. See the LICENSE file for more information.
