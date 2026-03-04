// SkillAI v6.0 — Full Academic Platform | Team APEIRON

// === Multilingual Support (I18N) ===
const I18N = {
    EN: { ovp: "Overview", splan: "Study Plan", qs: "Questions", mcq: "MCQ Quiz", sans: "Short Ans", form: "Formulas", rev: "Revision", strat: "Strategy", pred: "Predict", car: "Career Path", res: "Research", code: "Coding", prog: "Progress" },
    HI: { ovp: "अवलोकन", splan: "अध्ययन योजना", qs: "प्रश्न", mcq: "बहुविकल्पीय", sans: "लघु उत्तर", form: "सूत्र", rev: "पुनरीक्षण", strat: "रणनीति", pred: "भविष्यवाणी", car: "करियर", res: "अनुसंधान", code: "कोडिंग", prog: "प्रगति" },
    TA: { ovp: "கண்ணோட்டம்", splan: "படிப்புத் திட்டம்", qs: "கேள்விகள்", mcq: "MCQ வினாடிவினா", sans: "குறு விடை", form: "சூத்திரங்கள்", rev: "மீளாய்வு", strat: "வியூகம்", pred: "கணிப்பு", car: "வேலைவாய்ப்பு", res: "ஆராய்ச்சி", code: "குறியீட்டு", prog: "முன்னேற்றம்" },
    TE: { ovp: "అవలోకనం", splan: "అధ్యయన ప్రణాళిక", qs: "ప్రశ్నలు", mcq: "MCQ క్విజ్", sans: "చిన్న సమాధానం", form: "సూత్రాలు", rev: "రివిజన్", strat: "వ్యూహం", pred: "అంచనా", car: "కెరీర్ మార్గం", res: "పరిశోధన", code: "కోడింగ్", prog: "పురోగతి" },
    KA: { ovp: "ಅವಲೋಕನ", splan: "ಅಧ್ಯಯನ ಯೋಜನೆ", qs: "ಪ್ರಶ್ನೆಗಳು", mcq: "MCQ ರಸಪ್ರಶ್ನೆ", sans: "ಸಣ್ಣ ಉತ್ತರ", form: "ಸೂತ್ರಗಳು", rev: "ಪರಿಷ್ಕರಣೆ", strat: "ತಂತ್ರ", pred: "ಭವಿಷ್ಯ", car: "ವೃತ್ತಿ ಮಾರ್ಗ", res: "ಸಂಶೋಧನೆ", code: "ಕೋಡಿಂಗ್", prog: "ಪ್ರಗತಿ" }
};
let curLang = 'EN';

// Data constants are now imported from data/subjects.js and data/careers.js

