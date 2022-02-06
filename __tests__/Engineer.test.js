const Engineer = require("../lib/Engineer");

test("creates an employee object", () => {
    const engineer = new Engineer("Nick", 123, "nick@email.com", "nickhub");

    expect(engineer.name).toEqual("Nick");
    expect(engineer.id).toBe(123);
    expect(engineer.email).toEqual("nick@email.com");
    expect(engineer.github).toEqual("nickhub");
    expect(engineer.role).toEqual("Engineer");
});

test("get the engineer github", () => {
    const engineer = new Engineer("Nick", 123, "nick@email.com", "nickhub");
    expect(engineer.getGithub()).toEqual("nickhub");
});

test("get the engineer role", () => {
    const engineer = new Engineer("Nick", 123, "nick@email.com", "nickhub");

    expect(engineer.getRole()).toEqual("Engineer");
});