const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.name).toEqual("Nick");
    expect(employee.id).toBe(123);
    expect(employee.email).toEqual("nick@email.com");
    expect(employee.role).toEqual("Employee");
});

test("gets the employee name", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getName()).toEqual("Nick");
});

test("gets the employee id", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getId()).toBe(123);
});

test("gets the employee email", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getEmail()).toEqual("nick@email.com");
});

test("get the employee role", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getRole()).toEqual("Employee");
});