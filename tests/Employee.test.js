const Employee = require('../lib/Employee');

describe('Employee', () => {
    const name = 'Beau'
    const id = '0'
    const email = 'jerrybeau89@gmail.com'

    const employee = new Employee(name, id, email)

    it('should return the employee name when requested', () => {
        expect(employee.getName()).toBe('Beau');
    })
    it('should return the employee id when requested', () => {
        expect(employee.getId()).toBe('0');
    })
    it('should return the employee email when requested', () => {
        expect(employee.getEmail()).toBe('jerrybeau89@gmail.com');
    })
    it('should return the employee role when requested', () => {
        expect(employee.getRole()).toBe('Employee')
    })
})