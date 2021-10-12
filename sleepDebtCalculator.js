// Sleeping hours function
const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'sunday') {
      return 8;
    }
    if (day === 'monday') {
      return 5;
    }
    if (day === 'tuesday') {
      return 6;
    }
    if (day === 'wednesday') {
      return 4;
    }
    if (day === 'thursday') {
      return 7;
    }
    if (day === 'friday') {
      return 7;
    }
    if (day === 'saturday') {
      return 9;
    }
  }
  // Get actual sleep hours
  const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
  
  // Ideal Sleep hours
  function getIdealSleepHours (idealHours) {
    return idealHours * 7;
  }
  // Calculate sleep debt
  function calculateSleepDebt () {
    const actualSleepHours = getActualSleepHours();
    console.log(`You had a total of ${actualSleepHours} hours of sleep last week!`);
    const idealSleepHours = getIdealSleepHours(9);
    console.log(`Your total ideal sleeping hours per week is ${idealSleepHours} hours!`);
    let diffInSleep;
  // Results
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      diffInSleep = actualSleepHours - idealSleepHours;
      console.log(`You got ${diffInSleep} hours more sleep than needed!`);
    } else {
      diffInSleep = idealSleepHours - actualSleepHours;
      console.log(`You should get ${diffInSleep} hours more of rest!`);
    }
  }
  // Start the program
  calculateSleepDebt();
  