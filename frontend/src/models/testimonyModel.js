class TestimonyModel {
    constructor(
      id = '',
      firstName = '',
      lastName = '',
      title = '',
      content = '',
      datePosted = new Date(),
      rating = 5,
      isVisible = true
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.title = title;
      this.content = content;
      this.datePosted = datePosted;
      this.rating = rating;
      this.isVisible = isVisible;
    }
  }
  
  export default TestimonyModel;