# G — AUTOMAÇÃO PONTA A PONTA (captura → atendimento → produção → publicação → métricas)

> Arquivo operacional. Complementa `00-contexto/ficha-negocio.md` e `00-contexto/guia-marca-e-tom.md`.
> Regra-mãe: **a automação existe para o dono trabalhar menos, não para criar mais uma tela para ele olhar.**
> Toda automação abaixo foi pensada para **uma pessoa só**, que conserta panela e atende WhatsApp.
> Versão 1.0 · 2026-10-22

---

## 0. COMO LER ESTE ARQUIVO

| Se você quer… | Vá para |
|---|---|
| Entender o fluxo inteiro | §2 (diagrama) e §3 (fases) |
| Escolher a ferramenta | §4 (stack) e §5 (Make vs n8n vs Zapier) |
| Começar a implantar hoje | §6 (P0) + §13 (checklist) |
| Saber o que **não** automatizar | §9 |
| Cuidar de LGPD | §10 |
| Importar os workflows prontos | §8 + `n8n-workflows.json` |
| Copiar mensagens prontas | `G-templates-mensagens.md` |

---

## 1. TRÊS PRINCÍPIOS (valem para toda automação deste projeto)

1. **Número principal do WhatsApp é sagrado.** O (31) 98739-6336 é o canal de venda e fica **no celular do dono**, no WhatsApp Business comum. Automação de envio em massa por API não oficial nesse número pode derrubar a conta (ban do WhatsApp) — e derrubar a conta é perder o negócio. Por isso, por padrão, **a automação avisa o dono; quem responde ao cliente é o dono**, com mensagem já pronta (1 toque).
2. **Automatize o que é repetível, nunca o que é opinião.** Planilha, notificação, lembrete, relatório e agendamento são automáticos. Preço, prazo, garantia, diagnóstico e desconto continuam sendo decisão humana.
3. **Se a automação quebrar, o atendimento não pode parar.** Todo fluxo tem plano B manual (planilha + WhatsApp Web). Nenhuma automação pode ser a única porta de entrada de lead.

---

## 2. MAPA DO FLUXO (diagrama ASCII)

```
CAPTURA                QUALIFICAÇÃO            ATENDIMENTO              PRODUÇÃO
────────               ────────────            ───────────              ────────
Site (form Netlify) ─┐
  "orcamento" + 3 fotos │
  "empresa" (B2B)       │
Instagram bio/DM  ─────┤        ┌───────────────┐      ┌──────────────────┐
Google Meu Negócio ────┼───────►│ PLANILHA CRM  │─────►│ Orçamento        │
  (chat, ligação,       │        │ Google Sheets │      │ (dono confirma   │
  "rotas", site)        │        │ 1 linha/lead  │      │  valor e prazo)  │
WhatsApp direto ───────┘        └───────┬───────┘      └────────┬─────────┘
(principal)                             │                       │
                                        │ notificação           │ aprovado
                                        ▼                       ▼
                                ┌───────────────┐      ┌──────────────────┐
                                │ Telegram do   │      │ Coleta por Uber  │
                                │ dono (alerta) │      │ + fotos "antes"  │
                                └───────────────┘      └────────┬─────────┘
                                                                │
                                        ┌───────────────────────┘
                                        ▼
                              ┌──────────────────┐     ┌──────────────────┐
                              │ BANCADA          │────►│ Entrega + teste  │
                              │ status: em       │     │ de vedação       │
                              │ produção         │     │ status: entregue │
                              └──────────────────┘     └────────┬─────────┘
                                                                │ +1 dia
                                                                ▼
                              ┌──────────────────┐     ┌──────────────────┐
                              │ Follow-up 24h/72h│◄────│ Pós-serviço:     │
                              │ de orçamento sem │     │ pedido de        │
                              │ resposta         │     │ avaliação Google │
                              └──────────────────┘     └──────────────────┘
                                                                │
PUBLICAÇÃO / MÉTRICAS                                           ▼
────────                   ┌──────────┐   ┌──────────┐   ┌──────────────────┐
Instagram (Meta Business)  │ RELATÓRIO│   │ ALERTA   │   │ REATIVAÇÃO       │
GMB (Metricool/lembrete) ─►│ SEMANAL  │   │ AVALIAÇÃO│   │ 90/180 dias      │
Site (Netlify)             └──────────┘   └──────────┘   └──────────────────┘
```

**Legenda de responsabilidade:** 🟦 automático · 🟨 automático com aprovação do dono · ⬜ humano.
O único bloco 100% humano é **preço/prazo/garantia**.

---

## 3. AS 6 FASES E O QUE ACONTECE EM CADA UMA

| Fase | Entrada | O que é automático | O que é humano | Saída |
|---|---|---|---|---|
| **1. Captura** | Site, IG, GMB, WhatsApp | Webhook do formulário, link `wa.me` com mensagem pré-preenchida, resposta rápida nativa | Ler a mensagem e responder | Lead na planilha |
| **2. Qualificação** | Fotos + problema | Pedido de foto padrão, cidade/bairro, tipo de panela | Confirmar serviço provável | Lead classificado (`frio/quente/B2B`) |
| **3. Atendimento** | Orçamento | Lembrete de follow-up 24h/72h, mensagem pronta | **Dar o preço e o prazo** | Aprovação registrada |
| **4. Produção** | Panela na bancada | Mudança de status, lembrete de atualização | Executar o serviço | Status `panela pronta` |
| **5. Entrega** | Coleta/entrega Uber | Aviso "panela pronta", pedido de avaliação no dia +1/+2 | Entregar e conferir | Status `entregue` + avaliação |
| **6. Publicação e métricas** | Fotos/vídeos, dados | Agendamento de post, lembrete de GMB, relatório semanal, backup | Criar conteúdo e aprovar | Conteúdo publicado + números |

---

## 4. STACK RECOMENDADA (e o custo real de cada peça)

> Valores de referência conferidos em **out/2026**, convertendo **US$ 1 ≈ R$ 5,50**.
> Preço de ferramenta muda; **reconfira na página de preços antes de assinar**. Nenhum
> valor aqui é preço de serviço da oficina — preço de conserto só o dono define.

