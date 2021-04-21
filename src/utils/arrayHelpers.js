export const copyFindIndex = (arr, id) => {
  const updatedArr = [...arr];
  const index = updatedArr.findIndex(item => item.id === id);

  return updatedArr[index];
};

export const arrayStateHandler = (arr, id, num, prop) => {
  let updatedArray = [...arr];
  let index = updatedArray.findIndex(item => id === item.id);
  let precIndex = id + 1;
  let prevIndex = id - 1;

  if (prevIndex < 0) {
    updatedArray[index][prop] = !updatedArray[index][prop];
    updatedArray[precIndex][prop] = false;
  } else if (precIndex > num) {
    updatedArray[index][prop] = !updatedArray[index][prop];
    updatedArray[prevIndex][prop] = false;
  } else {
    updatedArray[prevIndex][prop] = false;
    updatedArray[precIndex][prop] = false;
    updatedArray[index][prop] = !updatedArray[index][prop];
  }
 
  return updatedArray;
};