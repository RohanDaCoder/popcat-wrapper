const fetch = require("axios");
const baseurl = "https://api.popcat.xyz/";

function request(endpoint, input = "") {
  const res = `${baseurl}v2/${endpoint}?${input}`;
  return res;
}

class CodeClient {
  constructor({ key }) {
    if (!key) throw new Error("Usage: new CodeClient({ key: 'your key' })");
    this.key = key;
  }

  /**
   * Creates a new paste on https://code.popcat.xyz.
   *
   * @param {Object} options - Paste options.
   * @param {string} options.title - Title of the paste. (Required)
   * @param {string} options.description - Description of the paste. (Required)
   * @param {string} options.code - The content/code to paste. (Required)
   * @param {"Active4D"|"All Hallows Eve"|"Amy"|"Birds of Paradise"|"Blackboard"|
   * "Brilliance Black"|"Brilliance Dull"|"Chrome DevTools"|"Clouds Midnight"|"Clouds"|
   * "Cobalt"|"Cobalt2"|"Dawn"|"Dominion Day"|"Dracula"|"Dreamweaver"|"Eiffel"|
   * "Espresso Libre"|"GitHub Dark"|"GitHub Light"|"GitHub"|"IDLE"|"idleFingers"|
   * "iPlastic"|"Katzenmilch"|"krTheme"|"Kuroir Theme"|"LAZY"|"Merbivore Soft"|
   * "Merbivore"|"monoindustrial"|"Monokai Bright"|"Monokai"|"Night Owl"|"Nord"|
   * "Oceanic Next"|"Pastels on Dark"|"Slush and Poppies"|"SpaceCadet"|"Sunburst"|
   * "Tomorrow"|"Twilight"|"Upstream Sunburst"|"Vibrant Ink"|"Xcode_default"|"Zenburnesque"}
   * [options.theme='GitHub Dark'] - Optional theme for syntax highlighting.
   * @param {"JavaScript"|"JSON"|"HTML"|"CSS"|"Markdown"|"PlainText"}
   * [options.language='PlainText'] - Optional language of the paste.
   *
   * @returns {Promise<{ url: string, paste: Object }>} - Returns an object containing:
   *   - url: The URL of the created paste.
   *   - paste: The inserted paste object with details.
   *
   * @throws {Error} Throws an error if required parameters are missing or if the theme/language is invalid.
   */

  async createBin({ title, description, code, theme, language }) {
    const allowedLanguages = [
      "JavaScript",
      "JSON",
      "HTML",
      "CSS",
      "Markdown",
      "PlainText",
    ];
    const allowedThemes = [
      "Active4D",
      "All Hallows Eve",
      "Amy",
      "Birds of Paradise",
      "Blackboard",
      "Brilliance Black",
      "Brilliance Dull",
      "Chrome DevTools",
      "Clouds Midnight",
      "Clouds",
      "Cobalt",
      "Cobalt2",
      "Dawn",
      "Dominion Day",
      "Dracula",
      "Dreamweaver",
      "Eiffel",
      "Espresso Libre",
      "GitHub Dark",
      "GitHub Light",
      "GitHub",
      "IDLE",
      "idleFingers",
      "iPlastic",
      "Katzenmilch",
      "krTheme",
      "Kuroir Theme",
      "LAZY",
      "Merbivore Soft",
      "Merbivore",
      "monoindustrial",
      "Monokai Bright",
      "Monokai",
      "Night Owl",
      "Nord",
      "Oceanic Next",
      "Pastels on Dark",
      "Slush and Poppies",
      "SpaceCadet",
      "Sunburst",
      "Tomorrow",
      "Twilight",
      "Upstream Sunburst",
      "Vibrant Ink",
      "Xcode_default",
      "Zenburnesque",
    ];

    if (!title)
      throw new Error(
        "[Popcat Wrapper] CodeClient.createBin(...) => 'title' parameter is required.",
      );
    if (!description)
      throw new Error(
        "[Popcat Wrapper] CodeClient.createBin(...) => 'description' parameter is required.",
      );
    if (!code)
      throw new Error(
        "[Popcat Wrapper] CodeClient.createBin(...) => 'code' parameter is required.",
      );

    if (
      language &&
      !allowedLanguages.some((l) => l.toLowerCase() === language.toLowerCase())
    ) {
      throw new Error(
        `[Popcat Wrapper] CodeClient.createBin(...) => 'language' must be one of ${allowedLanguages.join(", ")}`,
      );
    }

    if (
      theme &&
      !allowedThemes.some((t) => t.toLowerCase() === theme.toLowerCase())
    ) {
      throw new Error(
        `[Popcat Wrapper] CodeClient.createBin(...) => 'theme' must be one of ${allowedThemes.join(", ")}`,
      );
    }

    const res = await fetch("https://code.popcat.xyz/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: this.key,
      },
      body: JSON.stringify({
        title,
        description,
        code,
        theme: theme || "GitHub Dark",
        language: language || "PlainText",
      }),
    });

    const json = await res.json();

    if (!json || json.error) {
      throw new Error(
        `[Popcat Wrapper] CodeClient.createBin(...) => ${json?.error || "Unknown error occurred"}`,
      );
    }

    return json;
  }
}

