var toggleFolder = document.getElementById("js_toggle-folder");

// --------- ANIMATION

var anim_card1 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card2 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card2_1 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card3 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card4 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card5 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card6 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card7 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card7_1 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card7_2 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card8 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card9 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
var anim_card10 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});

var anim_card11 = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});


anim_card1
  .add(
    {
      targets: "#card-01",
      translateY: [1000, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120
    },
    "-=1"
  )
  .add(
    {
      targets: ".js-q1",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120,      
    },
    "-=1"
  );

anim_card1.play()

anim_card2
  .add(
    {
      targets: "#card-02",
      translateY: [1000, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120,
      complete: function(anim) {
        anim.remove();
      }
    },
    "-=1"
  )
  .add(
    {
      targets: ".js-q2",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120,
      complete: function(anim) {
        anim.remove();
      }      
    },
    "-=1"
  );

  anim_card2_1
    .add(
      {
        targets: "#card-02-01",
        translateY: [1000, 0],
        opacity: [0, 1],
        duration: 300,
        delay: (el, i, l) => (i+1) * 120
      },
      "-=1"
    )
    .add(
      {
        targets: ".js-q2-1",
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 300,
        delay: (el, i, l) => (i+1) * 120,      
      },
      "-=1"
    );

  
anim_card3
  .add(
    {
      targets: "#card-03",
      translateY: [1000, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120
    },
    "-=1"
  )
  .add(
    {
      targets: ".js-q3",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120,      
    },
    "-=1"
  );

  
anim_card4
.add(
  {
    targets: "#card-04",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q4",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


anim_card5
  .add(
    {
      targets: "#card-05",
      translateY: [1000, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120
    },
    "-=1"
  )
  .add(
    {
      targets: ".js-q5",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i, l) => (i+1) * 120,      
    },
    "-=1"
  );

  
anim_card6
.add(
  {
    targets: "#card-06",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q6",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


  
anim_card7
.add(
  {
    targets: "#card-07",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q7",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);

anim_card7_1
.add(
  {
    targets: "#card-07-01",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q7-1",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


anim_card7_2
.add(
  {
    targets: "#card-07-02",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q7-2",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


anim_card8
.add(
  {
    targets: "#card-08",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q8",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


anim_card9
.add(
  {
    targets: "#card-09",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q9",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


anim_card10
.add(
  {
    targets: "#card-10",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q10",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);


  
anim_card11
.add(
  {
    targets: "#card-11",
    translateY: [1000, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120
  },
  "-=1"
)
.add(
  {
    targets: ".js-q11",
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 300,
    delay: (el, i, l) => (i+1) * 120,      
  },
  "-=1"
);



  