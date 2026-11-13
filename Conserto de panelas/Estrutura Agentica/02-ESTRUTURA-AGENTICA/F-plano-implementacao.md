# PLANO DE IMPLEMENTAÇÃO 30 / 60 / 90 DIAS

> Como colocar os 5 agentes (MAESTRO, BÚSSOLA, VITRINE, LENTE, OFICINA) em operação na
> rotina de **uma pessoa só** — o dono, que conserta panela o dia inteiro.
> Responsável pela execução: **MAESTRO** · Revisão e aprovação: **DONO**
> Fontes: `00-contexto/ficha-negocio.md`, `00-contexto/guia-marca-e-tom.md`, `00-contexto/roster-e-handoff.md`
> Versão: 1.0 · 2026-10-22

---

## 0. RESUMO EXECUTIVO (leia só isto se tiver 2 minutos)

| Pergunta | Resposta curta |
|---|---|
| **Objetivo dos 90 dias** | Transformar o perfil no Google + WhatsApp + Instagram em uma máquina previsível de orçamento por foto, com blog começando a aparecer na busca |
| **Tempo do dono** | **~2h por semana** no ritual fixo + ~10 min/dia respondendo WhatsApp (que ele já faz) |
| **Custo nos primeiros 30 dias** | **R$ 0** — tudo em ferramenta gratuita |
| **Custo no cenário completo (90 dias)** | **R$ 0 a ~R$ 120/mês** em ferramentas (nenhum anúncio pago antes do dia 90) |
| **O que NÃO fazer agora** | Anúncio pago, ferramenta de agendamento caro, site novo, contratar social media |
| **Ordem das prioridades** | 1º medir e reivindicar o Google · 2º WhatsApp e avaliação · 3º posts no Google + base técnica do site · 4º Instagram com cadência · 5º blog long-tail · 6º B2B restaurantes |
| **Como saber se funcionou** | KPIs da seção 8: orçamentos/semana, taxa de fechamento, avaliações novas, cliques orgânicos e visitas — todos com fórmula e meta numérica |

**Regra-mãe do plano:** todo output de agente chega **pronto para publicar** (texto final, foto,
legenda, horário). O dono só aprova e publica. Se um agente entregar rascunho, a tarefa volta.

---

## 1. POR QUE ESSA ORDEM (justificativa da prioridade)

A tentação é começar pelo Instagram ou pelo blog, porque é o que aparece. Mas o dinheiro
rápido está em outro lugar. A ordem abaixo é por **retorno x esforço**, considerando uma
pessoa só:

| # | Prioridade | Por que vem primeiro | Esforço | Retorno esperado |
|---|---|---|---|---|
| 1 | **Medição + Perfil no Google** (Search Console, GA4, reivindicar/verificar o perfil, fotos, serviços, horários) | Sem medir, não dá para saber se o resto funciona. O perfil no Google é **grátis** e é o canal com maior intenção local: quem busca "conserto de panela perto de mim" quer resolver agora | 3–4h uma vez | Alto e imediato |
| 2 | **WhatsApp + prova social** (link `wa.me` com mensagem pronta, respostas padrão, pedir avaliação a cada entrega) | É onde o orçamento vira serviço. A oficina já tem **5,0 com 31 avaliações**: cada entrega é uma chance de aumentar a prova sem gastar nada | 1h + 2 min por entrega | Alto e imediato |
| 3 | **Posts no Google + base técnica do site** (robots.txt, sitemap.xml, FAQ no site) | O perfil postando aparece para quem está perto; a base técnica deixa o Google entender o site (hoje falta `robots.txt` e `sitemap.xml`) | 2–3h + 15 min/mês | Médio, cresce |
| 4 | **Instagram com cadência mínima** (rampa de 3 posts/semana no 1º mês; 5 posts/semana a partir do 2º, saindo do material bruto) | Alcance e confiança. Não precisa ser diário; precisa ser constante e mostrar antes/depois | 45 min/semana | Médio |
| 5 | **Blog / artigos long-tail** (10 pautas prontas em `E-banco-conteudo/05-artigos-seo.md`) | Retorno lento (3–6 meses) e não converte no mesmo dia. Só vale depois que medição e Google estão no ar | 1–2h por artigo | Alto a partir do 3º mês |
| 6 | **B2B restaurantes** (proposta, manutenção programada, coleta por Uber) | Maior ticket e receita recorrente, mas é venda relacional: precisa de prova social, material e tempo de conversa | 2h de preparo + visitas | Alto e recorrente |