class Shortener {
  static async shorten({ url, extension }) {
    if (!url)
      throw new Error(
        "[Popcat Wrapper] Shortener.shorten(...) => 'url' parameter is required.",
      );
    if (!extension)
      throw new Error(
        "[Popcat Wrapper] Shortener.shorten(...) => 'extension' parameter is required.",
      );
    const body = {
      full: url,
      extension,
    };
    const res = await fetch(`https://url.popcat.xyz/api/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();
    if (!json || json.error) {
      throw new Error(
        `[Popcat Wrapper] Shortener.shorten(...) => ${json?.error || "Unknown error occurred"}`,
      );
    }

    return json;
  }

  static async getInfo({ extension }) {
    if (!extension)
      throw new Error(
        "[Popcat Wrapper] Shortener.getInfo(...) => 'extension' parameter is required.",
      );
    const res = await fetch(
      `https://url.popcat.xyz/api/info?short=${encodeURIComponent(extension)}`,
    );
    const json = await res.json();
    if (!json || json.error)
      throw new Error(
        `[Popcat Wrapper] Shortener.getInfo(...) => ${json?.error || "Unknown error occurred"}`,
      );
    return json;
  }
}

module.exports.discordMessage = ({
  username,
  content,
  avatar,
  color,
  timestamp,
}) => {
  if (!username)
    throw new Error(
      "[Popcat Wrapper] discordMessage({ username, content, avatar, color, timestamp }) => 'username' parameter is missing.",
    );
  if (!content)
    throw new Error(
      "[Popcat Wrapper] discordMessage({ username, content, avatar, color, timestamp }) => 'content' parameter is missing.",
    );
  const url = `${baseurl}v2/discord-message?username=${encodeURIComponent(username)}&content=${encodeURIComponent(content)}${avatar ? `&avatar=${encodeURIComponent(avatar)}` : ""}${color ? `&color=${encodeURIComponent(color)}` : ""}${timestamp ? `&timestamp=${encodeURIComponent(timestamp)}` : ""}`;
  return url;
};

module.exports.couldread = (text) => {
  if (!text || text.length === 0)
    throw new Error(
      "[Popcat Wrapper] couldread(text) => 'text' parameter is missing.",
    );
  const url = `${baseurl}v2/couldread?text=${encodeURIComponent(text)}`;
  return url;
};

module.exports.supreme = (text) => {
  if (!text || text.length === 0)
    throw new Error(
      "[Popcat Wrapper] supreme(text) => 'text' parameter is missing.",
    );
  const url = `${baseurl}v2/supreme?text=${encodeURIComponent(text)}`;
  return url;
};

