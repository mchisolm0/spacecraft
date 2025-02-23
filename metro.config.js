const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.transformer.unstable_allowRequireContext = true;

const storyEnabled = process.env.STORYBOOK_ENABLED ?? false;

// Only include storybook files in the metro bundler if storybook is enabled
config.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(
    context,
    moduleName,
    platform,
  );

  if (
    storyEnabled !== "true" &&
    defaultResolveResult?.filePath?.includes?.(".storybook/")
  ) {
    return {
      type: "empty",
    };
  }

  return defaultResolveResult;
};

module.exports = withStorybook(config, {
  enabled: storyEnabled,
  // Path to your storybook config
  configPath: path.resolve(__dirname, "./.storybook"),
});