**O que fica de fora dos primeiros 90 dias (decisão consciente):**
anúncio pago, site novo, e-mail marketing, TikTok, tráfego pago para blog, contratação de
terceiros. Tudo isso só depois que o básico estiver medido e rodando.

---

## 2. FERRAMENTAS E CUSTO REAL (R$/mês)

> ⚠️ **Valores de referência (2026) para orçamento, não são preço fechado.** Ferramenta muda
> preço e plano com frequência — **verificar valor atual** no site oficial antes de assinar.
> Valores em dólar convertidos com câmbio de referência **US$ 1 ≈ R$ 5–6**; conferir a cotação
> do dia. Nada aqui inclui imposto ou IOF de cartão.

### 2.1 Essencial (começa com R$ 0)

| Ferramenta | Para que serve | Plano gratuito | Pago (faixa R$/mês) | Fonte |
|---|---|---|---|---|
| **Google Business Profile** (Meu Negócio) | Perfil no Maps: posts, fotos, avaliações, horário, serviços | Completo | Sem versão paga | google.com/business |
| **Google Search Console** | Ver buscas, cliques, impressões, indexação, erros do site | Completo | Não tem | search.google.com/search-console |
| **Google Analytics 4 (GA4)** | Visitas, origem do tráfego, conversão do formulário | Completo | Não tem | analytics.google.com |
| **WhatsApp Business** (app) | Mensagem pronta, etiquetas, catálogo, respostas rápidas | Completo | API oficial é paga (não indicada agora) | business.whatsapp.com |
| **Canva Free** | Capas, antes/depois, artes de post | Sim | **Canva Pro: ~R$ 40–60/mês** (plano anual) | canva.com/pt_br/precos |
| **CapCut Free** | Cortar e legendar Reels no celular | Sim | **Pro: ~R$ 30–50/mês** | capcut.com |
| **Google Sheets / Notion / Trello (free)** | Calendário editorial, painel de KPIs, checklist | Sim | Notion Plus ~R$ 50–60/mês (não necessário) | — |
| **Netlify** (site atual) | Hospedagem do site estático | Sim (free tier) | Só se precisar de recurso extra | netlify.com/pricing |
| **Meta Business Suite** | Agendar post no Instagram e responder DM/comentário | Completo | Não tem | business.facebook.com |

### 2.2 Opcional (só quando o gargalo justificar)

| Ferramenta | Para que serve | Gratuito | Pago (faixa R$/mês) | Quando faz sentido |
|---|---|---|---|---|
| **Google One / Drive** | Backup de fotos e vídeos da oficina | 15 GB grátis | **100 GB: ~R$ 10–15/mês** | quando o celular encher de vídeo |
| **Metricool** | Agendar Instagram + relatório de métricas em um lugar | Plano free (limitado) | **~R$ 100–200/mês** | se agendar manualmente passar de 40 min/semana |
| **Buffer** | Agendamento simples | 3 canais grátis | **~R$ 30–60/mês por canal** | alternativa mais barata ao Metricool |
| **Later** | Agendamento visual de feed | Limitado | **~R$ 90–150/mês** | se o planejamento visual for o gargalo |
| **Make** | Automação (ex.: formulário → planilha → aviso no WhatsApp) | 1.000 operações/mês | **~R$ 50–70/mês** (Core) | depois de 90 dias, se houver tarefa repetitiva clara |
| **n8n** | Automação self-host | Grátis (auto-hospedado) | Servidor ~R$ 20–50/mês; Cloud em dólar | só se houver quem mantenha; **não recomendado agora** |
| **Zapier** | Automação sem código | 100 tarefas/mês | **~R$ 100–160/mês** | raramente vale para 1 pessoa; é o mais caro |
| **Ubersuggest** | Ideias de palavra-chave e volume | 3 buscas/dia | **~R$ 60–120/mês** | grátis resolve: GSC + "as pessoas também perguntam" |
| **Domínio próprio** (ex.: consertodepanelasbh.com.br) | Sai do endereço `netlify.app` | — | **~R$ 40–60/ano** (≈ R$ 4–5/mês) | quando quiser marca própria e e-mail |
| **Remove.bg / Lightroom Mobile** | Recorte e cor de foto | Limitado | ~R$ 30–60/mês | não é prioridade; foto real vende mais |

### 2.3 Cenário de custo por fase

