//from https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
function getInternetExplorerVersion() {
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function checkVersion() {
  var ver = getInternetExplorerVersion();

  if ( ver > -1 ) {
    if ( ver >= 8.0 ) 
      alert("You're using a recent copy of Internet Explorer, though it may not work. \nTry updating your browser anyway, IE is a terrible browser.");
    else
      alert("You should upgrade your copy of Internet Explorer.");
      window.location.href = "ie.html";
  }
}
