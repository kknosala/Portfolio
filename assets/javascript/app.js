$(document).ready(function() {
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
        $("#modal-image").attr("src", "assets/images/gempic.jpg");
        $("#modal-project-title").text("Gem Clicker Game");
        $("#project-description").text(
          "The Gem Clicker game is a simple game in which the player will need to meet a certain score by clicking on the available gems. Each gem's value is hidden and they player will have to figure it out by clicking on them."
        );
        $("#pages-link").attr(
          "href",
          "https://kknosala.github.io/unit-4-game/"
        );
        $("#repository-link").attr(
          "href",
          "https://github.com/kknosala/unit-4-game"
        );
        break;
    case "project4":
            $("#modal-image").attr("src", "assets/images/train.png");
            $("#modal-project-title").text("Train Scheduler");
            $("#project-description").text(
              "The Train scheduler app is designed to help users track when their train will be leaving and to get an general idea of the train\'s schedule. Users can add the trains they would like to see tracked and have the option to remove trains they no longer wish to see."
            );
            $("#pages-link").attr(
              "href",
              "https://kknosala.github.io/train-schedule/"
            );
            $("#repository-link").attr(
              "href",
              "https://github.com/kknosala/train-schedule"
            );
        break;
    }
  });

  $(".close").click(function() {
    $(".modal").removeClass("active-modal");
  });
});
