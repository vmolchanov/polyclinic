class UserDto {
    constructor({_id, email, roles}) {
        this.id = _id;
        this.email = email;
        this.roles = roles;
    }
}

module.exports.UserDto = UserDto;
