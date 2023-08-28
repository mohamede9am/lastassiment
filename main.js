let iconNav = $(".nav");
let ul = $(".list");
let close = $(".remove-icon");

iconNav.on("click", function() {
  iconNav.toggleClass("d-none");
  ul.toggleClass("d-none");
});

close.on("click", function() {
  ul.toggleClass("d-none");
  iconNav.toggleClass("d-none");
});



const textAcco = $(".text")
for(let i =0; i <textAcco.length; i++){
  $(textAcco[i]).on("click" , function(){
    $(this).toggleClass(`active`)
  })
}


let ourTime = new Date("Dec 24, 2023, 15:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let datediff = ourTime - dateNow;

  let days = Math.floor(datediff / 1000 / 60 / 60 / 24);
  console.log(days);
  $(".days").html(days + " D");

  let hours = Math.floor((datediff % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
  console.log(hours);
  $(".hours").html(hours + " H");

  let min = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  console.log(min);
  $(".min").html(min + " M");

  let sec = Math.floor((datediff % (1000 * 60)) / 1000);
  console.log(sec);
  $(".sec").html(sec + " S");

  if (datediff < 0) {
    clearInterval(counter);
  }
}, 1000);