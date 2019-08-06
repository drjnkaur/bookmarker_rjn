document.getElementById("bookmark_form").addEventListener('submit', saveBookmark);

function saveBookmark(e){
  e.preventDefault();

  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;


  if(!validOrNot(siteName, siteUrl)){
    return false;
  }

  var bookmark_ob = {
    name : siteName,
    url : siteUrl,

    // don't add semicolon at back of object properties.
  };



  //local storage --> adding data in local storage
    if(localStorage.getItem('list')===null){
      var bookmark_list = [];
      bookmark_list.push(bookmark_ob);
      localStorage.setItem('list', JSON.stringify(bookmark_list)); // 2 values bcz we saying this list and this value.


    }else{
      var addmore = JSON.parse(localStorage.getItem('list'));  // only one attribue bcz we fetching list.
      addmore.push(bookmark_ob);
      localStorage.setItem('list', JSON.stringify(addmore));
    }

    // document.getElementById('formname').reset();
    window.location.replace('index.html');




}
// fetching data from local localStorage
function fetchlist(){

  var list_data = JSON.parse(localStorage.getItem('list'));

  for(var i = 0; i<list_data.length; i++){
    var name = list_data[i].name;
    var url = list_data[i].url;

    document.getElementById('list_results').innerHTML+="<h3>"+name+"</h3>" + "<a href='"+url+"'>visit</a>" +
    `<button type='submit' class='btn-primary' onclick="deleteItem('${url}')" >delete</button><br>`;



  }
}


// deleting bookmark

function deleteItem(url){
   var data = JSON.parse(localStorage.getItem('list'));
   for(var i = 0; i<data.length; i++){
     var durl = data[i].url;

     if(url === durl){
       data.splice(i, 1 );
     }

     localStorage.setItem('list', JSON.stringify(data));

     window.location.replace('index.html');
   }
}

// validation bookmark_form

function validOrNot(name, url){
  console.log("sggjsfdsdf");
    if(!name || !url){
      alert('please fill all fields.');
      return false;
    }

  //   https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
    var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

    var regex = new RegExp(urlR);


    if (!url.match(regex)) {
      alert("Enter Valid Url please.");
      return false;
    }
    return true;
}
