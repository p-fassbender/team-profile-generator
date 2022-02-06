const { expect } = require("@jest/globals");
const { test } = require("picomatch");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.name).toBe("Nick");
    expect(employee.id).toBe(123);
    expect(employee.email).toBe("nick@email.com");
});

test("gets the employee name", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getName()).toReturnWith("Nick");
});

test("gets the employee id", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getId()).toReturnWith(123);
});

test("gets the employee email", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getEmail()).toReturnWith("nick@email.com");
});

test("get the employee role", () => {
    const employee = new Employee("Nick", 123, "nick@email.com");

    expect(employee.getRole()).toReturnWith("Employee");
});