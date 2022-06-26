// https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f
// referência da configuração dos testes utilizando vite /\

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}