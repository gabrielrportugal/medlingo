module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx)']
};