class WaterLogModel {
    constructor(
      id = '',
      userId = '', // Assuming the user's ID is provided or obtained from the user context/session
      date = new Date(),
      dailyAmount = 2000, // Default daily recommended amount in milliliters
      totalAmount = 14000, // Default total recommended amount for the therapy duration
      therapyDuration = 7, // Default duration of therapy in days
      amountPerHour = 0, // To be calculated based on dailyAmount and sleepTime
      sleepTime = 8 // Default user's average sleep time in hours
    ) {
      this.id = id;
      this.userId = userId;
      this.date = date;
      this.dailyAmount = dailyAmount;
      this.totalAmount = totalAmount;
      this.therapyDuration = therapyDuration;
      this.sleepTime = sleepTime;
      // Calculate amountPerHour based on provided values
      this.calculateAmountPerHour();
    }
  
    calculateAmountPerHour() {
      const wakingHours = 24 - this.sleepTime; // Assuming 24 hours in a day
      this.amountPerHour = this.dailyAmount / wakingHours;
    }
  }
  
  export default WaterLogModel;