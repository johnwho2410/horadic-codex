const cowRune = document.querySelector('.footer-rune');
if (cowRune) {
  cowRune.addEventListener('click', e => {
    e.preventDefault();
    const href = cowRune.getAttribute('href');
    let navigated = false;
    const go = () => { if (!navigated) { navigated = true; window.location.href = href; } };
    const audio = new Audio('img/muh/universfield-cow-moo-122255.mp3');
    audio.addEventListener('ended', go);
    audio.play().catch(() => {});
    setTimeout(go, 2500);
  });
}
