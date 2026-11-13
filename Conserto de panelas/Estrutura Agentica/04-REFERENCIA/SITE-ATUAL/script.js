// Número do WhatsApp com DDI e DDD, só dígitos.
const WHATSAPP = "5531987396336";
// Link do perfil no Google (avaliações).
const LINK_GOOGLE = "https://share.google/4yfzvqiftgoAKwqah";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const linkWhats = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const abrirWhats = (msg) => window.open(linkWhats(msg), "_blank", "noopener");
const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Links de WhatsApp */
$$(".js-whats").forEach((a) => {
  a.href = linkWhats(a.dataset.msg || "Olá! Vim pelo site.");
  a.target = "_blank";
  a.rel = "noopener";
});
const google = $("#linkGoogle");
if (LINK_GOOGLE) google.href = LINK_GOOGLE; else google.hidden = true;
$("#ano").textContent = new Date().getFullYear();

/* Menu do celular */
const menu = $("#menu"), menuBtn = $("#menuBtn");
menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
$$("a", menu).forEach((a) => a.addEventListener("click", () => {
  menu.classList.remove("aberto");
  menuBtn.setAttribute("aria-expanded", "false");
}));

/* Topo, barra de progresso e link ativo */
const topo = $("#topo"), barra = $("#progresso");
function aoRolar() {
  const max = document.documentElement.scrollHeight - innerHeight;
  barra.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  topo.classList.toggle("cheio", scrollY > 30);
}
addEventListener("scroll", aoRolar, { passive: true });
aoRolar();

const links = $$("a", menu);
const secoes = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
const vigia = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) links.forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
secoes.forEach((s) => vigia.observe(s));

/* Revelar ao rolar + contadores */
function contar(el) {
  const alvo = parseFloat(el.dataset.alvo), dec = +el.dataset.dec || 0;
  if (semMovimento) { el.textContent = alvo.toFixed(dec).replace(".", ","); return; }
  const t0 = performance.now(), dur = 1400;
  (function passo(t) {
    const p = Math.min((t - t0) / dur, 1), v = alvo * (1 - Math.pow(1 - p, 3));
    el.textContent = v.toFixed(dec).replace(".", ",");
    if (p < 1) requestAnimationFrame(passo);
  })(t0);
}
const revelar = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add("visivel");
  $$(".contar", e.target).forEach(contar);
  if (e.target.matches(".contar")) contar(e.target);
  revelar.unobserve(e.target);
}), { threshold: 0.15 });
$$("[data-reveal]").forEach((el) => revelar.observe(el));

/* Palavras que trocam no título */
const troca = $("#troca");
const palavras = ["de pressão", "queimada", "de restaurante", "de alumínio", "de inox", "com cabo quebrado"];
let ip = 0;
if (!semMovimento) setInterval(() => {
  troca.classList.add("sai");
  setTimeout(() => { ip = (ip + 1) % palavras.length; troca.textContent = palavras[ip]; troca.classList.remove("sai"); }, 350);
}, 2600);

