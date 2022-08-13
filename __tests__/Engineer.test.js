const Engineer = require('../lib/Engineer');

test('Engineer Matching', () => {
const employee = new Engineer('Levi Ackerman', 1234, 'Levi@Ackerman.com', 'Levi-Ackerman');

expect(employee.name).toBe("Levi Ackerman");
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
expect(employee.github).toEqual(expect.any(String));
})

