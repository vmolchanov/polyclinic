class UserDto {
  constructor({
    _id,
    lastName,
    firstName,
    secondName = null,
    email,
    phone = null,
    cabinet = null,
    role = null,
    organization = null,
    post = null,
    feedbacks = null,
  }) {
    this.id = _id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
    this.phone = phone;
    this.cabinet = cabinet;
    this.role = role;
    this.organization = organization;
    this.post = post;
    this.feedbacks = feedbacks;
  }
}

module.exports = {UserDto};
