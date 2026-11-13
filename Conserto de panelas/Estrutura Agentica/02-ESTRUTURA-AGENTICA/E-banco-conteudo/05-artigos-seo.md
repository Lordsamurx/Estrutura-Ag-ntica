# BANCO DE CONTEÚDO — ARTIGOS SEO (10 pautas + 1 artigo modelo)

> Agente responsável: **BÚSSOLA** (`B-prompts/02-seo-google.md`) · Validação técnica: **OFICINA** · Aprovação: **MAESTRO → DONO**
> Fontes: `00-contexto/ficha-negocio.md` (seções 2, 3, 8, 9) e `00-contexto/guia-marca-e-tom.md` (seções 4, 5, 10)
> Versão: 1.0 · 2026-10-22

**Contexto técnico do site:** hoje é um site estático de **uma página só** em
`https://conserto-de-panelas-bh.netlify.app/` (Netlify), com JSON-LD `LocalBusiness`, **sem**
`robots.txt`, **sem** `sitemap.xml`, **sem** GA4 e **sem** Search Console. Ou seja: o blog é o
principal caminho para ganhar espaço de busca long-tail, mas **só faz sentido depois** de
robots.txt, sitemap e medição estarem no ar (ver `F-plano-implementacao.md`, dias 1–15).

**Regras duras para todo artigo deste banco:**
1. **Nunca** publicar preço, prazo de serviço ou tempo de garantia. "Depende do estado da panela; o valor sai no WhatsApp, por foto."
2. Segurança de panela de pressão: citar sempre **borracha de vedação, válvula de segurança e pino de segurança**. Nada de gambiarra, nada de "dar um jeito".
3. CTA fixo: WhatsApp **(31) 98739-6336** → `https://wa.me/5531987396336?text=...` (mensagem pré-preenchida com a origem do artigo).
4. Prova social só real: **nota 5,0 com 31 avaliações** no Google. Não inventar depoimento, prêmio ou número de clientes.
5. Tom do guia de marca: frase curta, "você/a gente", benefício antes do serviço, mineirês dosado (1 expressão por texto).
6. Todo artigo tem **1 H1**, H2/H3 em hierarquia, **1 CTA a cada ~300 palavras**, e link interno para a página de orçamento.

---

## 1. COMO ESSES ARTIGOS ENTRAM NO SITE (estático, sem CMS)

| Item | Decisão recomendada | Por quê |
|---|---|---|
| Estrutura de URL | `/blog/<slug>/index.html` (ex.: `/blog/panela-de-pressao-nao-pega-pressao/`) | URL limpa, sem `?`, fácil de manter no Netlify |
| Pasta no repositório | `site-novo/blog/<slug>/index.html` | mantém o site publicado como está hoje |
| Template único | copiar `site-novo/index.html` e trocar apenas: `<title>`, `meta description`, `canonical`, `og:*`, JSON-LD, conteúdo do `<main>` | evita CSS/JS duplicado e erro de layout |
| `robots.txt` | criar na raiz com `Sitemap: https://conserto-de-panelas-bh.netlify.app/sitemap.xml` | hoje dá **404** |
| `sitemap.xml` | listar `/` + todas as `/blog/.../` | hoje **não existe** |
| Breadcrumb | `Início > Blog > Artigo` (+ schema `BreadcrumbList`) | melhora navegação e entendimento do Google |
| Schema do artigo | `Article` + `BreadcrumbList` + `FAQPage` | `FAQPage` ainda ajuda o Google a entender o conteúdo; o rich result de FAQ hoje aparece pouco (o Google restringiu em 2023), então **não prometer estrelinha no resultado** |
| Medição | GA4 + Search Console no mesmo dia em que o primeiro artigo subir | sem isso não há KPI de SEO (ver plano) |

**Ordem de publicação (por potencial de busca e facilidade de produção):**

| Semana | Artigo | Motivo |
|---|---|---|
| 1 | ART-01 (artigo modelo, já escrito) | maior intenção + já está pronto |
| 2 | ART-03 (quanto custa) | pergunta que mais chega no WhatsApp |
| 3 | ART-05 (limpar panela queimada) | alto volume informacional, muito compartilhável |
| 4 | ART-02 (borracha ruim) | "pré-compra" de quem já quer consertar |
| 5 | ART-04 (pode explodir / segurança) | autoridade em segurança |
| 6 | ART-08 (válvula e pino) | long-tail de alta conversão |
| 7 | ART-06 (vale a pena consertar) | objeção clássica |
| 8 | ART-07 (polimento) | serviço de maior margem percebida |
| 9 | ART-09 (restaurantes, B2B) | abre canal de contrato |
| 10 | ART-10 (coleta por Uber, local) | fecha o funil local |

