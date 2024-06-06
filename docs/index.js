
const currentYear = new Date().getFullYear();
console.log(currentYear);

const copyrightParagraph = document.querySelector('.copyright');


if (copyrightParagraph) {
  copyrightParagraph.textContent = `© ${currentYear} Hiroki Kato`;
}
