class ReceptionDto {
  constructor({_id, name, email, date, time, user}) {
    this.id = _id;
    this.name = name;
    this.email = email;
    this.date = date;
    this.time = time;
    this.user = user;
  }
}

module.exports = {ReceptionDto};
