class OrganizationDto {
  constructor({_id, title, address = null, phone = null}) {
    this.id = _id;
    this.title = title;
    this.address = address;
    this.phone = phone;
  }
}

module.exports = {OrganizationDto};
