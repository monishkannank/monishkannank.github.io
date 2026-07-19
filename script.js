// ---------- reveal on scroll ----------
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('in'));
  }

  // ---------- event-code ticker ----------
  const CODES = [
    ["REDM","Redemption"],["MCAL","Mandatory Call"],["PCAL","Partial Call"],["PRED","Partial Redemption"],
    ["INTR","Interest Payment"],["CONV","Conversion"],["CONS","Consent"],["BIDS","Repurchase Offer/Issuer Bid"],
    ["TEND","Tender/Acquisition/Takeover/Purchase Offer"],["EXOF","Exchange Offer"],["BRUP","Bankruptcy"],["MRGR","Merger"],
    ["EXTM","Extension of Maturity"],["DFLT","Default"],["DVCA","Cash Dividend"],["BPUT","Put Redemption"],
    ["DSCL","Disclosure"],["CHAN","Change"],["NEWM","New Announcement"],["REPL","Replacement"],
    ["WITH","Withdrawal"],["CANC","Cancellation"]
  ];
  const track = document.getElementById('tickerTrack');
  if (track) {
    const renderSet = () => CODES.map(([c,l]) => `<span class="tick"><b>${c}</b> — ${l}</span>`).join('');
    track.innerHTML = renderSet() + renderSet();
  }

  // ---------- glossary search filter (extras page) ----------
  const search = document.getElementById('glossSearch');
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll('.gloss-cell').forEach(cell => {
        const text = cell.textContent.toLowerCase();
        cell.classList.toggle('hide', q.length > 0 && !text.includes(q));
      });
    });
  }
});
