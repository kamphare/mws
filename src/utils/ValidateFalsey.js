export function ValidateFalsey(value) {
  if (value) {
    console.log('True! Returning: ' + value)
    return value;
  } 
  else return "N/A"
}