const Intern = require('../lib/Intern');

test('Intern Matching', () => {
const employee = new Intern('Levi Ackerman', 1234, 'Levi@Ackerman.com', 'SC');

expect(employee.name).toBe("Levi Ackerman");
expect(employee.id).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
expect(employee.school).toEqual(expect.any(String));
})

