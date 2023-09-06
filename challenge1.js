console.log("============ Soal Satu ============");

function categoryAge(age) {
    if (typeof age !== "number") {
        return "ALIEN";
    }
    if (age >= 1 && age <= 12) {
        return "CHILD";
    } else if (age >= 13 && age <= 19) {
        return "TEENAGE";
    } else if (age >= 20 && age <= 35) {
        return "ADULT";
    } else if (age >= 36 && age <= 100) {
        return "SENIOR CITIZEN";
    } else {
        return "TRANSCENDED BEING";
    }
}

console.log(categoryAge(8));
console.log(categoryAge(15));
console.log(categoryAge(25));
console.log(categoryAge(40));
console.log(categoryAge(1000));
console.log(categoryAge("X"));


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
console.log(parkingFeeCalculation(6, "sunday", true));
console.log(parkingFeeCalculation(10, "selasa", true));


console.log("============ Soal Tiga ============");

function festSchedule(festDay, festWeather, festTemperature, festSpeed) {
  if (typeof festDay !== "string" || typeof festWeather !== "string" || typeof festTemperature !== "number" || typeof festSpeed !== "number") {
    return "INVALID INPUT, DAY MUST BE A STRING, WEATHER MUST BE A STRING, TEMPERATURE MUST BE A NUMBER, AND WIND SPEED MUST BE A NUMBER.";
  }

  festDay = festDay.toUpperCase();
  const valid_festDay = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
  if (!valid_festDay.includes(festDay)) {
    return "INVALID INPUT, DAY MUST BE BETWEEN MONDAY TO SUNDAY.";
  }

  festWeather = festWeather.toUpperCase();
  const valid_festWeather = ["SUNNY", "RAINING"];
  if (!valid_festWeather.includes(festWeather)) {
    return "INVALID INPUT, WEATHER MUST BE SUNNY OR RAINING.";
  }

  let festList = "FESTIVAL: ART EXHIBITION";
  if (festWeather === "RAINING" && festSpeed > 20) {
    return festList;
  }

  if (festWeather === "RAINING" && festSpeed <= 20) {
    festList += ", FESTIVAL INDOOR";
  }

  if (festTemperature < 5) {
    festList += ", FESTIVAL INDOOR";
  }

  if (festWeather === "SUNNY" && festTemperature > 25) {
    festList += ", FESTIVAL ICE CREAM";
  }

  if (festDay === "SUNDAY" && festWeather === "SUNNY") {
    festList += ", EVENING MARATHON";
  }

  return festList + ".";
}

console.log(festSchedule("saturday", "raining", 23, 24));
console.log(festSchedule("saturday", "raining", 25, 10));
console.log(festSchedule("sunday", "sunny", 30, 8));
console.log(festSchedule("sunday", "cerah", 17, 12));