| Peça | Ferramenta | Plano gratuito | Custo quando passa do grátis | Vale a pena? |
|---|---|---|---|---|
| Planilha / CRM | Google Sheets | Sim, ilimitado na prática | R$ 0 | ✅ sempre |
| Notificação do dono | Telegram (bot) | Sim, grátis | R$ 0 | ✅ melhor custo/benefício; WhatsApp é para o cliente, Telegram é para o dono |
| Automação | **Google Apps Script** | Sim (quota ~20.000 chamadas externas/dia) | R$ 0 | ✅ P0 sem cartão de crédito |
| Automação visual | **Make** | 1.000 operações/mês, **2 cenários ativos**, intervalo mínimo 15 min | ~US$ 9–11/mês (Core, 10.000 ops) ≈ **R$ 50–65** | ✅ bom para quem não quer programar |
| Automação visual | **n8n** | *Self-hosted* grátis (precisa de servidor) | VPS ~**R$ 25–45**/mês; n8n Cloud a partir de ~US$ 24/mês ≈ **R$ 130+** | ✅ se quiser WhatsApp/Evolution e controle total |
| Automação visual | **Zapier** | 100 tarefas/mês, **só Zap de 2 etapas** | ~US$ 20–30/mês ≈ **R$ 110–170** | ⚠️ pouco para este caso |
| Formulário | Netlify Forms | 100 submissões/mês por site | Netlify Pro ~US$ 19/mês | ✅ no começo; monitorar o limite de 100 |
| Agendamento de posts | **Meta Business Suite** | Grátis (IG + Facebook) | R$ 0 | ✅ padrão |
| Agendamento multi-canal | **Metricool** | 1 marca, posts limitados/mês | ~R$ 50–90/mês | ⚠️ só quando quiser GMB + IG no mesmo painel |
| Agendamento multi-canal | **Buffer** | 3 canais, ~10 posts na fila por canal | ~US$ 6/canal/mês | ⚠️ opcional |
| WhatsApp automático (API não oficial) | **Evolution API** | Software grátis | VPS ~R$ 25–45/mês | ⚠️ só com **número secundário**, nunca o principal |
| WhatsApp oficial | **Cloud API (Meta)** | Conversas de serviço (janela 24h) sem custo; templates pagos por mensagem | ~US$ 0,01–0,08 por mensagem template | ⚠️ exige verificação de empresa e migrar o número |
| Relatório | Apps Script + Gmail/Telegram | Grátis | R$ 0 | ✅ |
| Backup de mídia | Google Drive/Photos | 15 GB grátis | ~R$ 9–35/mês (100 GB–200 GB) | ✅ |

### Três cenários de custo total

| Cenário | O que entra | Custo/mês | Quando usar |
|---|---|---|---|
| **A — R$ 0** | Apps Script + Sheets + Telegram + Meta Business Suite + GMB nativo | **R$ 0** | Começo. Cobre 100% do P0 e do P1. **Recomendado para os próximos 60 dias.** |
| **B — R$ 50–130** | Make Core (ou n8n Cloud) + Metricool opcional | **R$ 50–130** | Quando o dono quiser editar o fluxo sem programar e o volume passar de ~80 leads/mês |
| **C — R$ 150–250** | VPS + n8n self-hosted + Evolution API (número secundário) | **R$ 150–250** | Fase B2B: notificação automática de status para restaurantes parceiros |

> **Decisão para o momento atual: Cenário A.** O negócio tem 31 avaliações e uma pessoa
> operando; não há volume que justifique pagar automação ainda. Custo de ferramenta
> só quando o tempo do dono virar gargalo medido (§12).

---

## 5. MAKE vs n8n vs ZAPIER (comparativo honesto)

### 5.1 Tabela comparativa

| Critério | Make | n8n | Zapier |
|---|---|---|---|
| Facilidade para leigo | ⭐⭐⭐⭐⭐ (visual, ótimo para celular) | ⭐⭐⭐ (precisa de noção de infra) | ⭐⭐⭐⭐⭐ |
| Plano grátis | 1.000 ops/mês, 2 cenários, intervalo mínimo 15 min | *Self-hosted* ilimitado; Cloud só trial | 100 tarefas/mês e **só Zap de 2 etapas** |
| Custo pago | ~US$ 9–11/mês (10.000 ops) | VPS R$ 25–45 (self-hosted) ou ~US$ 24+/mês (Cloud) | ~US$ 20–30/mês (750–2.000 tarefas) |
| Rodar 24h sem PC ligado | ✅ (nuvem) | ⚠️ só com VPS; no PC a automação para quando ele desliga | ✅ |
| Webhook do Netlify | ✅ nativo | ✅ nativo | ✅ nativo |
| Google Sheets | ✅ | ✅ | ✅ |
| Telegram | ✅ | ✅ | ✅ |
| WhatsApp API não oficial (Evolution/Baileys) | ⚠️ via HTTP request | ✅ melhor suporte (tem nós e comunidade) | ⚠️ via HTTP |
| WhatsApp Cloud API oficial | ✅ via HTTP | ✅ via HTTP | ✅ via HTTP |
| Custo por operação | 1 op por módulo executado | 1 execução por workflow | 1 tarefa por ação |
| Curva de aprendizado | Baixa | Média/alta | Baixa |
| Liberdade / sem limite de nós | Média | Total | Baixa |
| Suporte em português | ✅ | Comunidade + docs em inglês | ✅ |

### 5.2 Por que 1.000 operações do Make dão conta

Uma entrada de lead consome, no máximo, ~4 operações:
`Webhook (1) → Sheets (1) → Telegram (1) → gravação de status (1)`.
Com 1.000 operações/mês, isso é **~250 leads/mês** — muito acima do volume atual.

### 5.3 Quando cada um vale a pena (regra de bolso)

| Situação | Escolha |
|---|---|
| Quero começar hoje, sem cartão, sem servidor | **Apps Script** (grátis, roda no Google) |
| Quero editar o fluxo arrastando blocos e ver tudo no celular | **Make** (grátis até 1.000 ops) |
| Preciso de WhatsApp não oficial, muitos nós, ou quero rodar de graça para sempre | **n8n** self-hosted em VPS |
| Já tenho Zapier pago por outro motivo e poucas tarefas | Zapier (não vale assinar só para este caso) |
| Preciso de agendamento de post + GMB + relatório juntos | Metricool (pago) ou Meta Business Suite + GMB manual |

### 5.4 Recomendação final

1. **Agora:** Apps Script + Sheets + Telegram + WhatsApp Business nativo + Meta Business Suite — **R$ 0**.
2. **Quando o dono quiser editar sem programar:** migrar os 2 fluxos do `n8n-workflows.json` para **Make** (ou rodar n8n se houver VPS).
3. **Nunca** colocar o WhatsApp principal em API não oficial. Se um dia houver número secundário para status automático de restaurante parceiro, aí sim Evolution API.

---

## 6. AUTOMAÇÕES PRIORIZADAS (P0 / P1 / P2)

Legenda de esforço: ⏱️ menos de 1h · ⏱️⏱️ 1–3h · ⏱️⏱️⏱️ meio dia ou mais.

### Resumo

