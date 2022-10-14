/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"*/

//input is a url. variations may include 
//with or without www
//https or http
//.com or any other domain ending 

// take everything before the // and everything after the .
//if there's a www that has to be factored in. 
//replace www wth a space
//split at // and at .
//if splitURL.length === 3 then return splitURL[1]
//if splitURL === 2 then splitURL[0].split(/)

function domain(url) {
    //url.replace("//", ".")
    const splitURL = url.replace("//", ".").split(".")
    console.log(splitURL)
    
    if (splitURL.length === 3) {
        console.log(splitURL[1])
    } 
    
}

domain('www.anthropologie.com')
domain("https://overlake.com");