| Fase | Ferramentas | Custo mensal |
|---|---|---|
| **Dias 1–30** | Google Business, GSC, GA4, WhatsApp Business, Canva Free, CapCut Free, Sheets | **R$ 0** |
| **Dias 31–60** | + Google One 100 GB (backup) | **R$ 0 a ~R$ 15/mês** |
| **Dias 61–90** | + Canva Pro (se capa travar) + 1 agendador (só se medir gargalo) | **R$ 0 a ~R$ 120/mês** |
| **Teto de segurança** | — | **não passar de R$ 120/mês nos primeiros 90 dias** |

**Regra de investimento:** só pagar ferramenta quando o gargalo estiver **medido** (ex.:
"gasto 50 min/semana agendando post"). Anúncio pago, só depois do dia 90 e com decisão do dono.

---

## 3. FASE 1 — DIAS 1 A 30: FUNDAÇÃO E MEDIÇÃO

**Meta da fase:** perfil no Google completo, site medido, WhatsApp afiado, 4 posts no Google,
3 artigos no ar e base de KPIs preenchida (mês 1 vira a linha de base).

### Semana 1 (D1–D7) — arrumar a casa
| Dia | Tarefa | Tempo | Quem | Entregável |
|---|---|---|---|---|
| D1 | Criar as pastas `producao/01-entrada` até `06-arquivo`; escolher 12 fotos boas do material bruto; criar a planilha de KPIs | 60 min | Dono + MAESTRO | Estrutura + planilha |
| D2 | Reivindicar/verificar o perfil no Google; preencher horário, endereço, telefone, área de 16 cidades, serviços e fotos | 60 min | Dono + BÚSSOLA | Perfil 100% |
| D3 | Instalar GA4 no site e verificar o site no Search Console; publicar `robots.txt` e `sitemap.xml` | 90 min | BÚSSOLA + quem mexe no site | Medição ativa |
| D4 | Testar o link `wa.me/5531987396336?text=...` em todos os pontos (site, bio, GMB); testar o formulário do site no celular | 30 min | Dono | Links funcionando |
| D5 | Criar 3 respostas rápidas e etiquetas no WhatsApp Business ("orçamento", "aguardando foto", "entregue") | 45 min | Dono | Atendimento padronizado |
| D6 | Montar 6 capas 4:5 no Canva com as fotos reais (antes/depois, pressão, inox) e salvar em JPG | 60 min | LENTE + Dono | 6 capas prontas |
| D7 | Fechar a semana: preencher a planilha de KPIs (números de partida), corrigir o que não deu certo | 30 min | MAESTRO + Dono | Linha de base |

### Semana 2 (D8–D14) — primeira publicação
| Dia | Tarefa | Tempo | Quem | Entregável |
|---|---|---|---|---|
| D8 | Publicar **P1 e P9** do banco do Google (`04-google-meu-negocio.md`); responder todas as avaliações pendentes | 30 min | Dono | 2 posts + avaliações respondidas |
| D9 | Publicar o **ART-01** no blog (modelo pronto) e pedir indexação no Search Console | 90 min | BÚSSOLA + Dono | 1º artigo no ar |
| D10 | Aprovar o calendário do Instagram da semana 1; gravar 2 vídeos de 20–30s do serviço real | 45 min | VITRINE + LENTE + Dono | 3 posts agendados |
| D11 | Pedir avaliação no Google a **todos os clientes entregues na semana** (mensagem curta pronta + link do perfil) | 20 min | Dono | 1–2 avaliações novas |
| D12 | Montar lista de 20 restaurantes/bares/padarias do Belmonte, Venda Nova e Contagem para o B2B | 45 min | MAESTRO + Dono | Lista B2B |
| D13 | Conferir buffer de conteúdo (1 semana pronta) e ajustar o que faltou | 30 min | MAESTRO | Buffer abastecido |
| D14 | Revisar KPIs da semana e responder DMs/comentários atrasados | 30 min | Dono + VITRINE | Painel atualizado |

### Semanas 3 e 4 (D15–D30) — cadência
| Semana | O que entra | Meta da semana |
|---|---|---|
| **Semana 3 (D15–D21)** | ART-02 no ar · 1 post no Google · 3 posts no Instagram · 2 reels · 4ª entrega com pedido de avaliação | **1 artigo + 1 post GMB + 3 posts IG + 2 avaliações novas** |
| **Semana 4 (D22–D30)** | ART-03 no ar · 1 post no Google · 3 posts no IG · relatório do mês 1 · decisão de ferramenta | **1 artigo + 1 post GMB + 3 posts IG + 2 avaliações novas + relatório de 1 página** |

