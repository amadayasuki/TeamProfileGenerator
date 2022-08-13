const Manager = require('../lib/Manager');

test('Manager Matching', () => {
const employee = new Manager('Levi Ackerman', 1234, 'Levi@Ackerman.com', 1234567890);

expect(employee.name).toBe("Levi Ackerman");
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
expect(employee.officeNumber).toEqual(expect.any(Number));
})