> Ritmo canônico do pacote: **1 artigo a cada 10 dias (≈3/mês)**; 1 por semana é o teto e 1 a cada 15 dias ainda sustenta o blog. A fila abaixo cobre 10 publicações (~10 semanas no ritmo semanal, ~3 meses no ritmo de 10 dias).

---

## 2. PAUTAS (ART-01 a ART-10)

### ART-01 — Panela de pressão não pega pressão: o que fazer antes de comprar outra

| Campo | Valor |
|---|---|
| **Keyword principal** | panela de pressão não pega pressão |
| **Keywords secundárias** | panela de pressão não pega pressão o que fazer · panela de pressão vazando vapor pela tampa · conserto de panela de pressão BH |
| **Intenção de busca** | Informacional com intenção de solução (quase transacional): pessoa com panela parada decidindo entre consertar e comprar |
| **URL** | `/blog/panela-de-pressao-nao-pega-pressao/` |
| **Público** | dona de casa 35–65, cozinheiro doméstico, churrasqueiro |
| **Meta title** | Panela de pressão não pega pressão? O que fazer |
| **Meta description** | Panela que não pega pressão tem conserto. Veja como testar borracha, válvula e pino de segurança e o que fazer antes de comprar outra. |

Tamanho real: meta title 47 caracteres · meta description 134 caracteres

**Estrutura H2/H3:**
- H2: Antes de tudo: pare de usar a panela (por que a segurança vem primeiro)
- H2: 4 motivos que fazem a panela não pegar pressão
  - H3: 1. Borracha de vedação ressecada ou mal encaixada
  - H3: 2. Válvula de segurança entupida ou travada
  - H3: 3. Pino de segurança solto ou entupido
  - H3: 4. Tampa empenada ou trava com folga
- H2: Como testar em casa (o que é seguro e o que não é)
  - H3: Teste da vedação com água (passo a passo)
  - H3: O que **não** fazer nunca (gambiarra que vira acidente)
- H2: Quando vale consertar e quando a panela já era
- H2: Como funciona o conserto na oficina (revisão completa + teste)
- H2: Orçamento por foto: como mandar a foto do jeito certo
- H2: Perguntas frequentes
- H2: Onde consertar em BH e Grande BH

**FAQ (base para schema FAQPage):**
1. Panela de pressão que não pega pressão tem conserto?
2. Trocar só a borracha resolve?
3. Como saber se a válvula está ruim?
4. Panela de pressão que vaza vapor pela tampa pode usar?
5. Vale mais a pena consertar ou comprar panela nova?
6. Quanto tempo a panela fica na oficina?
7. Panela de pressão de qualquer marca tem conserto?
8. Como mandar a foto para o orçamento?

**Links internos:** página inicial `/#orcamento` (âncora "pedir orçamento por foto") · `/#servicos` (âncora "revisão de panela de pressão") · ART-02 (borracha) · ART-08 (válvula e pino) · ART-04 (segurança)

**CTA WhatsApp:** "Manda uma foto da sua panela de pressão no WhatsApp e a gente diz o que ela precisa: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20minha%20panela%20de%20press%C3%A3o%20n%C3%A3o%20pega%20press%C3%A3o.`

---

### ART-02 — Borracha da panela de pressão: como saber se ela está ruim

| Campo | Valor |
|---|---|
| **Keyword principal** | borracha da panela de pressão |
| **Keywords secundárias** | como saber se a borracha da panela de pressão está ruim · troca de borracha de panela de pressão BH · borracha ressecada panela de pressão |
| **Intenção de busca** | Informacional de diagnóstico (quem já suspeita do problema) |
| **URL** | `/blog/borracha-da-panela-de-pressao-ruim/` |
| **Meta title** | Borracha da panela de pressão: como saber se está ruim |
| **Meta description** | Borracha ressecada, dura ou com folga faz a panela vazar vapor. Veja os sinais, como conferir em casa e quando a troca não pode esperar. |

Tamanho real: meta title 54 caracteres · meta description 136 caracteres

**Estrutura H2/H3:**
- H2: Para que serve a borracha de vedação
- H2: 5 sinais de que a borracha já era
  - H3: Borracha dura, ressecada ou rachada
  - H3: Borracha que não volta ao lugar depois de encaixada
  - H3: Vazamento de vapor pela lateral da tampa
  - H3: Panela demora muito para pegar pressão
  - H3: Borracha que já foi trocada há muito tempo
- H2: Como conferir a borracha em 2 minutos
- H2: Pode usar panela com borracha ruim? (não — e o motivo)
- H2: Troca de borracha: o que acontece na oficina
- H2: Perguntas frequentes
- H2: Como pedir orçamento por foto