**Entregáveis do dia 30:**
- Perfil no Google 100% (fotos, serviços, horários, área) e **4 posts publicados**.
- **3 artigos** no ar, indexados ou com indexação solicitada.
- **~10–12 posts** no Instagram no mês 1 (rampa de 3/semana; a partir do mês 2, 5/semana = 20/mês).
- **4+ avaliações novas** (de 31 para 35+), nota mantida em 5,0.
- Painel de KPIs com **o mês 1 como linha de base** (sem base não existe meta).
- Decisão registrada: mantém R$ 0 ou assina 1 ferramenta até R$ 60.

---

## 4. FASE 2 — DIAS 31 A 60: CADÊNCIA E CONVERSÃO

**Meta da fase:** aumentar o volume de orçamentos em **+30% sobre o mês 1** e fazer o
atendimento converter mais (responder rápido, pedir avaliação sempre, fechar mais).

| Semana | Foco | Tarefas | Meta numérica |
|---|---|---|---|
| **Semana 5 (D31–D37)** | Conversão no WhatsApp | Revisar as 3 respostas rápidas com o que mais perguntam; criar resposta padrão de "quanto custa" (sem preço, pedindo foto); ART-04 no ar; 3 posts IG | Taxa de resposta em até 30 min úteis ≥ 90% |
| **Semana 6 (D38–D44)** | Prova social | Campanha de avaliação: pedir a **todos** os clientes dos últimos 60 dias; responder e agradecer cada avaliação; 1 post GMB; ART-05 no ar | **+4 avaliações novas** no mês |
| **Semana 7 (D45–D51)** | B2B começa | Montar a proposta de 1 página (manutenção programada + coleta por Uber, **sem preço fechado**: "condição combinada caso a caso"); enviar para 10 da lista; ART-06 no ar; 3 posts IG | **10 contatos B2B feitos, 2 propostas enviadas** |
| **Semana 8 (D52–D60)** | Fechamento do mês 2 | ART-07 no ar; 1 post GMB; relatório comparando mês 2 x mês 1; decidir ferramenta paga (só se gargalo medido) | **+30% em orçamentos recebidos** |

**Entregáveis do dia 60:**
- **6 artigos** publicados no total; **8 posts no Google**; **20+ posts no Instagram**.
- **8+ avaliações novas** (de 31 para 39+), nota 5,0 mantida (piso de alerta 4,8).
- Proposta B2B padrão pronta e **10 contatos** feitos.
- Relatório de 1 página com 3 decisões: o que repetir, o que cortar, o que testar.
- Buffer de **1 semana** de conteúdo sempre pronto (regra do roster).

---

## 5. FASE 3 — DIAS 61 A 90: ESCALA E PROVA

**Meta da fase:** provar que o sistema funciona sem o dono virar social media — e escolher
**uma** alavanca para o próximo trimestre (B2B, blog ou Instagram).

| Semana | Foco | Tarefas | Meta numérica |
|---|---|---|---|
| **Semanas 9–10 (D61–D74)** | Conteúdo que performou | Identificar os 3 posts/artigos com melhor resultado e **repetir o formato** com tema novo; ART-08 e ART-09 no ar; 2 posts GMB; 3 posts IG/semana | Top 3 conteúdos replicados |
| **Semana 11 (D75–D81)** | Fechar B2B | Follow-up nos 10 contatos B2B; levar proposta revisada; publicar ART-10 (local + coleta por Uber); responder todas as avaliações | **1 contrato ou 1 proposta aceita** (ou 5 follow-ups registrados) |
| **Semanas 12–13 (D82–D90)** | Balanço e plano do próximo trimestre | Relatório dos 90 dias com todos os KPIs; decidir a alavanca do trimestre; revisar o banco de conteúdo (o que ficou velho); planejar anúncio pago **se** fizer sentido | Plano do trimestre aprovado pelo dono |

**Entregáveis do dia 90:**
- **10 artigos** no ar, **12+ posts no Google**, **30+ posts no Instagram**.
- **12+ avaliações novas** (de 31 para 43+), nota mantida em 5,0.
- **1 contrato B2B** fechado ou pipeline com 5 conversas ativas.
- Relatório de 90 dias com decisão de investimento (R$ 0, R$ 60 ou R$ 120/mês).
- Rotina do dono estabilizada em **~2h/semana**.

---

