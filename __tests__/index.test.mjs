import { shuffleArray } from '../pages/select-cards/index.js';

describe('shuffle array', () => {
    test('should shuffle the array', () => {
        const originalArray = [1, 2, 3, 4, 5];
        const shuffledArray = shuffleArray([...originalArray]);

        // Verify that the shuffled array is not equal to the original array
        expect(shuffledArray).not.toEqual(originalArray);

        // Verify that the shuffled array contains all the same elements as the original array
        expect(shuffledArray).toEqual(expect.arrayContaining(originalArray));
    })
})