import '@testing-library/jest-dom';

import MLBTeam from '../MLBTeam.ts'

const teams = [
    'Yankees', 'Padres', 'Phillies', 'Cardinals', 'Twins', 'Marlins', 'Pirates',
    'Tigers', 'Nationals', 'Blue', 'Athletics', 'Royals', 'Mariners', 'Dodgers'
]

const dummyData = [
        'Yankees', '-169', '-167', '-165', '-168', '-170', '-165', '-164', '-165', '-165', '-168',
        'Blue', '+138', '+140', '+140', '+138', '+143', '+140', '+138', '+140', '+138', '+138',
        'Padres', '+144', '+145', '+135', '+137', '+140', '+140', '+136', '+138', '+138', '+137',
        'Phillies', '-176', '-173', '-160', '-167', '-165', '-165', '-162', '-159', '-167', '-167',
        'Cardinals', '+140', '+135', '+140', '+130', '+140', '+145', '+136', '+145', '+145', '+130',
        'Pirates', '-172', '-160', '-170', '-164', '-165', '-175', '-162', '-177', '-190', '-164',
        'Twins', '-137', '-142', '-140', '-138', '-140', '-145', '-142', '-148', '-148', '-138',
        'Marlins', '+112', '+120', '+120', '+114', '+118', '+120', '+120', '+125', '+123', '+114',
        'Tigers', '-164', '-157', '-160', '-157', '-155', '-155', '-154', '-150', '-152', '-157',
        'Nationals', '+134', '+130', '+135', '+128', '+130', '+130', '+130', '+128', '+125', '+128',
        'Athletics', '+138', '+140', '+140', '+140', '+140', '+135', '+138', '+132', '+130', '+140',
        'Royals', '+112', '+120', '+120', '+118', '+118', '+125', '+116', '+114', '+112', '+118',
        'Mariners', '-137', '-142', '-140', '-144', '-140', '-150', '-136', '-134', '-136', '-144',
        'White', '+257', '+280', '+280', '+279', '+285', '+270', '+280', '+270', '+270', '+279',
        'Dodgers', '-330', '-374', '-350', '-362', '-365', '-340', '-350', '-335', '-375', '-362']

function tryCastToInt(element) {
    // If the element is already a number, check if it's an integer.
    if (typeof element === 'number') {
        return Number.isInteger(element) ? element : null;
    }

    // If the element is a string, try to parse it as an integer.
    if (typeof element === 'string') {
        const parsedInt = parseInt(element, 10); // Always specify radix 10 for parseInt

        // Check if parseInt successfully parsed a number and if that number is an integer.
        // Also, ensure the original string wasn't just whitespace or an empty string,
        // which parseInt might convert to 0.
        if (!isNaN(parsedInt) && Number.isInteger(parsedInt) && String(parsedInt) === element.trim().replace(/^(-|\+)?0+(?=\d)/, '$1')) {
            return parsedInt;
        }
    }

    // For any other type, or if conversion fails, return null.
    return null;
}

