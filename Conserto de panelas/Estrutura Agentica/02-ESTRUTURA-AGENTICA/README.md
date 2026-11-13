# ESTRUTURA AGÊNTICA COMPLETA
## Conserto de Panelas em Geral — Belo Horizonte e Grande BH

**Dois funis, um destino:** Google/SEO → site → WhatsApp · Instagram → WhatsApp.
Este pacote transforma o site bonito que já existe em uma **máquina de aquisição
operada por 5 agentes de IA**, com o dono aprovando apenas 1 pacote por semana.

> 📅 Versão 1.0 · 22/10/2026 · Feito para uma pessoa só tocar o negócio.

---

## 1. O QUE TEM AQUI

```
02-ESTRUTURA-AGENTICA/   (nome original no workspace: estrutura-agentica/)
│
├── README.md                        ← você está aqui (comece por ele)
├── ESTRUTURA-AGENTICA-COMPLETA.md   ← TUDO em um arquivo único (capa + sumário, leitura/impressão)
├── COMO-FUNCIONA.md                 ← explicação simples da estrutura para o dono (sem tecnologia)
├── A-analise-estagio-atual.md       ← diagnóstico do que existe, lacunas, riscos, quick wins
├── B-prompts/                       ← OS 5 PROMPTS DE SISTEMA (copiar e colar)
│   ├── 01-maestro.md                  Orquestrador
│   ├── 02-seo-google.md               BÚSSOLA — SEO local + Google Meu Negócio
│   ├── 03-instagram-manager.md        VITRINE — Instagram
│   ├── 04-editor-midia.md             LENTE — roteiros de Reels, carrosséis, stories
│   └── 05-especialista-panelas.md     OFICINA — técnica e segurança
├── C-fluxos-trabalho.md             ← como os agentes conversam, handoffs e 4 fluxos completos
├── D-calendario-editorial.md        ← semana IG, mês GMB, trimestre SEO, datas sazonais
├── E-banco-conteudo/
│   ├── 01-reels.md                    30 ideias de Reel com roteiro
│   ├── 02-carrosseis.md               20 carrosséis educativos slide a slide
│   ├── 03-legendas-antes-depois.md    15 legendas prontas
│   ├── 04-google-meu-negocio.md       10 posts prontos para o GMB
│   └── 05-artigos-seo.md              10 pautas + 1 artigo completo modelo
├── F-plano-implementacao.md         ← 30/60/90 dias, ferramentas, checklist, KPIs
├── G-automacao.md                   ← automações P0/P1/P2, Make × n8n × Zapier, LGPD
├── G-templates-mensagens.md         ← 55 respostas prontas de WhatsApp/IG
├── n8n-workflows.json               ← 2 workflows importáveis no n8n
└── 00-contexto/                     ← a base de fatos que todos os agentes leem
    ├── ficha-negocio.md               fatos, serviços, cidades, palavras-chave, dados faltantes
    ├── guia-marca-e-tom.md            tom de voz, copy, hashtags, identidade visual
    └── roster-e-handoff.md            time, envelope de handoff, SLAs, escalonamento
```

**Atalho:** quer ler tudo de uma vez? Abra `ESTRUTURA-AGENTICA-COMPLETA.md`, nesta mesma
pasta — é o pacote inteiro em um arquivo só, com capa e sumário.

