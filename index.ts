#!/usr/bin/env node
function startCountdown(targetDate: Date): void {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();
  
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        console.log('Countdown finished!');
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      console.log(`Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 3000);
  }
  
  const targetDate = new Date('2023-06-01T00:00:00');
  
  console.log('Countdown Timer\n');
  startCountdown(targetDate);
  