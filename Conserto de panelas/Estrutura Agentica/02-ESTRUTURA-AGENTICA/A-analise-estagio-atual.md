# A) ANÁLISE DO ESTÁGIO ATUAL

> Baseada na inspeção direta do workspace e do site publicado em 22/10/2026.
> Evidências: `site-novo/index.html`, `site-novo/style.css`, `site-novo/script.js`,
> `site-novo/img/`, `Fotos e Videos/Conserto de panelas/`, `panela-precisa-online-main/`
> (projeto React antigo) e o site em produção (HTTP 200; `robots.txt` → **404**).

---

## 1. DIAGNÓSTICO EM UMA FRASE

O negócio está **acima da média do mercado local em produto digital** (site bonito, rápido,
com diagnóstico interativo e prova social forte), mas está **travado no estágio "site bonito
sem máquina de aquisição"**: falta a camada de distribuição (Google/Instagram alimentados com
constância), falta medição (sem analytics) e falta processo (o dono conserta e atende ao mesmo
tempo, sem sistema de conteúdo nem de follow-up).

**Estágio de maturidade: 2 de 5.**
Ativo digital pronto para escalar, mas sem motor de aquisição, sem dados e sem rotina.

---

## 2. O QUE JÁ ESTÁ BEM FEITO

### 2.1 Produto digital (site)
| Item | Evidência | Por que importa |
|---|---|---|
| Proposta de valor clara em 3 segundos | H1 "Sua panela como nova" + subtítulo com foto/WhatsApp/Uber | Visitante entende o que é e o que fazer |
| CTA repetido em todos os pontos de decisão | 13+ CTAs de WhatsApp no HTML, botão flutuante e barra fixa mobile | Remove atrito de contato |
| Diagnóstico interativo | Seção `#diagnostico` com 8 chips que montam mensagem | Reduz o esforço do cliente e qualifica o lead |
| Prova social forte e visível | 5,0 / 31 avaliações no hero, na seção de números e na de avaliações | Principal ativo de conversão do negócio |
| Antes e depois interativo | Galeria com toggle e miniaturas | Prova visual do resultado — o argumento mais forte |
| Segmentação B2B | Seção `#empresas` com formulário próprio | Abre canal de receita recorrente (restaurantes) |
| Cobertura geográfica explícita | 16 cidades + bairro Belmonte | Sinal local forte e redução de dúvida |
| Formulário com upload de fotos | Netlify Forms + 3 fotos + honeypot; fotos vão para a Netlify e o resumo abre no WhatsApp | Captura qualificada com fallback duplo (formulário + conversa) |
| Formulário B2B separado | Seção `#empresas` com formulário próprio que monta mensagem de proposta | Abre canal de receita recorrente (restaurantes) — mas o lead **não** é persistido (ver lacuna 6) |
| Acessibilidade básica | `aria-label`, `aria-pressed`, `aria-live`, contraste bom, `alt` nas imagens | Qualidade acima da média de sites locais |
| Performance de mídia | Imagens `.webp`, `loading="lazy"`, fontes com `preconnect` | Bom caminho para Core Web Vitals |

### 2.2 SEO técnico já implementado
- `title` e `meta description` com foco local ("BH e Grande BH"), mas **longos demais**:
  o `title` tem 77 caracteres (corte a partir de ~60 no Google) e a description 172
  (limite recomendado 155) — ajuste simples para a BÚSSOLA.
- `canonical` correto para a URL publicada.
- **JSON-LD LocalBusiness** com endereço, telefone, horário, `areaServed` (10 cidades) e
  `aggregateRating` 5,0/31.
- Open Graph com imagem dedicada (`og.jpg`).
- Hierarquia de headings correta (um `h1`, `h2` por seção).
- URLs de seção com âncoras semânticas e menu de navegação.

