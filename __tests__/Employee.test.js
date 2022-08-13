const Employee = require('../lib/Employee');

test('Employee Matching', () => {
const employee = new Employee('Levi Ackerman', 1234, 'Levi@Ackerman.com');

expect(employee.name).toBe("Levi Ackerman");
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
})

