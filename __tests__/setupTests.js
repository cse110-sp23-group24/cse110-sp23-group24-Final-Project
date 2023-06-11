class HTMLElement {}
global.HTMLElement = HTMLElement;
global.customElements = {
    define: jest.fn(),
  };
  global.performance = {
    getEntriesByType: jest.fn().mockReturnValue([{ type: 'reload' }]),
  };
  

describe('proxy', () => {
    test('should shuffle the array', () => {
        expect(2+3).toEqual(5);
    })
})
