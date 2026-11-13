# Estrutura Agêntica da Agência

**Relatório de andamento** · 13/11/2026 · preparado pelo Claude (gerente) para o Samuel

> Retrato completo de como a agência vai funcionar com agentes de IA: quem faz o quê, o que já está pronto, o que está planejado nas etapas A a F e o que ainda falta decidir. Primeiro case: **Conserto de Panelas do Clenilton** (site, Instagram e bot de WhatsApp).

---

## 1. Resumo em uma tabela

| Item | Situação |
|---|---|
| Pesquisa de referências (4 temas) | ✅ Feita |
| Limpeza de arquivos duplicados | ✅ Feita (tudo na Lixeira, recuperável) |
| **A.** Arquivos CLAUDE.md por pasta | ✅ Feita e aprovada |
| **B.** Skills e plugins | ✅ Aprovada; AGENTS.md criados |
| **C.** Linear (projetos e tarefas) | ✅ Criado no time Projetos: 5 projetos, 11 tarefas |
| **D.** Checklist para publicar o site | ✅ Aprovado; questionário do Clenilton pronto |
| **E.** Equipe de agentes do Instagram | ✅ Desenho aprovado |
| **F.** Plano de 7 dias | ✅ Aprovado (datas podem mudar) |
| Repositório GitHub da estrutura | ⏳ Falta confirmar nome e visibilidade |
| Agentes no Orca | ⛔ Parado de propósito até o Samuel liberar |
| Site do conserto de panelas | 🟡 No ar (Netlify), falta polir, medir e publicar a versão final |

---

## 2. Como a agência funciona

### Os papéis

| Papel | Quem | O que faz | O que **não** faz |
|---|---|---|---|
| **Dono** | Samuel | Faz o pedido, aprova planos e merges, publica | — |
| **Gerente** | Claude | Divide o pedido em tarefas, escreve o prompt de cada agente, revisa os PRs | Não publica sem ok, não mergeia sem ok |
| **Mural** | Linear | Guarda as tarefas com status, prioridade e dono | — |
| **Braço** | Orca | Cria um agente isolado (worktree próprio) para cada tarefa | — |
| **Desenvolvedores** | Agentes de código: no Orca pelo CLI; por fora no VS Code ou Antigravity | Programam os sites em branch própria, testam e abrem PR | Não mergeiam, não publicam |
| **Marketing** | Equipe de agentes do Instagram (etapa E) | Pauta, roteiro, legenda, revisão técnica | Não publicam sem aprovação |
| Opcionais | Hermes (Telegram), DeepSeek Harness, n8n, Canva, Higgsfield | Apoio | — |

### O fluxo de uma tarefa

```
Pedido do Samuel
   ↓
Claude cria o cartão no Linear (título, pedido, prioridade, arquivos que pode tocar)
   ↓
Claude mostra o plano  →  Samuel aprova
   ↓
Agente de código (Orca / Antigravity / VS Code) trabalha numa branch própria
   ↓
Abre o PR  →  Claude revisa (arquivos batem com as fronteiras? build ok? celular e computador ok?)
   ↓
Samuel aprova o merge  →  Samuel publica
   ↓
Claude fecha o cartão no Linear e diz qual é a próxima
```

### O prompt de cada agente de código (5 blocos)

| Bloco | Conteúdo |
|---|---|
| TAREFA | O que fazer, numerado, com os arquivos exatos |
| CONTEXTO | O que já existe, cliente e objetivo |
| FRONTEIRAS | O que não tocar (outra tarefa cuida) |
| REGRAS | Ler o CLAUDE.md da raiz e da pasta; build verde; nunca segredos; não publicar |
| ENTREGA | Branch própria, PR para a main, não mergear, relatório curto |

### Regras de ouro

- **Cada projeto na sua pasta.** Trabalhando num projeto, o agente mexe só na pasta dele.
- **Paralelismo = dividir por dono de arquivo.** Nunca dois agentes no mesmo arquivo. No começo, no máximo 2 em paralelo.
- **Uma frente por vez** no conserto de panelas: site, depois Instagram, depois bot.
- **Segredos nunca** em CLAUDE.md, prompt, commit ou Linear. Chaves só no `.env`, fora do git.
- **Nada de dado inventado.** Preço, prazo e garantia só depois de confirmados.
- **Deploy é só do Samuel.**

---

## 3. Mapa das pastas (como está hoje)

