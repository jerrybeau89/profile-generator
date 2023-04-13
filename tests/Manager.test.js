const Manager = require('../lib/Manager');

describe('Manager', () => {
    const name = 'Beau';
    const id = '0';
    const email = 'jerrybeau89@gmail.com';
    const officeNumber = '206';

    const employee = new Manager(name, id, email, officeNumber);

    it('should return the manager officeNumber when requested', () => {
        expect(employee.getOfficeNumber()).toBe('206');
    });
    it('should return the manager role when requested', () => {
        expect(employee.getRole()).toBe('Manager')
    });
});