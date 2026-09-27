document.querySelectorAll('.pips').forEach(el => {
      const value = Number(el.dataset.value || 0);
      el.innerHTML = Array.from({length:5}, (_,i) => `<i class="pip ${i < value ? 'on' : ''}"></i>`).join('');
    });
    const petalLayer = document.querySelector('.hero-petals');
    if (petalLayer && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const petalCount = innerWidth < 720 ? 11 : 19;
      for (let index = 0; index < petalCount; index += 1) {
        const petal = document.createElement('span');
        const x = (index * 37 + 11) % 100;
        const size = 9 + ((index * 7) % 10);
        const duration = 8 + ((index * 11) % 8);
        const delay = -((index * 13) % 15);
        const drift = -65 + ((index * 29) % 130);
        const gust = 22 + ((index * 17) % 48);
        const direction = index % 2 ? 1 : -1;
        const windA = direction * gust;
        const windB = drift * .34 - direction * gust * .72;
        const windC = drift * .7 + direction * gust * .55;
        petal.style.cssText = `--x:${x}%;--size:${size}px;--duration:${duration}s;--delay:${delay}s;--drift:${drift}px;--wind-a:${windA}px;--wind-b:${windB}px;--wind-c:${windC}px;--rotation:${index * 31}deg`;
        petal.innerHTML = '<i></i>';
        petalLayer.appendChild(petal);
      }
      new IntersectionObserver(([entry]) => petalLayer.classList.toggle('petals-paused', !entry.isIntersecting), { threshold:0 }).observe(document.querySelector('.hero'));
    }
    const world = document.querySelector('.world');
    const worldSlides = [...document.querySelectorAll('.world-slide')];
    const worldTabs = [...document.querySelectorAll('.world-tab')];
    let activeRegion = 0;
    const showRegion = index => {
      activeRegion = (index + worldSlides.length) % worldSlides.length;
      worldSlides.forEach((slide, slideIndex) => {
        const active = slideIndex === activeRegion;
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      worldTabs.forEach((tab, tabIndex) => {
        const active = tabIndex === activeRegion;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      const activeTab = worldTabs[activeRegion];
      const tabRail = activeTab.parentElement;
      const targetLeft = activeTab.offsetLeft - (tabRail.clientWidth - activeTab.offsetWidth) / 2;
      tabRail.scrollTo({ left:Math.max(0,targetLeft), behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    worldTabs.forEach(tab => tab.addEventListener('click', () => showRegion(Number(tab.dataset.regionTab))));
    document.querySelector('.world-prev').addEventListener('click', () => showRegion(activeRegion - 1));
    document.querySelector('.world-next').addEventListener('click', () => showRegion(activeRegion + 1));
    world.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') showRegion(activeRegion - 1);
      if (event.key === 'ArrowRight') showRegion(activeRegion + 1);
    });
    let worldTouchStart = 0;
    world.addEventListener('touchstart', event => { worldTouchStart = event.changedTouches[0].clientX; }, { passive:true });
    world.addEventListener('touchend', event => {
      const distance = event.changedTouches[0].clientX - worldTouchStart;
      if (Math.abs(distance) > 55) showRegion(activeRegion + (distance < 0 ? 1 : -1));
    }, { passive:true });