/* Diagnóstico */
const SERVICOS = {
  pressao: ["Troca de borracha e revisão da válvula", "Quando a panela não pega pressão, quase sempre a borracha está ressecada ou a válvula entupida."],
  vazando: ["Revisão da vedação da tampa", "Vapor escapando pela tampa costuma ser borracha gasta ou tampa fora de alinhamento."],
  cabo: ["Troca de cabo ou alça", "Cabo e alça soltos são perigosos com panela quente. Trocamos e reforçamos a fixação."],
  queimada: ["Limpeza pesada", "Tiramos crosta e gordura queimada por dentro e por fora, sem estragar o metal."],
  brilho: ["Polimento", "Alumínio e inox oxidados voltam a brilhar com polimento feito na bancada."],
  fundo: ["Alinhamento do fundo", "Fundo torto balança no fogão e cozinha mal. Avaliamos o alinhamento e, se for furo, vemos pela foto o que dá para fazer."],
  industrial: ["Atendimento para empresas", "Para panelas de restaurante temos manutenção, limpeza pesada e condição de parceiro. Veja a seção Restaurantes."],
  outro: ["Avaliação pela foto", "Mande uma foto no WhatsApp e a gente diz o que dá para fazer e quanto custa."],
};
const NOMES = {
  pressao: "não pega pressão", vazando: "vaza vapor pela tampa", cabo: "cabo ou alça solta/quebrada",
  queimada: "queimada ou com crosta", brilho: "perdeu o brilho", fundo: "fundo torto, empenado ou furado",
  industrial: "é panela de restaurante", outro: "outro problema",
};
const escolhidos = new Set();
const diagLista = $("#diagLista"), diagVazio = $("#diagVazio"), diagBtn = $("#diagBtn"), diagNota = $("#diagNota");
$$("#diagChips .opcao").forEach((b) => b.addEventListener("click", () => {
  const id = b.dataset.id;
  const on = !escolhidos.has(id);
  on ? escolhidos.add(id) : escolhidos.delete(id);
  b.setAttribute("aria-pressed", on);
  const lista = [...escolhidos];
  const vazio = lista.length === 0;
  diagVazio.hidden = !vazio; diagLista.hidden = vazio; diagBtn.hidden = vazio; diagNota.hidden = vazio;
  diagLista.innerHTML = lista.map((i) => `<div class="sug"><h4>${SERVICOS[i][0]}</h4><p>${SERVICOS[i][1]}</p></div>`).join("");
  const msg = `Olá! Fiz o diagnóstico no site.\nMinha panela: ${lista.map((i) => NOMES[i]).join(", ")}.\nServiço provável: ${lista.map((i) => SERVICOS[i][0]).join("; ")}.\nPosso mandar as fotos?`;
  diagBtn.href = linkWhats(msg);
  diagBtn.target = "_blank"; diagBtn.rel = "noopener";
}));

/* Antes e depois: alternância com botões, miniaturas e troca automática */
const TRABALHOS = [
  { antes: "img/antes-1.webp", depois: "img/depois-1.webp", t: "Da fuligem ao brilho", d: "Alumínio com anos de fuligem e gordura queimada, limpo e polido por inteiro." },
  { antes: "img/antes-2.webp", depois: "img/depois-2.webp", t: "Caldeirão de pés", d: "Fuligem removida e alumínio polido, por dentro e por fora." },
  { antes: "img/antes-3.webp", depois: "img/depois-3.webp", t: "Panela escurecida", d: "Limpeza pesada e polimento completo, de volta ao brilho." },
];
const ab = { i: 0, depois: false, auto: true };
const abPalco = $("#abPalco"), abDepois = $("#abDepois"), abAntes = $("#abAntes"), abRotulo = $("#abRotulo");
const segAntes = $("#segAntes"), segDepois = $("#segDepois");
function abDesenhar() {
  const t = TRABALHOS[ab.i];
  if (abAntes.getAttribute("src") !== t.antes) { abAntes.src = t.antes; abDepois.src = t.depois; }
  $("#abTitulo").textContent = t.t;
  $("#abTexto").textContent = t.d;
  abPalco.classList.toggle("mostra-depois", ab.depois);
  abRotulo.textContent = ab.depois ? "Depois" : "Antes";
  abRotulo.classList.toggle("depois", ab.depois);
  segAntes.setAttribute("aria-pressed", !ab.depois);
  segDepois.setAttribute("aria-pressed", ab.depois);
  $$("#abMinis .mini").forEach((m) => m.setAttribute("aria-pressed", +m.dataset.i === ab.i));
}
const parar = () => { ab.auto = false; };
segAntes.addEventListener("click", () => { parar(); ab.depois = false; abDesenhar(); });
segDepois.addEventListener("click", () => { parar(); ab.depois = true; abDesenhar(); });
abPalco.addEventListener("click", () => { parar(); ab.depois = !ab.depois; abDesenhar(); });
$$("#abMinis .mini").forEach((m) => m.addEventListener("click", () => { parar(); ab.i = +m.dataset.i; ab.depois = false; abDesenhar(); }));
let abVisivel = false;
new IntersectionObserver((es) => es.forEach((e) => { abVisivel = e.isIntersecting; }), { threshold: 0.4 }).observe($("#ab"));
if (!semMovimento) setInterval(() => { if (ab.auto && abVisivel) { ab.depois = !ab.depois; abDesenhar(); } }, 2400);
abDesenhar();

