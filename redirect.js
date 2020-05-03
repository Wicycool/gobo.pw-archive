//CHANGE TO window.location.pathname
var urlPath = window.location.pathname;

var shortLinkType = urlPath.substr(0,3);

var redirectURL
var redirectID

if (shortLinkType == "/u/"){
    redirectURL = "https://scratch.mit.edu/users/"
    redirectID = urlPath.substr(3);
} else if (shortLinkType == "/s/"){
    redirectURL = "https://scratch.mit.edu/studios/"
    redirectID = urlPath.substr(3);
} else if (shortLinkType == "/d/"){
    redirectURL = "https://scratch.mit.edu/discuss/topic/"
    redirectID = urlPath.substr(3);
} else {
    redirectURL = "https://scratch.mit.edu/projects/"
    redirectID = urlPath.substr(1);
}

window.location = redirectURL + redirectID;