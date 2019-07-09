module.exports = {
  transformer: async () => ({
      transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
      },
  })
};