/* Carrossel de avaliações */
const trilho = $("#trilho"), pontos = $("#pontos");
const cards = $$(".avaliacao", trilho);
let atual = 0, pausado = false;
const porVez = () => Math.max(1, Math.round(trilho.clientWidth / (cards[0].offsetWidth + 18)));
const nPontos = () => Math.max(1, cards.length - porVez() + 1);
function montarPontos() {
  pontos.innerHTML = "";
  for (let i = 0; i < nPontos(); i++) {
    const p = document.createElement("i");
    p.addEventListener("click", () => ir(i));
    pontos.appendChild(p);
  }
  $(".carrossel__ctrl").hidden = nPontos() < 2;
  marcar();
}
function marcar() { $$("i", pontos).forEach((p, i) => p.classList.toggle("on", i === atual)); }
function ir(i) {
  atual = (i + nPontos()) % nPontos();
  trilho.scrollTo({ left: cards[atual].offsetLeft - cards[0].offsetLeft, behavior: semMovimento ? "auto" : "smooth" });
  marcar();
}
trilho.addEventListener("scroll", () => {
  const i = Math.round(trilho.scrollLeft / (cards[0].offsetWidth + 18));
  if (i !== atual && i < nPontos()) { atual = i; marcar(); }
}, { passive: true });
$("#prev").addEventListener("click", () => ir(atual - 1));
$("#next").addEventListener("click", () => ir(atual + 1));
const caixa = $("#carrossel");
["pointerenter", "focusin", "touchstart"].forEach((ev) => caixa.addEventListener(ev, () => (pausado = true), { passive: true }));
["pointerleave", "focusout"].forEach((ev) => caixa.addEventListener(ev, () => (pausado = false)));
if (!semMovimento) setInterval(() => { if (!pausado && !document.hidden) ir(atual + 1); }, 5000);
addEventListener("resize", montarPontos);
montarPontos();

/* Cidades */
$$("#cidades .cidade").forEach((b) => b.addEventListener("click", () => {
  const c = b.dataset.c;
  abrirWhats(c === "outra cidade da região"
    ? "Olá! Vim pelo site. Moro em outra cidade da região metropolitana de BH. Vocês atendem?"
    : `Olá! Vim pelo site. Moro em ${c} e gostaria de um orçamento para conserto de panela.`);
}));

/* Ampliar fotos */
const zoom = $("#zoom"), zoomImg = $("#zoomImg"), zoomLeg = $("#zoomLeg");
$$("[data-zoom]").forEach((b) => b.addEventListener("click", () => {
  zoomImg.src = b.dataset.zoom;
  zoomImg.alt = b.dataset.leg || "";
  zoomLeg.textContent = b.dataset.leg || "";
  zoom.showModal();
}));
$("#zoomX").addEventListener("click", () => zoom.close());
zoom.addEventListener("click", (e) => { if (e.target === zoom) zoom.close(); });

