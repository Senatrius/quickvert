const handleConversions = (id, parentId, value) => {
  let result;

  if (parentId === "convert-length") {
    result = handleLengthConversions(id, value);
  }

  console.log(id, parentId, value, result)

  // if (parentId === "convert-volume") {
  //   result = handleVolumeConversions(id, value);
  // }

  // if (parentId === "convert-mass") {
  //   result = handleMassConversions(id, value);
  // }

  return result.toFixed(3);
}

const handleLengthConversions = (id, value) => {
  switch(id){
    case "convert-km-mi":
      return value * 0.621371;
    case "convert-m-ft":
      return value * 3.28084;
    case "convert-cm-in":
      return value * 0.3937;
    case "convert-m-yd":
      return value * 1.0936;
    case "convert-mi-km":
      return value * 1.609344;
    case "convert-ft-m":
      return value * 0.3048;
    case "convert-in-cm":
      return value *  2.54;
    case "convert-yd-m":
      return value * 0.9144;
    default:
      return value;
  }
}