## 6. CHECKLIST DE LANÇAMENTO — DIA A DIA (D1 a D14)

Imprimir e riscar. Cada item tem **critério de pronto** — não vale "mais ou menos".

| # | Dia | Tarefa | Tempo | Critério de pronto |
|---|---|---|---|---|
| 1 | D1 | Estrutura de pastas + planilha de KPIs | 60 min | 6 pastas criadas e planilha com as 12 linhas de KPI |
| 2 | D1 | Separar 12 fotos boas do material bruto | 20 min | 12 arquivos renomeados e copiados para `01-entrada` |
| 3 | D2 | Verificar/reivindicar perfil no Google | 60 min | Perfil com "verificado" e telefone correto |
| 4 | D2 | Preencher serviços, horários e as 16 cidades | 30 min | Perfil com serviços e área salvos |
| 5 | D3 | GA4 instalado + Search Console verificado | 60 min | `page_view` aparecendo no GA4 em tempo real |
| 6 | D3 | `robots.txt` e `sitemap.xml` publicados | 30 min | Abrir as duas URLs no navegador e ver o conteúdo |
| 7 | D4 | Testar `wa.me` em site, bio e GMB | 20 min | Abre o WhatsApp com texto pré-preenchido no celular |
| 8 | D4 | Testar formulário do site (orçamento e empresa) | 20 min | Chegou notificação no e-mail/Painel do Netlify |
| 9 | D5 | 3 respostas rápidas + etiquetas no WhatsApp Business | 45 min | Mensagens salvas e etiquetas criadas |
| 10 | D6 | 6 capas no Canva (4:5, JPG) | 60 min | 6 arquivos salvos em `producao/02-em-producao` |
| 11 | D7 | Linha de base dos KPIs (mês 0) | 30 min | Planilha preenchida com números reais de hoje |
| 12 | D8 | Publicar P1 e P9 no Google | 30 min | 2 posts visíveis no perfil |
| 13 | D8 | Responder todas as avaliações pendentes | 30 min | Zero avaliação sem resposta |
| 14 | D9 | Publicar ART-01 + pedir indexação | 90 min | URL no ar e "indexação solicitada" no GSC |
| 15 | D10 | 3 posts de Instagram agendados | 45 min | Posts no calendário do Meta Business Suite |
| 16 | D11 | Pedir avaliação para clientes entregues | 20 min | Mensagem enviada para todos os atendidos da semana |
| 17 | D12 | Lista de 20 restaurantes/bares/padarias | 45 min | Planilha com nome, bairro e contato |
| 18 | D13 | Buffer de 1 semana de conteúdo | 30 min | Conteúdo da semana seguinte aprovado |
| 19 | D14 | Revisão dos KPIs e ajustes | 30 min | Painel atualizado e 1 ajuste definido |

**Tempo total do lançamento: ~9h em 14 dias (≈40 min/dia).** Se um dia atrasar, ele escorrega
para o dia seguinte — **nunca** se acumula mais de 2 dias.

---

## 7. COMO O DONO OPERA OS 5 AGENTES (sem virar gerente de ninguém)

| Agente | O que você manda para ele | O que ele te devolve | Quando |
|---|---|---|---|
| **MAESTRO** | Foto/vídeo do serviço, "essa semana quero X", dúvidas | Pacote semanal pronto para aprovar + relatório mensal | Sexta, 10 min de leitura |
| **BÚSSOLA** | Nada (ele puxa dos bancos) ou "quero aparecer em Contagem" | Posts do Google, artigo, meta tags, relatório de busca | Você só aprova |
| **VITRINE** | Aprovação do pacote + foto escolhida | Legenda final, hashtags, horário, resposta de DM/comentário | Segunda, ao aprovar |
| **LENTE** | 2–3 vídeos/fotos brutos da semana | Roteiro shot-by-shot, textos de tela, capas | Junto com o pacote |
| **OFICINA** | Foto de panela ou dúvida técnica | Diagnóstico, peças necessárias, parecer de segurança, roteiro educativo | Antes de publicar conteúdo técnico |

**Fluxo real:** o dono manda material bruto no WhatsApp do MAESTRO (ou na pasta
`producao/01-entrada`) → MAESTRO distribui → pacote chega pronto na sexta → dono aprova na
segunda (10 min) → publica ou agenda. **Nenhum agente fala direto com o dono sem o MAESTRO**, e
nenhum conteúdo de preço/prazo/garantia vai ao ar sem aprovação.

---

