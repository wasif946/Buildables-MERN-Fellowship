// tests/filter-logic.test.js
/**
 * @fileoverview Unit tests for the filter-logic module.
 * This file uses Jest to test the pure function `filterItems`.
 */
import { filterItems } from '../js/filter-logic.js';

describe('filterItems', () => {
    // A mock array of project objects to use for testing.
    const mockProjects = [
        { title: 'Project Alpha', description: 'An accessible website.' },
        { title: 'Project Beta', description: 'A web application.' },
        { title: 'Blog App', description: 'A full-stack blog application.' },
        { title: 'E-commerce Site', description: 'An online store built with React.' },
    ];

    // Test case 1: Should return all items when the query is an empty string.
    test('should return all items when the query is empty', () => {
        expect(filterItems(mockProjects, '')).toEqual(mockProjects);
    });

    // Test case 2: Should filter projects based on the query.
    test('should filter projects based on the title', () => {
        const query = 'beta';
        const expectedResult = [{ title: 'Project Beta', description: 'A web application.' }];
        expect(filterItems(mockProjects, query)).toEqual(expectedResult);
    });

    // Test case 3: Should perform case-insensitive filtering.
    test('should be case-insensitive', () => {
        const query = 'e-commerce';
        const expectedResult = [{ title: 'E-commerce Site', description: 'An online store built with React.' }];
        expect(filterItems(mockProjects, query)).toEqual(expectedResult);
    });

    // Test case 4: Should return an empty array if no projects match.
    test('should return an empty array if no matches are found', () => {
        const query = 'nonexistent';
        expect(filterItems(mockProjects, query)).toEqual([]);
    });

    // Test case 5: Should match on description as well as title.
    test('should match on description text', () => {
        const query = 'online store';
        const expectedResult = [{ title: 'E-commerce Site', description: 'An online store built with React.' }];
        expect(filterItems(mockProjects, query)).toEqual(expectedResult);
    });
});