| ID | Automação | Prioridade | Esforço | Custo | Impacto |
|---|---|---|---|---|---|
| P0-1 | Netlify Forms → Planilha + notificação no Telegram | **P0** | ⏱️⏱️ | R$ 0 | Não perder lead que preencheu o site |
| P0-2 | Resposta automática de primeiro contato | **P0** | ⏱️ | R$ 0 | Cliente não fica no vácuo, fora do horário |
| P0-3 | Follow-up de orçamento sem resposta (24h/72h) | **P0** | ⏱️⏱️ | R$ 0 | Recupera orçamento esfriado |
| P0-4 | Pós-serviço + pedido de avaliação Google | **P0** | ⏱️⏱️ | R$ 0 | Alimenta a nota 5,0 |
| P0-5 | Alerta de nova avaliação no Google | **P0** | ⏱️ | R$ 0 | Responder rápido e evitar crise |
| P1-1 | Agendamento de posts do Instagram | P1 | ⏱️ | R$ 0 | Consistência sem publicar na hora |
| P1-2 | Lembrete e fila de posts do GMB | P1 | ⏱️ | R$ 0 | Movimento no Google |
| P1-3 | Relatório semanal automático | P1 | ⏱️⏱️ | R$ 0 | Decisão com número, não com achismo |
| P1-4 | Backup de mídia | P1 | ⏱️ | R$ 0–9 | Não perder o acervo antes/depois |
| P2-1 | Reativação de cliente antigo (90/180 dias) | P2 | ⏱️⏱️ | R$ 0 | Venda recorrente |
| P2-2 | Painel B2B e lembrete de manutenção programada | P2 | ⏱️⏱️⏱️ | R$ 0 | Receita de contrato |
| P2-3 | Coleção de prova social (pedido de foto/vídeo) | P2 | ⏱️ | R$ 0 | Conteúdo pronto para o Instagram |

---

### P0-1 · Netlify Forms → Google Sheets + notificação no Telegram

**Objetivo:** quando alguém preencher o formulário do site (com ou sem fotos), o lead aparece
na planilha e o dono recebe um alerta no celular — sem abrir e-mail, sem olhar o painel da Netlify.

**Gatilho:** envio de qualquer um dos formulários: `orcamento` (com até 3 fotos) e o formulário
empresarial (`formEmpresa` — hoje só abre WhatsApp; ver §14, inconsistência registrada).

**Ferramentas:** Netlify (nativo) → webhook → n8n **ou** Make **ou** Apps Script (`doPost`) → Google Sheets + Telegram.

**Passo a passo (n8n ou Make):**

1. Publique o site com `data-netlify="true"` (já está no `site-novo/index.html`) e envie **um
   teste real** pelo formulário. Sem isso a Netlify não "enxerga" o formulário.
2. No Netlify: **Site configuration → Forms → Form notifications → Add notification → Outgoing webhook**.
   - Evento: **New form submission**
   - Form: `orcamento` (repita para o formulário de empresa)
   - URL: a URL de produção do webhook (`https://SEU-N8N/webhook/netlify-orcamento`)
   - Salve e clique em **Test notification**.
3. No n8n (ou Make), crie o fluxo: **Webhook (POST) → Normalizar → Google Sheets (append) → IF urgência → Telegram**.
   O `n8n-workflows.json` deste repositório já traz esse fluxo pronto (workflow 1).
4. Mapeie os campos da planilha (ver §7). O payload da Netlify chega assim:

```json
{
  "id": "000000000000000000",
  "site_id": "SEU_SITE_ID",
  "form_id": "SEU_FORM_ID",
  "form_name": "orcamento",
  "data": {
    "nome": "Cliente Exemplo",
    "bairro": "Belmonte",
    "tipo": "Panela de pressão",
    "problema": "não pega pressão",
    "uber": "on",
    "foto1": "https://SEU-SITE.netlify.app/.../foto1.jpg",
    "foto2": "https://SEU-SITE.netlify.app/.../foto2.jpg",
    "foto3": "https://SEU-SITE.netlify.app/.../foto3.jpg"
  },
  "created_at": "2026-10-22T16:00:00.000Z",
  "human_fields": { "nome": "Cliente Exemplo" },
  "ordered_human_fields": []
}
```

5. **Fotos:** a Netlify entrega o upload como **URL de arquivo**, não como binário. A automação
   **não baixa a foto** — ela guarda o link na coluna `fotos` e coloca os links na notificação.
   Assim o dono abre a foto direto do Telegram, sem ocupar espaço em servidor.
   *Confirme o formato com um envio de teste: dependendo da versão, o campo pode vir como
   string ou como lista de URLs — o nó "Normalizar Lead" do workflow já trata os dois casos.*
6. **Notificação no Telegram:** crie um bot em `@BotFather` (`/newbot`), pegue o **token**, mande
   uma mensagem para o bot, descubra o **chat_id** (`https://api.telegram.org/bot<TOKEN>/getUpdates`)
   e cole a credencial no n8n/Make. Formato da mensagem:

```
📩 NOVO ORÇAMENTO — site
Cliente: {{nome}} ({{bairro}})
Panela: {{tipo_panela}}
Problema: {{problema}}
Uber: {{uber}}
Fotos: {{links}}
⏱️ Responder em até 30 min (horário comercial).
```

7. **WhatsApp como alternativa ao Telegram (opcional):** se o dono preferir receber no WhatsApp,
   use a **Cloud API oficial** com o **número secundário** (não o principal) ou o próprio Telegram
   (mais simples e sem risco). No `n8n-workflows.json` há um nó HTTP desativado para Evolution API
   — leia antes de ativar.
8. **Spam:** o formulário já tem honeypot (`campo-falso`). A Netlify descarta o envio com campo
   falso preenchido; **não** crie regra extra de e-mail.

**Custo:** R$ 0 (Sheets + Telegram). Netlify grátis até 100 submissões/mês.
**Critério de sucesso:** 100% dos envios do site aparecem na planilha em menos de 1 minuto.
**Cuidado:** se passar de 100 submissões/mês, a Netlify começa a recusar. Nesse caso, o caminho
é migrar o `POST` para um Web App do Apps Script (grátis, sem limite de 100) — falar com o
responsável pelo site.

---

### P0-2 · Resposta automática de primeiro contato

**Objetivo:** quem chama fora do horário ou em momento de correria recebe resposta imediata,
no tom da oficina, e já sabe o que mandar (foto de lado + foto do fundo).

**Gatilho:** primeira mensagem de um número novo.

**Ferramentas (a opção certa hoje):** recursos nativos do **WhatsApp Business**, sem API:
- **Mensagem de saudação** — dispara no primeiro contato.
- **Mensagem de ausência** — fora de seg/sex 8h–18h e sáb 8h–13h.
- **Respostas rápidas** (`/foto`, `/orcamento`, `/endereco`, `/uber`) — o dono digita 1 atalho e o
  texto completo entra na conversa. **É aqui que os templates de `G-templates-mensagens.md` vivem.**

