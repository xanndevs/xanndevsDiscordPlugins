/**
 * @name EasySettingsPlugin
 * @displayName Easy Settings
 * @version 1.0.0
 * @author xanndev
 * @authorId 395544953310281729
 * @source https://xann.dev
 * @description Open server settings when Shift+Alt is pressed.
 */

const EasySettingsPlugin = (() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is Shift+Alt key combination is pressed
      if (event.shiftKey && event.altKey) {
        document.getElementsByClassName("container__7c79d")[0].click();
        document.getElementById("guild-header-popout-settings").click();
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
        return "1.0.0";
      }
      getAuthor() {
        return "xanndev";
      }
      start() {
        document.addEventListener("keydown", handleKeyPress);
      }
      stop() {
        document.removeEventListener("keydown", handleKeyPress);
      }
    };
  })();
  
  EasySettingsPlugin.META = {
    name: "Easy Settings Plugin",
    description: "Open server settings when Shift+Alt is pressed.",
    version: "1.0.0",
    author: "xanndev",
  };
  