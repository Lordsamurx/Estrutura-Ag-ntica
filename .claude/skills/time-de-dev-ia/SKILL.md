---
name: time-de-dev-ia
description: Use ao gerenciar o desenvolvimento da agência com Claude + Linear + Orca — criar tarefas no Linear, disparar agentes isolados no Orca, revisar PRs e mergear. Use para qualquer pedido de feature, correção ou página nova nos repositórios da agência (sites de clientes, plataforma de prospecção, automações).
---

# Time de Dev com IA (Claude + Linear + Orca)

Versão da agência: o **Claude** assume o papel de gerente que antes era do Hermes. O Hermes continua opcional, só como controle remoto pelo Telegram.

## Os papéis

- **Samuel** = o dono. Faz o pedido, aprova o plano, aprova o merge e é o único que faz deploy.
- **Claude** = o gerente. Entende o pedido, divide em tarefas, escreve o prompt de cada agente, revisa os PRs.
- **Linear** = o mural. Tarefas com status, prioridade e dono.
- **Orca** = o braço. Cada tarefa vira um dev de IA isolado (worktree próprio) que coda e abre PR.

## Quando usar

- Chegou pedido de feature, correção ou página nova → registrar tarefa no Linear → disparar agente no Orca → revisar PR → mergear → fechar a tarefa.
- Nunca codar direto no `main`. Nunca pular o mural.
- Tarefa pequena demais (trocar um texto, uma cor) pode ser feita pelo próprio Claude, mas ainda em branch e com tarefa no Linear.

## Organização no Linear

- Time: **Agência**
- Um projeto por frente, por exemplo:
  - `Conserto de Panelas — Site`
  - `Conserto de Panelas — Instagram`
  - `Conserto de Panelas — Bot de atendimento`
  - `Plataforma de Prospecção`
- Prioridade segue a ordem da agência: o que fecha cliente agora vem primeiro. Ideias novas viram tarefa com prioridade baixa no projeto `Ideias` e não são disparadas.

## Fluxo padrão

1. **Tarefa no Linear** (via MCP do Linear): título claro, descrição com o pedido, prioridade, arquivos que a tarefa pode tocar.
2. **Mostrar o plano ao Samuel** e esperar o ok antes de disparar.
3. **Disparar o agente** (Orca CLI):
   ```bash
   orca worktree create --repo name:<repo> --name <nome-da-task> --base-branch main --agent claude --prompt "<prompt em 5 blocos>" --activate
   ```
4. **Acompanhar**: `orca worktree list` e `git log --oneline -3` dentro do worktree (commit presente = trabalhou).
5. **Revisar o PR**: `gh pr view <n>` e `gh pr diff <n>` — conferir se os arquivos alterados batem com as FRONTEIRAS do prompt.
6. **Checks verdes**: `gh pr checks <n> --watch`. Em site sem testes automáticos, o mínimo é: build sem erro + conferir a página no navegador (celular e computador).
7. **Merge** só com ok do Samuel: `gh pr merge <n> --squash --delete-branch`.
8. **Fechar a tarefa no Linear** e dizer qual é a próxima.

## O prompt do agente (5 blocos)

```
TAREFA: [o que fazer, numerado, com os arquivos exatos quando possível]
CONTEXTO: [o que já existe, padrões do repo, cliente e objetivo]
FRONTEIRAS: NÃO toque em [X] (outra tarefa cuida)
REGRAS: leia o CLAUDE.md da raiz e da pasta; build e testes verdes; nunca segredos; não faça deploy
ENTREGA: branch própria + gh pr create --base main + NÃO mergeie + relatório final curto
```

## Regras de ouro

- **Paralelismo = dividir por dono de arquivo.** Nunca dois agentes ativos no mesmo arquivo.
- **Deploy de produção é do Samuel.** Agente e gerente nunca publicam sem o ok dele.
- **Segredos nunca** em prompt, commit, Linear ou CLAUDE.md. Chaves ficam só no `.env` de cada sistema, fora do git.
- **Revisar antes de mergear.** Não confiar só no título do PR.
- **Nada entra quebrado.** Check vermelho ou build quebrado = não mergeia.
- **Uma frente por vez** no case do conserto de panelas: site → Instagram → bot.
- **Começar com no máximo 2 agentes em paralelo**, até o fluxo estar estável.

## Comandos rápidos

| Ação | Comando |
|---|---|
| Listar worktrees | `orca worktree list` |
| Criar agente | `orca worktree create --repo name:... --name ... --base-branch main --agent claude --prompt "..." --activate` |
| PR aberto do agente | `gh pr list --head <branch>` |
| Ver PR | `gh pr view <n>` |
| Diff do PR | `gh pr diff <n>` |
| Checks | `gh pr checks <n> --watch` |
| Merge | `gh pr merge <n> --squash --delete-branch` |