### 2.3 Conteúdo e operação
- 31 fotos reais de trabalhos (jun–jul/2025) — matéria-prima para meses de conteúdo.
- Depoimentos reais transcritos (4) e link para o perfil no Google.
- Diferenciais operacionais difíceis de copiar: orçamento por foto, coleta/entrega por Uber,
  garantia, preço combinado antes, atendimento em 16 cidades.
- O dono **já produz vídeo** do processo — insumo raro para Reels. **Ressalva:** o estoque
  atual é quase todo de fotos; as 30 ideias de Reel da seção E dependem de gravar 1 vídeo
  por serviço (~1 min), senão o calendário precisa rodar com carrossel/foto/story no início.

---

## 3. O QUE ESTÁ FALTANDO (com evidência e prioridade)

### P0 — trava o crescimento hoje

| # | Lacuna | Evidência | Consequência |
|---|---|---|---|
| 1 | **Sem `robots.txt`** | `https://conserto-de-panelas-bh.netlify.app/robots.txt` → 404 | Nenhum controle de rastreamento; sitemap não declarado |
| 2 | **Sem `sitemap.xml`** | não existe em `site-novo/` | Google descobre páginas por acaso; sem sitemap não há envio no Search Console |
| 3 | **Sem Google Search Console e sem GA4** | nenhuma tag/verificação no HTML | Zero visibilidade de impressões, cliques, palavras-chave e conversão; impossível medir SEO |
| 4 | **Sem Google Meu Negócio sendo alimentado** | site e Instagram não têm rotina de posts GMB; ficha provavelmente incompleta | Perde o canal de maior intenção local ("conserto de panela perto de mim") |
| 5 | **Sem rastreamento de origem do lead** | todos os links `wa.me` sem `?text=` diferenciado por canal | Não se sabe se o cliente veio do Google, Instagram, site ou indicação |
| 6 | **Sem CRM/registro de orçamentos** | formulário `orcamento` envia e-mail pela Netlify (sem planilha/CRM); o formulário B2B (`#formEmpresa`) **só abre o WhatsApp**, não é persistido | Leads esfriam sem follow-up; dono não consegue medir taxa de fechamento; lead de restaurante some |
| 7 | **Sem rotina de pedido de avaliação** | nenhum fluxo pós-serviço no site/scripts | 31 avaliações é pouco para 16 cidades; cada cliente satisfeito é uma avaliação perdida |

### P1 — limita o teto de tráfego e conversão

| # | Lacuna | Consequência |
|---|---|---|
| 8 | Site de **uma página só** | Só disputa poucas keywords; long-tail e cidades/bairros sem página própria |
| 9 | **Sem blog/FAQ** | Perde buscas informacionais ("panela não pega pressão") que alimentam o topo do funil |
| 10 | **Domínio `netlify.app`** | Menor confiança, pior branding, refém da plataforma; um domínio próprio (`consertodepanelasbh.com.br`) é ativo de longo prazo |
| 11 | **Schema incompleto** | Falta `Service`, `FAQPage`, `BreadcrumbList`, `og:url`, `twitter:card`; `areaServed` lista 10 das 16 cidades; `aggregateRating` em LocalBusiness tem exibição limitada no Google hoje |
| 12 | **Sem páginas locais** | Nenhuma página "conserto de panela em Contagem" — ouro para 16 cidades |
| 13 | **Instagram sem calendário/pilares** | Publicação irregular não constrói audiência; o perfil não tem funil claro para o WhatsApp |
| 14 | **Sem identidade de conteúdo padronizada** | Fotos boas, mas sem padrão de capa, texto na tela e CTA — retrabalho e inconsistência |
| 15 | **Sem automação de atendimento** | Dono responde tudo manualmente, inclusive perguntas repetidas ("quanto custa?", "onde fica?", "faz entrega?") |

### P2 — eficiência e proteção

