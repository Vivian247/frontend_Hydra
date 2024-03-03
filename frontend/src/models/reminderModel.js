class ReminderModel {
    constructor(
      id = '',
      userId = '', // Assuming you have the user's ID when creating or editing a reminder
      reminderTime = '08:00', // Default reminder time
      message = 'Time to drink water!', // Default message
      isEnabled = true, // By default, the reminder is enabled
      alertMethod = 'email' // Default alert method
    ) {
      this.id = id;
      this.userId = userId;
      this.reminderTime = reminderTime;
      this.message = message;
      this.isEnabled = isEnabled;
      this.alertMethod = alertMethod;
    }
  }
  
  export default ReminderModel;