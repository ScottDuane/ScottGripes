(function() {
  'use strict';

  if (typeof window.Gripes === 'undefined') {
    window.Gripes = {};
  }

  var GripeView = Gripes.GripeView = function () {
    this.gripeList = ["People don't know how to use sidewalks.",
                      "Skateboards don't belong on the sidewalk, especially if they have motors.",
                      "Sometimes my arms are too short for the things I need to do.",
                      "Don't throw your bachelorette party inside the Pride festival!  It's rude!",
                      "Kittens don't stay small",
                      "Students sometimes use my personal email address instead of my work email.  Where do they find it??",
                      "Cis men say dumb things to trans men.",
                      "People don't know how to use escalators.  They stand on both sides and block my way."];
     this.gripeBox = document.getElementById("gripe-box");
     this.index = 0;
     this.body = document.getElementById("main-body");
     this.startGriping();
  };

  GripeView.prototype.startGriping = function () {
    let that = this;
    setInterval(function () {
      that.replaceGripe();
    }, 5000);
  };

  GripeView.prototype.replaceGripe = function () {
    if (this.index < this.gripeList.length - 1) {
      this.index += 1;
    } else {
      this.index = 0;
    }
    this.gripeBox.innerHTML = this.gripeList[this.index];
  };
}());