module.exports.quote = (image, text, name) => {
  if (!image || !text || !name || name.length === 0)
    throw new Error(
      "[Popcat Wrapper] quote(image, text, name) => Either 'image', 'text' or 'name' parameter is missing.",
    );
  if (text.length === 0 || text.length > 125)
    return new Error(
      "[Popcat Wrapper] quote(image, text, name) => 'text' parameter must be between 1-125 characters.",
    );
  const url = `${baseurl}v2/quote?image=${encodeURIComponent(image)}&text=${encodeURIComponent(text)}&name=${encodeURIComponent(name)}`;
  return url;
};

module.exports.happysad = async (text1, text2) => {
  if (!text1 || !text2)
    throw new Error(
      "[Popcat Wrapper] happysad(text1, text2) => Either 'text1' or 'text2' parameter is missing.",
    );
  const url = `${baseurl}v2/happysad?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
  return url;
};

module.exports.communism = async (imageURL) => {
  if (!imageURL)
    throw new Error(
      "[Popcat Wrapper] communism(image) => 'imageURL' parameter is missing.",
    );
  const url = `${baseurl}v2/communism?image=${encodeURIComponent(imageURL)}`;
  return url;
};

module.exports.randomcolor = async () => {
  const color = await fetch("https://api.popcat.xyz/v2/randomcolor").then((r) =>
    r.json(),
  );
  return color;
};

module.exports.periodicTable = async (element) => {
  if (!element)
    throw new Error(
      "[Popcat Wrapper] periodicTable(element) ==> 'element' parameter is missing.",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/periodic-table?element=${encodeURIComponent(element)}`,
  );
  const { error, message } = await res.json();
  if (error)
    throw new Error(`[Popcat Wrapper] Periodic Table: ${message.error}`);
  return message;
};

module.exports.jail = function (imageURL) {
  if (!imageURL)
    throw new Error(
      "[Popcat Wrapper] jail(imageURL) ==> 'imageURL' parameter is missing.",
    );
  const url = `${baseurl}v2/jail?image=${encodeURIComponent(imageURL)}`;
  return url;
};

module.exports.unforgivable = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] unforgivable(text) ==> 'text' parameter is missing.",
    );
  const url = `${baseurl}v2/unforgivable?text=${encodeURIComponent(text)}`;
  return url;
};

module.exports.imdb = async function (name) {
  if (!name)
    throw new Error(
      "[Popcat Wrapper] imdb(name) ==> 'name' parameter is missing",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/imdb?q=${encodeURIComponent(name)}`,
  ).then((r) => r.json());
  if (res.error) throw new Error(res.message.error);
  return res.message;
};
module.exports.steam = async function (name) {
  if (!name)
    throw new Error(
      "[Popcat Wrapper] steam(name) ==> 'name' parameter is missing.",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/steam?q=${encodeURIComponent(name)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(message.error);
  return message;
};
module.exports.screenshot = async function (url) {
  if (!url)
    throw new Error(
      "[Popcat Wrapper] screenshot(url) ==> 'url' parameter is missing.",
    );
  const { isurl } = await fetch(
    `https://api.popcat.xyz/v2/is-url?url=${encodeURIComponent(url)}`,
  ).then((r) => r.json());
  if (isurl === false)
    throw new Error("[Popcat Wrapper] screenshot(url) ==> 'url' is not valid!");
  const img = `https://api.popcat.xyz/v2/screenshot?url=${encodeURIComponent(url)}`;
  return img;
};

