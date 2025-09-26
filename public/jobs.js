let base = Math.floor(Math.random() * 356);
const c = (txt, b) => {
  base += 50;
  base %= 365;
  console.log(
    `%c${txt}`,
    `color: oklch(50% 40% ${base}) ${b ? "; font-weight: bold" : ""}`,
  );
};
c("Hi there :)");
c("Want to work at Val Town?");
c("We're hiring: https://www.val.town/careers", true);