**FAQ:**
1. Como saber se a borracha da panela de pressão está ruim?
2. De quanto em quanto tempo trocar a borracha?
3. Borracha de panela de pressão é universal?
4. Borracha nova resolve se a panela continua vazando?
5. Posso usar a panela com a borracha ressecada?
6. Borracha caseira ou adaptada funciona?
7. Como mando a foto da borracha para o orçamento?

**Links internos:** ART-01 · ART-08 · ART-03 (quanto custa, sem preço) · `/#orcamento` · `/#servicos`

**CTA WhatsApp:** "Confere a borracha e manda a foto no WhatsApp: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20trocar%20a%20borracha%20da%20minha%20panela.`

---

### ART-03 — Quanto custa trocar a borracha da panela de pressão?

| Campo | Valor |
|---|---|
| **Keyword principal** | quanto custa trocar a borracha da panela de pressão |
| **Keywords secundárias** | preço troca borracha panela de pressão · troca de borracha panela de pressão BH · vale a pena trocar a borracha |
| **Intenção de busca** | Comercial (quer o número antes de decidir) — a página precisa **explicar por que não existe valor fechado**, com honestidade |
| **URL** | `/blog/quanto-custa-trocar-borracha-panela-de-pressao/` |
| **Meta title** | Quanto custa trocar a borracha da panela de pressão? |
| **Meta description** | Não existe um valor único: entenda o que muda o preço da troca de borracha e como receber o orçamento por foto, sem sair de casa. |

Tamanho real: meta title 52 caracteres · meta description 129 caracteres

**Estrutura H2/H3:**
- H2: A resposta curta: depende do estado da panela
- H2: O que muda o valor (sem inventar número)
  - H3: Modelo e tamanho da panela
  - H3: Estado da borracha, da válvula e do pino
  - H3: Só a borracha ou revisão completa
  - H3: Peça original de segurança x peça adaptada (por que não usar adaptada)
- H2: O que está incluído quando a gente orça
- H2: Por que o orçamento por foto evita surpresa
- H2: Vale a pena consertar em vez de comprar panela nova?
- H2: Perguntas frequentes
- H2: Como pedir o orçamento agora

**FAQ:**
1. Quanto custa trocar a borracha da panela de pressão?
2. O orçamento por foto é confiável?
3. O valor muda se eu levar na oficina?
4. Vocês cobram para orçar?
5. Borracha boa é quanto? (responder sem número: "depende da peça e do modelo; confirmamos no orçamento")
6. Dá para pagar parcelado ou no Pix? (**confirmar com o dono antes de publicar**)
7. E se eu tiver mais de uma panela?

**Links internos:** ART-02 · ART-06 (vale a pena) · `/#orcamento` · `/#servicos` · `/#avaliacoes`

**CTA WhatsApp:** "Manda a foto e recebe o valor antes de mexer: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20saber%20o%20valor%20da%20troca%20de%20borracha.`

> ⚠️ Regra: este artigo **explica o critério**, jamais publica tabela de preço. Se o dono autorizar valores fixos no futuro, atualizar aqui e informar ao MAESTRO.

---

### ART-04 — Panela de pressão pode explodir? O que é segurança de verdade

| Campo | Valor |
|---|---|
| **Keyword principal** | panela de pressão pode explodir |
| **Keywords secundárias** | panela de pressão segura · válvula de segurança panela de pressão · pino de segurança panela de pressão · o que fazer para evitar acidente |
| **Intenção de busca** | Informacional de segurança (medo + busca por prevenção) |
| **URL** | `/blog/panela-de-pressao-pode-explodir/` |
| **Meta title** | Panela de pressão pode explodir? Segurança de verdade |
| **Meta description** | Sim, panela de pressão pode oferecer risco quando as peças de segurança estão gastas. Veja como usar com segurança e quando não usar. |

Tamanho real: meta title 53 caracteres · meta description 133 caracteres

**Estrutura H2/H3:**
- H2: Sim, pode — mas o risco vem de peça gasta, não de "panela de pressão no geral"
- H2: As 3 peças que protegem você
  - H3: Borracha de vedação
  - H3: Válvula de segurança
  - H3: Pino de segurança
- H2: 6 sinais de que a panela não está segura
- H2: O que nunca fazer (lista do que a gente não orienta)
- H2: Como fazer a manutenção preventiva em casa
- H2: Quando levar para revisão
- H2: Perguntas frequentes

**FAQ:**
1. Panela de pressão pode explodir?
2. Qual é a peça que mais causa problema?
3. Posso trocar a válvula sozinho?
4. Panela de pressão com pino entupido pode usar?
5. De quanto em quanto tempo revisar a panela?
6. Panela de pressão velha é mais perigosa?
7. Como saber se a válvula está funcionando?
8. Onde revisar a panela em BH?

**Links internos:** ART-01 · ART-02 · ART-08 · `/#servicos` · `/#orcamento`