module.exports.lyrics = async function (song) {
  if (!song)
    throw new Error(
      "[Popcat Wrapper] The field 'song' was left empty int he LYRICS function!",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/lyrics?song=${encodeURIComponent(song)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
  return message;
};

module.exports.car = async function () {
  const res = await fetch(`https://api.popcat.xyz/v2/car`);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
  return message;
};
module.exports.showerthought = async function () {
  const res = await fetch(`https://api.popcat.xyz/v2/showerthoughts`);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
  return message;
};
module.exports.subreddit = async function (subreddit) {
  if (!subreddit)
    throw new Error(
      "[Popcat Wrapper] The field 'subeddit' was left empty in the SUBREDDIT function!",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/subreddit/${encodeURIComponent(subreddit)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] ${message.error}`);
  return message;
};
module.exports.oogway = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the OOGWAY function!",
    );
  const img = `https://api.popcat.xyz/v2/oogway?text=${encodeURIComponent(text)}`;
  return img;
};
module.exports.opinion = function (image, text) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the OPINION function!",
    );
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the OPINION function!",
    );
  const img = `https://api.popcat.xyz/v2/opinion?image=${encodeURIComponent(image)}&text=${encodeURIComponent(text)}`;
  return img;
};
module.exports.wanted = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the WANTED function!",
    );
  const url = `https://api.popcat.xyz/v2/wanted?image=${encodeURIComponent(image)}`;
  return url;
};
module.exports.sadcat = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the SAD CAT function. Need help? https://popcat.xyz/server",
    );
  const url = `${baseurl}v2/sadcat?text=${encodeURIComponent(text)}`;
  return url;
};
module.exports.github = async function (username) {
  if (!username)
    throw new Error(
      "[Popcat Wrapper] The field 'username' was left empty in the GITHUB function!",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/github/${encodeURIComponent(username)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Github: ${message.error}`);
  return message;
};
module.exports.weather = async function (place) {
  if (!place)
    throw new Error(
      "[Popcat Wrapper] The field 'place' was left empty in the WEATHER function!",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/weather?q=${encodeURIComponent(place)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Weather: ${message.error}`);
  return message;
};
module.exports.lulcat = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the LUL CAT function. Need help? https://popcat.xyz/server",
    );
  const url = `${baseurl}v2/lulcat?text=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Lul Cat: ${message.error}`);
  return message;
};
module.exports.gun = function (image, text) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the GUN function!",
    );
  const url = `https://api.popcat.xyz/v2/gun?image=${encodeURIComponent(image)}${text ? `&text=${encodeURIComponent(text)}` : ""}`;
  return url;
};
module.exports.country = async function (name) {
  if (!name)
    throw new Error(
      "[Popcat Wrapper] The field 'country name' was left empty in the COUNTRY function!",
    );
  const res = await fetch(`${baseurl}v2/countries/${encodeURIComponent(name)}`);
  const { error, message } = await res.json();
  if (error)
    throw new Error(
      `[Popcat Wrapper] Invalid country in the COUNTRY function!`,
    );
  return message;
};

