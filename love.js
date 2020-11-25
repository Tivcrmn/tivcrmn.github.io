function show_time() {
  window.setTimeout("show_time()", 1000);
  updateKnowTime(calculate());
}

function calculate() {
  today = changeTimezone(new Date(), "America/Los_Angeles");
  target = changeTimezone(new Date("Sat, 09 May 2020 07:46:00 GMT-0800"), "America/Los_Angeles");
  timeold = (today.getTime() - target.getTime());
  sectimeold = timeold / 1000
  secondsold = Math.floor(sectimeold);
  msPerDay = 24 * 60 * 60 * 1000
  e_daysold = timeold / msPerDay
  daysold = Math.floor(e_daysold);
  e_hrsold = (e_daysold - daysold) * 24;
  hrsold = Math.floor(e_hrsold);
  e_minsold = (e_hrsold - hrsold) * 60;
  minsold = Math.floor((e_hrsold - hrsold) * 60);
  seconds = Math.floor((e_minsold - minsold) * 60);
  return {daysold, hrsold, minsold, seconds};
}

function updateKnowTime({daysold, hrsold, minsold, seconds}) {
  know_date.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}

function changeTimezone(date, ianatz) {

  // suppose the date is 12:00 UTC
  let invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  let diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff); // needs to substract

}

function show_hearts() {
  let hearts_string = "";
  for (let i = 0; i < 200; i++) {
    hearts_string += "&#10084;&#65039;";
  }
  hearts.innerHTML = hearts_string;
}

show_time();
show_hearts();
