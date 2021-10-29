const fetch = require('node-fetch')
const baseurl = "https://gud-api.gofaizen.repl.co"

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
async function nsfwAss(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/ass?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwBdsm(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/bdsm?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwBlowjob(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/blowjob?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwHentai(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/hentai?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwLewdneko(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/lewdneko?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwSuccubus(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/succubus?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwTentacles(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/tentacles?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
async function nsfwYuri(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/yuri?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}

async function nsfwFuta(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/futanari?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}

async function nsfwBoobs(key) {
    if (!key) {
        return("Error: No key provided")
    } else {
    const fetched = await fetch(baseurl + `/nsfw/boobs?key=${encodeURIComponent(key)}`)
    const r = await fetched.json()
    if (!r.url) {
        return("Error: Invalid Key")
    } else {
        return(r.url)
    }
}
}
/**
 * 
 * @param {boolean} simplify  
 */
async function foodporn(/*boolean*/simplify=false) {
    const fetched = await fetch(`${baseurl}/fun/foodporn?simplify=${simplify}`)
    const data = await fetched.json()
    if(!data) return "Error: An error occurred while fetching"
    return data    
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
    foodporn
}
