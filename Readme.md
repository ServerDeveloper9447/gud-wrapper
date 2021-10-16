# gud-wrapper
> Official wrapper for **[gud-api]**.

---

***Note: All functions are async functions.***

## How to use functions?
```js
(async () => {
    const gud = require('gud-wrapper')
    const dadjoke = await gud.dadjoke()
    console.log(dadjoke) // Logs the joke to console
})()
```
### For `joke()` function
```js
// For mom jokes 
(async () => {
    const gud = require('gud-wrapper')
    const momjoke = await gud.joke("mom")
    console.log(momjoke)
})()

// For dad jokes
(async () => {
    const gud = require('gud-wrapper')
    const dadjoke = await gud.joke("dad")
    console.log(dadjoke)
})()

// For yomama jokes
(async () => {
    const gud = require('gud-wrapper')
    const yomama = await gud.joke("yomama")
    console.log(yomama)
})()
```
## For NSFW functions
```js
// Example for yuri function
(async () => {
    const gud = require('gud-wrapper')
    const nsfw = await gud.nsfwYuri("<your api key>")
    console.log(nsfw)
})()
```
---
For API key join: ***[Discord Server]*** <br>
Demo Key/Public Key: `mischiefmanaged` <br>
***Note: Only NSFW endpoints require key. If you do not use nsfw endpoints then you don't have to request a key.***

> API Developer: **`NotFaizen#3463`**<br>
> Wrapper made by: **`Server Developer#9447`**
---
## Issues?
> 

[Discord Server]: https://discord.gg/HbWpEAcmFk
[gud-api]: https://gud-api.gofaizen.repl.co