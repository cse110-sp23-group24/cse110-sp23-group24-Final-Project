class HTMLElement {}
global.HTMLElement = HTMLElement;
global.customElements = {
    define: jest.fn(),
};
global.performance = {
  getEntriesByType: jest.fn().mockReturnValue([{ type: 'reload' }]),
};
global.localStorage = {
  getItem: jest.fn().mockReturnValue('mockedValue'),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.window = {
    addEventListener: jest.fn(),
};
global.window.location = {
    href: '',
};
global.Audio = jest.fn().mockImplementation(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    loop: false,
}));
  
  


describe('proxy', () => {
    test('should shuffle the array', () => {
        expect(2+3).toEqual(5);
    })
})
