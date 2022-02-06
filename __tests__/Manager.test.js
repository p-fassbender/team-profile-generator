const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates an employee object", () => {
    const manager = new Manager("Nick", 123, "nick@email.com", 456);

    expect(manager.name).toEqual("Nick");
    expect(manager.id).toBe(123);
    expect(manager.email).toEqual("nick@email.com");
    expect(manager.officeNumber).toBe(456);
    expect(manager.role).toEqual("Manager");
});

test("get the manager role", () => {
    const manager = new Manager("Nick", 123, "nick@email.com");

    expect(manager.getRole()).toEqual("Manager");
});