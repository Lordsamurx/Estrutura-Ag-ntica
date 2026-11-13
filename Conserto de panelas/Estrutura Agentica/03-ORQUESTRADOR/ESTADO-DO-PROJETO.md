# ESTADO DO PROJETO — retrato em 25/10/2026

> Este arquivo responde: **o que já está pronto, o que falta e o que fazer agora.**
> Atualize-o a cada entrega relevante (o ORQUESTRADOR é o responsável).

---

## 1. RESUMO EXECUTIVO

| Item | Situação |
|---|---|
| Pacote estratégico (A–G) | ✅ **completo** e revisado (QA) |
| 5 prompts de sistema | ✅ prontos para copiar e colar |
| Banco de conteúdo inicial | ✅ 30 Reels · 20 carrosséis · 15 legendas · 10 posts GMB · 10 artigos + 1 modelo |
| Templates de WhatsApp/IG | ✅ 55 prontos |
| Automação | ✅ documentada + 2 workflows n8n validados |
| Site publicado | 🟡 funciona, mas com lacunas técnicas (ver §4) |
| Medição (GA4/Search Console) | ❌ ainda não instalada |
| Google Meu Negócio | 🟡 nota alta, sem rotina de posts/fotos |
| Dados do dono | 🟡 14 itens pendentes (ver §5) |
| Execução de conteúdo | ❌ ainda não começou (nenhum post publicado com esta estrutura) |

**Estágio:** o "manual" está pronto; a operação começa no primeiro pacote semanal aprovado.
Nada foi publicado e nada foi enviado a cliente — o projeto é 100% documental até aqui.

---

## 2. O QUE ENTREGOU CADA SEÇÃO

| Seção | Conteúdo | Arquivo |
|---|---|---|
| A | Análise: 20 lacunas (7 P0), funil com vazamentos, quick wins, 10 riscos, scorecard 1,8/5 | `A-analise-estagio-atual.md` |
| B | 5 prompts auto-suficientes (12 seções cada, contexto embutido, exemplos, KPIs) | `B-prompts/` |
| C | Mapa de comunicação, envelope de handoff, 4 fluxos completos, ritual semanal | `C-fluxos-trabalho.md` |
| D | Calendário semanal IG, mensal GMB, trimestral SEO, 24 datas sazonais 2026–2027, cadência canônica | `D-calendario-editorial.md` |
| E | Banco de conteúdo (5 arquivos) | `E-banco-conteudo/` |
| F | Plano 30/60/90, ferramentas (R$ 0 no 1º mês), checklist D1–D14, KPIs, riscos | `F-plano-implementacao.md` |
| G | Automação P0/P1/P2, LGPD, 55 templates, 2 workflows n8n | `G-automacao.md`, `G-templates-mensagens.md`, `n8n-workflows.json` |

---

## 3. VALIDAÇÕES JÁ FEITAS

- Codificação: 100% UTF-8 sem BOM, LF, sem mojibake.
- JSON do n8n: válido (`Count = 2`, 21 nós, conexões e IDs conferidos).
- Contagens: 30 Reels · 20 carrosséis · 15 legendas · 10 posts GMB · 10 pautas · 55 templates · 5 prompts.
- Fatos canônicos: telefone, endereço, 16 cidades, horário, nota 5,0/31 avaliações batendo entre arquivos.
- Preços: nenhum preço de serviço inventado (R$ só em custo de ferramenta e em exemplos ruins recusados).
- CTA: todo conteúdo aponta para o WhatsApp (31) 98739-6336 com `wa.me` e `?text=`.
- Consistência de cadência: unificada (IG 5/semana com rampa de 3; GMB 1/semana; blog 1 a cada 10 dias; SLA 30 min; avaliação D+1).
- Referências internas: nomes de arquivo citados existem no pacote.

---

## 4. LACUNAS TÉCNICAS DO SITE (ordem de prioridade)

| # | Pendência | Evidência | Ação |
|---|---|---|---|
| 1 | `robots.txt` | 404 no site publicado | publicar (bloco pronto no prompt BÚSSOLA) |
| 2 | `sitemap.xml` | inexistente | publicar e enviar no Search Console |
| 3 | GA4 + Search Console | nenhuma tag/verificação | instalar e criar eventos de clique no WhatsApp |
| 4 | Atribuição de canal | links `wa.me` sem `?text=` diferenciado | padronizar por origem (site/IG/Google) |
| 5 | Google Meu Negócio | sem rotina de posts/fotos/Q&A | completar e publicar 1 post/semana |
| 6 | Formulário B2B | `#formEmpresa` não tem `name`/`method`/`data-netlify` | decidir: persistir lead ou manter só WhatsApp |
| 7 | Schema | `areaServed` com 10 de 16 cidades; sem `FAQPage`/`Service`/`og:url`/`twitter:card` | patch on-page |
| 8 | Título/meta | `title` 77 caracteres, description 172 | encurtar (≤60 / ≤155) |
| 9 | Domínio | `netlify.app` | registrar domínio próprio |
| 10 | Páginas internas | site de uma página só | páginas locais + blog (Fase 2/3) |