**CTA WhatsApp:** "Revisa a sua com quem mexe com isso todo dia: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20revisar%20a%20seguran%C3%A7a%20da%20minha%20panela.`

> ⚠️ Sem imagem de acidente, sem "explodiu a cozinha". O guia de marca proíbe medo gratuito.

---

### ART-05 — Como limpar panela queimada sem estragar o alumínio

| Campo | Valor |
|---|---|
| **Keyword principal** | como limpar panela queimada |
| **Keywords secundárias** | como limpar panela de alumínio queimada · tirar crosta de panela · limpeza de panela queimada BH |
| **Intenção de busca** | Informacional (aprender a fazer em casa) |
| **URL** | `/blog/como-limpar-panela-queimada/` |
| **Meta title** | Como limpar panela queimada sem estragar o alumínio |
| **Meta description** | Crosta e gordura queimada saem com cuidado — e sem arranhar o alumínio. Veja o passo a passo caseiro e quando vale uma limpeza pesada. |

Tamanho real: meta title 51 caracteres · meta description 134 caracteres

**Estrutura H2/H3:**
- H2: Por que a panela fica preta (e por que esfregar forte não resolve)
- H2: O que usar em casa (e o que nunca usar)
  - H3: Água quente, detergente e paciência
  - H3: Bicarbonato + vinagre: quando ajuda
  - H3: **Nunca**: palha de aço grossa, soda na panela de alumínio, ácido forte
- H2: Passo a passo da limpeza caseira (7 passos)
- H2: O que a limpeza em casa não resolve
- H2: Quando pedir limpeza pesada + polimento
- H2: Antes e depois: o que muda no resultado
- H2: Perguntas frequentes

**FAQ:**
1. Como limpar panela queimada por dentro?
2. Bicarbonato resolve panela queimada?
3. Pode usar palha de aço na panela de alumínio?
4. Panela de inox queimada tem solução?
5. Panela que ficou preta por fora tem conserto?
6. Limpeza caseira tira a crosta de anos?
7. A limpeza pesada risca a panela?
8. Vale mais limpar ou comprar nova?

**Links internos:** ART-07 (polimento) · ART-06 (vale a pena) · `/#resultados` (antes e depois) · `/#orcamento`

**CTA WhatsApp:** "Se a crosta já passou do ponto, manda foto: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20limpeza%20pesada%20na%20minha%20panela.`

---

### ART-06 — Vale a pena consertar panela de alumínio ou comprar uma nova?

| Campo | Valor |
|---|---|
| **Keyword principal** | vale a pena consertar panela de alumínio |
| **Keywords secundárias** | consertar ou comprar panela nova · conserto de panela de alumínio BH · panela velha tem conserto |
| **Intenção de busca** | Comercial / decisão (comparando custo-benefício) |
| **URL** | `/blog/vale-a-pena-consertar-panela-de-aluminio/` |
| **Meta title** | Consertar panela de alumínio ou comprar nova? Veja |
| **Meta description** | Comparar panela nova com conserto não é só olhar o preço. Veja o que considerar, quando compensa e quando a panela já cumpriu o papel. |

Tamanho real: meta title 50 caracteres · meta description 134 caracteres

**Estrutura H2/H3:**
- H2: A pergunta certa não é "quanto custa", é "quanto tempo isso ainda dura"
- H2: 5 pontos para decidir
  - H3: O problema é peça (cabo, alça, borracha) ou é o corpo da panela?
  - H3: Panela de alumínio, inox ou pressão: o que muda
  - H3: Quantas peças precisam ser trocadas
  - H3: Valor da panela nova equivalente (comparar, sem citar número de orçamento nosso)
  - H3: Histórico: panela de família, panela de restaurante, panela de uso diário
- H2: Quando o conserto **não** vale a pena (e a gente fala na hora)
- H2: Quando vale: os casos que mais aparecem na bancada
- H2: Como saber o estado da sua panela por foto
- H2: Perguntas frequentes

**FAQ:**
1. Vale a pena consertar panela de alumínio?
2. Consertar panela é mais barato que comprar nova?
3. Toda panela tem conserto?
4. Panela com fundo furado tem conserto?
5. Quanto tempo dura uma panela consertada?
6. Panela de inox também tem conserto?
7. Como vocês avaliam sem eu levar a panela?

**Links internos:** ART-05 · ART-07 · ART-01 · `/#resultados` · `/#avaliacoes`

**CTA WhatsApp:** "Manda foto e a gente fala com honestidade o que vale a pena: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20saber%20se%20vale%20a%20pena%20consertar.`

> ⚠️ Proibido prometer "fica como nova" e proibido dizer que todo fundo furado tem conserto.

---

