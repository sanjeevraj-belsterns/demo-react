import reportWebVitals from '../reportWebVitals';

describe('reportWebVitals', () => {
    it('should call the callback function with the metrics', () => {
        const mockCallback = jest.fn();
        reportWebVitals(mockCallback);
        expect(mockCallback).toHaveBeenCalled();
    });

    it('should not call the callback if no callback is provided', () => {
        console.log = jest.fn();
        reportWebVitals();
        expect(console.log).toHaveBeenCalled();
    });
});