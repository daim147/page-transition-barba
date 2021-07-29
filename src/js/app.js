/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
/* eslint-disable quotes */
import barba from "@barba/core";
import barbaCss from "@barba/css";

barba.use(barbaCss);

const body = document.querySelector("body");

barba.hooks.before((data) => {
  const changeBGtoCurrentPageColor = data.current.container.dataset.background;
  body.style.setProperty("--page-background", changeBGtoCurrentPageColor);
});

// init Barba
barba.init({
  transitions: [
    {
      name: "home",
      beforeOnce() {
        console.log("beforeOnce");
      },
      once() {
        console.log("once");
      },
      afterOnce() {
        console.log("afterOnce");
      },
    },
    {
      name: "fade",
      to: {
        namespace: ["fader"],
      },
      leave() {},
      enter() {},
    },
    {
      name: "clip",
      sync: true,
      to: {
        namespace: ["cliper"],
      },
      leave() {},
      enter() {},
    },
    {
      name: "cover",
      to: {
        namespace: ["with-cover"],
      },
      leave() {},
      enter() {},
    },
    {
      name: "to-home",
      sync: true,
      to: {
        namespace: ["home"],
      },
      leave() {},
      enter() {},
    },
  ],
});