**Passo a passo:**

1. WhatsApp Business → **Ferramentas comerciais → Mensagem de saudação** → ativar → colar o
   template **T01** (personalizado com o nome da oficina).
2. → **Mensagem de ausência** → ativar → horário `fora do expediente` → colar **T53**.
3. → **Respostas rápidas** → criar os 8 atalhos principais (`/t1` a `/t8`) com os templates de
   maior uso (saudação, pedido de foto, orçamento, prazo, coleta, endereço, avaliação, pós-serviço).
4. Testar de outro número: mandar "oi" às 21h e conferir saudação + ausência.

**Custo:** R$ 0. **Critério de sucesso:** nenhuma primeira mensagem fica sem resposta por mais de 30 min
em horário comercial. **Cuidado:** a automação nativa **não dá preço** e não faz diagnóstico; ela só
acolhe e pede foto. Se quiser resposta automática fora do WhatsApp Business nativo, isso exige API
e cai no risco de ban do §11 — **não recomendado no número principal.**

---

### P0-3 · Follow-up de orçamento sem resposta (24h / 72h)

**Objetivo:** recuperar o orçamento que o cliente viu e não respondeu. É a automação com melhor
retorno por minuto investido.

**Gatilho:** linha da planilha com status `orcamento_enviado` e `ultimo_contato` há 24h (e depois 72h).

**Ferramentas:** Apps Script (gatilho diário 9h) **ou** n8n (agenda diária) + Telegram.

**Passo a passo:**

1. Na planilha, ter as colunas `status`, `ultimo_contato`, `follow_up_24h`, `follow_up_72h` (§7).
2. Gatilho diário às 9h (seg–sáb).
3. Filtrar: `status = orcamento_enviado` **e** `follow_up_24h` vazio **e** `ultimo_contato` entre
   24h e 48h atrás → montar mensagem **T50 (follow-up 24h)** → enviar ao **dono** no Telegram,
   com link `wa.me` do cliente já com o texto preenchido (1 toque para enviar).
4. Marcar `follow_up_24h = data`.
5. Repetir a lógica com 72h → **T51**. Depois de 72h, `status = perdido_momento` (sem pressão;
   o cliente volta em P2-1).
6. **Nunca** mandar mais de 2 follow-ups. Depois disso, silêncio.

**Custo:** R$ 0. **Critério de sucesso:** ≥ 15% dos orçamentos parados voltam a responder.
**Cuidado:** mensagem de follow-up **não pode** repetir o preço nem dar desconto. Só lembrar que
o orçamento está de pé e que o prazo pode mudar (sem prometer).

---

### P0-4 · Pós-serviço + pedido de avaliação no Google

**Objetivo:** transformar entrega em avaliação 5,0 e em prova social. Pedir **1 dia depois** da
entrega, quando a panela já foi usada e o alívio está fresco.

**Gatilho:** status `entregue` + 1 dia (na prática: checagem diária às 9h de quem foi entregue ontem
— assim o fluxo não depende de "espera" que quebra quando o servidor reinicia).

**Ferramentas:** Apps Script ou n8n + Telegram. (Workflow 2 do `n8n-workflows.json`.)

**Passo a passo:**

1. Ao entregar, o dono muda o status para `entregue` e preenche `data_entrega`.
2. Checagem diária 9h: pegar linhas `status = entregue`, `data_entrega = ontem`, `avaliacao_pedida` vazio.
3. Montar a mensagem **T32 (pedido de avaliação)** com o link:
   `https://share.google/4yfzvqiftgoAKwqah` (link real do perfil no Google).
4. Mandar para o dono no Telegram **com o link wa.me já pronto** — ele confere e envia.
   *(Se houver número secundário + Cloud API, esse envio pode ser automático. No principal, não.)*
5. Marcar `avaliacao_pedida = sim` e `data_pedido_avaliacao`.
6. **Lembrete de reforço** em 3 dias, apenas 1 vez, se ainda não houver avaliação (**T33**).
7. Cliente respondeu que ficou bom → responder com **T34** (agradecimento + convite para indicar).

**Custo:** R$ 0. **Critério de sucesso:** ≥ 30% dos entregues avaliam.
**Cuidado:** nunca pedir avaliação 5 estrelas de forma que soe comprada. Pedir **avaliação honesta**.
Nada de avaliar por outra pessoa ou criar avaliação — isso é fraude e derruba o perfil no Google.

---

### P0-5 · Alerta de nova avaliação no Google

**Objetivo:** responder rápido (idealmente em 24h), agradecer e resolver antes de virar crise.

**Realidade técnica (importante):** o Google Meu Negócio **não tem webhook gratuito de avaliação**.
As opções reais são:

| Opção | Custo | Observação |
|---|---|---|
| Notificação nativa do app + e-mail do GMB | R$ 0 | **Usar agora.** Ativar em Configurações → Notificações |
| Lembrete fixo 2x/semana (ter e sex, 9h) no Telegram | R$ 0 | Cobre o risco de notificação perdida |
| Business Profile API | R$ 0 após aprovação | Exige projeto no Google Cloud + aprovação; pode demorar |
| Places API (New) — ler avaliações | Pago por chamada (cota gratuita mensal limitada) | Traz só as 5 mais recentes; serve como alerta |

**Passo a passo (hoje, R$ 0):**

1. Celular do dono: app **Google Meu Negócio** → notificações ligadas para avaliações.
2. Apps Script/n8n: gatilho **terça e sexta 9h** → Telegram:
   `⭐ Conferir avaliações no Google: https://share.google/4yfzvqiftgoAKwqah`
   (+ lembrar de responder em até 24h).
3. Se um dia quiser automático de verdade: Business Profile API (pedir aprovação) → n8n consulta
   a cada 6h → Telegram. Só faz sentido com volume alto de avaliação.
4. Avaliação nova → responder com **T37** (positiva) ou **T38** (negativa). Sempre humano.

**Custo:** R$ 0. **Critério de sucesso:** 100% das avaliações respondidas em até 24h.
**Cuidado:** responder avaliação é conteúdo **público e sensível** → nunca automático.

---

### P1-1 · Agendamento de posts do Instagram

**Objetivo:** publicar 5x por semana (rampa de 3 no 1º mês) sem depender da memória do dono.

**Ferramentas:** **Meta Business Suite (grátis)** como padrão — agenda feed, carrossel, Reel e
stories com data/hora. Alternativas: Metricool (free limitado / pago ~R$ 50–90) e Buffer
(free: 3 canais, ~10 posts por canal).

**Passo a passo:**