### ART-07 — Polimento de panela: como funciona e o que esperar do resultado

| Campo | Valor |
|---|---|
| **Keyword principal** | polimento de panela |
| **Keywords secundárias** | polimento de panela BH · polimento espelhado inox · panela de alumínio polida · panela perdeu o brilho |
| **Intenção de busca** | Comercial / informacional (quer ver resultado antes de pedir) |
| **URL** | `/blog/polimento-de-panela-como-funciona/` |
| **Meta title** | Polimento de panela: como funciona e o resultado |
| **Meta description** | Panela sem brilho não é panela velha. Veja como funciona o polimento em alumínio e inox, o que sai e o que não sai, e como pedir o seu. |

Tamanho real: meta title 48 caracteres · meta description 135 caracteres

**Estrutura H2/H3:**
- H2: O que é polimento (e o que não é)
- H2: Alumínio x inox: o tratamento muda
  - H3: Alumínio: limpeza profunda e brilho
  - H3: Inox: polimento espelhado
- H2: O que o polimento remove
- H2: O que o polimento não remove (risco profundo, amassado, fundo furado)
- H2: Passo a passo na bancada
- H2: Quanto tempo leva e como é a entrega por Uber
- H2: Antes e depois de verdade
- H2: Perguntas frequentes

**FAQ:**
1. Polimento de panela deixa a panela como nova?
2. Polimento tira riscado?
3. Panela de alumínio pode ser polida?
4. O polimento estraga a panela?
5. Polimento de inox é diferente?
6. Precisa polir por dentro também?
7. Quanto tempo fica pronto? (**sem prazo fechado**: "confirmamos junto com o orçamento")
8. Vocês buscam e entregam?

**Links internos:** ART-05 · ART-06 · `/#resultados` · `/#servicos` · `/#orcamento`

**CTA WhatsApp:** "Manda a foto da panela e vê o que dá para fazer: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20polimento%20na%20minha%20panela.`

---

### ART-08 — Válvula e pino de segurança da panela de pressão: quando trocar

| Campo | Valor |
|---|---|
| **Keyword principal** | válvula de segurança panela de pressão |
| **Keywords secundárias** | troca de válvula panela de pressão · quando trocar o pino de segurança · válvula entupida panela de pressão |
| **Intenção de busca** | Informacional técnico (quem já sabe que o problema é a peça) |
| **URL** | `/blog/troca-valvula-pino-panela-de-pressao/` |
| **Meta title** | Válvula e pino da panela de pressão: quando trocar |
| **Meta description** | Válvula entupida e pino gasto tiram a segurança da panela de pressão. Veja os sinais, o que nunca fazer e quando pedir a troca. |

Tamanho real: meta title 50 caracteres · meta description 127 caracteres

**Estrutura H2/H3:**
- H2: Para que serve cada peça (válvula, pino e borracha)
- H2: Sinais de válvula com problema
  - H3: Válvula que não solta vapor
  - H3: Válvula que solta vapor o tempo todo
  - H3: Válvula travada, enferrujada ou entupida
- H2: Sinais de pino de segurança gasto
- H2: Por que não dá para "dar um jeito"
- H2: Como é a troca na oficina (peça + teste de vedação)
- H2: Perguntas frequentes

**FAQ:**
1. Quando trocar a válvula da panela de pressão?
2. Como saber se a válvula está entupida?
3. Posso limpar a válvula em casa?
4. Válvula adaptada é segura?
5. Quando trocar o pino de segurança?
6. Trocar a válvula resolve o vazamento?
7. Precisa trocar válvula e borracha juntas?
8. Vocês fazem revisão completa?

**Links internos:** ART-02 · ART-04 · ART-01 · `/#servicos` · `/#orcamento`

**CTA WhatsApp:** "Manda foto da válvula e do pino: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20trocar%20a%20v%C3%A1lvula%20da%20panela.`

> ⚠️ Este artigo **obrigatoriamente** passa pela OFICINA antes de publicar (regra do roster: conteúdo técnico/de segurança).

---

### ART-09 — Manutenção de panelas em restaurantes: como parar de perder dinheiro com panela parada

| Campo | Valor |
|---|---|
| **Keyword principal** | manutenção de panelas restaurante |
| **Keywords secundárias** | conserto de caldeirão industrial BH · limpeza pesada de cozinha industrial · manutenção de panelas para bares e padarias BH |
| **Intenção de busca** | Comercial B2B (dono/gerente buscando fornecedor) |
| **URL** | `/blog/manutencao-de-panelas-restaurante/` |
| **Meta title** | Manutenção de panelas de restaurante: evite prejuízo |
| **Meta description** | Panela parada é cozinha parada. Veja como montar uma rotina de manutenção de panelas e caldeirões e como funciona a coleta por Uber na Grande BH. |

