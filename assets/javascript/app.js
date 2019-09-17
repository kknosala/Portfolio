$(document).ready(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyA6RjXKIxvGkz7xd6SowJCbPLV7e0KVr2I",
    authDomain: "portfolio-database-3a097.firebaseapp.com",
    databaseURL: "https://portfolio-database-3a097.firebaseio.com",
    projectId: "portfolio-database-3a097",
    storageBucket: "",
    messagingSenderId: "415749800871",
    appId: "1:415749800871:web:9203107525f6343a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $(".project-div").click(function() {
    $(".modal").addClass("active-modal");
    switch (this.id) {
      case "project1":
        $("#modal-image").attr(
          "src",
          "assets/images/logo-darkhorse-curate.jpg"
        );
        $("#modal-project-title").text("Darkhorse Movie Search");
        $("#project-description").text(
          "Darkhorse is a movie and TV show search engine designed to help people discover new, unexpected movies for their viewing pleasure. DarkHorse can also inform users where they are able to stream the shows and movies they are looking for."
        );
        $("#pages-link").attr("href", "https://kknosala.github.io/DarkHorse/");
        $("#repository-link").attr(
          "href",
          "https://github.com/kknosala/DarkHorse"
        );
        break;
      case "project2":
        $("#modal-image").attr("src", "assets/images/giphy.gif");
        $("#modal-project-title").text("Giphy Actor Search");
        $("#project-description").text(
          "The Giphy Actor Search is a platform that can be used to pull up gifs of your favorite actors using the Giphy Api."
        );
        $("#pages-link").attr("href", "https://kknosala.github.io/GifTastic/");
        $("#repository-link").attr(
          "href",
          "https://github.com/kknosala/GifTastic"
        );
        break;
      case "project3":
        $("#modal-image").attr("src", "assets/images/bamazon.jpg");
        $("#modal-project-title").text("Bamazon App");
        $("#project-description").text(
          "The Gem Clicker game is a simple game in which the player will need to meet a certain score by clicking on the available gems. Each gem's value is hidden and they player will have to figure it out by clicking on them."
        );
        $("#pages-link").attr(
          "href",
          "https://kknosala.github.io/bamazon/"
        );
        $("#repository-link").attr(
          "href",
          "https://github.com/kknosala/bamazon"
        );
        break;
      case "project4":
        $("#modal-image").attr("src", "assets/images/friendfinder.jpg");
        $("#modal-project-title").text("Friend Finder");
        $("#project-description").text(
          "The Friend Finder app is designed to help people locate and make friends with new people from all around the world. Users simply need to take the survey on the app and the Friend Finder algorithm will match them with their potential best friend based on the information present in the database."
        );
        $("#pages-link").attr(
          "href",
          "https://agile-plateau-67726.herokuapp.com/"
        );
        $("#repository-link").attr(
          "href",
          "https://github.com/kknosala/FriendFinder"
        );
        break;
    }
  });

  $(".close").click(function() {
    $(".modal").removeClass("active-modal");
  });

  $("#ref-submit").click(function(x) {
    x.preventDefault();
    var refName = $("#reference-name")
      .val()
      .trim();
    var refTitle = $("#reference-title")
      .val()
      .trim();
    var refRelation = $("#reference-rel")
      .val()
      .trim();
    var refMessage = $("#reference-message")
      .val()
      .trim();

    database.ref("/ReferenceAdd").push({
      refName: refName,
      refTitle: refTitle,
      refRelation: refRelation,
      refMessage: refMessage,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#reference-name").val("");
    $("#reference-title").val("");
    $("#reference-rel").val("");
    $("#reference-message").val("");

    $(".modal").addClass("active-modal");
  });

  $("#contact-submit").click(function(x) {
    x.preventDefault();
    var conName = $("#contact-name")
      .val()
      .trim();
    var conEmail = $("#contact-email")
      .val()
      .trim();
    var conMessage = $("#contact-message")
      .val()
      .trim();

    database.ref("/ContactAdd").push({
      conName: conName,
      conEmail: conEmail,
      conMessage: conMessage,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#contact-name").val("");
    $("#contact-email").val("");
    $("#contact-message").val("");

    $(".modal").addClass("active-modal");
  });

  $("#modal-close").click(function(x) {
    x.preventDefault();
    $(".modal").removeClass("active-modal");
  });
});