function makeGeneric(sub, level) { const w = sub.split(' ')[0]; const isAdv = level === 'PG' || level === 'PhD'; return { plan: [{ day: 1, topic: 'Fundamentals', act: `Core definitions, laws of ${sub}.${isAdv ? ' Review prerequisite knowledge.' : ''}`, time: '3h', prio: 'n' }, { day: 2, topic: 'Theory I', act: 'Key theorems, boundary conditions.', time: '3h', prio: 'n' }, { day: 3, topic: 'Theory II', act: 'Advanced concepts, special cases.', time: '3.5h', prio: 'm' }, { day: 4, topic: 'Applications', act: `Real-world ${w} problems.${isAdv ? ' Research paper examples.' : ''}`, time: '4h', prio: 'h' }, { day: 5, topic: 'Numericals', act: 'Computational methods, formula application.', time: '4h', prio: 'h' }, { day: 6, topic: 'Advanced', act: `Modern developments in ${w}.`, time: '3h', prio: 'm' }, { day: 7, topic: 'Mock Test', act: 'Full revision + timed paper solving.', time: '4h', prio: 'n' }], qs: [{ q: `State fundamental principles of ${sub}.`, m: 10, d: 'Easy', t: 'Theory' }, { q: `Derive key equation of ${sub}.`, m: 15, d: 'Hard', t: 'Derivation' }, { q: `Numerical: Apply core ${sub} formula.`, m: 10, d: 'Medium', t: 'Numerical' }, { q: `Design problem: Given constraints, design a ${w} system.`, m: 15, d: 'Hard', t: 'Design' }], mcqs: [{ q: `Core principle of ${sub}?`, o: ['Theory only', 'Applied analysis', 'Documentation', 'All above'], a: 3, e: `Integrates all aspects.` }, { q: 'Analysis method?', o: ['Analytical', 'Random', 'Trial', 'Guess'], a: 0, e: 'Analytical & numerical standard.' }, { q: 'Efficiency factor?', o: ['Design', 'Materials', 'Environment', 'All'], a: 3, e: 'Multiple factors affect efficiency.' }], sa: [{ q: `Define ${sub}.`, a: `Studies ${w.toLowerCase()} principles for design.` }, { q: 'Key assumptions?', a: 'Ideal conditions, linear behavior.' }], formulas: [{ t: `📖 ${w} Basics`, items: ['Core equations avec SI units', 'Boundary conditions'] }, { t: '📐 Analysis', items: ['Analysis formulas', 'Efficiency calc'] }], revision: `${sub} covers ${w.toLowerCase()} principles. Focus: core theorems + derivations. Solve previous year papers.`, strategy: [{ t: `<strong>Formula sheet</strong> — review 10 min/day.` }, { t: '<strong>Numericals > theory</strong> — solve 5 problems/day.' }, { t: '<strong>Diagrams</strong> — 10-15 marks per diagram.' }], patterns: [{ t: 'Theory', p: '35%', d: 'Definitions' }, { t: 'Numerical', p: '30%', d: 'Calculate' }, { t: 'Diagram', p: '20%', d: 'Draw' }], timeAlloc: [{ topic: 'Fundamentals', hrs: 3, pct: 15, c: '#34D399' }, { topic: 'Numericals', hrs: 8, pct: 40, c: '#F87171' }, { topic: 'Theory', hrs: 5, pct: 25, c: '#06B6D4' }, { topic: 'Revision', hrs: 4, pct: 20, c: '#A78BFA' }] } }
function getContent(sub, level) { return (sub === 'Data Structures & Algorithms' || sub === 'Data Structures') ? DSA : makeGeneric(sub, level); }

function calcImprovement(rating, weakCount, scores) { const profGap = 5 - rating; let base = profGap * 8 + 5 + Math.min(weakCount * 4, 16); if (scores.length > 0) { const avg = scores.reduce((a, b) => a + b, 0) / scores.length; if (avg < 35) base += 12; else if (avg < 50) base += 8; else if (avg < 65) base += 4; } const confidence = scores.length >= 2 ? 0.85 : 0.6; return { improvement: Math.min(Math.round(base * confidence), 55), confidence: Math.round(confidence * 100) }; }
function getAdaptiveMode(r) { if (r <= 2) return { mode: 'Fundamentals Focus', msg: 'Emphasizing basics — definitions, simple examples, step-by-step derivations.', color: '#F87171' }; if (r <= 3) return { mode: 'Balanced Approach', msg: 'Equal weight to theory + problem-solving. Moderate difficulty.', color: '#FBBF24' }; return { mode: 'Advanced Application', msg: 'Application questions, edge cases, optimization. Exam-level rigor.', color: '#34D399' }; }

// === Tracker Setup ===
const Tracker = {
    get: () => JSON.parse(localStorage.getItem('skillai_tracker') || '{"sessions":0,"scores":[],"weak":{}}'),
    save: (d) => localStorage.setItem('skillai_tracker', JSON.stringify(d)),
    addScore: (s) => { const d = Tracker.get(); d.scores.push(s); Tracker.save(d); },
    addWeak: (wks) => { const d = Tracker.get(); wks.forEach(w => d.weak[w] = (d.weak[w] || 0) + 1); Tracker.save(d); },
    addSession: () => { const d = Tracker.get(); d.sessions++; Tracker.save(d); }
};

