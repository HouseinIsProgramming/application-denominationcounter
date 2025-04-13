module.exports = {
  preset: "ts-jest", // Use ts-jest preset for TypeScript
  testEnvironment: "node", // Set the test environment
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Recognize TypeScript extensions
};
