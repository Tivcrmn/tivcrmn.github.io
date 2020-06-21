function show_time() {
  window.setTimeout("show_time()", 1000);
  updateKnowTime(calculate(new Date("5/09/2020 07:46:00")));
  // updateStartTime(calculate(new Date("6/14/2020 08:03:00")));
}

function calculate(target) {
  today = new Date();
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

function updateStartTime({daysold, hrsold, minsold, seconds}) {
  start_date.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}

show_time();
