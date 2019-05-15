export const mockParse = jest.fn();

export const FontLoader = jest.fn().mockImplementation(() => {
    return { parse: mockParse };
});