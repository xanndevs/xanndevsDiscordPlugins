/**
 * @name EasySettingsPlugin
 * @displayName Easy Settings
 * @version 1.1.0
 * @author xanndevs
 * @authorId 395544953310281729
 * @source https://github.com/xanndevs/xanndevsDiscordPlugins
 * @description Open server settings when Shift+Alt is pressed.
 */

const EasySettingsPlugin = (() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is Shift+Alt key combination is pressed
      if (event.shiftKey && event.altKey) {
        document.getElementsByClassName("container__7c79d")[0].click();
        document.getElementById("guild-header-popout-settings").click();
        alert(1);
      }
    };

    const checkForUpdate = async () => {
      try {
        const response = await fetch('https://github.com/xanndevs/xanndevsDiscordPlugins');
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
        return "1.1.0";
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
    version: "1.1.0",
    author: "xanndevs",
  };
  