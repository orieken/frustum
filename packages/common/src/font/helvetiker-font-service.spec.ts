// @ts-ignore
import { mockParse } from 'three';
import { helvetikerRegularFont } from './helvetiker-font-service';
//jest.mock('three');

describe('helvetiker-font-service', () => {
    test('FontLoader should be created', () => {
        expect(mockParse).toHaveBeenCalled();
    });
});