Tamanho real: meta title 52 caracteres · meta description 145 caracteres

**Estrutura H2/H3:**
- H2: O custo invisível da panela parada
- H2: O que dá para prevenir (checklist mensal da cozinha)
  - H3: Panelas de pressão: peças de segurança
  - H3: Caldeirões e panelões: crosta, cabo, rebite
  - H3: Panelas de uso diário: cabo, alça e tampa
- H2: Manutenção programada x conserto de emergência
- H2: Como funciona a coleta e entrega por Uber
- H2: Condição de parceiro para volume: como pedir proposta
- H2: Perguntas frequentes

**FAQ:**
1. Como funciona a manutenção programada de panelas?
2. Vocês atendem restaurante fora de BH?
3. Quantas panelas vocês atendem por mês? (**confirmar com o dono**; enquanto isso, não prometer volume)
4. A coleta é por Uber mesmo? Como embalo as panelas?
5. Fazem nota fiscal? (**confirmar com o dono**)
6. Têm condição especial para volume?
7. Dá para combinar dia e horário fixo?
8. Como começar: mandar foto de quais panelas?

**Links internos:** `/#empresas` (form de proposta) · ART-05 (limpeza pesada) · ART-04 (segurança) · `/#servicos`

**CTA WhatsApp:** "Quer uma proposta para o seu estabelecimento? (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20proposta%20de%20manuten%C3%A7%C3%A3o%20para%20meu%20estabelecimento.`

---

### ART-10 — Conserto de panela na Grande BH: como funciona a coleta e entrega por Uber

| Campo | Valor |
|---|---|
| **Keyword principal** | conserto de panela Grande BH |
| **Keywords secundárias** | conserto de panela Contagem · conserto de panela Betim · polimento de panela Nova Lima · buscar panela em casa Belo Horizonte |
| **Intenção de busca** | Transacional local (pronto para contratar, com dúvida de logística) |
| **URL** | `/blog/conserto-de-panela-grande-bh-coleta-uber/` |
| **Meta title** | Conserto de panela na Grande BH: coleta por Uber |
| **Meta description** | Atendemos 16 cidades da Grande BH com busca e entrega por Uber. Veja como funciona a coleta, como embalar as panelas e como pedir orçamento por foto. |

Tamanho real: meta title 48 caracteres · meta description 149 caracteres

**Estrutura H2/H3:**
- H2: Como funciona de ponta a ponta (foto → orçamento → coleta → conserto → entrega)
- H2: As 16 cidades atendidas (lista completa)
- H2: Como embalar a panela para o Uber
- H2: E se eu preferir levar na oficina? (endereço e horário)
- H2: Como o orçamento por foto funciona
- H2: Antes e depois de quem já usou
- H2: Perguntas frequentes

**FAQ:**
1. Vocês buscam panela em casa?
2. Quanto custa a coleta por Uber? (**responder sem número**: "o frete do Uber é combinado antes; o orçamento por foto é sem compromisso")
3. Vocês atendem a minha cidade?
4. Como embalo a panela?
5. Precisa estar em casa para a coleta?
6. Quanto tempo demora?
7. Posso acompanhar o serviço?
8. Como pedir orçamento?

**Links internos:** ART-01 · ART-07 · `/#regiao` (cidades) · `/#contato` (endereço) · `/#orcamento`

**CTA WhatsApp:** "Combina a coleta no WhatsApp: (31) 98739-6336" → `https://wa.me/5531987396336?text=Ol%C3%A1%21%20Vim%20pelo%20blog%20e%20quero%20a%20coleta%20por%20Uber%20na%20minha%20cidade.`

---

## 3. ARTIGO MODELO COMPLETO (padrão de qualidade)

> Este é o texto de referência. Serve como **modelo de estrutura, tom e densidade** para a BÚSSOLA gerar os outros 9. Já respeita as regras da ficha: sem preço, sem prazo, sem garantia com número.

<!-- ===== INÍCIO DO ARTIGO ===== -->

# Panela de pressão não pega pressão: o que fazer antes de comprar outra

Sua panela parou de pegar pressão e você já está com o carrinho de compras aberto? Calma. Na
maioria dos casos, o problema é uma das três peças de segurança da tampa — e isso tem conserto.
Antes de gastar em panela nova, dá para entender o que está acontecendo com uma conferida em
casa. A regra vem primeiro: **panela de pressão não é lugar de improviso**.

## Antes de tudo: pare de usar a panela

Se a panela não pega pressão, não force. A tampa precisa vedar para acumular pressão; quando
falha, o vapor escapa — quase sempre pela lateral. Usar panela com peça gasta é o caminho mais
curto para um acidente. Deixe a panela separada até saber o que ela tem.

