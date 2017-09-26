function takeANumber (katzDeliLine, name) {
   katzDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `There is nobody waiting to be served!`;
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `The line is currently empty.`
  }else{
    var lineupdate = [];
    for (x = 0; x < katzDeliLine.length; x++); {
      var numbering = x + 1
      lineupdate.push(`${numbering}. ${katzDeliLine[x]}`)
    }
    return lineupdate
  }
}