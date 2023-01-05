export const writeCookie = (key, value, days) => {
    let date = new Date ()
    days = days || 365

    date.setDate(date.getDate() + days)

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"
    return cookie

}

export const getCookie = (cookieName) => {
    //the pattern we want to find in our cookie
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)
    console.log(re)
    try {
        //check if the name of the cookie exists in the browser
        let cookie = document.cookie.match(re)[0] // will raise a TypeError if the cookie isn't found
        console.log(cookie)
        return cookie
    } catch {
        console.log('cookie not found')
        return false
    }

}