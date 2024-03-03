class UserModel {
    constructor(
      id = '',
      username = '',
      profile = { firstName: '', lastName: '' },
      email = '',
      phoneNumber = '',
      address = { street: '', city: '', country: '', postalCode: '', state: '' },
      lastLogin = new Date()
    ) {
      this.id = id;
      this.username = username;
      this.profile = profile;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.lastLogin = lastLogin;
    }
  
    // Method to return the full name
    getFullName() {
      return `${this.profile.firstName} ${this.profile.lastName}`;
    }
  
    // Method to validate email format
    isValidEmail() {
      const emailRegex = /.+\@.+\..+/;
      return emailRegex.test(this.email);
    }
  
    // Method to format the address into a single string
    getFormattedAddress() {
      const { street, city, country, postalCode, state } = this.address;
      return `${street}, ${city}, ${state}, ${postalCode}, ${country}`;
    }
  
    // Additional methods related to the user can be added here
  }
  
  export default UserModel;