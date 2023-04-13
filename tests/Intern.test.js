const Intern = require('../lib/Intern');

describe('Intern', () => {
    const name = 'Beau';
    const id = '0';
    const email = 'jerrybeau89@gmail.com';
    const school = 'Pacific Lutheran University';

    const employee = new Intern(name, id, email, school);

    it('should return the intern school when requested', () => {
        expect(employee.getSchool()).toBe('Pacific Lutheran University');
    });
    it('should return the intern role when requested', () => {
        expect(employee.getRole()).toBe('Intern')
    });
});