```
Estrutura Agentica/
├── CLAUDE.md                     ← contexto completo da agência (novo)
├── RELATORIO-ESTRUTURA-AGENTICA  ← este relatório
├── .claude/skills/time-de-dev-ia/SKILL.md
├── _ideias/                      ← ideias novas (não são executadas)
├── Conserto de panelas/           ← primeiro case
│   ├── CLAUDE.md                 ← briefing do case (novo)
│   ├── site-novo/                ← site em produção (Netlify)
│   │   └── CLAUDE.md             ← regras do site (novo)
│   ├── Estrutura Agentica/       ← pacote de marketing (5 agentes, conteúdo)
│   │   └── CLAUDE.md             ← o que pode e não pode mexer (novo)
│   └── Fotos e Videos/           ← material bruto do Clenilton
└── Sites/                        ← repositório próprio dos sites dos outros clientes
    ├── CLAUDE.md                 ← regras do repositório (novo)
    └── clientes/ (lorena-caliari, _exemplo), templates/, exemplos…
```

| Pasta | Agente pode | Agente não pode |
|---|---|---|
| `site-novo/` | Alterar em branch, dentro da tarefa | Mostrar preço, inventar dado, publicar |
| `Estrutura Agentica/` (marketing) | Ler; atualizar o arquivo de estado | Reescrever prompts e conteúdo sem tarefa |
| `Fotos e Videos/` | Ler | Usar foto de cliente sem autorização |
| `Sites/clientes/<nome>/` | Alterar só o cliente da tarefa | Mexer no cliente vizinho |

---

## 4. O que já foi feito (13/11/2026)

1. **Leitura do contexto:** contexto da agência, briefing do conserto de panelas, pacote de marketing existente e skill `time-de-dev-ia`.
2. **Descoberta importante:** quase tudo que o briefing dava como faltando já estava confirmado na ficha do negócio (Instagram @consertopanelasbh, WhatsApp (31) 98739-6336, oficina no Belmonte, BH e Grande BH, coleta por Uber paga pelo cliente).
3. **Limpeza de duplicados:** backups antigos do site, `.bak` da ficha e do maestro, cópias do index da Lorena e cópias de imagens e vídeos nas pastas de exemplo. Tudo foi para a Lixeira, então dá para recuperar.
4. **Etapa A:** 5 arquivos CLAUDE.md escritos (raiz, conserto, site, marketing, Sites), a skill movida para `.claude/skills/` e a pasta `_ideias/` criada.
5. **Agentes de código** incluídos na estrutura: no Orca pelo CLI, e por fora no VS Code ou Antigravity.
6. **Etapa B:** `AGENTS.md` criados ao lado de cada CLAUDE.md, para os agentes abertos fora do Orca seguirem as mesmas regras.

---

## 5. Resumo da pesquisa

| Tema | O que importa para nós |
|---|---|
| **Vários agentes no Claude Code** | CLAUDE.md da raiz curto e um por pasta (carrega só quando o agente entra na pasta). Conhecimento vai em skills; regra que não pode falhar vai em hook ou permissão. |
| **Sites de serviço local que convertem** | WhatsApp visível o tempo todo, área atendida clara, avaliações reais no topo, uma chamada única ("mande a foto e receba o orçamento") e link `wa.me` com mensagem pronta e origem marcada. Nosso site já faz quase tudo; falta medir de onde vem cada clique. |
| **Instagram de conserto e restauração** | Reel de antes e depois traz gente nova; carrossel do processo gera salvamento e confiança. Começar com 1 Reel + 1 carrossel por semana. |
| **Bot de pré-atendimento** | Passar para uma pessoa faz parte do desenho. O bot pergunta o serviço, pede foto e bairro e entrega o resumo. Desde 15/01/2026 a Meta proíbe chatbot de IA de uso geral na API do WhatsApp; bot de atendimento de negócio continua permitido, então o nosso fica só no assunto panelas (a confirmar na política oficial antes de ir ao ar). |

