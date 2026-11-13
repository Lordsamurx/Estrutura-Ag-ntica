# Agência do Samuel: contexto para todo agente

Leia este arquivo inteiro antes de qualquer tarefa. Depois leia o CLAUDE.md da pasta em que vai trabalhar.

## Quem e como
- Agência digital em Belo Horizonte (MG). Projeto solo do Samuel, 3 a 4 horas por noite (ele trabalha das 8h às 17h).
- Serviços: sites, landing pages, Google Meu Negócio e automações com IA.
- Objetivo: levantar caixa até o fim de 2026 e montar portfólio.
- Oferta inicial: Google Meu Negócio + site ou landing page. Automações só depois de 3 clientes pagantes.
- Preços de referência (podem mudar): site básico ~R$ 450, intermediário ~R$ 900, completo ~R$ 1.600; manutenção R$ 50 a 80/mês; Google Meu Negócio R$ 150 a 350 (criação) ou R$ 100 a 250/mês (gestão).
- Venda pelo WhatsApp, no X1.

## Papéis (skill `time-de-dev-ia`)
- **Samuel** = dono. Faz o pedido, aprova plano e merge. É o único que faz deploy.
- **Claude** = gerente. Divide em tarefas, escreve o prompt de cada agente, revisa PRs.
- **Linear** = mural. Workspace "Agencia Claude", time "Agência", um projeto por frente.
- **Orca** = braço. Cada tarefa vira um agente isolado (worktree próprio) que coda e abre PR.
- GitHub (login Lordsamurx) + `gh` para PRs, checks e merge.
- **Agentes de código (desenvolvedores)** = quem programa os sites. Dentro do Orca rodam pelo CLI (Claude Code, lê os CLAUDE.md). Fora do Orca, o Samuel pode abrir um agente no VS Code ou no Antigravity, que lê os `AGENTS.md` (cada um aponta para o CLAUDE.md da pasta). Recebem uma tarefa do Linear com o prompt de 5 blocos (TAREFA, CONTEXTO, FRONTEIRAS, REGRAS, ENTREGA), trabalham em branch própria, testam no celular e no computador e abrem PR. Não mergeiam e não publicam.
- Opcionais: Hermes (Telegram), DeepSeek Harness (código repetitivo), n8n, Canva, Higgsfield.

## Mapa das pastas
| Pasta | O que é | Repositório |
|---|---|---|
| `Conserto de panelas/` | Primeiro case: conserto de panelas do Cleonilton (site, Instagram, bot) | Lordsamurx/Conserto-de-panelas (site) |
| `Sites/` | Sites dos outros clientes, modelos e exemplos | Lordsamurx/Sites (repo próprio) |
| `.claude/skills/` | Skills da agência | este repositório |
| `_ideias/` | Ideias novas. Viram tarefa de prioridade baixa no Linear e não são executadas | este repositório |

## Regra das pastas (inegociável)
- Cada projeto ou cliente vive na própria pasta. Ao trabalhar num projeto, leia e altere **só a pasta dele**.
- Se a tarefa exigir mexer em outra pasta, pare e pergunte ao Samuel.
- `Sites/` é outro repositório git: commits dele são feitos dentro dele, nunca por este.

## Regras gerais
- Português do Brasil, direto, números concretos, projeções conservadoras.
- Planos em tabela semana a semana, com blocos inegociáveis.
- Uma frente por vez. No conserto de panelas a ordem é site, depois Instagram, depois bot.
- Mostrar plano curto e esperar o ok do Samuel antes de construir algo grande.
- No máximo 2 agentes em paralelo, cada um com arquivos próprios.
- Nunca codar direto na `main`. Toda tarefa tem cartão no Linear.
- Nunca inventar dado de cliente (preço, prazo, garantia). O que não foi confirmado fica como "(a validar)".
- **Segredos nunca** em CLAUDE.md, prompt, commit ou Linear. Chaves ficam só no `.env` de cada sistema, fora do git.
- Deploy de produção só com ok explícito do Samuel.
- Apagar arquivo: mostrar a lista antes e mandar para a Lixeira, nunca apagar direto.
