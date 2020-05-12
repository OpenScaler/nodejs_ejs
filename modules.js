// test module to be removed 

exports.getDate = function () {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const toDate = new Date();
  return  toDate.toLocaleDateString("en-US", options);
}
exports.getDay = function() {
    const options = {
      day: "numeric",
    };
  
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
  }
  