Fontes principais: [boas práticas Claude Code](https://www.morphllm.com/claude-code-best-practices), [blog da Anthropic](https://www.claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more), [sites de assistência técnica](https://appliancemarketingpros.com/blog/appliance-repair-website-design/), [botão de WhatsApp (RD Station)](https://www.rdstation.com/blog/marketing/botao-whatsapp-no-site), [Reels x carrossel](https://contentdrips.com/blog/2026/06/instagram-reels-vs-carousels-2026-guide/), [transbordo (Zenvia)](https://zenvia.com/blog/automacao-de-atendimento-no-whatsapp/), [regra da Meta (respond.io)](https://respond.io/pt/blog/whatsapp-general-purpose-chatbots-ban), [Antigravity](https://antigravity.google/docs/customization-discovery/).

---

## 6. Etapa B — Skills e plugins (aprovada)

**Onde cada agente roda:**
- **Dentro do Orca:** os agentes abrem pelo CLI (Claude Code) e leem os `CLAUDE.md` direto.
- **Por fora (VS Code ou Antigravity):** quando o Samuel abrir um agente fora do Orca, ele lê o `AGENTS.md`.

**Ponte criada:** um `AGENTS.md` curto ao lado de cada CLAUDE.md (raiz, conserto, site, marketing, Sites), dizendo "leia o CLAUDE.md desta pasta". Uma fonte só, sem texto repetido. No Antigravity, os AGENTS.md das subpastas precisam ser ligados uma vez em Settings > Agent.

| Quando | Skill | Para quê |
|---|---|---|
| **Agora (site)** | time-de-dev-ia | Fluxo Linear → Orca → PR → merge |
| | orca-cli + orca-linear | Disparar e acompanhar agentes ligados aos cartões |
| | frontend-design | Polir o visual (vencedora do teste de redesign) |
| | marketing:seo-audit | SEO local: título, schema, sitemap, Search Console |
| | run | Abrir o site e conferir no celular e no computador |
| **Depois (Instagram)** | carrossel-instagram | Carrosséis de antes e depois e de processo |
| | before-after-and-transformation | Formato de transformação |
| | reels-script, caption-writer | Roteiros e legendas |
| | instagram-growth + conector Canva | Crescimento e arte |
| **Depois (bot)** | agente-whatsapp-n8n | Agente de atendimento no n8n |
| | n8n-workflow-patterns, n8n-mcp-tools-expert, n8n-validation-expert | Montar e validar os fluxos |

Todas já estão instaladas no usuário do Samuel. Dentro do projeto ficam só as skills próprias da agência, para não duplicar.

---

## 7. Etapa C — Linear (criado em 13/11)

**Workspace:** Agencia Claude · **Time:** Projetos (o time "Agência" não existia; dá para renomear) · tarefas PRJ-15 a PRJ-25

| Projeto | Status |
|---|---|
| Conserto de Panelas — Site | Ativo agora |
| Conserto de Panelas — Instagram | Começa quando o site for publicado |
| Conserto de Panelas — Bot de atendimento | Depois do Instagram |
| Plataforma de Prospecção | Em espera |
| Ideias | Só registro, prioridade baixa |

**Primeiras tarefas do projeto "Conserto de Panelas — Site"**

| # | Tarefa | Prioridade | Quem faz |
|---|---|---|---|
| 1 | Subir a versão mais nova do site no repositório do GitHub | Urgente | Samuel |
| 2 | Medir o marco zero: contatos por semana vindos do Google | Urgente | Samuel |
| 3 | Confirmar com o Clenilton: prazo médio, garantia e fotos novas de antes e depois | Alta | Samuel |
| 4 | Marcar a origem de cada botão de WhatsApp (site, seção) | Alta | Agente de código |
| 5 | Instalar GA4 + Search Console e evento de clique no WhatsApp | Alta | Agente de código + Samuel (acessos) |
| 6 | SEO local: título até 60 caracteres, descrição até 155, schema com as 16 cidades, FAQ e serviços, og:url, twitter:card | Alta | Agente de código |
| 7 | Atualizar a galeria de antes e depois com as fotos novas | Média | Agente de código |
| 8 | Formulário para empresas: decidir entre salvar o contato ou ficar só no WhatsApp | Média | Samuel decide, agente executa |
| 9 | Revisão final no celular e no computador (velocidade e acessibilidade) | Média | Claude |
| 10 | Domínio próprio (.com.br) | Baixa | Samuel decide |
| 11 | Publicar a versão final | Alta (no fim) | Samuel |

As tarefas 4 e 6 mexem no mesmo `index.html`, então rodam uma depois da outra, nunca juntas.

---

## 8. Etapa D — Checklist para finalizar e publicar o site (aprovado)

**O site já tem:** serviços, antes e depois, avaliações, região atendida, orçamento e botões de WhatsApp com mensagem pronta, além de `robots.txt` e `sitemap.xml`.

**Pedir ao Clenilton** (questionário pronto: `Conserto de panelas/QUESTIONARIO-CLENILTON.pdf`)
- [x] Região: foco inicial em BH (respondido 13/11)
- [x] Logística: a maioria chama Uber ou deixa na oficina; entrega da oficina só caso a caso (respondido 13/11)
- [x] Prazo: depende do serviço, combinado no orçamento, que sai na hora (respondido 13/11)
- [ ] Garantia de 30 dias: confirmar e dizer o que cobre
- [ ] Quais cidades da Grande BH ainda entram no site
- [ ] 5 a 10 fotos novas de antes e depois (mesmo ângulo, boa luz)
- [ ] Autorização para usar fotos de panelas de clientes
- [ ] Dinheiro e parcelamento

**Ajuste no site por causa das respostas:** trocar "toda a Grande BH" por foco em BH e não prometer entrega feita pela oficina.

**Técnico**
- [ ] Origem marcada nos links do WhatsApp
- [ ] GA4 + Search Console + evento de clique
- [ ] SEO local (título, descrição, schema, og)
- [ ] Imagens novas em `.webp`, leves
- [ ] Teste no celular e no computador, sem erro no console
- [ ] Nenhum preço no site

**Publicar (só o Samuel)**
1. Revisar o PR e aprovar o merge na main
2. Publicar no Netlify (conectado ao repositório ou pelo painel)
3. Abrir o site no celular, testar 2 botões de WhatsApp
4. Enviar o sitemap no Search Console
5. Atualizar o link do site no Google Meu Negócio e na bio do Instagram

---

## 9. Etapa E — Equipe de agentes do Instagram (desenho aprovado)

Reaproveita os agentes do pacote de marketing que já existe.

| Agente | Papel | Recebe | Entrega | Passa para |
|---|---|---|---|---|
| **MAESTRO** | Coordenador | Fotos, vídeos e recados do Clenilton | Briefing da semana e calendário | VITRINE, LENTE |
| **VITRINE** | Gestor do Instagram | Briefing + fotos | Pauta, legendas, hashtags e chamada para o WhatsApp | LENTE |
| **LENTE** | Editor de mídia | Brutos + pauta | Roteiro do Reel, cortes e capa do carrossel | OFICINA |
| **OFICINA** | Especialista em panelas | Texto e peça pronta | Revisão técnica e de segurança (nada errado sobre panela de pressão) | MAESTRO |
| **BÚSSOLA** | SEO e Google | O mesmo antes e depois | Post no Google Meu Negócio | MAESTRO |
| **MAESTRO** | Fechamento | Peças revisadas | Pacote semanal para o Samuel aprovar | Samuel publica |

**Ritmo inicial:** 1 Reel de antes e depois + 1 carrossel por semana, subindo depois.
**Regra:** nada é publicado sem o ok do Samuel.

---

## 10. Etapa F — Plano de 7 dias (aprovado, datas podem mudar)

Plano comprimido de 2 semanas para 7 dias, a pedido do Samuel. Os 🔒 são blocos inegociáveis; as datas podem ser ajustadas no caminho. As datas já estão nas tarefas do Linear.

| Dia | Bloco 🔒 (inegociável) | Bloco extra |
|---|---|---|
| **Sex 13/11** | 🔒 Subir a versão nova do site no GitHub (PRJ-15) | Marco zero de contatos do Google (PRJ-16); enviar o questionário ao Clenilton (PRJ-17) |
| **Sáb 14/11** | 🔒 Liberar o Orca e disparar o 1º agente: origem do WhatsApp (PRJ-18) | Criar GA4 e Search Console; decidir formulário de empresas e domínio (PRJ-22, PRJ-24) |
| **Dom 15/11** | 🔒 Revisar o PR da origem; disparar o SEO local (PRJ-20) | Receber respostas e fotos do Clenilton |
| **Seg 16/11** | 🔒 Revisar o PR de SEO; disparar a medição (PRJ-19) | Atualizar a ficha do negócio com as respostas |
| **Ter 17/11** | 🔒 Revisar o PR de medição; disparar a galeria com as fotos novas (PRJ-21) | — |
| **Qua 18/11** | 🔒 Revisão final (PRJ-23) e **publicar o site** (PRJ-25) | Enviar sitemap, atualizar Google e bio |
| **Qui 19/11** | 🔒 Instagram pronto: bio, destaques, link do site, 1º Reel e 1º carrossel aprovados | Calendário do 1º mês |

**Meta dos 7 dias:** site publicado com medição funcionando e Instagram pronto para começar.

## 11. O que falta e o que depende de quem

| Pendência | Depende de |
|---|---|
| Liberar o Orca (sábado 14/11 no plano) | Samuel |
| Nome e visibilidade do repositório da estrutura (sugestão: `estrutura-agentica`, privado) | Samuel |
| Subir a versão nova do site no GitHub (`Conserto-de-panelas`) | Samuel |
| Liberar o Orca | Samuel |
| Prazo, garantia, fotos novas, autorização de fotos | Clenilton |
| Preços dos serviços | Samuel e Clenilton (até lá, sem preço) |
| Qual é o principal da Lorena: `index.html` ou `index-polido.html` | Samuel |
| Acessos do GA4 e do Search Console | Samuel |

## 12. Riscos

| Risco | Como evitamos |
|---|---|
| Dois agentes mexendo no mesmo arquivo | Tarefas divididas por arquivo, no máximo 2 em paralelo |
| Dado inventado no site ou no bot | Ficha do negócio como fonte única; o que não foi confirmado fica "(a validar)" |
| Bot bloqueado pela Meta | Bot só de atendimento sobre panelas, com passagem para o Clenilton |
| Segredo vazar no GitHub | `.env` fora do git, nada de chave em prompt ou Linear |
| Pouco tempo (3–4 h/noite) | Um bloco inegociável por dia e uma frente por vez |