| # | Lacuna | Consequência |
|---|---|---|
| 16 | Projeto React/Vite antigo (`panela-precisa-online-main/`) sem uso | Confusão de qual é o site oficial; risco de deploy errado; peso morto no workspace |
| 17 | Sem backup versionado do site | Sem Git; uma edição ruim pode derrubar a página sem histórico |
| 18 | Sem política de direitos de imagem/LGPD | Fotos de clientes e prints de conversa usados sem critério documentado |
| 19 | Sem conteúdo B2B estruturado | Restaurantes são o público de maior ticket e não têm material próprio |
| 20 | Sem plano de contingência de conteúdo | Se o dono ficar 1 semana sem tempo, o perfil para |

---

## 4. FUNIL ATUAL: ONDE O LEAD VAZA

```
GOOGLE (orgânico + Maps)                 INSTAGRAM
        │                                    │
        ▼                                    ▼
   site (1 página)                     perfil sem calendário
        │  ├─ 13 CTAs WhatsApp               │  └─ link na bio (sem ?text=)
        │  ├─ diagnóstico                   │
        │  └─ formulário c/ fotos            │
        ▼                                    ▼
              WHATSAPP (31) 98739-6336
                         │
        ┌────────────────┼──────────────────┐
        ▼                ▼                  ▼
  responde rápido   demora (trabalhando)  mensagem pronta
        │                │                  │
        ▼                ▼                  ▼
  orçamento por foto  lead esfria      pede foto
        │
        ▼
  serviço → entrega por Uber → FIM (sem pedido de avaliação, sem follow-up, sem registro)
```

**Vazamentos identificados (em ordem de impacto):**
1. **Pós-venda sem avaliação** → o ativo 5,0 não cresce e não há prova nova.
2. **Lead sem follow-up** → orçamento enviado e nunca respondido não é reativado.
3. **Sem atribuição** → impossível saber qual canal paga a conta.
4. **Demora na resposta** → WhatsApp concorrendo com a bancada de trabalho.
5. **Google Maps subalimentado** → perde a busca de maior intenção ("perto de mim").

---

## 5. OPORTUNIDADES IMEDIATAS (quick wins de 7 dias)

| # | Ação | Esforço | Impacto esperado |
|---|---|---|---|
| 1 | Publicar `robots.txt` + `sitemap.xml` e enviar no Search Console | 1 h | Indexação e leitura de dados em ~7 dias |
| 2 | Instalar GA4 + eventos de clique no WhatsApp (`wa.me`) com UTM por canal | 2 h | Passa a medir conversão por origem |
| 3 | Completar Google Meu Negócio (categorias, serviços, área, fotos, horários, atributos) + 1 post/semana | 3 h + 20 min/semana | Mais visibilidade no pack local/Maps |
| 4 | Fluxo de pedido de avaliação pós-serviço (mensagem + link curto) | 1 h | Meta: +8 a 15 avaliações/mês |
| 5 | Padronizar `?text=` diferente para site, Instagram e Google | 30 min | Atribuição imediata no WhatsApp |
| 6 | Publicar 3 Reels com os antes/depois já existentes | 2 h | Reativa perfil e testa formato |
| 7 | Criar 5 páginas locais (BH, Contagem, Betim, Nova Lima, Santa Luzia) | 1 dia | Porta de entrada para long-tail local |
| 8 | Registrar domínio próprio e apontar no Netlify | 1 h + custo anual | Confiança e ativo de marca |

> Regra: os 4 primeiros itens **não dependem de conteúdo novo** e liberam dados para todo o
> resto. São eles que transformam o site de "vitrine" em "máquina mensurável".

---

## 6. PONTOS FORTES A EXPLORAR (e como)

| Ativo | Como explorar no conteúdo |
|---|---|
| Antes/depois | Formato principal (40% do Instagram), capa de Reel, post GMB semanal |
| Diagnóstico interativo | Fonte de pauta: cada chip é um tema de Reel/carrossel/artigo |
| Nota 5,0 | Usar em toda prova social; pedir avaliação sempre; responder 100% das avaliações |
| 31 fotos reais | Banco para 2–3 meses de conteúdo antes de precisar de material novo |
| Atendimento por Uber | Argumento de conveniência único na região; tema de Reel e destaque |
| Restaurantes/bares | Maior ticket e recorrência; conteúdo B2B + proposta de contrato |
| Dono que grava vídeo | Bastidores autênticos valem mais que produção polida |

