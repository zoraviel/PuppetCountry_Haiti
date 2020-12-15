

let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});

// body height per section
gsap.set("body", {height: (sections.length * 100) + "%"});

sections.forEach((section, i) => {
  ScrollTrigger.create({
    //can change where window transition starts/ends! (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    onToggle: self => self.isActive && setSection(section)
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {scale: 0.8, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
  }
}

// don't touch this part
ScrollTrigger.create({
  start: 1,
  end: () => ScrollTrigger.maxScroll(window) - 1,
  onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
  onLeave: self => self.scroll(2)
}).scroll(2);

gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

let text1 = "He's known as a hero and brutal leader for killing over 3,000 people, especially French colonists who enslaved Haitians. According to the Haiti Reader, he killed so many people because he believed their previous enslavers would never be content with losing their power.";
let text2 = "He's considered to be the first president of Haiti and one of the leaders of its first revolution.";
let text3 = "He's understandably the President with the strictest position against foreign powers, despite letting some European settlers live.";

let text5 = "Click flag to reveal.";
let text6 = "Some Haitians were killed. Mullatos ( mixed raced individuals) were targeted because they were considered part of a higher class.";

let text7 = "Boyer is also considered a hero for his fighting within the first revolution. He's considerably more of a tolerant leader than Dessalines and ran the country for nearly two decades.";

let text8 = "He is, however, also at fault for starting the slippery slope of catering to other countries. King Chares X of France threatened him with violence if Haiti did not pay France back for ending slavery.";

let text9 = "Boyer saw this as an oppurtunity to end Haiti's political and economic isolation, which was a tragic mistake as the country struggled to financially recover from the payment, and was treated as lesser country as a result.";

let text10 = "U.S. Marines landed on Haitian soil on July 28, 1915, and that marked the start of nearly two decades under U.S. control. Pierre Sully, a Haitian soldier guarding the country's military arsenal, famously told the U.S. Marines that they would only entire over his dead body, and that's exactly what they did.";

let text11 = "U.S. and Haitian leaders collaborated on a treaty that was meant to improve a variety of things within Haiti, such as institutions, finances, safety(internally and externally), and agricultural economic development.";

let text12 = "Unfortunately, made Haiti dependent on the U.S., and was the first clear sign of how it was quickly becoming a puppet country. For example, the Haitian President was allowed to pick officials for government positions, out of a selection provided by the U.S. president.";

let text13 = "Nord Alexis was a powerful member of the military before he became president, and was also accused of being a tool for the U.S. and Europe. The Haitian government passed legislation against Syrian immigrants during this time, preventing them from participating in the market economy.";

let text14 = "Despite this ban on foriegners participating in the market economy, many European settlers were overlooked. There were clear signs of elitelism within his administration.";

let text15 = "It would be more fitting to call Duvalier's presidency a dictatorship as he simply continued his father's legacy under the name Baby Doc. He was a lavish president and neglected his tole by giving most of his responsibilities to his advisors.";

let text16 = "It was no surprise when Air force One brought him to Paris after an uprising against him within Haiti. Foreign officials had more leniency towards him when it came to human rights violations and economic assistance.";

let text17 ="Less text is written about Moise, but the current state of affairs is enough to illustrate how he's been influenced by foreign powers. Currently, there is a major state of unrest within Haiti over several kidnappings happening within the country. Many protests are occurring urging him to resign because of his lack of action against the crimes.";

let text18 = "The United States military has been invited to Haiti to teach the police how to handle the kidnappings. Many American investors are being invited to Haiti as well in an effort to improve the economy of the country. Kanye West, for example, is trying to build a city of the future within the country.";


function myFunction1() {
  var x = document.getElementById("jeandes");
  if (x.innerHTML === text2) {
    x.innerHTML = text1;
  }
  else if (x.innerHTML === text1) {
    x.innerHTML = text3;
  }
  else {
    x.innerHTML = text2;
  }
}


function myFunction2() {
  var z = document.getElementById("boyerdes");
  if (z.innerHTML === text7) {
    z.innerHTML = text8;
  }
  else if (z.innerHTML === text8) {
    z.innerHTML = text9;
  }
  else {
    z.innerHTML = text7;
  }
}



function flagreveal() {
  var y = document.getElementById("haitiflag");
  if (y.innerHTML === text5){
    y.innerHTML = text6;
  }
  else{
    y.innerHTML = text5;
  }
}

function myFunction3() {
  var a = document.getElementById("occdes");
  if (a.innerHTML === text10){
    a.innerHTML = text11;
  }

  else if(a.innerHTML === text11){
    a.innerHTML = text12;
  }

  else{
    a.innerHTML = text10;
  }
}

function myFunction4() {
  var b = document.getElementById("alexisdes");
  if (b.innerHTML === text13){
    b.innerHTML = text14;
  }

  else{
    b.innerHTML = text13;
  }
}


function myFunction5() {
  var c = document.getElementById("duvdes");
  if (c.innerHTML === text15){
    c.innerHTML = text16;
  }

  else{
    c.innerHTML = text15;
  }
}

function myFunction6() {
  var d = document.getElementById("moisedes");
  if (d.innerHTML === text17){
    d.innerHTML = text18;
  }

  else{
    d.innerHTML = text17;
  }
}

gsap.utils.toArray(".slideText").forEach(text => {
  gsap.timeline({
    defaults: {ease: "none"},
    scrollTrigger: {
      scroller: text.closest(".horizSlider"),
      horizontal: true,
      trigger: text.closest(".slide"),
      start: "left right",
      end: "left left",
      scrub: true
    }
  })
  .fromTo(text, {x: 250}, {x: -250}, 0)
  .from(text.nextElementSibling, {scale: 0.8}, 0)
});
