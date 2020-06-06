function deadLineTimer (deadLineDate){   
   let deadline = deadLineDate;

   function getDeadLineDate(endTime){
      let t = Date.parse(endTime) - Date.parse( new Date()),
         seconds = Math.floor((t/1000) % 60),
         minutes = Math.floor((t/1000/60) %60),
         hours = Math.floor((t/1000/60/60) %24),
         days = Math.floor((t/1000/60/60) / 24);

      return {
         "seconds" : seconds,
         "minutes" : minutes,
         "hours" : hours,
         "days" : days,
         "total" : t,
      }
   }

   function setClock(classTimer, endTime) {
      let timer = document.querySelector('.timer'),
         days = timer.querySelector('.days'),
         minutes = timer.querySelector('.minutes'),
         hours = timer.querySelector('.hours'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setInterval(updateClock, 1000);

      function updateClock(){
         let t = getDeadLineDate(endTime);

         hours.textContent = t.hours;
         days.textContent = t.days;
         minutes.textContent = t.minutes;
         seconds.textContent = t.seconds;

         if ( t.total <= 0){
            clearInterval(timeInterval);
         }
         putZeroFrontTimerNumber(endTime);
      }
   }
   function putZeroFrontTimerNumber(endTime) {
      let t = getDeadLineDate(endTime);
      let zer = document.querySelectorAll('.zero');
      if ( t.seconds < 10 ){
         zer[3].classList.remove('hide');         
      } else {
         zer[3].classList.add('hide');        
      }

      if ( t.minutes < 10 ){
         zer[2].classList.remove('hide');
      } else {
         zer[2].classList.add('hide');
      }

      if ( t.hours < 10 ){
         zer[1].classList.remove('hide');
      } else {
         zer[1].classList.add('hide');
      }

      if ( t.days < 10 ){
         zer[0].classList.remove('hide');
      } else {
         zer[0].classList.add('hide');
      }
   }
   setClock(".timer", deadline);
}
deadLineTimer("2020-06-07");