describe('cast function', () => {

    // Test Case 1: Basic scenario with strings and numbers, n=2
    test('should find Yankees with odds length of 10', () => {

        const cast = (mixedArray, n ) => {
            const arrayToReturn = [];

            // Use a standard for loop to control the index
            for (let i = 0; i < mixedArray.length; i++) {
                // Check if the current element is a string using the typeof operator
                if (teams.includes(mixedArray[i])) {
                    // If it's a string, start extracting the next 'n' elements
                    // We start the extraction from the element after the current string (i + 1)
                    const team = new MLBTeam(mixedArray[i],[])
                    for (let j = 0; j < n; j++) {
                          // Calculate the index of the element to be added
                          const nextIndex = i + 1 + j;
                          // Check if the nextIndex is within the bounds of the array
                          if (nextIndex < mixedArray.length) {
                              // Add the element to the new array
                                  team.odds.push(Number(mixedArray[nextIndex]))
                              // team.odds.push(1)
                          }
                    }
                    // After finding a string and adding the next n elements,
                    // you might want to skip the elements you just added in the main loop.
                    // This line is optional, depending on your desired behavior.
                    // If you want to continue scanning from the element after the block you just added, uncomment the line below.
                    arrayToReturn.push(team)
                    i = i + n;
                }
            }
            return arrayToReturn;
        }

        const n = 10;
        const result = cast(dummyData, n);

        // Expect 2 MLBTeam objects in the result array
        // expect(result).toHaveLength(2);
        console.log(result)
        // Verify TeamA
        expect(result[0]).toBeInstanceOf(MLBTeam);
        expect(result[0].team).toBe('Yankees');
        expect(result[0].odds).toEqual([-169, -167, -165, -168, -170, -165, -164, -165, -165, -168]);

        // Verify TeamB
        // expect(result[1]).toBeInstanceOf(MLBTeam);
        // expect(result[1].name).toBe('TeamB');
        // expect(result[1].odds).toEqual([300, 400]);
    });

    // Test Case 2: n is 0, should only return MLBTeam objects with empty odds
    test('should return MLBTeam with empty odds when n is 0', () => {
        const mixedArray = ['TeamX', 10, 'TeamY', 20];
        const n = 0;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(2);
        expect(result[0]).toBeInstanceOf(MLBTeam);
        expect(result[0].name).toBe('TeamX');
        expect(result[0].odds).toEqual([]);

        expect(result[1]).toBeInstanceOf(MLBTeam);
        expect(result[1].name).toBe('TeamY');
        expect(result[1].odds).toEqual([]);
    });

    // Test Case 3: n is larger than remaining elements after a string
    test('should collect fewer than n elements if array ends', () => {
        const mixedArray = ['TeamC', 10, 20, 'TeamD', 30];
        const n = 3;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(2);

        // Verify TeamC
        expect(result[0]).toBeInstanceOf(MLBTeam);
        expect(result[0].name).toBe('TeamC');
        expect(result[0].odds).toEqual([10, 20]); // Only 2 elements available

        // Verify TeamD
        expect(result[1]).toBeInstanceOf(MLBTeam);
        expect(result[1].name).toBe('TeamD');
        expect(result[1].odds).toEqual([30]); // Only 1 element available
    });

    // Test Case 4: mixedArray contains only strings
    test('should return MLBTeam with empty odds if only strings are present', () => {
        const mixedArray = ['TeamE', 'TeamF', 'TeamG'];
        const n = 1;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(3);
        expect(result[0].name).toBe('TeamE');
        expect(result[0].odds).toEqual([]);
        expect(result[1].name).toBe('TeamF');
        expect(result[1].odds).toEqual([]);
        expect(result[2].name).toBe('TeamG');
        expect(result[2].odds).toEqual([]);
    });

    // Test Case 5: mixedArray contains no strings (should return empty array)
    test('should return an empty array if no strings are present', () => {
        const mixedArray = [1, 2, 3, 4, 5];
        const n = 2;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(0);
        expect(result).toEqual([]);
    });

    // Test Case 6: mixedArray is empty
    test('should return an empty array if mixedArray is empty', () => {
        const mixedArray = [];
        const n = 5;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(0);
        expect(result).toEqual([]);
    });

    // Test Case 7: Strings at the end of the array with no numbers following
    test('should handle strings at the end of the array gracefully', () => {
        const mixedArray = ['TeamH', 10, 'TeamI'];
        const n = 2;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('TeamH');
        expect(result[0].odds).toEqual([10]); // Only one number follows
        expect(result[1].name).toBe('TeamI');
        expect(result[1].odds).toEqual([]); // No numbers follow
    });

    // Test Case 8: n is very large
    test('should handle very large n by taking all available numbers', () => {
        const mixedArray = ['TeamJ', 1, 2, 3, 4, 5, 6, 7];
        const n = 100; // Larger than available numbers
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('TeamJ');
        expect(result[0].odds).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    // Test Case 9: Mixed data types in odds
    test('should correctly include mixed data types in odds if present', () => {
        const mixedArray = ['TeamK', 1.5, 'odd_string', null, undefined, 'TeamL'];
        const n = 3;
        const result = cast(mixedArray, n);

        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('TeamK');
        expect(result[0].odds).toEqual([1.5, 'odd_string', null]);
        expect(result[1].name).toBe('TeamL');
        expect(result[1].odds).toEqual([]);
    });
});