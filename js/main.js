document.getElementById("bookmark_form").addEventListener('submit', hello);

function hello(e){
  e.preventDefault();

  var siteName = document.getElementById('siteName').value;
  console.log(siteName);
  var siteUrl = document.getElementById('siteUrl').value;

  console.log(siteUrl);

  var bookmark_ob = {
    name : siteName,
    url : siteUrl,

    // don't add semicolon at back of object properties.
  };



  //local storage
    if(localStorage.getItem(bookmarks_list)===null){
      alert("empty");
    }else{
      alert("not");
    }

}