E um recado direto: **nada de prender válvula, tampar pino, colocar corda, pano ou fita
para "segurar"**. Isso não conserta nada e aumenta o risco.

## 4 motivos que fazem a panela não pegar pressão

### 1. Borracha de vedação ressecada ou mal encaixada

A borracha é o anel da tampa que faz o contato com o corpo da panela. Com o tempo ela resseca,
endurece, deforma e deixa de vedar. O sinal é típico: a panela esquenta, solta vapor pela
lateral e nunca chega ao ponto de pressão.

### 2. Válvula de segurança entupida ou travada

A válvula controla a saída de vapor e libera a pressão acima do ponto. Se entope
(resto de comida, gordura) ou trava, a panela não funciona direito. A foto ajuda a identificar;
quem confirma é a mão de quem mexe com isso todo dia.

### 3. Pino de segurança solto ou entupido

O pino é a última barreira da panela: solta pressão quando a válvula falha. Pino entupido,
gasto ou solto não é detalhe — é peça de segurança que se troca.

### 4. Tampa empenada ou trava com folga

Menos comum, mas acontece: a panela caiu, a tampa empenou ou a trava está frouxa. Aí trocar só
a borracha não resolve — precisa de avaliação.

## Como testar em casa com segurança

### Teste da vedação com água

1. Encaixe a borracha no lugar, sem forçar.
2. Coloque água, sem passar do limite indicado.
3. Feche a tampa conforme o manual do fabricante.
4. Leve ao fogo baixo por alguns minutos e observe a lateral da tampa e a válvula.
5. Se sair vapor pela lateral da tampa, a vedação está falhando.

O teste avisa que algo está errado, mas **não** diz qual peça é. O diagnóstico é feito na
bancada, com a panela aberta.

### O que não fazer nunca

- Não prender a válvula, não tampar o pino e não colocar peso em cima da tampa.
- Não usar peça adaptada, "de outro modelo" ou feita em casa.
- Não reaproveitar borracha velha achando que "ainda dá".
- Não abrir a panela antes de sair toda a pressão nem comprar peça de procedência desconhecida.

## Quando vale consertar e quando a panela já era

**Vale consertar quando:** o problema está nas peças de segurança (borracha, válvula, pino),
no cabo, na alça, no rebite ou na tampa. A panela volta a funcionar com a revisão certa e o
teste de vedação.

**Vale pensar duas vezes quando:** o corpo da panela está comprometido, o fundo está furado ou
muito empenado. Aí a avaliação presencial manda — e a gente não promete conserto que não
existe.

Panela que "perdeu a pressão" quase nunca está perdida. É peça de desgaste.

## Como funciona o conserto na oficina

A revisão segue uma ordem:

1. Abertura e avaliação das três peças de segurança.
2. Troca do que está gasto (borracha, válvula e/ou pino).
3. Verificação de cabo, alça, trava e tampa, com revisão completa.
4. **Teste de vedação** antes de devolver.
5. Entrega com a panela limpa.

A oficina fica no Belmonte, em BH, e atende a Grande BH com busca e entrega por Uber. Dá para
começar com uma foto.