---

## 7. RISCOS E GARGALOS

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| **Dono sem tempo** (conserta + atende + posta) | Alta | Alto | Conteúdo em lote semanal, buffer de 1 semana, automação de atendimento, bancos de conteúdo prontos (seção E) |
| **Dependência de uma pessoa** (doença/férias) | Média | Alto | Buffer de conteúdo, mensagem de ausência automática, fila de orçamento com prazo comunicado |
| **Promessa de preço/prazo não cumprida** | Média | Alto | Regra dura: nunca preço sem foto; prazo sempre confirmado pelo dono (seções B e G) |
| **Acidente com panela de pressão mal reparada** | Baixa | Crítico | Protocolo de segurança, peças originais, teste de vedação, garantia, linguagem responsável (OFICINA) |
| **Avaliação negativa pública** | Média | Alto | Template de resposta em 24 h, escalonamento ao dono, correção do serviço |
| **Concorrência informal** (conserto em feira/porta de loja) | Alta | Médio | Diferenciação por conveniência (Uber), garantia, prova social e conteúdo educativo |
| **Dependência do Netlify gratuito** | Baixa | Médio | Domínio próprio + backup do site em Git |
| **LGPD / direitos de imagem** | Média | Médio | Autorização registrada, sem dados pessoais em prints, política de retenção (seção G) |
| **Perfil do Instagram travado/limitado** | Baixa | Alto | Seguir políticas da Meta, não comprar seguidores, não usar automação não oficial |
| **Ferramentas demais / custo demais** | Média | Médio | Começar 100% gratuito; pagar só o que gerar lead medido (seção F) |

---

## 8. SCORECARD DE MATURIDADE

Nota de 0 a 5 por dimensão (0 = inexistente, 5 = referência de mercado).

| Dimensão | Nota | Comentário |
|---|---|---|
| Site e proposta de valor | **4** | Forte; perde por domínio netlify e ausência de páginas internas |
| SEO técnico | **2** | JSON-LD e meta ok; falta robots, sitemap, analytics, schema complementar |
| SEO de conteúdo | **1** | Sem blog, sem FAQ, sem páginas locais |
| Google Meu Negócio | **2** | Nota alta, mas sem rotina de posts/fotos/Q&A |
| Instagram | **2** | Perfil existe, sem calendário/pilares/atribuição |
| Produção de conteúdo | **2** | Material bruto bom, sem processo nem padrão |
| Atendimento e conversão | **3** | WhatsApp com mensagens prontas e diagnóstico, mas sem follow-up |
| Medição e dados | **0** | Nenhum analytics/CRM |
| Automação | **1** | Formulários Netlify, nada além |
| Processo e documentação | **1** | Nada formalizado — é exatamente o que esta estrutura resolve |
| **Média** | **1,8 / 5** | Estágio "vitrine boa, motor desligado" |

---

## 9. O QUE **NÃO** FAZER AGORA

- Não refazer o site nem migrar para o projeto React antigo — o site atual funciona.
- Não contratar tráfego pago antes de ter GA4, atribuição e pelo menos 10 avaliações novas.
- Não comprar seguidores, não usar automação não oficial de DM, não publicar review falso.
- Não criar blog com 20 artigos de uma vez — começar com 3 artigos de fundação e seguir 1 a cada 10 dias (≈3/mês), medindo.
- Não publicar preço tabelado (o modelo é orçamento por foto; tabela cria atrito e promessa).
- Não abrir perfil em toda rede social — foco em Google + Instagram + WhatsApp.
- Não usar banco de imagens genérico: o diferencial é a foto real da bancada.
