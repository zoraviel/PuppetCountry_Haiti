const divp = document.querySelector('description');


const text1 = "test";

let jean = document.querySelector('#jeanpic');

jean.onclick = () => {
  if (cismen.getAttribute('src') === 'styles/images/jeanportrait.png')
{
  jean.setAttribute('src','images/femalesign.png');
  divp.textContent = text1;

}
}
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
