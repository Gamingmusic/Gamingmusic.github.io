var config = {
  apiKey: "AIzaSyDhaTtoylgdq2Uy8ClplfwdVAVDo-CVpZc",
  authDomain: "music-99be5.firebaseapp.com",
  databaseURL: "https://music-99be5.firebaseio.com",
  projectId: "music-99be5",
  storageBucket: "music-99be5.appspot.com",
  messagingSenderId: "278379966144"
};
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
  var ref = firebase.database().ref().child("kommentarer");
  return $firebaseArray(ref);
});

app.controller("KommentarCtrl", function($scope, kommentarer) {
  $scope.kommentarer = kommentarer;

  $scope.kommentar = {
    text: "",
    skribent: ""
  }
  $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
      text: "",
      skribent: ""
    }
  }
});