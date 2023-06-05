var On = function()
{
  // var orgSite = "http://192.168.2.241:8000/start";
  var site = "/on?i=" + document.getElementById("indx").value;
  fetch(site, { mode: 'no-cors' });
}
var Off = function()
{
  var site = "/off?i=" + document.getElementById("indx").value;
  // fetch(site, { mode: 'no-cors' });
  fetch(site);

}

var Format = function()
{
  let v = document.getElementById("indx").value;
  if(isNaN(v) == false)
  {
    document.getElementById("indx").value=null;
  }
  else if(v.length > 1)
  {
    document.getElementById("indx").value=v[0];
  }
}
