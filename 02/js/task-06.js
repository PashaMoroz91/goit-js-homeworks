"use strict";

const checkForSpam = function(str) {
  const string = str.toLowerCase();
  return string.includes("spam") || string.includes("sale");
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