1. Instagram `@consertopanelasbh` já é conta profissional → conectar no **Meta Business Suite**.
2. Criar o conteúdo a partir do banco `E-banco-conteudo/` (reels, carrosséis, legendas).
3. Agendar a semana na sexta anterior, 4–5 posts (padrão do calendário `D-calendario-editorial.md`).
4. Deixar **2 posts de reserva** agendados para a semana seguinte (buffer), conforme o roster.
5. Stories do dia (bastidor) continuam manuais — são o "tempero" e não valem automatizar.
6. Publicou → mover o pacote para `producao/05-publicado/` e anotar a métrica.

**Custo:** R$ 0. **Critério de sucesso:** 20 posts/mês publicados sem atraso.
**Cuidado:** agendamento não aprova conteúdo. Revisão de preço/prazo/segurança continua humana e
passa pela OFICINA quando for tema técnico.

---

### P1-2 · Posts do Google Meu Negócio

**Objetivo:** manter o perfil ativo (o GMB gosta de post novo) sem virar tarefa diária.

**Passo a passo:**

1. Fonte: 10 posts prontos em `E-banco-conteudo/04-google-meu-negocio.md`.
2. **Meta Business Suite não publica no GMB.** Duas opções:
   - **Grátis:** lembrete no Telegram **toda segunda 8h** → dono cola o post pronto no app do GMB
     (2 minutos por semana).
   - **Pago:** Metricool free/pago publica IG + GMB no mesmo painel (~R$ 50–90/mês).
3. Frequência realista: **1 post por semana** + 1 foto nova por mês no perfil.
4. Avaliação nova e pergunta no Q&A → resposta humana (T37/T38).

**Custo:** R$ 0 (lembrete) ou R$ 50–90 (Metricool). **Critério de sucesso:** 4 posts/mês no ar.
**Cuidado:** post do GMB não aceita link `wa.me` como CTA clicável em todos os formatos; usar o
botão "Ligar" e o texto com o número. Sempre revisar antes de publicar.

---

### P1-3 · Relatório semanal automático

**Objetivo:** o dono abrir o celular na segunda e ver **5 números**, não uma planilha.

**Ferramentas:** Apps Script (gatilho domingo 18h) → e-mail para o próprio dono **ou** Telegram.

**O que entra no relatório:**

```
📊 SEMANA {{semana}} ({{data_ini}} a {{data_fim}})

Leads: {{n_leads}} (site {{n_site}} · whatsapp {{n_whats}} · IG {{n_ig}} · GMB {{n_gmb}})
Orçamentos enviados: {{n_orc}}  |  Aprovados: {{n_aprov}}  |  Taxa: {{taxa}}%
Panelas entregues: {{n_entregues}}
Avaliações novas: {{n_aval}}  |  Nota atual: {{nota}}
Posts publicados: {{n_posts}}
Follow-ups pendentes hoje: {{n_follow}}
Atenção: {{alertas}}   ← ex.: "3 orçamentos parados há mais de 72h"
```

**Passo a passo:**

1. Planilha com colunas de data e status (§7) — sem isso o relatório não existe.
2. Apps Script: gatilho **domingo 18h** → conta por período → envia.
3. Guardar histórico em outra aba (`relatorios`) para ver tendência mês a mês.
4. Não usar GA4 como fonte principal: o site é estático e **não tem analytics** ainda
   (lacuna da ficha). Quando o site tiver GA4, o relatório passa a incluir visitas.

**Custo:** R$ 0. **Critério de sucesso:** relatório chega todo domingo sem intervenção.

---

### P1-4 · Backup de mídia

**Objetivo:** não perder o acervo de antes/depois (é o ativo de marketing mais valioso da oficina).

**Passo a passo:**

1. Celular do dono: **Google Photos/Drive com backup automático** ligado (15 GB grátis).
2. Padrão de nome do roster: `AAAA-MM-DD_pilar_formato_tema_versao` (ex.:
   `2026-10-23_antesedepois_reel_cabo-quebrado_v1.mp4`).
3. Fotos do formulário do site: **a Netlify não é backup** — baixar mensalmente os uploads pelo
   painel da Netlify (ou o link que chega no Telegram) para `producao/01-entrada/` no Drive.
4. Script mensal (dia 1º, 8h) → Telegram: "Backup do mês: conferir Drive e baixar fotos do site".
5. Guardar 2 cópias: Drive + cartão/SD ou HD externo. Regra 3-2-1 simplificada.
6. Fotos de cliente: guardar só com autorização e apagar quando não for mais usar (§10).

**Custo:** R$ 0–9/mês. **Critério de sucesso:** nenhum antes/depois perdido.

---

### P2-1 · Reativação de cliente antigo (90 / 180 dias)

**Objetivo:** quem consertou uma panela tem mais panelas na cozinha. A reativação é venda barata.

**Gatilho:** `ultimo_servico` entre 90 e 100 dias (e depois 180) e `status = cliente`.

**Passo a passo:**

1. Filtro diário na planilha (o mesmo job do P0-4 pode fazer as duas coisas).
2. Gerar **T39** (reativação 90 dias) personalizado com `{{nome}}` e `{{tipo_panela}}`.
3. Mandar para o dono no Telegram com o link `wa.me` pronto → envio manual, 1 toque.
4. Marcar `reativacao_90 = data` para não repetir.
5. Se responder "não agora", anotar `sem_interesse_ate` e não insistir.

**Custo:** R$ 0. **Cuidado:** LGPD — contato de marketing precisa de opt-out claro e base legal
registrada (§10). Nunca comprar lista.

---

### P2-2 · Painel B2B e lembrete de manutenção programada

**Objetivo:** transformar restaurante que consertou uma vez em contrato recorrente.

**Como funciona:**

1. Aba separada da planilha: `b2b` (estabelecimento, contato, qtd panelas, frequência, última visita, próxima manutenção).
2. Lembrete 15 dias antes da `proxima_manutencao` → Telegram com **T43** (manutenção programada B2B).
3. Visitou → atualizar `ultima_visita` e recalcular `proxima_manutencao` (+90 ou +180 dias).
4. Relatório mensal separado de B2B (nº de panelas atendidas, recorrência).

**Custo:** R$ 0. **Cuidado:** preço de contrato/condição de parceiro é **sempre** decisão do dono.

---

### P2-3 · Coleção de prova social (pedido de foto/vídeo)

**Objetivo:** matar a fome de conteúdo do Instagram com material real de cliente.

**Gatilho:** 3 dias após a entrega, cliente avaliou bem ou respondeu elogiando.

**Passo a passo:**

1. Mensagem **T31** (pedido de foto/vídeo com autorização) — só para cliente que demonstrou satisfação.
2. Se autorizar, registrar `autorizacao_imagem = sim` + data na planilha.
3. Salvar o arquivo em `producao/01-entrada/` com o padrão de nome do roster.
4. Nunca publicar print de conversa com telefone/endereço visível.