## 8. KPIs POR AGENTE (meta numérica, fórmula e como medir)

> **Regra de ouro da medição:** o **mês 1 é a linha de base**. Metas em % comparam com essa
> base. Onde não há base, a meta é absoluta e explícita. Medição sempre com ferramenta
> **gratuita** — não precisa comprar nada para começar.

### 8.1 KPIs do negócio (donos do resultado — acompanhar juntos)

| KPI | Fórmula | Meta (dia 90) | Ferramenta gratuita | Frequência |
|---|---|---|---|---|
| **Pedidos de orçamento** | nº de conversas novas que pedem valor no WhatsApp na semana | +30% vs mês 1 (e mínimo de 8/semana) | Contagem manual no WhatsApp Business (etiqueta "orçamento") + planilha | Semanal |
| **Taxa de fechamento** | serviços aprovados ÷ orçamentos enviados × 100 | ≥ 50% | Caderno/planilha do dono | Semanal |
| **Taxa de conversão do site** | pedidos de orçamento vindos do site ÷ visitas ao site × 100 | 2% a 4% até o dia 90 | GA4 (evento de clique no WhatsApp/formulário) | Mensal |
| **Visitas ao site** | sessões no GA4 (canal orgânico + direto + social) | +40% vs mês 1 | GA4 | Mensal |
| **Avaliações novas** | nº de avaliações no Google no mês | ≥ 4/mês (12+ em 90 dias) | Perfil no Google (contagem) | Semanal |
| **Nota no Google** | média das avaliações | Meta **5,0** (piso de alerta **4,8**; hoje 5,0 com 31) | Perfil no Google | Semanal |
| **Tempo de 1ª resposta** | média (em minutos) entre mensagem do cliente e 1ª resposta | ≤ 30 min no horário comercial (≥ 90% dos casos) | WhatsApp Business (hora da mensagem) | Diário |

### 8.2 KPI por agente

| Agente | KPI | Fórmula | Meta numérica | Como medir (grátis) |
|---|---|---|---|---|
| **MAESTRO** | Pacotes entregues no prazo | pacotes entregues até sexta 12h ÷ semanas do mês × 100 | **≥ 90%** | Planilha de calendário |
| **MAESTRO** | Aprovação sem retrabalho | peças aprovadas de primeira ÷ peças entregues × 100 | **≥ 80%** | Planilha (coluna "aprovado de 1ª?") |
| **BÚSSOLA** | Cliques orgânicos | cliques no Search Console (mês) | **+50% vs mês 1** | Search Console → Desempenho |
| **BÚSSOLA** | CTR orgânico | cliques ÷ impressões × 100 | **≥ 3%** | Search Console → Desempenho |
| **BÚSSOLA** | Posição média nas 5 palavras principais | média das posições das consultas-alvo | **≤ 15 até o dia 90** | Search Console (filtro por consulta) |
| **BÚSSOLA** | Posts no Google publicados | nº de posts no mês ÷ 4 previstos × 100 | **100% (4–5/mês)** | Perfil no Google |
| **BÚSSOLA** | Artigos indexados | artigos indexados ÷ publicados × 100 | **≥ 80% em 30 dias** | Search Console → Cobertura |
| **VITRINE** | Posts no Instagram | nº de posts no mês | **20/mês (5/semana) — rampa de 12 no 1º mês** | Meta Business Suite |
| **VITRINE** | Taxa de engajamento | (curtidas + comentários + salvamentos) ÷ alcance × 100 | **≥ 5%** | Instagram Insights (post a post) |
| **VITRINE** | DMs respondidas em 2h úteis | DMs respondidas no prazo ÷ DMs recebidas × 100 | **≥ 90%** | Contagem no Instagram Direct |
| **LENTE** | Peças de mídia entregues | reels/carrosséis/capas no mês | **≥ 8 peças/mês** | Pasta de produção |
| **LENTE** | Retenção nos 3 primeiros segundos | retenção em 3s ÷ visualizações × 100 | **≥ 70%** | Instagram Insights (reels) |
| **OFICINA** | Validações no prazo | validações em ≤ 4h úteis ÷ solicitações × 100 | **100%** | Planilha/handoffs |
| **OFICINA** | Conteúdo técnico sem parecer | peças técnicas publicadas sem validação | **0 (zero)** | Checklist editorial |
| **OFICINA** | Retorno por garantia | serviços com retorno ÷ serviços entregues × 100 | **≤ 5%** | Caderno/planilha do dono |
| **OFICINA** | Acerto do diagnóstico por foto | diagnósticos de foto confirmados na bancada ÷ avaliados × 100 | **≥ 80%** | Planilha (amostra mensal de 10 casos) |

