document.getElementById("bookmark_form").addEventListener('submit', hello);

function hello(e){
  e.preventDefault();

  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;


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





}
// fetching data from local localStorage
function fetchlist(){

  var list_data = JSON.parse(localStorage.getItem('list'));

  for(var i = 0; i<list_data.length; i++){
    var name = list_data[i].name;
    var url = list_data[i].url;

    document.getElementById('list_results').innerHTML+="<h3>"+name+"</h3>" + "<a href='"+url+"'>visit</a>" +
    "<button type='submit' class='btn-primary' onclick='deleteItem(\'" +url+ "\')'>delete</button><br>";


  }
}



function test(url){
  alert(url);
  fetchlist();
}
// deleting bookmark

function deleteItem(url){
  console.log(url+"ok");
  var items = JSON.parse(localStorage.getItem('list'));
  console.log(items);
  for(var i = 0; i<items.length; i++){
    if(url==items[i].url){
      items.splice(i, 1);
      console.log("delete");
    }else{
      console.log("work");
    }
  }

  fetchlist();
}
