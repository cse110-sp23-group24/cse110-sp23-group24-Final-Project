// jest.config.js
// module.exports = {
//     preset: 'jest-environment-node',
//     testEnvironmentOptions: {
//         // Configure Vite-specific options
//         vite: {
//             // Specify the Vite configuration file if you have one
//             configFile: './vite.config.js',
//         },
//     },
// };
module.exports = {
    testEnvironment: 'node',
    testEnvironmentOptions: {
        // Configure Vite-specific options
        vite: {
            // Specify the Vite configuration file if you have one
            configFile: './vite.config.js',
        },
    },
    setupFilesAfterEnv: ['./__tests__/setupTests.js'],
};