### 8.3 KPI de B2B (a partir do dia 45)

| KPI | Fórmula | Meta (dia 90) | Como medir |
|---|---|---|---|
| Contatos B2B feitos | nº de estabelecimentos contatados no mês | **10/mês** | Planilha de prospecção |
| Propostas enviadas | propostas enviadas no mês | **4/mês** | Planilha |
| Contratos fechados | contratos ÷ propostas × 100 | **≥ 25%** (1 contrato até o dia 90) | Planilha |
| Receita recorrente | soma dos contratos mensais ativos | meta definida pelo dono (não inventar) | Planilha/financeiro |

### 8.4 Painel de KPIs (planilha Google Sheets) — colunas sugeridas

```
Semana | Visitas site (GA4) | Cliques orgânicos (GSC) | Impressões (GSC) | CTR (%) |
Orçamentos recebidos | Orçamentos enviados | Serviços aprovados | Taxa de fechamento (%) |
Avaliações novas | Nota Google | Seguidores IG | Alcance IG | Engajamento IG (%) |
Posts GMB | Artigos publicados | Tempo médio de resposta (min) | Observações
```

**Relatório mensal de 1 página (o MAESTRO entrega pronto):**
1. Números do mês (tabela acima) e comparação com o mês anterior.
2. O que funcionou (top 3 conteúdos + por quê).
3. O que não funcionou (o que cortar).
4. 3 decisões para o mês seguinte.
5. O que precisa de decisão do dono (preço/prazo/garantia/investimento).

---

## 9. RITUAL SEMANAL DO DONO (cabe na rotina de quem trabalha o dia inteiro)

**Meta: ~2h por semana + 10 min/dia de WhatsApp.** Nada de "postar todo dia".

| Quando | Tempo | O que fazer | Por que |
|---|---|---|---|
| **Todo dia (durante o expediente)** | 10 min | Responder WhatsApp com as respostas rápidas; pedir foto quando faltar | É o que fecha serviço |
| **Segunda, ao abrir** | 20 min | Ler o pacote da semana e **aprovar/ajustar**; responder avaliações novas no Google | Destrava a produção da semana |
| **Terça e quinta** | 10 min cada | Gravar 1 vídeo de 20–30s (polimento, antes/depois, peça) | Alimenta LENTE e VITRINE |
| **Quarta** | 15 min | Mandar pedido de avaliação para quem retirou panela; responder DMs | Prova social e atendimento |
| **Sexta, até 12h** | 25 min | Enviar o pacote da semana seguinte para aprovação (o dono aprova segunda 10h); conferir o buffer | Fecha a semana com 1 semana de folga |
| **Sábado (opcional)** | 10 min | 1 foto antes/depois da semana; salvar no material bruto | Nunca ficar sem foto |

**Total: ~1h50/semana (≈ 2h).**

**Regras de proteção do tempo:**
1. **Buffer obrigatório:** 1 semana de conteúdo pronto. Se a semana furar, publica o buffer.
2. **Teto de 3h/semana.** Se passar disso, corta o que tem menos retorno, nesta ordem:
   stories diários → carrossel → reel. Nunca corta: resposta de WhatsApp, pedido de avaliação,
   post do Google.
3. **O dono não cria texto, não edita vídeo, não pesquisa palavra-chave.** Quem faz isso são os
   agentes. O dono aprova e grava material bruto.
4. **Aprovação tem prazo:** segunda 10h. Sem aprovação, o pacote escorrega uma semana e o
   buffer entra no lugar.
5. **Um dia ruim não vira semana perdida:** o mínimo aceitável da semana é **1 post no Google
   + 1 post no Instagram + responder o WhatsApp**.

---

## 10. RISCOS E PLANO B