// === DOM Init ===
document.addEventListener('DOMContentLoaded', () => { initNav(); initLevel(); initDropdowns(); initRating(); initForm(); initTabs(); initLang(); animateCounters(); scrollReveal(); });

function initLang() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            curLang = btn.dataset.l;
            translateTabs();
        };
    });
}
function translateTabs() {
    const d = I18N[curLang];
    const map = { overview: d.ovp, plan: d.splan, questions: d.qs, mcq: d.mcq, shortans: d.sans, formulas: d.form, revision: d.rev, strategy: d.strat, predict: d.pred, career: d.car, research: d.res, coding: d.code, progress: d.prog };
    document.querySelectorAll('.tab').forEach(t => { const k = t.dataset.t; if (map[k]) t.innerHTML = t.innerHTML.replace(/[A-Za-z ]+$/, ' ' + map[k]); });
}

function initNav() { const n = document.getElementById('nav'); window.addEventListener('scroll', () => n.classList.toggle('scrolled', scrollY > 40)); }
function initLevel() {
    const lv = document.getElementById('academicLevel'), sem = document.getElementById('semester');
    if (!lv) return;
    lv.onchange = () => {
        const v = lv.value;
        sem.innerHTML = '<option value="">Select</option>';
        if (v === 'UG') { for (let i = 1; i <= 8; i++)sem.innerHTML += `<option value="${i}"${i === 3 ? ' selected' : ''}>${i}${i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} Semester</option>`; }
        else if (v === 'PG') { for (let i = 1; i <= 4; i++)sem.innerHTML += `<option value="m${i}">${i}${i === 1 ? 'st' : i === 2 ? 'nd' : i === 3 ? 'rd' : 'th'} Semester (M.Tech)</option>`; }
        else if (v === 'PhD') { ['Coursework', 'Qualifying Exam', 'Proposal Defense', 'Thesis Work'].forEach(s => sem.innerHTML += `<option value="phd">${s}</option>`); }
        const cg = document.getElementById('careerGoalField'); if (cg) cg.style.display = (v === 'UG' || v === 'PG') ? 'block' : 'none';
        updateSubjects();
    };
}
function initDropdowns() {
    const b = document.getElementById('branch'), s = document.getElementById('semester'), sub = document.getElementById('subject');
    b.onchange = updateSubjects; s.onchange = updateSubjects; sub.onchange = () => populateChips();
}
function updateSubjects() {
    const b = document.getElementById('branch').value, s = document.getElementById('semester').value, sub = document.getElementById('subject');
    sub.innerHTML = '<option value="">Select Subject</option>'; document.getElementById('weakChips').innerHTML = '';
    if (b && s && DB[b]?.[s]) DB[b][s].forEach(n => sub.innerHTML += `<option value="${n}">${n}</option>`);
    else if (b && s === 'phd' && DB[b]?.phd) DB[b].phd.forEach(n => sub.innerHTML += `<option value="${n}">${n}</option>`);
}
function populateChips() { const sub = document.getElementById('subject').value, g = document.getElementById('weakChips'); g.innerHTML = ''; if (!sub) return; const lv = document.getElementById('academicLevel')?.value || 'UG'; getContent(sub, lv).plan.forEach(d => { const c = document.createElement('span'); c.className = 'chip'; c.textContent = d.topic; c.onclick = () => c.classList.toggle('flagged'); g.appendChild(c); }); }
function initRating() { const sl = document.getElementById('selfRating'), badge = document.getElementById('ratingBadge'), msg = document.getElementById('adaptMsg'); sl.oninput = () => { const v = +sl.value, m = getAdaptiveMode(v); badge.textContent = `${v}/5 — ${m.mode}`; msg.textContent = m.msg; }; }
function initTabs() { document.addEventListener('click', e => { if (!e.target.classList.contains('tab')) return; document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === e.target)); document.querySelectorAll('.tp').forEach(p => p.style.display = 'none'); const p = document.getElementById('tp-' + e.target.dataset.t); if (p) p.style.display = 'block'; }); }

