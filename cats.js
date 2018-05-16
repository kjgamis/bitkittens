var button = document.querySelector('.summon-cats');
var catBox = document.querySelectorAll('.cat-box');

button.addEventListener('click', function() {
  // console.log(event);

  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType: 'json'
  }).done( function(responseData) {
    console.log(responseData);


    console.log(responseData.cats[0].photo)

    for (i=0; i < responseData.cats.length; i++) {
      var imgTag = document.createElement('img');
      imgTag.src = responseData.cats[i].photo;

      catBox[i].append(imgTag);
    }

  });

});