**Custo:** R$ 0. **Cuidado:** direito de imagem — autorização explícita, sempre.

---

## 7. PLANILHA CRM (estrutura única, 3 abas)

### Aba `leads` — uma linha por contato

| Coluna | Tipo | Preenchimento | Exemplo |
|---|---|---|---|
| `id_lead` | texto | automático (site: `WEB-AAAAMMDD-###`) | `WEB-20261022-417` |
| `data_hora` | data/hora | automático | `22/10/2026 16:04` |
| `nome` | texto | form / WhatsApp | `Maria Silva` |
| `whatsapp` | texto | humano (mascarar em relatório) | `31 9....` |
| `cidade_bairro` | texto | form / humano | `Belmonte, BH` |
| `origem` | lista | automático | `site` / `site-b2b` / `whatsapp` / `instagram` / `google` / `indicacao` |
| `tipo_panela` | lista | form / humano | `pressão`, `comum`, `industrial`, `fritadeira`, `outro` |
| `problema` | texto | form / humano | `não pega pressão` |
| `servico` | lista | humano (catálogo da ficha) | `revisão de vedação` |
| `fotos` | texto (links) | automático | `url1; url2` |
| `qtd_fotos` | número | automático | `2` |
| `uber` | sim/não | form | `sim` |
| `prioridade` | lista | automático (site) | `urgente` / `normal` |
| `orcamento_enviado` | sim/não | humano | `sim` |
| `valor` | número | **humano** | (nunca automático) |
| `prazo_combinado` | texto | **humano** | `confirmar com o dono` |
| `status` | lista | automático + humano | `novo`, `orcamento_enviado`, `aprovado`, `em_producao`, `pronto`, `entregue`, `perdido_momento`, `cliente` |
| `ultimo_contato` | data | automático | |
| `follow_up_24h` | data | automático | |
| `follow_up_72h` | data | automático | |
| `data_entrega` | data | humano | |
| `avaliacao_pedida` | sim/não | automático | |
| `data_pedido_avaliacao` | data | automático | |
| `avaliou` | sim/não | humano | |
| `autorizacao_imagem` | sim/não | humano | |
| `obs` | texto | humano | |
| `consentimento_marketing` | sim/não + data | humano | base para P2-1 |

### Aba `b2b`
`estabelecimento`, `contato`, `whatsapp`, `cidade_bairro`, `qtd_panelas`, `tipo_servico`,
`frequencia`, `ultima_visita`, `proxima_manutencao`, `contrato`, `obs`.

### Aba `relatorios`
`semana`, `data_ini`, `data_fim`, `n_leads`, `n_site`, `n_whats`, `n_ig`, `n_gmb`, `n_orcamentos`,
`n_aprovados`, `n_entregues`, `n_avaliacoes`, `nota_google`, `n_posts`, `observacoes`.

> **Regra de ouro da planilha:** se o dado não está na aba `leads`, a automação não consegue
> reportar. Preencher status no mesmo dia é o único "trabalho novo" que a automação exige do dono.

---

## 8. WORKFLOWS n8n PRONTOS (`n8n-workflows.json`)

O arquivo `estrutura-agentica/n8n-workflows.json` contém **2 workflows** no formato de importação do n8n.
O topo do arquivo é uma **lista** (para validar `Count = 2` e facilitar a separação).

| # | Nome | O que faz |
|---|---|---|
| 1 | `P0-1 Netlify Forms → Google Sheets + Telegram` | Recebe o webhook da Netlify, normaliza o lead, grava no Google Sheets e avisa o dono no Telegram (alerta urgente se pediu Uber ou é B2B). Tem nó HTTP desativado de exemplo para WhatsApp via Evolution API. |
| 2 | `P1/P0-4 Conteúdo semanal + avaliação pós-serviço` | Duas agendas independentes: **segunda 8h** manda o lembrete de conteúdo da semana; **diário 9h** varre a planilha, acha entregas de **1 dia atrás** sem pedido de avaliação, manda o texto pronto e marca a linha (`avaliacao_pedida = sim`). |

### Como importar

**Opção A — pela interface (recomendado): a interface importa um workflow por arquivo.**
Rode este comando na raiz do workspace para separar os dois:

```powershell
$w = Get-Content -Raw estrutura-agentica/n8n-workflows.json | ConvertFrom-Json
$w[0] | ConvertTo-Json -Depth 100 | Set-Content wf1.json -Encoding UTF8
$w[1] | ConvertTo-Json -Depth 100 | Set-Content wf2.json -Encoding UTF8
```

Depois, no n8n: **Workflows → Import from File** → `wf1.json` → salvar → repetir com `wf2.json`.

**Opção B — por linha de comando (lê a lista direto):**
```bash
n8n import:workflow --input=estrutura-agentica/n8n-workflows.json
```
> Se a sua versão do n8n recusar a lista, use a Opção A. O formato e as versões dos nós mudam
> conforme a versão do n8n: se ele avisar "node version", aceite a atualização do nó — a lógica não muda.

### Depois de importar (os 2 workflows)

1. Em cada nó de Google Sheets/Telegram, **selecione a sua credencial** — o JSON só traz
   `COLE_SUA_CREDENCIAL` como marcador, nenhuma credencial real está embutida.
2. Troque os placeholders: `COLE_ID_DA_PLANILHA_CRM`, `COLE_CRM_ABA_LEADS`, `COLE_CHAT_ID_TELEGRAM`.
3. Confira o fuso do n8n (`America/Sao_Paulo`) para o "segunda 8h" e o "diário 9h" caírem certo.
4. **Teste de verdade:** envie o formulário do site e veja a linha na planilha + o alerta no
   Telegram. Em seguida, crie uma linha fictícia `status = entregue` com data de anteontem e
   rode o workflow 2 manualmente.

**Validação feita na entrega:** `JSON.parse` OK (Node v24), `ConvertFrom-Json` OK (PowerShell),
topo com 2 workflows, 21 nós com IDs únicos, conexões apontando só para nós existentes, nenhum nó
sem entrada (fora gatilhos e sticky notes), sintaxe JS dos 2 nós Code verificada com `new Function`,
expressões `{{ }}` balanceadas. O arquivo **não** tem comentários nem vírgula sobrando.

> **Aviso:** n8n não é necessário para o P0. Os mesmos fluxos podem ser feitos com Make (grátis)
> ou Apps Script (grátis). O JSON existe para quem quiser subir rápido e editar visualmente.

---

## 9. O QUE AUTOMATIZAR × O QUE MANTER HUMANO

