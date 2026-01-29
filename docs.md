## Functions

<dl>
<dt><a href="#discordMessage">discordMessage(params)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a Discord message image URL with custom parameters.</p>
</dd>
<dt><a href="#couldread">couldread(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a couldread image URL with the provided text.</p>
</dd>
<dt><a href="#supreme">supreme(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a supreme image URL with the provided text.</p>
</dd>
<dt><a href="#quote">quote(image, text, name)</a> ⇒ <code>string</code> | <code>Error</code></dt>
<dd><p>Generates a quote image URL with the provided image, text, and name.</p>
</dd>
<dt><a href="#happysad">happysad(text1, text2)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a happysad image URL with the provided texts.</p>
</dd>
<dt><a href="#communism">communism(imageURL)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a communism image URL with the provided image.</p>
</dd>
<dt><a href="#randomcolor">randomcolor()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches a random color from the API.</p>
</dd>
<dt><a href="#periodicTable">periodicTable(element)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches information about an element from the periodic table.</p>
</dd>
<dt><a href="#jail">jail(imageURL)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a jail image URL with the provided image.</p>
</dd>
<dt><a href="#unforgivable">unforgivable(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an unforgivable image URL with the provided text.</p>
</dd>
<dt><a href="#imdb">imdb(name)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches movie/TV show information from IMDb.</p>
</dd>
<dt><a href="#steam">steam(name)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches game information from Steam.</p>
</dd>
<dt><a href="#screenshot">screenshot(url)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Takes a screenshot of the provided URL.</p>
</dd>
<dt><a href="#lyrics">lyrics(song)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches lyrics for the provided song.</p>
</dd>
<dt><a href="#car">car()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches random car information.</p>
</dd>
<dt><a href="#showerthought">showerthought()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches a random shower thought.</p>
</dd>
<dt><a href="#subreddit">subreddit(subreddit)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches information about a subreddit.</p>
</dd>
<dt><a href="#oogway">oogway(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an oogway image URL with the provided text.</p>
</dd>
<dt><a href="#opinion">opinion(image, text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an opinion image URL with the provided image and text.</p>
</dd>
<dt><a href="#wanted">wanted(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a wanted image URL with the provided image.</p>
</dd>
<dt><a href="#sadcat">sadcat(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a sadcat image URL with the provided text.</p>
</dd>
<dt><a href="#github">github(username)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches GitHub user information.</p>
</dd>
<dt><a href="#weather">weather(place)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches weather information for the provided place.</p>
</dd>
<dt><a href="#lulcat">lulcat(text)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches a lulcat image with the provided text.</p>
</dd>
<dt><a href="#gun">gun(image, [text])</a> ⇒ <code>string</code></dt>
<dd><p>Generates a gun image URL with the provided image and optional text.</p>
</dd>
<dt><a href="#country">country(name)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches information about a country.</p>
</dd>
<dt><a href="#npm">npm(pkg)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches information about an npm package.</p>
</dd>
<dt><a href="#fact">fact()</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Fetches a random fact.</p>
</dd>
<dt><a href="#drake">drake(text1, text2)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a drake image URL with the provided texts.</p>
</dd>
<dt><a href="#pooh">pooh(text1, text2)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a pooh image URL with the provided texts.</p>
</dd>
<dt><a href="#ship">ship(image1, image2)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a ship image URL with the provided images.</p>
</dd>
<dt><a href="#colorify">colorify(image, color)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a colorified image URL with the provided image and color.</p>
</dd>
<dt><a href="#biden">biden(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a biden image URL with the provided text.</p>
</dd>
<dt><a href="#joke">joke()</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Fetches a random joke.</p>
</dd>
<dt><a href="#pikachu">pikachu(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a pikachu image URL with the provided text.</p>
</dd>
<dt><a href="#drip">drip(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a drip image URL with the provided image.</p>
</dd>
<dt><a href="#clown">clown(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a clown image URL with the provided image.</p>
</dd>
<dt><a href="#translate">translate(text, to)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Translates text to the specified language.</p>
</dd>
<dt><a href="#reverse">reverse(text)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Reverses the provided text.</p>
</dd>
<dt><a href="#uncover">uncover(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an uncover image URL with the provided image.</p>
</dd>
<dt><a href="#ad">ad(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an ad image URL with the provided image.</p>
</dd>
<dt><a href="#blur">blur(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a blurred image URL with the provided image.</p>
</dd>
<dt><a href="#invert">invert(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an inverted image URL with the provided image.</p>
</dd>
<dt><a href="#greyscale">greyscale(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a greyscale image URL with the provided image.</p>
</dd>
<dt><a href="#alert">alert(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an alert image URL with the provided text.</p>
</dd>
<dt><a href="#caution">caution(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a caution image URL with the provided text.</p>
</dd>
<dt><a href="#colorinfo">colorinfo(color)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches information about a color.</p>
</dd>
<dt><a href="#jokeoverhead">jokeoverhead(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a jokeoverhead image URL with the provided image.</p>
</dd>
<dt><a href="#mnm">mnm(image)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an mnm image URL with the provided image.</p>
</dd>
<dt><a href="#mock">mock(text)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Converts text to mocked text (alternating uppercase and lowercase letters).</p>
</dd>
<dt><a href="#doublestruck">doublestruck(text)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Converts text to double struck (mathematical bold) characters.</p>
</dd>
<dt><a href="#texttomorse">texttomorse(text)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Converts text to morse code.</p>
</dd>
<dt><a href="#wouldyourather">wouldyourather()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches a &quot;Would You Rather&quot; question.</p>
</dd>
<dt><a href="#randommeme">randommeme()</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches a random meme.</p>
</dd>
<dt><a href="#welcomecard">welcomecard(background, avatar, text_1, text_2, text_3)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a welcome card image URL with the provided parameters.</p>
</dd>
<dt><a href="#itunes">itunes(x)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Fetches song information from iTunes.</p>
</dd>
<dt><a href="#chatbot">chatbot(x, ownername, botname)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Interacts with a chatbot API.</p>
</dd>
<dt><a href="#encode">encode(text)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Encodes text to binary.</p>
</dd>
<dt><a href="#decode">decode(text)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Decodes binary text back to normal text.</p>
</dd>
<dt><a href="#facts">facts(text)</a> ⇒ <code>string</code></dt>
<dd><p>Generates a facts image URL with the provided text.</p>
</dd>
<dt><a href="#_8ball">_8ball()</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Gets a random 8ball response.</p>
</dd>
</dl>

<a name="discordMessage"></a>

## discordMessage(params) ⇒ <code>string</code>
Generates a Discord message image URL with custom parameters.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated Discord message image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Function parameters |
| params.username | <code>string</code> | Username for the Discord message. (Required) |
| params.content | <code>string</code> | Content of the Discord message. (Required) |
| [params.avatar] | <code>string</code> | Avatar URL for the Discord message. |
| [params.color] | <code>string</code> | Color for the Discord message. |
| [params.timestamp] | <code>string</code> | Timestamp for the Discord message. |

<a name="couldread"></a>

## couldread(text) ⇒ <code>string</code>
Generates a couldread image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated couldread image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or empty.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to be displayed in the couldread image. (Required) |

<a name="supreme"></a>

## supreme(text) ⇒ <code>string</code>
Generates a supreme image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated supreme image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or empty.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to be displayed in the supreme image. (Required) |

<a name="quote"></a>

## quote(image, text, name) ⇒ <code>string</code> \| <code>Error</code>
Generates a quote image URL with the provided image, text, and name.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>Error</code> - - Returns the URL of the generated quote image or an error if validation fails.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing or if text length is invalid.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the quote. (Required) |
| text | <code>string</code> | Text for the quote. (Required, 1-125 characters) |
| name | <code>string</code> | Name for the quote. (Required) |

<a name="happysad"></a>

## happysad(text1, text2) ⇒ <code>string</code>
Generates a happysad image URL with the provided texts.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated happysad image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| text1 | <code>string</code> | First text for the happysad image. (Required) |
| text2 | <code>string</code> | Second text for the happysad image. (Required) |

<a name="communism"></a>

## communism(imageURL) ⇒ <code>string</code>
Generates a communism image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated communism image.  
**Throws**:

- <code>Error</code> Throws an error if the imageURL parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| imageURL | <code>string</code> | Image URL for the communism effect. (Required) |

<a name="randomcolor"></a>

## randomcolor() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches a random color from the API.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to a color object.  
<a name="periodicTable"></a>

## periodicTable(element) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches information about an element from the periodic table.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the element information.  
**Throws**:

- <code>Error</code> Throws an error if the element parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Element symbol or name to look up. (Required) |

<a name="jail"></a>

## jail(imageURL) ⇒ <code>string</code>
Generates a jail image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated jail image.  
**Throws**:

- <code>Error</code> Throws an error if the imageURL parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| imageURL | <code>string</code> | Image URL for the jail effect. (Required) |

<a name="unforgivable"></a>

## unforgivable(text) ⇒ <code>string</code>
Generates an unforgivable image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated unforgivable image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the unforgivable image. (Required) |

<a name="imdb"></a>

## imdb(name) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches movie/TV show information from IMDb.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the IMDb information.  
**Throws**:

- <code>Error</code> Throws an error if the name parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the movie or TV show to search for. (Required) |

<a name="steam"></a>

## steam(name) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches game information from Steam.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the Steam game information.  
**Throws**:

- <code>Error</code> Throws an error if the name parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the game to search for on Steam. (Required) |

<a name="screenshot"></a>

## screenshot(url) ⇒ <code>Promise.&lt;string&gt;</code>
Takes a screenshot of the provided URL.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the screenshot image URL.  
**Throws**:

- <code>Error</code> Throws an error if the url parameter is missing or invalid.


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to take a screenshot of. (Required) |

<a name="lyrics"></a>

## lyrics(song) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches lyrics for the provided song.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the song lyrics information.  
**Throws**:

- <code>Error</code> Throws an error if the song parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| song | <code>string</code> | Name of the song to get lyrics for. (Required) |

<a name="car"></a>

## car() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches random car information.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the car information.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

<a name="showerthought"></a>

## showerthought() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches a random shower thought.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to a shower thought.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

<a name="subreddit"></a>

## subreddit(subreddit) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches information about a subreddit.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the subreddit information.  
**Throws**:

- <code>Error</code> Throws an error if the subreddit parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| subreddit | <code>string</code> | Name of the subreddit to get information for. (Required) |

<a name="oogway"></a>

## oogway(text) ⇒ <code>string</code>
Generates an oogway image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated oogway image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the oogway image. (Required) |

<a name="opinion"></a>

## opinion(image, text) ⇒ <code>string</code>
Generates an opinion image URL with the provided image and text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated opinion image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the opinion image. (Required) |
| text | <code>string</code> | Text for the opinion image. (Required) |

<a name="wanted"></a>

## wanted(image) ⇒ <code>string</code>
Generates a wanted image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated wanted image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the wanted poster. (Required) |

<a name="sadcat"></a>

## sadcat(text) ⇒ <code>string</code>
Generates a sadcat image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated sadcat image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the sadcat image. (Required) |

<a name="github"></a>

## github(username) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches GitHub user information.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the GitHub user information.  
**Throws**:

- <code>Error</code> Throws an error if the username parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | GitHub username to get information for. (Required) |

<a name="weather"></a>

## weather(place) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches weather information for the provided place.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the weather information.  
**Throws**:

- <code>Error</code> Throws an error if the place parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| place | <code>string</code> | Place to get weather information for. (Required) |

<a name="lulcat"></a>

## lulcat(text) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches a lulcat image with the provided text.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the lulcat image information.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the lulcat image. (Required) |

<a name="gun"></a>

## gun(image, [text]) ⇒ <code>string</code>
Generates a gun image URL with the provided image and optional text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated gun image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the gun image. (Required) |
| [text] | <code>string</code> | Optional text for the gun image. |

<a name="country"></a>

## country(name) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches information about a country.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the country information.  
**Throws**:

- <code>Error</code> Throws an error if the country name parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the country to get information for. (Required) |

<a name="npm"></a>

## npm(pkg) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches information about an npm package.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the npm package information.  
**Throws**:

- <code>Error</code> Throws an error if the package name parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| pkg | <code>string</code> | Name of the npm package to get information for. (Required) |

<a name="fact"></a>

## fact() ⇒ <code>Promise.&lt;string&gt;</code>
Fetches a random fact.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to a random fact.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

<a name="drake"></a>

## drake(text1, text2) ⇒ <code>string</code>
Generates a drake image URL with the provided texts.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated drake image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| text1 | <code>string</code> | First text for the drake image. (Required) |
| text2 | <code>string</code> | Second text for the drake image. (Required) |

<a name="pooh"></a>

## pooh(text1, text2) ⇒ <code>string</code>
Generates a pooh image URL with the provided texts.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated pooh image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| text1 | <code>string</code> | First text for the pooh image. (Required) |
| text2 | <code>string</code> | Second text for the pooh image. (Required) |

<a name="ship"></a>

## ship(image1, image2) ⇒ <code>string</code>
Generates a ship image URL with the provided images.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated ship image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| image1 | <code>string</code> | First image URL for the ship image. (Required) |
| image2 | <code>string</code> | Second image URL for the ship image. (Required) |

<a name="colorify"></a>

## colorify(image, color) ⇒ <code>string</code>
Generates a colorified image URL with the provided image and color.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated colorified image.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL to colorify. (Required) |
| color | <code>string</code> | Color to apply to the image. (Required) |

<a name="biden"></a>

## biden(text) ⇒ <code>string</code>
Generates a biden image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated biden image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the biden image. (Required) |

<a name="joke"></a>

## joke() ⇒ <code>Promise.&lt;string&gt;</code>
Fetches a random joke.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to a random joke.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

<a name="pikachu"></a>

## pikachu(text) ⇒ <code>string</code>
Generates a pikachu image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated pikachu image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the pikachu image. (Required) |

<a name="drip"></a>

## drip(image) ⇒ <code>string</code>
Generates a drip image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated drip image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the drip effect. (Required) |

<a name="clown"></a>

## clown(image) ⇒ <code>string</code>
Generates a clown image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated clown image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the clown effect. (Required) |

<a name="translate"></a>

## translate(text, to) ⇒ <code>Promise.&lt;string&gt;</code>
Translates text to the specified language.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the translated text.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to translate. (Required) |
| to | <code>string</code> | Target language code to translate to. (Required) |

<a name="reverse"></a>

## reverse(text) ⇒ <code>Promise.&lt;string&gt;</code>
Reverses the provided text.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the reversed text.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to reverse. (Required) |

<a name="uncover"></a>

## uncover(image) ⇒ <code>string</code>
Generates an uncover image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated uncover image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the uncover effect. (Required) |

<a name="ad"></a>

## ad(image) ⇒ <code>string</code>
Generates an ad image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated ad image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the ad effect. (Required) |

<a name="blur"></a>

## blur(image) ⇒ <code>string</code>
Generates a blurred image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated blurred image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL to blur. (Required) |

<a name="invert"></a>

## invert(image) ⇒ <code>string</code>
Generates an inverted image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated inverted image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL to invert. (Required) |

<a name="greyscale"></a>

## greyscale(image) ⇒ <code>string</code>
Generates a greyscale image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated greyscale image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL to convert to greyscale. (Required) |

<a name="alert"></a>

## alert(text) ⇒ <code>string</code>
Generates an alert image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated alert image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the alert image. (Required) |

<a name="caution"></a>

## caution(text) ⇒ <code>string</code>
Generates a caution image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated caution image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the caution image. (Required) |

<a name="colorinfo"></a>

## colorinfo(color) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches information about a color.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the color information.  
**Throws**:

- <code>Error</code> Throws an error if the color parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Hex color code to get information for. (Required) |

<a name="jokeoverhead"></a>

## jokeoverhead(image) ⇒ <code>string</code>
Generates a jokeoverhead image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated jokeoverhead image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the jokeoverhead effect. (Required) |

<a name="mnm"></a>

## mnm(image) ⇒ <code>string</code>
Generates an mnm image URL with the provided image.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated mnm image.  
**Throws**:

- <code>Error</code> Throws an error if the image parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | Image URL for the mnm effect. (Required) |

<a name="mock"></a>

## mock(text) ⇒ <code>Promise.&lt;string&gt;</code>
Converts text to mocked text (alternating uppercase and lowercase letters).

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the mocked text.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to mock. (Required) |

<a name="doublestruck"></a>

## doublestruck(text) ⇒ <code>Promise.&lt;string&gt;</code>
Converts text to double struck (mathematical bold) characters.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the double struck text.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to convert to double struck. (Required) |

<a name="texttomorse"></a>

## texttomorse(text) ⇒ <code>Promise.&lt;string&gt;</code>
Converts text to morse code.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the morse code representation of the text.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to convert to morse code. (Required) |

<a name="wouldyourather"></a>

## wouldyourather() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches a "Would You Rather" question.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to a "Would You Rather" question.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

<a name="randommeme"></a>

## randommeme() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches a random meme.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to a random meme.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

<a name="welcomecard"></a>

## welcomecard(background, avatar, text_1, text_2, text_3) ⇒ <code>string</code>
Generates a welcome card image URL with the provided parameters.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated welcome card image.  
**Throws**:

- <code>SyntaxError</code><code>Error</code> Throws an error if required parameters are missing or if background is not a valid PNG URL.


| Param | Type | Description |
| --- | --- | --- |
| background | <code>string</code> | Background image URL for the welcome card (must be a PNG). (Required) |
| avatar | <code>string</code> | Avatar image URL for the welcome card. (Required) |
| text_1 | <code>string</code> | First text element for the welcome card. (Required) |
| text_2 | <code>string</code> | Second text element for the welcome card. (Required) |
| text_3 | <code>string</code> | Third text element for the welcome card. (Required) |

<a name="itunes"></a>

## itunes(x) ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches song information from iTunes.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the iTunes song information.  
**Throws**:

- <code>Error</code> Throws an error if the search parameter is missing or if the song is not found on iTunes.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>string</code> | Song name or search query for iTunes. (Required) |

<a name="chatbot"></a>

## chatbot(x, ownername, botname) ⇒ <code>Promise.&lt;Object&gt;</code>
Interacts with a chatbot API.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - Returns a promise that resolves to the chatbot response.  
**Throws**:

- <code>Error</code> Throws an error if required parameters are missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| x | <code>string</code> | Message content to send to the chatbot. (Required) |
| ownername | <code>string</code> | Name of the bot owner. (Required) |
| botname | <code>string</code> | Name of the bot. (Required) |

<a name="encode"></a>

## encode(text) ⇒ <code>Promise.&lt;string&gt;</code>
Encodes text to binary.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the binary-encoded text.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text to encode to binary. (Required) |

<a name="decode"></a>

## decode(text) ⇒ <code>Promise.&lt;string&gt;</code>
Decodes binary text back to normal text.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the decoded text.  
**Throws**:

- <code>Error</code> Throws an error if the binary text parameter is missing or if the API returns an error.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Binary text to decode. (Required) |

<a name="facts"></a>

## facts(text) ⇒ <code>string</code>
Generates a facts image URL with the provided text.

**Kind**: global function  
**Returns**: <code>string</code> - - Returns the URL of the generated facts image.  
**Throws**:

- <code>Error</code> Throws an error if the text parameter is missing.


| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text for the facts image. (Required) |

<a name="_8ball"></a>

## \_8ball() ⇒ <code>Promise.&lt;string&gt;</code>
Gets a random 8ball response.

**Kind**: global function  
**Returns**: <code>Promise.&lt;string&gt;</code> - - Returns a promise that resolves to the 8ball answer.  
**Throws**:

- <code>Error</code> Throws an error if the API returns an error.