const sleep = ms => new Promise(r => setTimeout(r, ms));

function initForm() {
    document.getElementById('mentorForm').onsubmit = async e => {
        e.preventDefault();
        const sub = document.getElementById('subject').value; if (!sub) { alert('Select a subject first.'); return; }
        const rating = +document.getElementById('selfRating').value;
        const weak = [...document.querySelectorAll('.chip.flagged')].map(c => c.textContent);
        const scores = [document.getElementById('sc1').value, document.getElementById('sc2').value, document.getElementById('sc3').value].filter(Boolean).map(Number);
        const level = document.getElementById('academicLevel')?.value || 'UG';
        const career = document.getElementById('careerGoal')?.value || '';
        const branch = document.getElementById('branch').value;
        const uni = document.getElementById('university').value;
        const btn = document.getElementById('genBtn');

        Tracker.addSession();
        if (weak.length) Tracker.addWeak(weak);

        document.getElementById('genText').style.display = 'none'; document.getElementById('genLoader').style.display = 'inline-flex'; btn.disabled = true;
        document.getElementById('outIdle').style.display = 'none'; document.getElementById('outResults').style.display = 'none';
        const proc = document.getElementById('outProc'); proc.style.display = 'flex';
        document.getElementById('procRating').textContent = rating + '/5';

        const procCareer = document.getElementById('procCareer');
        const procResearch = document.getElementById('procResearch');
        if (procCareer) procCareer.style.display = career ? 'flex' : 'none';
        if (procResearch) procResearch.style.display = level === 'PhD' ? 'flex' : 'none';

        const steps = proc.querySelectorAll('.pl');
        for (const s of steps) {
            if (s.style.display === 'none') continue;
            s.classList.add('active'); await sleep(500); s.classList.remove('active'); s.classList.add('done');
        }
        await sleep(300);

        const C = getContent(sub, level), { improvement, confidence } = calcImprovement(rating, weak.length, scores), mode = getAdaptiveMode(rating);

        renderOverview(sub, rating, weak, scores, improvement, confidence, mode, C, level, career, uni);
        renderPlan(C, weak, rating); renderQuestions(C, rating); renderMCQs(C); renderShortAns(C); renderFormulas(C); renderRevision(C); renderStrategy(C); renderPredict(improvement, confidence, C, rating);

        if (career) renderCareer(career);
        if (level === 'PhD') renderResearch(branch);
        renderCoding(sub);
        renderProgress();

        const getTab = t => document.querySelector(`[data-t="${t}"]`);
        if (getTab('career')) getTab('career').style.display = career ? 'inline-flex' : 'none';
        if (getTab('research')) getTab('research').style.display = level === 'PhD' ? 'inline-flex' : 'none';
        if (getTab('coding')) getTab('coding').style.display = CODING[sub] ? 'inline-flex' : 'none';

        proc.style.display = 'none'; steps.forEach(s => s.classList.remove('active', 'done'));
        document.getElementById('outResults').style.display = 'block'; document.querySelectorAll('.tab')[0].click();
        document.getElementById('genText').style.display = 'inline'; document.getElementById('genLoader').style.display = 'none'; btn.disabled = false;
        if (innerWidth < 768) document.getElementById('mOutput').scrollIntoView({ behavior: 'smooth' });
    };
}

