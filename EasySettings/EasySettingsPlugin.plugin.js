/**
 * @name EasySettingsPlugin
 * @displayName Easy Settings
 * @version 1.0.1
 * @author xanndevs
 * @authorId 395544953310281729
 * @source https://github.com/xanndevs/xanndevsDiscordPlugins/tree/main/EasySettings
 * @description Open server settings when Shift+Alt is pressed.
 */

const EasySettingsPlugin = (() => {
  const pluginName = 'EasySettingsPlugin';
  const pluginVersion = '1.0.1';

  const handleKeyPress = (event) => {
    // Check if the pressed key is Shift+Alt key combination is pressed
    if (event.shiftKey && event.altKey) {
      document.getElementsByClassName("container__7c79d")[0].click();
      document.getElementById("guild-header-popout-settings").click();
    }
  };

  const checkForUpdate = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/xanndevs/xanndevsDiscordPlugins/main/EasySettings/EasySettingsPlugin.plugin.js');
      const data = await response.text();
      const remoteVersionMatch = data.match(/version: ['"](.+?)['"]/);
      
      if (remoteVersionMatch && remoteVersionMatch[1] !== pluginVersion) {
        const shouldUpdate = confirm(`A new version (${remoteVersionMatch[1]}) of ${pluginName} is available. Do you want to update?`);
        
        if (shouldUpdate) {
          // Download and update the plugin
          BdApi.Plugins.disable(pluginName);
          BdApi.Plugins.installFromData(pluginName, data);
          BdApi.Plugins.enable(pluginName);
        }
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
    }
  };

  return class {
    getName() {
      return "EasySettings";
    }
    getDescription() {
      return "Open server settings when Shift+Alt is pressed.";
    }
    getVersion() {
      return pluginVersion;
    }
    getAuthor() {
      return "xanndev";
    }
    start() {
      document.addEventListener("keydown", handleKeyPress);

      setTimeout(checkForUpdate, 10000);
    }
    stop() {
      document.removeEventListener("keydown", handleKeyPress);
    }
  };
})();

EasySettingsPlugin.META = {
  name: "Easy Settings Plugin",
  description: "Open server settings when Shift+Alt is pressed.",
  version: EasySettingsPlugin.pluginVersion,
  author: "xanndevs",
};