/* Formulários: validam e abrem o WhatsApp com a mensagem pronta */
function ligarForm(id, montar) {
  const form = $("#" + id), erro = $(".form__erro", form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const campos = $$("[required]", form);
    let ok = true;
    campos.forEach((c) => { const vazio = !c.value.trim(); c.classList.toggle("invalido", vazio); if (vazio) ok = false; });
    erro.hidden = ok;
    if (!ok) { campos.find((c) => !c.value.trim()).focus(); return; }
    const d = Object.fromEntries(new FormData(form));
    abrirWhats(montar(d));
  });
  form.addEventListener("input", (e) => e.target.classList.remove("invalido"));
}
/* Orçamento com fotos: reduz as fotos, envia para a oficina e abre o WhatsApp */
const MAX_FOTOS = 3;
let fotos = [];
const fotoInput = $("#fotoInput"), fotoLista = $("#fotoLista");
function reduzir(arquivo) {
  return new Promise((ok) => {
    const url = URL.createObjectURL(arquivo);
    const img = new Image();
    img.onload = () => {
      const esc = Math.min(1, 1600 / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * esc); c.height = Math.round(img.height * esc);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      c.toBlob((b) => { URL.revokeObjectURL(url); ok(b ? { blob: b, nome: (arquivo.name || "foto").replace(/\.[^.]+$/, "") + ".jpg", url: URL.createObjectURL(b) } : null); }, "image/jpeg", 0.82);
    };
    img.onerror = () => { URL.revokeObjectURL(url); ok(null); };
    img.src = url;
  });
}
function desenharFotos() {
  fotoLista.innerHTML = "";
  fotos.forEach((f, i) => {
    const d = document.createElement("div");
    d.className = "foto-mini";
    d.innerHTML = '<img alt="Foto ' + (i + 1) + ' da panela" src="' + f.url + '" /><button type="button" aria-label="Remover foto ' + (i + 1) + '">×</button>';
    d.querySelector("button").addEventListener("click", () => { URL.revokeObjectURL(f.url); fotos.splice(i, 1); desenharFotos(); });
    fotoLista.appendChild(d);
  });
  $("#fotoAdd").hidden = fotos.length >= MAX_FOTOS;
}
$("#fotoAdd").addEventListener("click", () => fotoInput.click());
fotoInput.addEventListener("change", async () => {
  for (const a of [...fotoInput.files]) {
    if (fotos.length >= MAX_FOTOS) break;
    const r = await reduzir(a);
    if (r) fotos.push(r);
  }
  fotoInput.value = "";
  desenharFotos();
});
(function () {
  const form = $("#formOrcamento"), erro = $(".form__erro", form), botao = $("button[type=submit]", form);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const campos = $$("[required]", form);
    let ok = true;
    campos.forEach((c) => { const vazio = !c.value.trim(); c.classList.toggle("invalido", vazio); if (vazio) ok = false; });
    erro.hidden = ok;
    if (!ok) { campos.find((c) => !c.value.trim()).focus(); return; }
    const d = Object.fromEntries(new FormData(form));
    let enviadas = 0;
    if (fotos.length) {
      botao.disabled = true; botao.textContent = "Enviando as fotos...";
      try {
        const fd = new FormData();
        fd.append("form-name", "orcamento");
        ["nome", "bairro", "tipo", "problema"].forEach((k) => fd.append(k, d[k] || ""));
        fd.append("uber", d.uber ? "sim" : "não");
        fotos.forEach((f, i) => fd.append("foto" + (i + 1), f.blob, f.nome));
        const r = await fetch("/", { method: "POST", body: fd });
        if (r.ok) enviadas = fotos.length;
      } catch (_) { /* segue só com o WhatsApp */ }
      botao.disabled = false; botao.textContent = "Enviar pelo WhatsApp";
    }
    const linhaFoto = fotos.length === 0 ? "Vou mandar as fotos aqui na conversa."
      : enviadas ? "Enviei " + enviadas + " foto(s) pelo site junto com este pedido."
      : "Não consegui enviar as fotos pelo site, vou mandar aqui na conversa.";
    abrirWhats(
      "*Orçamento pelo site*\n\nNome: " + d.nome + "\nBairro/cidade: " + d.bairro + "\nPanela: " + d.tipo + "\nProblema: " + d.problema + "\n" +
      (d.uber ? "Quero busca e entrega por Uber: sim\n" : "") + "\n" + linhaFoto);
  });
  form.addEventListener("input", (e) => e.target.classList.remove("invalido"));
})();
ligarForm("formEmpresa", (d) =>
  `*Proposta para empresa (pelo site)*\n\nTipo: ${d.tipo}\nEstabelecimento: ${d.estabelecimento}\nContato: ${d.nome}\nBairro/cidade: ${d.bairro}\nQuantidade de panelas: ${d.qtd}`);

/* Ligar: no computador sem telefonia o link tel: não faz nada, então mostramos o número */
$$("[data-ligar]").forEach((a) => a.addEventListener("click", () => {
  if (!matchMedia("(pointer: coarse)").matches) {
    a.title = "Ligue para (31) 98739-6336";
  }
}));