Já sabe o que a sua panela precisa? Manda a foto no WhatsApp: (31) 98739-6336 →
[pedir orçamento](https://wa.me/5531987396336?text=Ol%C3%A1%21%20Li%20o%20artigo%20e%20quero%20um%20or%C3%A7amento%20para%20minha%20panela%20de%20press%C3%A3o.).

## Orçamento por foto: como mandar a foto do jeito certo

O orçamento é por foto, sem compromisso. Mande:

- **uma foto de lado**, com a tampa fechada, mostrando a panela inteira;
- **uma foto do fundo**, mostrando o estado do alumínio;
- **uma foto da tampa aberta**, com a borracha e a válvula visíveis.

Junto com a foto, conta em uma linha o que acontece e há quanto tempo. Assim a gente responde o
que provavelmente é e o valor antes de mexer em qualquer coisa.

## Perguntas frequentes

**Panela de pressão que não pega pressão tem conserto?**
Na maioria dos casos, sim: borracha, válvula ou pino. A avaliação confirma.

**Trocar só a borracha resolve?**
Às vezes. Se válvula e pino estão bons, a borracha nova resolve. Se a válvula está entupida, a
panela continua falhando.

**Como saber se a válvula está ruim?**
Válvula que não solta vapor, que solta sem parar ou que está travada e enferrujada. Na dúvida,
não use a panela.

**Panela que vaza vapor pela tampa pode usar?**
Não. Vazamento pela tampa é sinal de vedação falhando. Use só depois da revisão.

**Vale mais a pena consertar ou comprar panela nova?**
Depende do corpo da panela. Se é peça de desgaste, conserta. Se o corpo está comprometido, a
avaliação te diz com honestidade.

**Quanto tempo a panela fica na oficina?**
Depende do serviço e da peça. O prazo é confirmado junto com o orçamento, antes de aprovar.

**Panela de qualquer marca tem conserto?**
As marcas mais comuns, sim. Modelo fora de linha pode ter peça mais difícil.

**Como mandar a foto para o orçamento?**
Chame no WhatsApp (31) 98739-6336 e envie as três fotos (de lado, do fundo e da tampa aberta).

## Precisa de ajuda com a sua panela?

Manda uma foto no WhatsApp e a gente diz o que ela precisa — sem sair de casa, com preço
combinado antes e coleta por Uber.

**WhatsApp: (31) 98739-6336**
[Pedir orçamento por foto](https://wa.me/5531987396336?text=Ol%C3%A1%21%20Li%20o%20artigo%20sobre%20panela%20que%20n%C3%A3o%20pega%20press%C3%A3o%20e%20quero%20um%20or%C3%A7amento.)

<!-- ===== FIM DO ARTIGO ===== -->

**Checklist deste artigo modelo:** 1 H1 · H2/H3 em hierarquia · 2 CTAs (meio e fim) ·
FAQ com 8 perguntas para `FAQPage` · prova social apenas com dado da ficha · nenhum preço,
prazo ou garantia numérica · endereço e telefone conferidos · link `wa.me` com `?text=`.

---

## 4. BASE DO SCHEMA (colar no `<head>` de cada artigo e preencher)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Panela de pressão não pega pressão: o que fazer antes de comprar outra",
  "description": "Panela que não pega pressão tem conserto. Veja como testar borracha, válvula e pino de segurança e o que fazer antes de comprar outra.",
  "author": { "@type": "Organization", "name": "Conserto de Panelas em Geral" },
  "publisher": { "@type": "Organization", "name": "Conserto de Panelas em Geral",
    "logo": { "@type": "ImageObject", "url": "https://conserto-de-panelas-bh.netlify.app/logo-512.png" } },
  "image": "https://conserto-de-panelas-bh.netlify.app/img/pressao.webp",
  "mainEntityOfPage": "https://conserto-de-panelas-bh.netlify.app/blog/panela-de-pressao-nao-pega-pressao/"
}
</script>
```

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Panela de pressão que não pega pressão tem conserto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Na maioria dos casos, sim. O problema costuma estar na borracha, na válvula ou no pino de segurança. Só a avaliação confirma." } }
  ]
}
</script>
```

**Breadcrumb:** `Início > Blog > Panela de pressão não pega pressão` com schema `BreadcrumbList`.
**Canonical:** sempre a URL final com barra no fim (`/blog/.../`), igual ao `sitemap.xml`.
**Links internos:** todo artigo linka a home (âncora de WhatsApp/orçamento) e **2 artigos irmãos**.

---

## 5. CHECKLIST DE PUBLICAÇÃO DE ARTIGO (rodar sempre)

- [ ] Keyword principal aparece no H1, na primeira frase, em 1 H2 e na meta description (sem forçar)?
- [ ] Meta title ≤ 60 caracteres e meta description ≤ 155 caracteres?
- [ ] 1 H1 só, H2/H3 em ordem, sem pular nível?
- [ ] Tem CTA WhatsApp (31) 98739-6336 com `?text=` no meio e no fim?
- [ ] Tem FAQ com 6–8 perguntas **respondidas de verdade** no texto (não só no schema)?
- [ ] Nenhum preço, prazo fechado ou garantia com número?
- [ ] Sobre pressão: as 3 peças de segurança foram citadas e nada incentiva gambiarra?
- [ ] Link interno para a home e para 2 artigos irmãos?
- [ ] Imagem com `alt` descritivo e peso otimizado (WebP/JPG até ~200 KB)?
- [ ] Passou pela OFICINA (conteúdo técnico) e pelo MAESTRO (marca/tom)?
- [ ] Entrou no `sitemap.xml` e foi testada no Search Console (Inspeção de URL → Solicitar indexação)?
- [ ] GA4 recebendo `page_view` da nova URL?

## 6. O QUE AINDA DEPENDE DO DONO (não inventar)

| Dado | Onde trava |
|---|---|
| Aceita Pix/parcelado? | ART-03 (FAQ 6) |
| Emite nota fiscal para restaurantes? | ART-09 (FAQ 5) e proposta B2B |
| Quantidade de panelas que atende por mês | ART-09 (FAQ 3) |
| Se a coleta por Uber tem custo para o cliente e como combina | ART-10 (FAQ 2) |
| Tempo de garantia e política | falta em todos os artigos e no site |
| Quem assina o conteúdo (nome do dono / "oficina") | E-E-A-T; hoje usamos "Conserto de Panelas em Geral" |
