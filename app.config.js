module.exports = {
  expo: {
    name: "spacecraft",
    slug: "spacecraft",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    extra: {
      storybookEnabled:
        process.env.STORYBOOK_ENABLED !== undefined
          ? process.env.STORYBOOK_ENABLED
          : "false",
    },
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    jsEngine: "hermes",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.hchs-cs.spacecraft",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.hchscs.spacecraft",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