| Tarefa | Automatizar? | Por quê |
|---|---|---|
| Registrar lead na planilha | ✅ **Sim, sempre** | Trabalho chato, zero julgamento |
| Avisar o dono de lead novo | ✅ **Sim, sempre** | Velocidade de resposta é venda |
| Pedir foto padrão | ✅ **Sim** | Texto fixo, já validado |
| Saudação e mensagem fora do horário | ✅ **Sim** (nativo do WhatsApp Business) | Acolhe sem prometer nada |
| Follow-up 24h/72h (texto pronto) | ✅ **Sim**, envio com 1 toque | Recupera orçamento |
| Pedido de avaliação pós-serviço | ✅ **Sim**, envio com 1 toque | Prova social |
| Relatório semanal | ✅ **Sim** | Decisão com número |
| Agendar post | ✅ **Sim** | Consistência |
| Lembrete de GMB / avaliação | ✅ **Sim** | Não esquecer |
| Backup de mídia (rotina) | ✅ **Sim** (alerta) | Acervo |
| **Preço do orçamento** | ❌ **Nunca** | Depende do estado da panela; regra de ouro nº 1 |
| **Prazo de entrega** | ❌ **Nunca** | Só o dono confirma |
| **Garantia (prazo e cobertura)** | ❌ **Nunca** | Não inventar; só o dono define |
| **Diagnóstico técnico definitivo** | ❌ **Nunca** | Foto indica, bancada confirma |
| **“Tem conserto?” (fundo furado, peça rara)** | ❌ **Nunca** | Avaliação presencial |
| **Desconto / condição de parceiro** | ❌ **Nunca** | Negociação humana |
| **Resposta a avaliação (pública)** | ❌ **Nunca** | Marca e risco de crise |
| **Resposta a cliente insatisfeito** | ❌ **Nunca** (mas com template pronto) | Precisa de empatia e decisão |
| **Orientação de segurança em panela de pressão** | ❌ **Nunca** | Risco físico; só especialista |
| **Autorização de imagem** | ❌ **Nunca** | Direito de imagem |
| **Publicar conteúdo técnico** | ❌ **Nunca** | Passa pela OFICINA |

---

## 10. LGPD — O QUE FAZER (sem virar advogado)

> Isto é orientação operacional, não parecer jurídico. Em dúvida, consultar um advogado.

### 10.1 Base legal por finalidade

| Finalidade | Base legal (LGPD art. 7) | O que fazer na prática |
|---|---|---|
| Responder orçamento pedido pelo cliente | **Execução de contrato** (V) / **legítimo interesse** (IX) | Aviso curto no formulário e no WhatsApp: "usamos seus dados para responder seu orçamento" |
| Lembrete de follow-up do mesmo orçamento | **Legítimo interesse** (IX) | Só sobre o serviço que ele pediu; parar no primeiro "não quero" |
| Pedido de avaliação pós-serviço | **Legítimo interesse** (IX) | 1 pedido + 1 lembrete, e só |
| Reativação / oferta de novo serviço | **Consentimento** (I) ou legítimo interesse com opt-out | Registrar `consentimento_marketing = sim` + data; incluir "se não quiser receber, me avisa" |
| Nota fiscal / obrigação fiscal | **Obrigação legal** (II) | Guardar pelo prazo fiscal |
| Foto de cliente em conteúdo | **Consentimento** (I) | Autorização explícita, registrada na planilha |

### 10.2 Retenção (quanto tempo guardar)

| Dado | Guardar | Depois |
|---|---|---|
| Lead que não fechou | **12 meses** | Anonimizar (apagar nome/telefone) |
| Cliente ativo | Enquanto for cliente + **12 meses** | Anonimizar |
| Fotos/prints de cliente | **12 meses** ou enquanto autorizado | Apagar |
| Dados fiscais | **5 anos** (prazo fiscal) | — |
| Logs de automação (n8n/Apps Script) | **90 dias** | Apagar |
| Conversas de WhatsApp | Enquanto necessário ao atendimento | Arquivar/apagar |

### 10.3 Regras de ouro da LGPD na operação

1. **Coletar o mínimo:** nome, WhatsApp, cidade/bairro, tipo de panela e problema. Não pedir CPF,
   RG, endereço completo ou e-mail sem necessidade.
2. **Planilha com acesso restrito:** só o dono (e, se houver, o parceiro de confiança) — 2FA na
   conta Google, sem link público.
3. **Nada de dado de cliente em grupo de WhatsApp, story ou print público.**
4. **Opt-out fácil:** "Se não quiser mais receber, me avisa que eu tiro seu contato da lista."
5. **Vazamento/incidente:** se a planilha ou o número vazar, avisar os clientes afetados e a ANPD.
6. **Formulário do site:** incluir uma linha de aviso de privacidade. *(Isso é do responsável pelo
   site — anotado em §14 como pendência.)*
7. **Não comprar lista de WhatsApp.** Além de ilegal, é ban na hora.

### 10.4 O que NÃO automatizar por causa de LGPD

- Enviar mensagem em massa de marketing sem consentimento registrado.
- Coletar dado sensível (saúde, religião, biometria) — não tem motivo no negócio.
- Compartilhar telefone de cliente com terceiro (fornecedor, Uber, etc.) sem necessidade.
- Print de conversa com nome/telefone visível em conteúdo público.
- Guardar foto de cliente sem autorização.

---

## 11. RISCOS E PLANO B

| Risco | Probabilidade | Impacto | Plano B |
|---|---|---|---|
| **Ban do WhatsApp** por uso de API não oficial no número principal | Média, se usar Evolution no principal | **Altíssimo** (perde o canal de venda) | Nunca usar no principal. Usar Telegram para notificar o dono; WhatsApp API só em número secundário |
| Passar de 100 submissões/mês na Netlify | Baixa/média | Médio | Migrar o POST para Web App do Apps Script |
| Automação cair e ninguém perceber | Média | Médio | Aviso de falha do n8n por e-mail + checagem semanal; planilha mantém o histórico |
| Planilha bagunçada (status não atualizado) | **Alta** | Alto (relatório e follow-up erram) | Regra: atualizar status ao fim de cada atendimento; relatório mostra "linhas sem status" |
| Cliente reclamar de mensagem automática | Média | Médio | Mensagem automática só acolhe e pede foto; tom humano; opt-out |
| Migrar e-mails/credenciais erradas | Média | Baixo | Testar com 3 envios reais antes de considerar pronto |
| Limite do plano gratuito do Make (2 cenários) | Média | Baixo | Consolidar tudo em 2 cenários ou migrar para Apps Script |
| Perder o acervo de fotos | Média | Alto (marketing) | Backup 2 cópias + pasta `producao/01-entrada/` |

---

## 12. MÉTRICAS — O QUE MEDIR (e a meta realista de começo)

