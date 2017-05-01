var result = [];


$(function() {
  $("form").submit(function(event) {

    var textArray = $("textarea").val()
      .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"")
      .toLowerCase()
      .split(" ");
    // var textPrime = textArray.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    // console.log(textArray);
    textArray.forEach(function(word1) {
      var counter = 0;
      textArray.forEach(function(word2){
        if (word1 === word2) {
          counter ++;
        }
      });

      var wordAndCount = word1 + ": " + counter;

      if ((word1 !== "") && (result.indexOf(wordAndCount) === -1)) {
        result.push(wordAndCount);
      }
    });
    result.forEach(function(element) {
      $(".output").append("<li>" + element + "</li>");
    })
    event.preventDefault();
  });
});

//Account for the fact that each word currently ggetds checked against all words each time it recurs in the corpus.
