const wrapper = require("../index");

(async () => {
  try {
    const discordMessage = await wrapper.discordMessage({
      username: "TestUser",
      content: "This is a test message",
      color: "7289da"
    });
    console.log("Discord Message image URL:", discordMessage);
  } catch (err) {
    console.error("Error in test:", err);
  }
})();
