class ProgressReportModel {
    constructor(
      id = '',
      userId = '', // Assuming you have the user's ID when creating a new progress report
      startDate = new Date(),
      endDate = new Date(),
      dailyGoal = 2000,
      totalGoal = 14000,
      dailyIntakeLogs = [],
      completedAlerts = 0,
      performanceMessage = ''
    ) {
      this.id = id;
      this.userId = userId;
      this.startDate = startDate;
      this.endDate = endDate;
      this.dailyGoal = dailyGoal;
      this.totalGoal = totalGoal;
      this.dailyIntakeLogs = dailyIntakeLogs;
      this.completedAlerts = completedAlerts;
      this.performanceMessage = performanceMessage;
    }
  
    // Example method to add a daily intake log
    addDailyIntakeLog(date, amountConsumed) {
      this.dailyIntakeLogs.push({ date, amountConsumed });
    }
  
    // Method to calculate and set the performance message based on total consumption
    calculatePerformanceMessage() {
      const totalConsumed = this.dailyIntakeLogs.reduce((acc, log) => acc + log.amountConsumed, 0);
      const hydrationCompletionRate = (totalConsumed / this.totalGoal) * 100;
  
     // Set performance message based on hydration completion rate
if (hydrationCompletionRate >= 100) {
    this.performanceMessage = "Outstanding hydration! You've met or exceeded your goal.";
  } else if (hydrationCompletionRate >= 90) {
    this.performanceMessage = "Excellent! You're very close to your hydration goal.";
  } else if (hydrationCompletionRate >= 80) {
    this.performanceMessage = "Very good, but there's a little room for improvement.";
  } else if (hydrationCompletionRate >= 70) {
    this.performanceMessage = "Good effort! Let's try to get a bit closer to your goal.";
  } else if (hydrationCompletionRate >= 60) {
    this.performanceMessage = "You're doing okay, but let's aim for more water intake.";
  } else if (hydrationCompletionRate >= 50) {
    this.performanceMessage = "You're halfway to your goal. Keep pushing to drink more!";
  } else if (hydrationCompletionRate >= 40) {
    this.performanceMessage = "Below half, but there's still room to catch up. Keep it up!";
  } else if (hydrationCompletionRate >= 30) {
    this.performanceMessage = "A decent start, but let's increase our efforts to stay hydrated.";
  } else if (hydrationCompletionRate >= 20) {
    this.performanceMessage = "You've made some progress, but there's a lot more to do.";
  } else if (hydrationCompletionRate >= 10) {
    this.performanceMessage = "It's a start, but remember to drink much more water.";
  } else {
    this.performanceMessage = "Needs significant improvement. Remember, staying hydrated is key to health.";
  }
  }
}
  
  export default ProgressReportModel;