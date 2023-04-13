const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const name = 'Beau';
    const id = '0';
    const email = 'jerrybeau89@gmail.com';
    const gitHub = 'jerrybeau89';

    const employee = new Engineer(name, id, email, gitHub);

    it('should return the engineer gitHub when requested', () => {
        expect(employee.getGitHub()).toBe('jerrybeau89');
    });
    it('should return the engineer role when requested', () => {
        expect(employee.getRole()).toBe('Engineer')
    });
});