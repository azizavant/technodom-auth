
export const getFormattedPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber[0] === '%') {
    return '+' + phoneNumber.slice(3)
  }

  if (phoneNumber[0] === '+') {
    return '%2B' + phoneNumber.slice(1)
  }

  return phoneNumber
}