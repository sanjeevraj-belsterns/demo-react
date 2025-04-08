module.exports = {
    testRegex: '(/__tests__/.*|(\.|/)(test|spec))\.css$',
    transform: {
        '^.+\.css$': 'css-jest',
    },
};