> **Nota de caminho:** este pacote foi arquivado dentro de `Estrutura Agentica DeepSeek/` com o
> nome `02-ESTRUTURA-AGENTICA/`. Os comandos e referências que citam `estrutura-agentica\...`
> vêm do workspace original — se estiver operando a partir deste arquivo, troque esse prefixo
> por `02-ESTRUTURA-AGENTICA\`.

---

## 2. COMO USAR EM 20 MINUTOS (modo gratuito, sem ferramenta nova)

### Passo 1 — Crie 5 "Projetos/Gems" no seu LLM (ChatGPT, Claude ou Gemini)
1. Abra a ferramenta de **Projetos** (ChatGPT), **Projects** (Claude) ou **Gems** (Gemini).
2. Crie um projeto chamado **"Painel — Conserto de Panelas"**.
3. Em cada agente, cole o conteúdo do arquivo correspondente em `B-prompts/` como
   **instrução do projeto** (é só abrir o `.md`, copiar tudo e colar).
4. Suba também os 3 arquivos de `00-contexto/` como **documentos do projeto** — eles são
   a fonte da verdade e evitam que o agente invente dado.

| Nome do projeto | Arquivo para colar |
|---|---|
| MAESTRO | `B-prompts/01-maestro.md` |
| BÚSSOLA | `B-prompts/02-seo-google.md` |
| VITRINE | `B-prompts/03-instagram-manager.md` |
| LENTE | `B-prompts/04-editor-midia.md` |
| OFICINA | `B-prompts/05-especialista-panelas.md` |

### Passo 2 — Comece pelo MAESTRO
Mande a primeira mensagem para o MAESTRO:

```
Você é o MAESTRO. Sou o dono da oficina.
Tenho 31 fotos e alguns vídeos de conserto de panela.
Quero começar a postar no Instagram e no Google esta semana.
Monte o pacote da semana: 5 posts + 1 artigo.
```

O MAESTRO vai fazer o intake (o que falta), distribuir o trabalho e devolver o pacote
pronto. Você só aprova.

### Passo 3 — Instale o básico do Google (1 hora, grátis, destrava tudo)
1. **Google Search Console** — verificar o site, enviar `sitemap.xml`.
2. **GA4** — instalar tag + evento de clique no WhatsApp.
3. **Google Meu Negócio** — completar categorias/serviços/fotos e publicar 1 post.
4. **robots.txt + sitemap.xml** — colar os blocos prontos que a BÚSSOLA gera.

> Detalhe de cada item na seção F, Dia 1 a Dia 14.

### Passo 4 — Rode a primeira semana
Use o calendário de `D-calendario-editorial.md` e o banco de `E-banco-conteudo/`.
Na sexta, peça ao MAESTRO o relatório da semana.

---

## 3. COMO OS AGENTES SE ENCAIXAM (resumo de 1 minuto)

```
DONO  ──material bruto──►  MAESTRO  ──briefing──►  BÚSSOLA (Google/SEO)
                                │                  VITRINE (Instagram)
                                │                  LENTE (edição/roteiro)
                                │                  OFICINA (técnica/segurança)
                                ▼
                          pacote semanal  ──►  DONO aprova  ──►  publica
```

- **Ninguém publica sem aprovação do dono** (bom para começar; quando pegar confiança,
  a seção G mostra o que pode ser automatizado com segurança).
- **Toda dúvida técnica ou de segurança passa pela OFICINA.**
- **Todo CTA leva ao WhatsApp (31) 98739-6336** com mensagem pré-preenchida.
- **Nunca preço, prazo ou garantia inventados** — sempre "orçamento por foto".

Detalhes, diagramas e 4 fluxos completos: `C-fluxos-trabalho.md`.

---

## 4. AS 10 REGRAS QUE VALEM PARA TODOS OS AGENTES

1. Nunca inventar preço → orçamento sempre por foto no WhatsApp.
2. Nunca prometer prazo ou garantia sem confirmação do dono.
3. Todo CTA → `https://wa.me/5531987396336` com `?text=` pré-preenchido.
4. Segurança de panela de pressão acima de tudo (borracha, válvula, pino, teste de vedação).
5. Não inventar avaliação, prêmio, número de clientes ou de serviços.
6. Não falar mal de concorrente.
7. Português brasileiro, tom mineiro leve e confiável.
8. Foto de cliente só com autorização; sem dados pessoais visíveis.
9. Tudo sai pronto para publicar — o dono não pode ter retrabalho.
10. Dado que falta não se inventa: pergunta ao dono e atualiza `ficha-negocio.md`.

---

## 5. O QUE ESTÁ VALIDADO E O QUE DEPENDE DO DONO

**Cadência canônica do pacote** (tabela completa no topo de `D-calendario-editorial.md`;
em caso de dúvida entre arquivos, vale ela): Instagram **5 posts/semana** (rampa de 3 no 1º mês) ·
Google Meu Negócio **1 post/semana** · blog **1 artigo a cada 10 dias (≈3/mês)** ·
1ª resposta no WhatsApp **≤30 min** no horário comercial · pedido de avaliação **D+1** ·
pacote enviado **sexta 12h**, aprovado **segunda 10h** · nota Google meta **5,0**, piso **4,8** ·
tempo do dono **~2h/semana**.

**Validado na entrega:** encoding UTF-8 dos arquivos, JSON dos workflows n8n, contagens
do banco de conteúdo (30 Reels, 20 carrosséis, 15 legendas, 10 posts GMB, 10 pautas, 55 templates),
fatos canônicos (endereço, telefone, 16 cidades, 5,0/31), ausência de preço de serviço
inventado e presença de CTA em todo conteúdo.

