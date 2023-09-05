console.log("============ Soal Satu ============");

function categoryAge(age) {
    if (typeof age !== "number") {
        return "Alien";
    }
    if (age >= 6 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenage";
    } else if (age >= 20 && age <= 35) {
        return "Adult";
    } else if (age >= 36) {
        return "Senior Citizen";
    } else {
        return "Transcended being";
    }
}

console.log(categoryAge(8));
console.log(categoryAge(15));
console.log(categoryAge(25));
console.log(categoryAge(40));


console.log("============ Soal Dua ============");

function parkingFeeCalculation(parkingTime, parkingDay, parkingSpecial) {
    if (typeof parkingTime !== "number" || typeof parkingDay !== "string" || typeof parkingSpecial !== "boolean") {
      return "INVALID INPUT. PARKING TIME MUST BE IN NUMBER, DAY MUST BE IN STRING, AND HOLIDAY IS BOOLEAN.";
    }
  
    parkingDay = parkingDay.toUpperCase();
  
    const valid_parkingDay = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    if (!valid_parkingDay.includes(parkingDay)) {
      return "INVALID INPUT. DAY MUST BE BETWEEN MONDAY TO SUNDAY";
    }
  
    let parkingFee = 0;
  
    if (parkingTime <= 1) {
      parkingFee = 10000;
    } else {
      parkingFee = 10000;
      
      parkingFee += (parkingTime - 1) * 5000;
      
      if (parkingTime > 5) {
        parkingFee -= 10000;
      }
    }
  
    if (parkingDay === "SUNDAY") {
      parkingFee += 5000;
    }
  
    if (parkingSpecial && parkingFee > 30000) {
      parkingFee -= 7000;
    }
  
    return parkingFee;
  }
  
  console.log(parkingFeeCalculation(2, "saturday", false));
  console.log(parkingFeeCalculation(6, "Sunday", true));