| Métrica | Fórmula | Meta inicial |
|---|---|---|
| Tempo de primeira resposta | média (1ª mensagem do dono − mensagem do cliente) | ≤ 30 min (horário comercial) |
| Taxa de resposta ao orçamento | orçamentos respondidos ÷ orçamentos enviados | acompanhar (sem meta inventada) |
| **Taxa de fechamento** | aprovados ÷ orçamentos enviados | acompanhar |
| Taxa de retorno do follow-up | clientes que voltaram a responder ÷ follow-ups enviados | ≥ 15% |
| Taxa de avaliação | avaliações novas ÷ panelas entregues | ≥ 30% |
| Nota no Google | média das avaliações | manter **5,0** |
| Leads por origem | contagem por `origem` | saber qual canal paga a conta |
| Cumprimento do calendário | posts publicados ÷ posts planejados | ≥ 90% |
| Tempo de resposta a avaliação | horas entre avaliação e resposta | < 24h |

> **Não inventar número de clientes atendidos.** A ficha proíbe ("mais de 500 clientes" não é
> medido). Contar panelas entregues na planilha **é** permitido — mas só publicar depois de
> ter o número real e o dono aprovar.

---

## 13. CHECKLIST DE IMPLANTAÇÃO (na ordem, sem pular)

### Dia 1 — base (2h)
- [ ] Criar a planilha CRM com as 3 abas e os cabeçalhos do §7
- [ ] Preencher 3 leads de teste (nomes fictícios) e apagar depois
- [ ] Ativar **mensagem de saudação** e **mensagem de ausência** no WhatsApp Business
- [ ] Criar as 8 **respostas rápidas** com os templates `/t1`…`/t8`
- [ ] Ligar notificações de avaliação no app do Google Meu Negócio

### Semana 1 — P0 (3–4h)
- [ ] Testar o formulário do site de verdade (com e sem fotos)
- [ ] Configurar webhook da Netlify → automação
- [ ] Configurar bot do Telegram + chat_id
- [ ] Rodar 3 envios de teste e conferir linha na planilha + alerta no celular
- [ ] Criar o job diário 9h de follow-up 24h/72h (texto pronto no Telegram)
- [ ] Criar o job diário 9h de pós-serviço/avaliação
- [ ] Criar o lembrete de avaliação no Google (ter/sex 9h)

### Semana 2 — publicação e rotina (2–3h)
- [ ] Conectar Instagram ao Meta Business Suite
- [ ] Agendar a primeira semana de posts (usar `D-calendario-editorial.md`)
- [ ] Criar lembrete semanal de post no GMB (segunda 8h)
- [ ] Criar relatório semanal (domingo 18h)
- [ ] Configurar backup automático das fotos no Google Photos/Drive

### Mês 1 — consolidar
- [ ] Rodar 2 relatórios semanais e comparar com a memória do dono
- [ ] Ajustar textos: medir qual template de follow-up responde mais
- [ ] Revisar LGPD: aviso no formulário, opt-out, retenção
- [ ] Decidir se migra para Make/n8n pago (só se o volume justificar)

### Mês 2–3 — P2
- [ ] Ativar reativação 90/180 dias
- [ ] Separar a aba `b2b` e criar o lembrete de manutenção programada
- [ ] Criar a rotina de coleta de prova social (foto/vídeo com autorização)

---

## 14. DADOS FALTANTES E INCONSISTÊNCIAS PERCEBIDAS

| # | Item | Por que importa | Ação |
|---|---|---|---|
| 1 | **Quantos leads/mês chegam hoje** (site, WhatsApp, IG, GMB) | Define se o plano grátis basta | Medir 30 dias antes de decidir ferramenta paga |
| 2 | **Formulário de empresa (`formEmpresa`) não tem `name`/`data-netlify`** | Ele **não cai** na Netlify Forms; só abre WhatsApp. O webhook não vai receber B2B | Decidir: (a) adicionar Netlify Forms nele, ou (b) assumir que B2B entra só por WhatsApp |
| 3 | **Não há analytics no site** (GA4/Plausible) | Sem isso não se mede visita nem conversão do site | Responsável pelo site implementar; o relatório ganha a linha "visitas" |
| 4 | **Sem aviso de privacidade no formulário** | LGPD — base legal e transparência | Responsável pelo site adicionar 1 linha de aviso |
| 5 | **Número do WhatsApp principal é o canal de venda** | Impede uso de API não oficial nele | Se um dia precisar de automação de envio, usar número secundário |
| 6 | **Não existe número de panelas atendidas/mês** | Relatório e metas não têm base | Começar a contar na planilha agora |
| 7 | **Prazo e garantia oficiais não estão na ficha** | Nenhum template pode prometer | Dono definir e registrar na ficha antes de usar T19/T28 |
| 8 | **Não há nota fiscal?** (dúvida da ficha, §10) | Muda o fluxo B2B | Confirmar com o dono |
| 9 | **Link do Google para avaliação** | Usar o real: `https://share.google/4yfzvqiftgoAKwqah` | Confirmar se é o link curto definitivo do perfil |
| 10 | **Não existe pasta `producao/`** com as 6 subpastas do roster | Backup e fluxo de mídia dependem dela | Criar na primeira semana |

---

## 15. MANUTENÇÃO MENSAL (15 minutos, dia 1º)

- [ ] Conferir se os fluxos rodaram (n8n/Apps Script → histórico de execuções)
- [ ] Conferir se a planilha tem linhas sem status ou sem `data_entrega`
- [ ] Conferir uso: submissões Netlify, operações Make/n8n, espaço no Drive
- [ ] Conferir credenciais e tokens (Telegram, Google) — nada expirado
- [ ] Revisar os 3 templates de follow-up com melhor/pior resposta
- [ ] Baixar as fotos novas do site para o Drive
- [ ] Revisar LGPD: algum dado vencido para anonimizar?

---

## 16. AUTOVERIFICAÇÃO DESTE ARQUIVO

- [x] Fluxo completo: captura → CRM → atendimento → produção → agendamento/publicação → métricas
- [x] Comparativo Make × n8n × Zapier com limite grátis, custo/mês e quando vale
- [x] P0/P1/P2 com passo a passo, incluindo os 10 fluxos pedidos no briefing
- [x] Tabela "o que automatizar × o que manter humano"
- [x] Diagrama ASCII
- [x] LGPD com base legal, retenção e o que não automatizar
- [x] Backup de mídia e relatório semanal
- [x] Nenhum preço/prazo/garantia de serviço inventado
- [x] CTA sempre WhatsApp (31) 98739-6336 / `https://wa.me/5531987396336`
- [x] Segurança em panela de pressão tratada como decisão humana, sem orientação perigosa
- [x] Custo de ferramenta sinalizado como "referência, reconferir"
