const fetch = require('node-fetch')
const baseurl = "https://gud-api.gofaizen.repl.co"
const chalk = require("chalk")

async function eightball() {
    const fetched = await fetch(baseurl + "/fun/8ball")
    const r = await fetched.json()
    return (r.response)
}
async function animequote() {
    const fetched = await fetch(baseurl + "/fun/animequote")
    return (await fetched.json())
}
async function dadjoke() {
    const fetched = await fetch(baseurl + "/fun/dadjoke")
    const r = await fetched.json()
    return (r.joke)
}
async function pickupLine() {
    const fetched = await fetch(baseurl  + "/fun/pickuplines")
    const r = await fetched.json()
    return (r.response)
}
/**
 * 
 * @param {string} type 
 */
async function joke(type) {
    if (!type) {
        return("Error: No joke type given. Types: < mom | dad | yomama >")
    } else {
        if (type === "mom") {
            const fetched = await fetch(baseurl + "/fun/joke/mom")
            const r = await fetched.json()
            return (r.joke)
        } else if(type === "dad") {
            const fetched = await fetch(baseurl + "/fun/joke/dad")
            const r = await fetched.json()
            return (r.joke)
        } else if(type === "yomama") {
            const fetched = await fetch(baseurl + "/fun/joke/yomama")
            const r = await fetched.json()
            return (r.joke)
        } else {
            return("Error: Invalid joke type.")
        }
    }
}
async function hug() {
    const fetched = await fetch(baseurl + "/interactions/hug")
    const r = await fetched.json()
    return (r.image)
}
async function getNeko() {
    const fetched = await fetch(baseurl + "/misc/neko")
    const r = await fetched.json()
    return (r.url)
}
async function foxgirl() {
    const fetched = await fetch(baseurl + "/misc/foxgirl")
    const r = await fetched.json()
    return (r.url)
}
async function okami() {
    const fetched = await fetch(baseurl + "/misc/okami")
    const r = await fetched.json()
    return (r.url)
}
async function faizen() {
    const fetched = await fetch(baseurl + "/misc/faizen")
    const r = await fetched.json()
    return (r.url)
}
/**
 * 
 * @param {string} key 
 */
async function nsfwAss() {
    const fetched = await fetch(baseurl + `/nsfw/ass`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch error")
    } else {
        return(r.url)
    }
}

async function nsfwBdsm() {
    const fetched = await fetch(baseurl + `/nsfw/bdsm`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch error")
    } else {
        return(r.url)
    }
}

async function nsfwBlowjob() {
    const fetched = await fetch(baseurl + `/nsfw/blowjob`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch error")
    } else {
        return(r.url)
    }
}

async function nsfwHentai() {
    const fetched = await fetch(baseurl + `/nsfw/hentai`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch error")
    } else {
        return(r.url)
    }
}

async function nsfwLewdneko() {
    const fetched = await fetch(baseurl + `/nsfw/lewdneko`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch error")
    } else {
        return(r.url)
    }
}

async function nsfwSuccubus() {
    const fetched = await fetch(baseurl + `/nsfw/succubus`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch Error")
    } else {
        return(r.url)
    }
}

async function nsfwTentacles() {
    const fetched = await fetch(baseurl + `/nsfw/tentacles`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch Error")
    } else {
        return(r.url)
    }
}

async function nsfwYuri() {
    const fetched = await fetch(baseurl + `/nsfw/yuri` 
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Fetch error")
    } else {
        return(r.url)
    }
}
async function foodporn(/*boolean*/simplify=false) {  
/**
* 
* @param {boolean} simplify  
*/
    const fetched = await fetch(`${baseurl}/fun/foodporn?simplify=${simplify}`)
    const data = await fetched.json()
    if(!data) return "Error: An error occurred while fetching"
    return data
}

async function pypi(package) {
/**
* @param {string} package
*
*/
    const fetched = await fetch(`${baseurl}/misc/pypi?q=${encodeURIComponent(package)}`)
    const r = await fetched.json()
    if (!package) throw new SyntaxError(chalk.red("Error: No package name provided"))
    if(!r) throw new Error("Fetch Error")
    return r
}

async function owofy(text) {
/**
* @param {string} text
*
*/
    const fetched = await fetch(`${baseurl}/fun/owofy?text=${encodeURIComponent(text)}`)
    const r = await fetched.json()
    if (!package) return new SyntaxError(chalk.red("Error: No text provided"))
    if(!r) throw new Error("Fetch Error")
    return r.owofied
}
module.exports = {
    eightball,
    animequote,
    dadjoke,
    pickupLine,
    joke,
    hug,
    getNeko,
    foxgirl,
    okami,
    faizen,
    nsfwAss,
    nsfwBdsm,
    nsfwBlowjob,
    nsfwHentai,
    nsfwLewdneko,
    nsfwSuccubus,
    nsfwTentacles,
    nsfwYuri,
    nsfwFuta,
    nsfwBoobs,
    foodporn,
    owofy
}