// === Render Functions ===
function renderOverview(sub, rating, weak, scores, imp, conf, mode, C, level, career, uni) {
    const avg = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(0) : '—';
    const lvBadge = level === 'PhD' ? '🎓 PhD Research' : level === 'PG' ? '🎓 M.Tech' : '📚 Undergraduate';
    const uniText = uni ? UNIVERSITIES[uni] : '';
    document.getElementById('tp-overview').innerHTML = `<h3>📊 ${I18N[curLang].ovp} — ${sub} <span style="font-size:0.6em;color:#10B981;font-weight:400">[Coordinator]</span></h3>
    <div class="info-box ib-info" style="margin-bottom:12px">${lvBadge}${uniText ? ` · 🏫 ${uniText.split('—')[0]}` : ''}${career ? ` · 🎯 Career: ${career}` : ''}</div>
    <div class="ov-grid">
      <div class="ov-card"><div class="ov-icon">🎯</div><div class="ov-val">${rating}/5</div><div class="ov-lbl">Self Rating</div></div>
      <div class="ov-card"><div class="ov-icon">📈</div><div class="ov-val">+${imp}%</div><div class="ov-lbl">Predicted Gain</div></div>
      <div class="ov-card"><div class="ov-icon">🧠</div><div class="ov-val">${mode.mode.split(' ')[0]}</div><div class="ov-lbl">Adaptive Mode</div></div>
      <div class="ov-card"><div class="ov-icon">📝</div><div class="ov-val">${avg}</div><div class="ov-lbl">Avg Score</div></div>
    </div>
    <h4>Concept Classification (Bloom's Taxonomy)</h4>
    <div class="concept-badges">
      ${C.plan.slice(0, 2).map(d => `<span class="cbadge cb-f">🟢 ${d.topic}</span>`).join('')}
      ${C.plan.slice(2, 5).map(d => `<span class="cbadge cb-i">🟡 ${d.topic}</span>`).join('')}
    </div>
    ${weak.length ? `<div class="info-box ib-warn">⚠️ <strong>Flagged weak:</strong> ${weak.join(', ')} — these get 2.5× study time.</div>` : ''}
    <div class="info-box ib-info">🎯 <strong>${mode.mode}:</strong> ${mode.msg}</div>`;
}

function renderPlan(C, weak, rating) {
    document.getElementById('tp-plan').innerHTML = `<h3>📅 7-Day Adaptive ${I18N[curLang].splan} <span style="font-size:0.6em;color:#10B981;font-weight:400">[Coordinator]</span></h3><table class="stable"><thead><tr><th>Day</th><th>Topic</th><th>Activities</th></tr></thead><tbody>${C.plan.map(d => `<tr><td><span class="day-b">Day ${d.day}</span></td><td style="font-weight:600;color:#E8ECF4">${d.topic}</td><td>${d.act}</td></tr>`).join('')}</tbody></table>`;
}

function renderQuestions(C, rating) {
    document.getElementById('tp-questions').innerHTML = `<h3>❓ 10 Exam Questions <span style="font-size:0.6em;color:#3B82F6;font-weight:400">[Practice Agent]</span></h3>${C.qs.map((q, i) => `<div class="qi"><div class="qi-n">${i + 1}</div><div class="qi-body"><div class="qi-text">${q.q}</div><div class="qi-tags"><span class="qi-tag qt-marks">${q.m}M</span><span class="qi-tag qt-${q.d.toLowerCase()}">${q.d}</span></div></div></div>`).join('')}`;
}

