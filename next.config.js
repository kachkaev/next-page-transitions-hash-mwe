module.exports = {
  publicRuntimeConfig: {
    PAGE_TRANSITIONS_ENABLED: ["1", "true"].includes(
      process.env.PAGE_TRANSITIONS_ENABLED
    )
  }
};
