const Intern = require("../lib/Intern");

test("creates an employee object", () => {
    const intern = new Intern("Nick", 123, "nick@email.com", "school");

    expect(intern.name).toEqual("Nick");
    expect(intern.id).toBe(123);
    expect(intern.email).toEqual("nick@email.com");
    expect(intern.school).toEqual("school");
    expect(intern.role).toEqual("Intern");
});

test("get the intern school", () => {
    const intern = new Intern("Nick", 123, "nick@email.com", "school");
    expect(intern.getSchool()).toEqual("school");
});

test("get the intern role", () => {
    const intern = new Intern("Nick", 123, "nick@email.com", "school");

    expect(intern.getRole()).toEqual("Intern");
});