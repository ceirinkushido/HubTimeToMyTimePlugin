document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
  
        chrome.tabs.executeScript( null, {
           code: "var date = new Date(); var now_utc = date.getUTCHours(); var timeDiff = date.getHours() - now_utc; var x = document.getElementsByClassName('title');if (x.length > 0) {console.log(x.length);} else {x = document.getElementsByClassName('te-s');console.log(x.length);}for (i = 0; i < x.length; i++) {if (x[i].innerHTML.includes('UTC')) {var str = x[i].innerHTML.substring(x[i].innerHTML.lastIndexOf('UTC') - 1, x[i].innerHTML.lastIndexOf('UTC') - 6);var str_og = str;var now = new Date();var now_utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());str = str.replace(':', '');var now_hours = str.substring(0, 2);var now_minutes = str.substring(2);var now_time = (parseInt(now_hours) * 60) + parseInt(now_minutes);var timeDiff = 0;if (now_utc > now.getTime()) {timeDiff = (now_utc - now.getTime()) / 1000;timeDiff = timeDiff / 60;timeDiff = (now_time + timeDiff) / 60;now_time = ((timeDiff % 1) * 60).toFixed(0);timeDiff = Math.floor(timeDiff);} else if (now_utc < now.getTime()) {timeDiff = (now.getTime() - now_utc) / 1000;timeDiff = timeDiff / 60;timeDiff = (now_time - timeDiff) / 60;now_time = ((timeDiff % 1) * 60).toFixed(0);timeDiff = Math.floor(timeDiff);} else {timeDiff = now_hours;now_time = now_minutes;}if (timeDiff > 24) {timeDiff = timeDiff - 24;}if (timeDiff < 0) {timeDiff = timeDiff *(-1);}if (now_time < 0) {now_time = now_time *(-1);}if (now_time.length == 1) {now_time = '0' + now_time;}timeDiff = timeDiff + '';if (timeDiff.length == 1) {timeDiff = '0' + timeDiff;}x[i].innerHTML = x[i].innerHTML.replace(str_og + ' UTC', timeDiff + ':' + now_time + ' LOCAL TIME');}}"
        }, function findDate(){} );
    }, false);
  }, false);