---

## 5. DADOS QUE SÓ O DONO TEM (14 itens — bloqueiam conteúdo)

| # | Dado | Usado em | Até confirmar |
|---|---|---|---|
| 1 | Prazo médio de serviço | conteúdo, atendimento | "confirmamos no orçamento" |
| 2 | Tempo de garantia | prova social, objeções | "garantia no serviço" (sem prazo) |
| 3 | Formas de pagamento | fechamento | "combinamos no orçamento" |
| 4 | Emissão de NF (B2B) | proposta restaurante | não afirmar |
| 5 | Quem paga o Uber | templates de coleta | "combinamos a logística" |
| 6 | GMB verificado? Acesso? | posts, avaliações | tratar como pendência |
| 7 | Autorização de imagens | posts com cliente | usar sem rosto/identificação |
| 8 | Leads/mês atuais | metas de KPI | medir após GA4/CRM |
| 9 | Verba de ferramentas | plano | começar com R$ 0 |
| 10 | Marcas de panela aceitas | catálogo | "todas as marcas" só se confirmado |
| 11 | Atende fora da oficina? | promessa de atendimento | "oficina ou coleta por Uber" |
| 12 | Link curto das avaliações | pedido de avaliação | usar o link atual |
| 13 | Estoque de vídeo | os 30 Reels dependem de gravar | priorizar foto/carrossel/story |
| 14 | Nº atual de avaliações | todos os textos citam 31 | conferir no perfil antes de publicar |

> Tabela oficial e detalhada: `02-ESTRUTURA-AGENTICA/00-contexto/ficha-negocio.md` §10.

---

## 6. PRÓXIMOS PASSOS (ordem prática)

### Próximos 7 dias
1. Confirmar os dados 1–6 e 13 com o dono (10 min de conversa).
2. Publicar `robots.txt` + `sitemap.xml`; verificar Search Console e GA4.
3. Completar o Google Meu Negócio (serviços, fotos, área) e publicar 1 post.
4. Rodar o primeiro pacote semanal (5 peças + stories) e aprovar.
5. Ativar o template de pedido de avaliação (D+1) em toda entrega.

### Próximos 30 dias
- Seguir o cronograma do `F-plano-implementacao.md` (D1–D30).
- Publicar 3 artigos de fundação e as 5 primeiras páginas locais.
- Medir linha de base: visitas, cliques no WhatsApp, orçamentos, fechamentos, avaliações.
- Instalar o P0 de automação (Netlify Forms → Sheets + notificação).

### Próximos 90 dias
- Fee de 20 posts/mês de Instagram + 4–5 posts/mês GMB + ~9 artigos.
- 12+ avaliações novas; nota mantida em 5,0 (piso 4,8).
- Playbook B2B: proposta + 10 contatos + 2 propostas enviadas.
- Revisar cadência com dados reais e ajustar metas.

---

## 7. RISCOS ATIVOS

| Risco | Mitigação já prevista |
|---|---|
| Dono sem tempo (conserta + atende) | pacote semanal, buffer de 1 semana, 2h/semana, banco de conteúdo pronto |
| Ficar sem vídeo para Reels | rotina de gravar 1 vídeo/serviço; calendário alterna carrossel/foto/story |
| Promessa indevida de preço/prazo | regras duras nos prompts + templates sem número |
| Acidente com panela de pressão | parecer obrigatório da OFICINA + teste de vedação + linguagem responsável |
| Avaliação negativa | protocolo de resposta em 24h + escalonamento ao dono |
| Perder controle do que foi publicado | `producao/05-publicado/` + planilha de KPIs |

---

## 8. MARCO DE CONTROLE

| Data | Marco |
|---|---|
| 22/10/2026 | Pacote criado (sessão DSH, 5 agentes, QA e consolidação) |
| 25/10/2026 | Projeto organizado como pasta autônoma + transcript + orquestrador |
| **A definir** | **Primeiro pacote semanal aprovado e publicado** ← próximo marco |