module.exports.npm = async function (pkg) {
  if (!pkg)
    throw new Error(
      "[Popcat Wrapper] The field 'package name' was left empty in the NPM function!",
    );
  const url = `https://api.popcat.xyz/v2/npm?q=${encodeURIComponent(pkg)}`;
  const res = await fetch(url);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] NPM: ${message.error}`);
  return message;
};
module.exports.fact = async function () {
  const url = `https://api.popcat.xyz/v2/fact`;
  const res = await fetch(url);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Fact: ${message.error}`);
  return message.fact;
};
module.exports.drake = function (text1, text2) {
  if (!text1)
    throw new Error("The field text1 was left empty in the drake function");
  if (!text2)
    throw new Error("The field text2 was left empty in the drake function");
  const response = `https://api.popcat.xyz/v2/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
  return response;
};
module.exports.pooh = function (text1, text2) {
  if (!text1)
    throw new Error("The field text1 was left empty in the pooh function");
  if (!text2)
    throw new Error("The field text2 was left empty in the pooh function");
  const response = `https://api.popcat.xyz/v2/pooh?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
  return response;
};
module.exports.ship = function (image1, image2) {
  if (!image1)
    throw new Error(
      "The field image1 was left empty in the ship function. Need help? https://dsc.gg/popcatcom",
    );
  if (!image2)
    throw new Error(
      "The field image2 was left empty in the ship function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `user1=${encodeURIComponent(image1)}&user2=${encodeURIComponent(image2)}`;
  const response = `https://api.popcat.xyz/v2/ship?${input}`;
  return response;
};
module.exports.colorify = function (image, color) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom",
    );
  if (!color)
    throw new Error(
      "[Popcat Wrapper] The field 'color' was left empty in the colorify function. Need help? https://dsc.gg/popcatcom",
    );
  const response = `https://api.popcat.xyz/v2/colorify?image=${encodeURIComponent(image)}&color=${encodeURIComponent(color)}`;
  return response;
};
module.exports.biden = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the biden function. Need help? https://dsc.gg/popcatcom",
    );
  const res = `https://api.popcat.xyz/v2/biden?text=${encodeURIComponent(text)}`;
  return res;
};
module.exports.joke = async function () {
  const res = await fetch("https://api.popcat.xyz/v2/joke");
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Joke: ${message.error}`);
  return message.joke;
};
module.exports.pikachu = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the pikachu function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const response = `https://api.popcat.xyz/v2/pikachu?${input}`;
  return response;
};
module.exports.drip = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the drip function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const response = `https://api.popcat.xyz/v2/drip?${input}`;
  return response;
};
module.exports.clown = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the clown function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const response = `https://api.popcat.xyz/v2/clown?${input}`;
  return response;
};
module.exports.translate = async function (text, to) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the translate function. Need help? https://dsc.gg/popcatcom",
    );
  if (!to)
    throw new Error(
      "[Popcat Wrapper] The field 'to' was left empty in the translate function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}&to=${encodeURIComponent(to)}`;
  const res = await fetch(`https://api.popcat.xyz/translate?${input}`);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Translate: ${message.error}`);
  return message.translated;
};
module.exports.reverse = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the reverse function",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/reverse?text=${encodeURIComponent(text)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Reverse: ${message.error}`);
  return message.text;
};
module.exports.uncover = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the uncover function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("uncover", input);
  return res;
};
module.exports.ad = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the ad function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("ad", input);
  return res;
};
module.exports.blur = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the blur function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("blur", input);
  return res;
};
module.exports.invert = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the invert function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("invert", input);
  return res;
};
module.exports.greyscale = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the greyscale function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("greyscale", input);
  return res;
};
module.exports.alert = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the alert function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = request("alert", input);
  return res;
};
module.exports.caution = function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the caution function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = request("caution", input);
  return res;
};
module.exports.colorinfo = async function (color) {
  if (!color)
    throw new Error(
      "[Popcat Wrapper] The field 'color' was left empty in the colorinfo function. Need help? https://dsc.gg/popcatcom",
    );
  let colour = color;
  if (colour.includes("#")) colour = colour.split("#")[1];
  const res = await fetch(
    `https://api.popcat.xyz/v2/color/${encodeURIComponent(colour)}`,
  );
  const { error, message } = await res.json();
  if (error)
    throw new Error(
      `[Popcat Wrapper] Invalid hex in the 'colorinfo' function!`,
    );
  return message;
};
module.exports.jokeoverhead = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the jokeoverhead function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("jokeoverhead", input);
  return res;
};
module.exports.mnm = function (image) {
  if (!image)
    throw new Error(
      "[Popcat Wrapper] The field 'image' was left empty in the mnm function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `image=${encodeURIComponent(image)}`;
  const res = request("mnm", input);
  return res;
};
module.exports.mock = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the mock function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = await fetch("https://api.popcat.xyz/v2/mock?" + input);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Mock: ${message.error}`);
  return message.text;
};
module.exports.doublestruck = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the doublestruck function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = await fetch("https://api.popcat.xyz/v2/doublestruck?" + input);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Doublestruck: ${message.error}`);
  return message.text;
};