| # | Risco | Sinal de alerta | Plano B | Quem resolve |
|---|---|---|---|---|
| 1 | **Dono sem tempo** (semana cheia de serviço) | 2 semanas sem aprovar pacote | Publicar o buffer, reduzir para 1 post GMB + 1 post IG por semana e retomar depois | MAESTRO |
| 2 | **Falta de material bruto** | 3 dias seguidos sem foto nova | Usar as 31 fotos do material bruto + regra de 3 fotos por serviço; agendar sessão de 30 min a cada 15 dias | LENTE + Dono |
| 3 | **Perfil no Google não verificado ou suspenso** | Não consegue publicar, perfil some do Maps | Fazer a verificação por vídeo; manter site + Instagram + WhatsApp como canais; abrir reclamação no suporte do Google | Dono + BÚSSOLA |
| 4 | **Instagram com alcance caindo ou conta bloqueada** | Alcance cai >50% em 2 semanas | Google + site + WhatsApp são os canais primários; reaproveitar legendas no site e na bio | VITRINE |
| 5 | **Site/Netlify fora do ar ou formulário falhando** | Formulário sem notificação; site lento | WhatsApp como canal nº 1; testar formulário toda segunda; manter cópia do HTML localmente | BÚSSOLA |
| 6 | **Post reprovado pelo Google** | Post não aparece ou perfil avisa | Revisar texto (evitar promessa), republicar como Novidade, sem repetir o mesmo texto | BÚSSOLA |
| 7 | **Agente inventa preço, prazo ou garantia** | Qualquer número novo em texto | Checklist editorial obrigatório; MAESTRO revisa; conteúdo volta e vira regra no histórico de feedback | MAESTRO |
| 8 | **Ferramenta paga sem retorno** | Custo > 50% do teto sem ganho medido | Cancelar e voltar para o gratuito; decidir com base no KPI, não na empolgação | Dono + MAESTRO |
| 9 | **Concorrente mais barato** | Cliente sai por preço | Não competir por preço (proibido no guia de marca); reforçar prova social, garantia e coleta por Uber | Dono |
| 10 | **Dependência de uma pessoa** (doença, viagem) | Dono fora 1 semana | Mensagem automática no WhatsApp Business, buffer de conteúdo, parceiro de confiança para coleta | Dono |
| 11 | **Métrica não confiável** (GA4 bloqueado, sem UTM) | Número de visitas = 0 | Contagem manual por 30 dias (planilha) + mensagem pré-preenchida de origem no WhatsApp | BÚSSOLA |
| 12 | **Direito de imagem/reclamação** | Foto com rosto ou print de conversa | Remover na hora; só publicar com autorização; sem rosto e sem dado pessoal | Dono + VITRINE |
| 13 | **Custo de ferramenta subindo** | Fatura acima de R$ 120/mês | Teto rígido de R$ 120/mês nos primeiros 90 dias; revisar assinaturas trimestralmente | Dono |

---

## 11. O QUE AINDA DEPENDE DO DONO (não inventar)

| # | Dado/decisão | Onde impacta |
|---|---|---|
| 1 | Tempo de garantia e política (tem? quanto?) | Site, posts, artigos e resposta de WhatsApp |
| 2 | Tabela de referência de preço (interna, só para o dono) | nunca vai ao ar, mas ajuda o MAESTRO a não sugerir serviço inviável |
| 3 | Se aceita Pix/cartão/parcelado | resposta padrão do WhatsApp e ART-03 |
| 4 | Se emite nota fiscal para empresas | proposta B2B e ART-09 |
| 5 | Quanto tempo cada serviço leva (prazo real) | orçamento e promessa de entrega |
| 6 | Se a coleta por Uber tem custo para o cliente e como combina | ART-10 e post P10 |
| 7 | Acesso ao site (Netlify) e ao perfil no Google | sem isso a Fase 1 não começa |
| 8 | Autorização de uso das fotos (mãos/ambiente de cliente) | conteúdo e direitos de imagem |
| 9 | Verba máxima por mês para ferramentas | decisão de investimento do dia 60/90 |
| 10 | Nome e história do dono (para E-E-A-T) | artigos e seção "quem faz" |

---

## 12. RESUMO DE BOLSO — PRIMEIROS 7 DIAS

1. **D1:** pastas + planilha de KPIs + 12 fotos separadas.
2. **D2:** perfil no Google completo e verificado.
3. **D3:** GA4 + Search Console + `robots.txt` + `sitemap.xml`.
4. **D4:** testar `wa.me` e formulários no celular.
5. **D5:** respostas rápidas + etiquetas no WhatsApp Business.
6. **D6:** 6 capas prontas no Canva.
7. **D7:** números de partida na planilha (linha de base).

> **Se o dono só puder fazer uma coisa nos próximos 90 dias:** reivindicar e completar o perfil
> no Google, pedir avaliação em toda entrega e responder o WhatsApp em até 30 minutos.
> Isso, sozinho, já move a agulha. O resto é multiplicador.