**Depende de você (dono) — ver `ficha-negocio.md` §10:**
prazo médio, tempo de garantia, formas de pagamento, emissão de NF, quem paga o Uber,
acesso ao Google Meu Negócio, autorização das fotos, leads/mês atuais e verba de ferramentas.
Até responder, os agentes usam as formulações seguras — nada é prometido.

**Pendências técnicas do site (seção A e F):**
`robots.txt` (404 hoje), `sitemap.xml` (inexistente), GA4/Search Console, `areaServed`
com 10 de 16 cidades, `og:url`/`twitter:card`, schema `FAQPage`/`Service`,
formulário B2B que não persiste lead e domínio próprio (hoje `netlify.app`).

---

## 6. ORDEM DE LEITURA RECOMENDADA

| Se você é… | Leia |
|---|---|
| O dono, com 15 min | `A-analise-estagio-atual.md` §1 e §5 → `F-plano-implementacao.md` §1 |
| O dono, para começar a postar | `D-calendario-editorial.md` → `E-banco-conteudo/03-legendas-antes-depois.md` |
| Quem vai operar os agentes | `C-fluxos-trabalho.md` → `B-prompts/01-maestro.md` |
| Quem cuida do site/SEO | `B-prompts/02-seo-google.md` → `E-banco-conteudo/05-artigos-seo.md` |
| Quem cuida do WhatsApp | `G-templates-mensagens.md` → `G-automacao.md` |

---

## 7. ARQUIVO ÚNICO (já gerado) — como regenerar

O pacote já vem com **`ESTRUTURA-AGENTICA-COMPLETA.md` dentro desta pasta** (~480 KB,
7.900 linhas): capa, sumário, todas as partes na ordem A–G, os 3 arquivos de contexto e o
JSON dos workflows no anexo. É a versão de leitura/impressão — **todo o pacote em um arquivo só**.

Para regenerar depois de editar qualquer parte, rode o script abaixo **na raiz do projeto**
(gera uma versão simples, sem capa/sumário, sobrescrevendo o arquivo dentro de `estrutura-agentica/`):

```powershell
$out = "estrutura-agentica\ESTRUTURA-AGENTICA-COMPLETA.md"
$ordem = @(
  "estrutura-agentica\README.md",
  "estrutura-agentica\00-contexto\ficha-negocio.md",
  "estrutura-agentica\00-contexto\guia-marca-e-tom.md",
  "estrutura-agentica\00-contexto\roster-e-handoff.md",
  "estrutura-agentica\A-analise-estagio-atual.md",
  "estrutura-agentica\B-prompts\01-maestro.md",
  "estrutura-agentica\B-prompts\02-seo-google.md",
  "estrutura-agentica\B-prompts\03-instagram-manager.md",
  "estrutura-agentica\B-prompts\04-editor-midia.md",
  "estrutura-agentica\B-prompts\05-especialista-panelas.md",
  "estrutura-agentica\C-fluxos-trabalho.md",
  "estrutura-agentica\D-calendario-editorial.md",
  "estrutura-agentica\E-banco-conteudo\01-reels.md",
  "estrutura-agentica\E-banco-conteudo\02-carrosseis.md",
  "estrutura-agentica\E-banco-conteudo\03-legendas-antes-depois.md",
  "estrutura-agentica\E-banco-conteudo\04-google-meu-negocio.md",
  "estrutura-agentica\E-banco-conteudo\05-artigos-seo.md",
  "estrutura-agentica\F-plano-implementacao.md",
  "estrutura-agentica\G-automacao.md",
  "estrutura-agentica\G-templates-mensagens.md"
)
$md = foreach ($f in $ordem) { "`n`n---`n`n" + (Get-Content -Raw -Encoding UTF8 $f) }
$md += "`n`n---`n`n## ANEXO — n8n-workflows.json (arquivo de importação)`n`n" + (Get-Content -Raw -Encoding UTF8 "estrutura-agentica\n8n-workflows.json")
[System.IO.File]::WriteAllText((Join-Path (Get-Location) $out), ($md -join "`n"), (New-Object System.Text.UTF8Encoding($false)))
```

> O arquivo único serve para leitura e impressão (inclui os 3 arquivos de `00-contexto/` e, no fim, o JSON dos workflows). Para uso como prompt, prefira os
> arquivos individuais de `B-prompts/` (cada um é auto-suficiente).