module.exports.texttomorse = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the texttomorse function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = await fetch("https://api.popcat.xyz/v2/texttomorse?" + input);
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] TextToMorse: ${message.morse}`);
  return message.morse;
};

module.exports.wouldyourather = async function () {
  const res = await fetch("https://api.popcat.xyz/v2/wyr");
  const { error, message } = await res.json();
  if (error)
    throw new Error(`[Popcat Wrapper] WouldYouRather: ${message.error}`);
  return message;
};
module.exports.randommeme = async function () {
  const res = await fetch("https://api.popcat.xyz/v2/meme");
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Meme: ${message.error}`);
  return message;
};
module.exports.welcomecard = function welcomecard(
  background,
  avatar,
  text_1,
  text_2,
  text_3,
) {
  if (!background)
    throw new SyntaxError(
      "welcomeImage(background, avatar, text_1, text_2, text_3, color) ==> background is null.",
    );
  if (!background.startsWith("https://"))
    throw new Error(
      "[Popcat Wrapper] welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a valid URL.",
    );
  if (!background.endsWith(".png"))
    throw new Error(
      "[Popcat Wrapper] welcomecard(background, avatar, text_1, text_2, text_3) ==> background must be a PNG.",
    );
  if (!avatar)
    throw new SyntaxError(
      "welcomecard(background, avatar, text_1, text_2, text_3) ==> avatar is null",
    );
  if (!text_1)
    throw new SyntaxError(
      "welcomecard(background, avatar, text_1, text_2, text_3) ==> text_1 is null",
    );
  if (!text_2)
    throw new SyntaxError(
      "welcomecard(background, avatar, text_1, text_2, text_3) ==> text_2 is null",
    );
  if (!text_3)
    throw new SyntaxError(
      "welcomecard(background, avatar, text_1, text_2, text_3) ==> text_3 is null",
    );
  const input = `background=${encodeURIComponent(background)}&avatar=${encodeURIComponent(avatar)}&text1=${encodeURIComponent(text_1)}&text2=${encodeURIComponent(text_2)}&text3=${encodeURIComponent(text_3)}`;
  const welcomeimg = request("welcomecard", input);
  return welcomeimg;
};

module.exports.itunes = async function (x) {
  if (!x)
    throw new Error(
      "[Popcat Wrapper] The field 'song' was left empty in the iTunes function.",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/itunes?q=${encodeURIComponent(x)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Song Not found on iTunes!`);
  return message;
};

module.exports.chatbot = async function (x, ownername, botname) {
  if (!x)
    throw new Error(
      "[Popcat Wrapper] The field 'content' was left empty in the chatbot function.",
    );
  if (!ownername)
    throw new Error(
      "[Popcat Wrapper] The field 'ownername' was left empty in the chatbot function.",
    );
  if (!botname)
    throw new Error(
      "[Popcat Wrapper] The field 'botname' was left empty in the chatbot function.",
    );
  const res = await fetch(
    `https://api.popcat.xyz/v2/chatbot?msg=${encodeURIComponent(x)}&owner=${encodeURIComponent(ownername)}&botname=${encodeURIComponent(botname)}`,
  );
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] Chatbot: ${message.error}`);
  return message;
};
module.exports.encode = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the encode function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = await fetch(`https://api.popcat.xyz/v2/encode?${input}`);
  const { error, message } = await res.json();
  if (error)
    throw new Error(`[Popcat Wrapper] Binary Encode: ${message.error}`);
  return message.text;
};
module.exports.decode = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'binary' was left empty in the decode function. Need help? https://dsc.gg/popcatcom",
    );
  const input = `binary=${encodeURIComponent(text)}`;
  const res = await fetch(`https://api.popcat.xyz/v2/decode?${input}`);
  const { error, message } = await res.json();
  if (error)
    throw new Error(`[Popcat Wrapper] Binary Decode: ${message.error}`);
  return message.text;
};
module.exports.facts = async function (text) {
  if (!text)
    throw new Error(
      "[Popcat Wrapper] The field 'text' was left empty in the facts functuion.",
    );
  const input = `text=${encodeURIComponent(text)}`;
  const res = request("facts", input);
  return res;
};
module.exports._8ball = async function () {
  const res = await fetch("https://api.popcat.xyz/v2/8ball");
  const { error, message } = await res.json();
  if (error) throw new Error(`[Popcat Wrapper] 8ball: ${message.error}`);
  return message.answer;
};
module.exports.CodeClient = CodeClient;
module.exports.Shortener = Shortener;
