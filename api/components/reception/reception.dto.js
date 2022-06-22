class ReceptionDto {
  constructor({_id, name, email, date, time, user, patient, review = null}) {
    this.id = _id;
    this.name = name;
    this.email = email;
    this.date = date;
    this.time = time;
    this.user = user;
    this.patient = patient;
    this.review = review;
  }
}

module.exports = {ReceptionDto};