function renderMCQs(C) {
    window._mcq = { ans: new Set(), score: 0, total: C.mcqs.length };
    document.getElementById('tp-mcq').innerHTML = `<h3>🎯 MCQ Quiz (${C.mcqs.length}) <span style="font-size:0.6em;color:#3B82F6;font-weight:400">[Practice Agent]</span></h3><p style="color:#4B5563;font-size:.78rem;margin-bottom:10px">Evaluate understanding instantly. Scores are tracked in Progress.</p>
    ${C.mcqs.map((m, qi) => `<div class="mcq-card" id="mcq${qi}"><div class="mcq-q">Q${qi + 1}. ${m.q}</div><div class="mcq-opts">${m.o.map((o, oi) => `<div class="mcq-opt" onclick="checkMCQ(${qi},${oi},${m.a})">${String.fromCharCode(65 + oi)}) ${o}</div>`).join('')}</div><div class="mcq-exp" id="exp${qi}">💡 Feedback: ${m.e}</div></div>`).join('')}
    <div class="mcq-score-box" id="mcqSc" style="display:none"><div class="mcq-score-big" id="mcqScN"></div></div>`;
}
window.checkMCQ = function (qi, oi, ans) {
    if (window._mcq.ans.has(qi)) return;
    window._mcq.ans.add(qi);
    const opts = document.getElementById('mcq' + qi).querySelectorAll('.mcq-opt');
    opts.forEach((o, i) => { o.style.pointerEvents = 'none'; if (i === ans) o.classList.add('correct'); if (i === oi && i !== ans) o.classList.add('wrong'); });
    if (oi === ans) window._mcq.score++;
    document.getElementById('exp' + qi).classList.add('show');
    if (window._mcq.ans.size === window._mcq.total) {
        document.getElementById('mcqSc').style.display = 'block';
        const pct = Math.round((window._mcq.score / window._mcq.total) * 100);
        document.getElementById('mcqScN').innerHTML = `${window._mcq.score}/${window._mcq.total} — ${pct}%<div style="font-size:0.4em;margin-top:5px;font-weight:400">${pct < 50 ? 'Need Revision. Added to Weak Topics.' : 'Good Job!'}</div>`;
        Tracker.addScore(pct);
        renderProgress(); // Update progress panel with new score
    }
};

function renderShortAns(C) { document.getElementById('tp-shortans').innerHTML = `<h3>✍️ Short-Answer Questions <span style="font-size:0.6em;color:#3B82F6;font-weight:400">[Practice Agent]</span></h3>${C.sa.map((s, i) => `<div class="sa-card"><div class="sa-q">Q${i + 1}. ${s.q}</div><span class="sa-toggle" onclick="this.nextElementSibling.classList.toggle('show')">Show Answer →</span><div class="sa-ans">${s.a}</div></div>`).join('')}`; }
function renderFormulas(C) { document.getElementById('tp-formulas').innerHTML = `<h3>⚡ Formulas & Concepts <span style="font-size:0.6em;color:#8B5CF6;font-weight:400">[Tutor Agent]</span></h3>${C.formulas.map(f => `<div class="f-card"><h4>${f.t}</h4>${f.items.map(i => `<div class="f-item">${i}</div>`).join('')}</div>`).join('')}`; }
function renderRevision(C) { document.getElementById('tp-revision').innerHTML = `<h3>📝 Revision Summary <span style="font-size:0.6em;color:#F59E0B;font-weight:400">[Exam Agent]</span></h3><div class="rev-box"><p>${C.revision}</p></div>`; }
function renderStrategy(C) { document.getElementById('tp-strategy').innerHTML = `<h3>🛠️ Problem-Solving Strategy <span style="font-size:0.6em;color:#8B5CF6;font-weight:400">[Tutor Agent]</span></h3>${C.strategy.map((s, i) => `<div class="strat-item"><div class="strat-n">${i + 1}</div><div class="strat-text">${s.t}</div></div>`).join('')}`; }
function renderPredict(imp, conf, C, rating) { document.getElementById('tp-predict').innerHTML = `<h3>📈 Performance Prediction <span style="font-size:0.6em;color:#F59E0B;font-weight:400">[Exam Agent]</span></h3><div class="pred-hero"><div class="pred-big"><span class="pred-plus">+${imp}%</span></div><div class="pred-sub">Expected gain · ${conf}% confidence</div></div>`; }

