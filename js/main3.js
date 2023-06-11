function loadPageFunction() {
  // const loadingPage = document.getElementById("loading-page");
  // console.log("loadingPage");
  // const contentPage = document.getElementById("page-content");
  // loadingPage.classList.add("display-none");
  // contentPage.classList.remove("display-none");
}
// /**
//  * Audio player controls
//  */

// //progress
// (
//   () => {
//       var progressBar = document.querySelector(".progress");

//       for (i = 0; i < 100; i++){
//           let span = document.createElement("span");
//           span.style.setProperty("--i", i);
//           progressBar.append(span);
//       }
//   }
// )();


// let audio = document.querySelector("audio");
// let play_pause = document.querySelector(".play_pause");
// let duration = document.querySelector(".duration");
// let current = document.querySelector(".current");
// let list_span = document.querySelectorAll(".progress span");
// let volume_span = document.querySelectorAll(".volume span");
// console.log("list_span", list_span);

// let timeFormat = (time) => {
//   second = Math.floor(time % 60);
//   minute = Math.floor((time / 60) % 60);
//   if (second < 10) {
//     second = "0" + second;
//   }

//   time = minute + ":" + second;
//   return time;
// };

// audio.addEventListener("loadedmetadata", () => {
//   duration.textContent = timeFormat(audio.duration);
// });

// play_pause.addEventListener("click", () => {
//   let playBtn = document.querySelector(".play_play");
//   let pauseBtn = document.querySelector(".play_pause");

//   if (audio.paused) {
//     audio.play();
//     playBtn.classList.add("hidden-item");
//     pauseBtn.classList.remove("hidden-item");
//   } else {
//     audio.pause();
//     playBtn.classList.remove("hidden-item");
//     pauseBtn.classList.add("hidden-item");
//   }
// });

// audio.addEventListener("timeupdate", () => {
//   time_current = audio.currentTime;
//   time_duration = audio.duration;

//   let position = Math.floor((time_current * 100) / time_duration);

//   current.textContent = timeFormat(time_current);

//   list_span[position].classList.add("active");
// });



// list_span.forEach((element, index) => {
//   element.addEventListener("click", (e) => {
//     //remove active classes
//     list_span.forEach((e) => {
//       e.classList.remove("active");
//     });

//     //add active class to selected range
//     for (k = 0; k <= index; k++) {
//       list_span[k].classList.add("active");
//     }

//     //set current time
//     let time_go = (index * audio.duration) / 100;
//     audio.currentTime = time_go;
//   });
// });

// // END AUDIO