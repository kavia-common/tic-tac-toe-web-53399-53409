(function () {
  // Basic enhancement: ensure chips have role semantics
  function initChips() {
    const chips = [
      {bg: '#chip-all-bg', text: '#chip-all-text', active: true},
      {bg: '#chip-combos-bg', text: '#chip-combos-text'},
      {bg: '#chip-sliders-bg', text: '#chip-sliders-text'},
      {bg: '#chip-classic-bg', text: '#chip-classic-text'},
    ];
    chips.forEach((c) => {
      const bg = document.querySelector(c.bg);
      const text = document.querySelector(c.text);
      if (!bg || !text) return;
      bg.setAttribute('role', 'button');
      bg.setAttribute('tabindex', '0');
      bg.setAttribute('aria-pressed', c.active ? 'true' : 'false');
      bg.style.cursor = 'pointer';
      function setActive(active) {
        chips.forEach(({bg: other}) => {
          const node = document.querySelector(other);
          if (!node) return;
          if (other === c.bg) {
            node.style.backgroundColor = active ? 'var(--color-ef2a39)' : 'var(--color-f3f4f6)';
            node.style.boxShadow = active ? 'var(--shadow-1)' : 'none';
          } else {
            node.style.backgroundColor = 'var(--color-f3f4f6)';
            node.style.boxShadow = 'none';
          }
        });
        const allText = ['#chip-all-text','#chip-combos-text','#chip-sliders-text','#chip-classic-text'];
        allText.forEach(sel => {
          const t = document.querySelector(sel);
          if (!t) return;
          t.style.color = (sel === c.text) ? (bg.style.backgroundColor === 'var(--color-ef2a39)' ? 'var(--color-ffffff)' : 'var(--color-6a6a6a)') : 'var(--color-6a6a6a)';
        });
        bg.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
      bg.addEventListener('click', () => setActive(true));
      bg.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(true); }
      });
      // initial visual
      setActive(!!c.active);
    });
  }

  // Set initial chip text color states according to backgrounds
  function syncChipTextColors() {
    const mapping = [
      ['#chip-all-bg','#chip-all-text', true],
      ['#chip-combos-bg','#chip-combos-text', false],
      ['#chip-sliders-bg','#chip-sliders-text', false],
      ['#chip-classic-bg','#chip-classic-text', false],
    ];
    mapping.forEach(([bgSel,textSel,active]) => {
      const bg = document.querySelector(bgSel);
      const text = document.querySelector(textSel);
      if (!bg || !text) return;
      text.style.color = active ? 'var(--color-ffffff)' : 'var(--color-6a6a6a)';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initChips();
    syncChipTextColors();
  });
})();