function renderCareer(career) {
    const c = CAREERS[career]; if (!c) return;
    document.getElementById('tp-career').innerHTML = `<h3>🎓 Career Roadmap: ${career} <span style="font-size:0.6em;color:#EC4899;font-weight:400">[Career Agent]</span></h3>
    <h4>🛠️ Required Skills</h4><div class="concept-badges">${c.skills.map(s => `<span class="cbadge cb-f">✅ ${s}</span>`).join('')}</div>
    <h4>📚 Recommended Courses</h4><div class="career-list">${c.courses.map((r, i) => `<div class="strat-item"><div class="strat-n">${i + 1}</div><div class="strat-text">${r}</div></div>`).join('')}</div>`;
}

function renderResearch(branch) {
    const r = RESEARCH_GUIDE[branch] || RESEARCH_GUIDE['CSE'];
    document.getElementById('tp-research').innerHTML = `<h3>🔬 Research Guidance — ${branch} <span style="font-size:0.6em;color:#06B6D4;font-weight:400">[Research Agent]</span></h3>
    <h4>📌 Suggested Research Topics</h4><div class="career-list">${r.topics.map((t, i) => `<div class="strat-item"><div class="strat-n">${i + 1}</div><div class="strat-text">${t}</div></div>`).join('')}</div>
    <h4>📰 Target Journals</h4><div class="concept-badges">${r.journals.map(j => `<span class="cbadge cb-f">📰 ${j}</span>`).join('')}</div>`;
}

function renderCoding(sub) {
    const c = CODING[sub]; if (!c) return;
    document.getElementById('tp-coding').innerHTML = `<h3>💻 Coding Playground <span style="font-size:0.6em;color:#3B82F6;font-weight:400">[Practice Agent]</span></h3>
    <div class="info-box ib-info">Language: <strong>${c.lang.toUpperCase()}</strong></div>
    <h4>Code Example</h4><pre class="code-block"><code>${c.ex}</code></pre>
    <h4>Exercise</h4><p style="margin-bottom:10px">${c.q}</p>
    <span class="sa-toggle" onclick="this.nextElementSibling.classList.toggle('show')">Show Solution →</span><pre class="code-block" style="display:none"><code>${c.a}</code></pre>`;
}

function renderProgress() {
    const tr = Tracker.get();
    const avgScore = tr.scores.length ? Math.round(tr.scores.reduce((a, b) => a + b, 0) / tr.scores.length) : 0;
    const wf = Object.entries(tr.weak).sort((a, b) => b[1] - a[1]).map(x => x[0]).slice(0, 3);

    document.getElementById('tp-progress').innerHTML = `<h3>📊 Adaptive Progress <span style="font-size:0.6em;color:#10B981;font-weight:400">[Coordinator]</span></h3>
    <div class="ov-grid">
      <div class="ov-card"><div class="ov-icon">🔄</div><div class="ov-val">${tr.sessions}</div><div class="ov-lbl">Sessions Generated</div></div>
      <div class="ov-card"><div class="ov-icon">🎯</div><div class="ov-val">${avgScore}%</div><div class="ov-lbl">Avg MCQ Score</div></div>
    </div>
    ${wf.length ? `<h4>⚠️ Persistent Weak Areas</h4><div class="concept-badges">${wf.map(w => `<span class="cbadge cb-a">🔴 ${w}</span>`).join('')}</div>` : ''}
    <div class="info-box ib-info">Progress is automatically tracked using your browser storage.</div>`;
}

// === Counters & Animations ===
function animateCounters() { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (!e.isIntersecting) return; const el = e.target, target = +el.dataset.count; let cur = 0; const inc = target / 40; const t = setInterval(() => { cur += inc; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = Math.floor(cur); }, 30); obs.unobserve(el); }); }, { threshold: .5 }); document.querySelectorAll('.hstat-val').forEach(el => obs.observe(el)); }
function scrollReveal() { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } }); }, { threshold: .06, rootMargin: '0px 0px -30px 0px' }); document.querySelectorAll('.feat-card,.imp-card,.arch-layer,.cta-box').forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(24px)'; el.style.transition = 'all .5s cubic-bezier(.4,0,.2,1)'; obs.observe(el); }); }
document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth' }); }); });
