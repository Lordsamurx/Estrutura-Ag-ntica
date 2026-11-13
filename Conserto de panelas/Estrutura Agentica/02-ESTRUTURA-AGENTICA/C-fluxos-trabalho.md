# C) FLUXOS DE TRABALHO ENTRE AGENTES

> Como as 5 personas conversam, como uma tarefa passa de mão em mão e como o dono
> entra (e sai) do processo. Base contratual: `00-contexto/roster-e-handoff.md`.

---

## 1. MAPA DE COMUNICAÇÃO

```
                         ┌────────────────────────────────┐
                         │             DONO               │
                         │  voz / foto / vídeo / recado    │
                         └───────────────┬────────────────┘
                                         │ (única porta de entrada)
                                         ▼
                         ┌────────────────────────────────┐
                         │            MAESTRO             │
                         │ intake → briefing → calendário │
                         │ empacota → apresenta → cobra   │
                         └──┬────────┬─────────┬──────────┘
                            │        │         │
               ┌────────────┘        │         └─────────────┐
               ▼                     ▼                       ▼
      ┌────────────────┐   ┌────────────────┐      ┌────────────────┐
      │    BÚSSOLA     │   │    VITRINE     │      │     OFICINA    │
      │ SEO / Google   │   │   Instagram    │      │  técnica/segur.│
      └───────┬────────┘   └───────┬────────┘      └───────┬────────┘
              │  artigo/FAQ/GMB    │  pauta/legenda        │  parecer
              │                    ▼                       │  técnico
              │           ┌────────────────┐               │
              │           │     LENTE      │───────────────┘
              │           │ roteiro/edição │  valida texto na tela
              │           └───────┬────────┘
              │                   │ peça pronta
              ▼                   ▼
      ┌──────────────────────────────────────┐
      │      MAESTRO (pacote semanal)        │
      └──────────────────┬───────────────────┘
                         ▼
                  ┌──────────────┐
                  │     DONO     │ aprova / ajusta / publica
                  └──────────────┘
```

### Matriz "quem aciona quem"

| De → Para | MAESTRO | BÚSSOLA | VITRINE | LENTE | OFICINA | DONO |
|---|---|---|---|---|---|---|
| **MAESTRO** | — | ✅ briefa | ✅ briefa | ✅ briefa | ✅ consulta | ✅ apresenta |
| **BÚSSOLA** | ✅ reporta | — | ⚠️ só via MAESTRO | ⚠️ só via MAESTRO | ✅ valida técnica | ❌ |
| **VITRINE** | ✅ reporta | ⚠️ só via MAESTRO | — | ✅ handoff de mídia | ✅ valida técnica | ❌ |
| **LENTE** | ✅ reporta | ❌ | ✅ devolve | — | ✅ valida texto na tela | ❌ |
| **OFICINA** | ✅ reporta | ✅ devolve parecer | ✅ devolve parecer | ✅ devolve parecer | — | ⚠️ só se MAESTRO pedir |
| **DONO** | ✅ | ❌ | ❌ | ❌ | ❌ | — |

✅ = canal direto permitido · ⚠️ = permitido só com cópia ao MAESTRO · ❌ = proibido

**Por que essa hierarquia:** com 5 agentes e um dono ocupado, comunicação livre gera
retrabalho e perda de contexto. O MAESTRO é o único que enxerga o todo e o único que
fala com o dono. Os especialistas conversam entre si apenas no eixo de produção
(VITRINE ↔ LENTE) e no eixo de validação (todos → OFICINA).

---

## 2. PROTOCOLO DE HANDOFF

### 2.1 Ciclo de vida de uma peça

```
BRIEFING ──► PESQUISA/ÂNGULO ──► ROTEIRO ──► VALIDAÇÃO TÉCNICA ──► COPY FINAL
   │                                                                            │
   └──────────────────────────────◄── REWORK ◄──────────────────────────────────┘
                                                                                │
                                                                                ▼
                                                             APROVAÇÃO DO DONO
                                                                                │
                                                        ┌───────────────────────┤
                                                        ▼                       ▼
                                                   PUBLICAR                AJUSTAR
                                                        │                       │
                                                        ▼                       └──► REWORK
                                                   MEDIR ──► APRENDER ──► próximo briefing
```

Estados possíveis: `novo` → `briefado` → `em_producao` → `em_validacao` →
`aguardando_aprovacao` → `aprovado` → `publicado` → `medido` (ou `arquivado`).

### 2.2 Regras de handoff

1. **Sem envelope, sem tarefa.** O receptor devolve imediatamente se faltar campo obrigatório.
2. **Um responsável por vez.** O dono da tarefa é quem tem o `para:` do envelope atual.
3. **Insumo rastreável.** Todo arquivo citado precisa existir no caminho informado.
4. **Restrição explícita.** O que não pode aparecer (rosto, preço, marca de panela) vai escrito.
5. **Critério de aceite testável.** "Ficou bom" não é critério; "gancho nos 3 primeiros
   segundos" é.
6. **Prazo e prioridade.** Sem isso, a tarefa entra no fim da fila.
7. **Devolutiva com status.** `concluido`, `parcial` ou `bloqueado` + próximo passo.
8. **Rework tem motivo.** Quem devolve aponta o item do checklist que falhou.
9. **Histórico preservado.** Cada handoff vira uma linha no log do MAESTRO (planilha/Notion).
10. **Silêncio não é aprovação.** Sem resposta do dono em 48 h, o MAESTRO cobra uma vez;
    sem resposta em 5 dias, a peça é arquivada e o buffer entra no lugar.

### 2.3 Formato de apresentação ao dono (pacote semanal)

O MAESTRO nunca manda 10 arquivos soltos. Ele manda **1 bloco por peça**, nesta ordem:

```
┌─ PEÇA 1/5 · IG-014 · Reel · Antes/Depois ────────────────────┐
│ Gancho: "Essa panela ia pro lixo. Olha o que a gente fez."   │
│                                                              │
│ [texto pronto para copiar]                                   │
│ [hashtags]                                                   │
│ [roteiro de edição em 6 linhas]                              │
│                                                              │
│ Horário sugerido: terça, 19h                                  │
│ Arquivos: producao/03-revisao/2026-10-23_..._v1.mp4          │
│                                                              │
│ ✅ Aprovar tudo   ✏️ Ajustar esta   ⏭️ Pular esta             │
└──────────────────────────────────────────────────────────────┘
```

Regras do pacote: máximo 5 peças por semana + 1 artigo a cada 10 dias (entra no pacote nas
semanas de publicação); sempre com opção "aprovar tudo"; sempre com o próximo passo escrito;
nunca com prazo "para ontem".

---

## 3. FLUXO COMPLETO 1 — MATERIAL BRUTO → POST PRONTO

**Cenário:** o dono manda 4 fotos e um vídeo de 40 s do conserto de uma panela de pressão
com cabo quebrado, às 18h30 de uma quarta-feira.

### Passo a passo (com mensagens reais)

**1. DONO → MAESTRO** (áudio no WhatsApp)
> "Ô, separei essas fotos da panela da dona Maria, do cabo quebrado. Tem um vídeo do
> processo também. Queria postar essa semana."

**2. MAESTRO faz o intake** (checklist de 6 perguntas, só pergunta o que falta)
```
INTAKE
- tipo de panela: pressão (alumínio)                [das fotos]
- problema: cabo quebrado + rebite solto            [das fotos]
- serviço feito: troca de cabo, rebite e polimento  [confirmar]
- cidade/bairro do cliente: Belmonte                [perguntar]
- autorização de imagem: só panela, sem rosto       [confirmar]
- pode falar que foi cliente real? sim/não          [perguntar]
```
Se o dono não responder, o MAESTRO usa o padrão seguro: **sem rosto, sem nome, sem bairro**.

**3. MAESTRO → OFICINA** (validação técnica)
```yaml
handoff: HO-0031
de: maestro
para: oficina
tarefa: IG-021
objetivo: validar descrição técnica do antes/depois (cabo + rebite)
insumos: ["4 fotos e 1 vídeo em producao/01-entrada/2026-10-21_pressao_cabo/"]
pergunta: "É correto dizer que o rebite frouxo causou o cabo quebrado? O que é seguro afirmar?"
prazo: 2026-10-22
prioridade: alta
```
**4. OFICINA → MAESTRO** (parecer em 4 h)
> **Parecer:** não é possível afirmar causa pela foto. O correto é descrever o que foi
> feito: "troca do cabo, troca do rebite e revisão da vedação". Evitar "o cabo quebrou
> porque o rebite estava frouxo". Segurança: conferir válvula e pino na revisão; não
> prometer que "nunca mais solta". ✅ Texto liberado com essa correção.

**5. MAESTRO → VITRINE** (briefing de conteúdo)
```yaml
handoff: HO-0032
de: maestro
para: vitrine
tarefa: IG-021
objetivo: "Reel antes/depois — cabo quebrado + polimento (pilar Antes/Depois)"
insumos:
  - "fotos e vídeo: producao/01-entrada/2026-10-21_pressao_cabo/"
  - "parecer técnico: HO-0031 (não afirmar causa; descrever serviço)"
  - "ângulo: 'panela boa não se joga fora por causa de cabo'"
formato_saida: "gancho + roteiro de 25s + legenda + hashtags"
restricoes: ["sem rosto", "sem preço", "não afirmar causa do defeito"]
prazo: 2026-10-23
prioridade: alta
```
**6. VITRINE → LENTE** (roteiro em produção)
```yaml
handoff: HO-0033
de: vitrine
para: lente
tarefa: IG-021
objetivo: "montar o Reel de 25s a partir do roteiro aprovado"
insumos:
  - "roteiro: cenas 1-6 (abaixo)"
  - "vídeo bruto: .../IMG_20250720_071238.mp4"
  - "3 fotos do depois"
formato_saida: "instruções de corte + textos de tela + capa + música"
restricoes: ["9:16", "gancho até 3s", "resultado sem texto por cima"]
```
**7. LENTE → VITRINE** (entrega de edição)
```
ROTEIRO FINAL — 25s
0,0–2,5s  Foto do cabo quebrado + texto: "Cabo quebrado não é fim de panela."
2,5–8s    Corte 1: mão tirando o cabo velho | texto: "troca do cabo"
8–14s     Corte 2: rebite novo sendo colocado | texto: "rebite novo"
14–20s    Corte 3: polimento, brilho aparecendo | texto: "polimento"
20–23s    Split antes/depois no mesmo enquadramento
23–25s    Texto: "Orçamento por foto no WhatsApp" + @consertopanelasbh
Música: pagode/sertanejo leve, volume 20%. Som original do vídeo em 60%.
Capa: frame do split, texto "ANTES / DEPOIS" em ouro sobre navy.
```
**8. VITRINE → MAESTRO** (copy final)
> Legenda pronta, hashtags, horário sugerido, capa e agendamento. Autochecklist preenchido.

**9. MAESTRO → DONO** (pacote de aprovação, 1 bloco)
> "Peça 1 de 3 da semana. Reel de 25s, antes/depois do cabo. Aprovado tecnicamente pela
> OFICINA (não afirma causa, só o serviço). Texto e capa prontos. Aprovar ou ajustar?"

**10. DONO aprova → MAESTRO publica/agenda → métricas voltam para o próximo briefing**
Se o dono disser "achei o texto muito comprido", o MAESTRO registra em
`historico-feedback.md` e a VITRINE passa a escrever legendas 20% mais curtas.

**Tempo total esperado:** intake 10 min · validação 4 h · produção 1 dia · aprovação 1 dia.

---

## 4. FLUXO COMPLETO 2 — PALAVRA-CHAVE → ARTIGO + POST

**Cenário:** a BÚSSOLA identifica a oportunidade "panela de pressão não pega pressão"
(1.900 buscas/mês estimadas, concorrência média) e o MAESTRO decide transformar em
artigo + carrossel + Reel curto.

```
1. BÚSSOLA analisa a SERP e entrega o briefing SEO
   keyword: panela de pressão não pega pressão o que fazer
   intenção: informacional → transacional (perto de "conserto")
   URL: /blog/panela-de-pressao-nao-pega-pressao
   H2s: sintomas · 4 causas · o que testar em casa (seguro) · quando é caso de conserto
        · quanto custa consertar (sem preço, "depende") · como pedir orçamento
   FAQ: 8 perguntas
   CTA: WhatsApp
        │
        ▼
2. MAESTRO → OFICINA: validar as 4 causas e os testes seguros em casa
   OFICINA: "pode testar: borracha (visual e tato), válvula (assoprar não), pino (não
   mexer). NUNCA orientar a tampar/forçar. Incluir alerta de segurança."
        │
        ├──────────────────────────────┐
        ▼                              ▼
3. BÚSSOLA escreve o artigo       4. OFICINA escreve o roteiro educativo do carrossel
   (1.200 palavras + FAQ schema)      (6 slides: sintoma → causa → o que fazer → CTA)
        │                              │
        │                              ▼
        │                        5. LENTE monta carrossel + capa + versão Reel 20s
        │                              │
        │                              ▼
        │                        6. VITRINE legenda + hashtags + agendamento
        │                              │
        └──────────────┬───────────────┘
                       ▼
7. MAESTRO empacota: artigo no site + post GMB (versão curta) + carrossel + Reel
8. DONO aprova → publica artigo → pede indexação no Search Console
                → publica carrossel → publica Reel 2 dias depois
9. BÚSSOLA mede: posição da keyword, cliques, tempo na página
   VITRINE mede: alcance, salvamentos, DMs
   MAESTRO mede: orçamentos com ?text= do artigo vs do Instagram
        │
        ▼
10. Aprendizado: se o artigo converter melhor, BÚSSOLA propõe mais 3 artigos do mesmo
    cluster; se o Reel converter melhor, VITRINE transforma o artigo em série de 3 Reels.
```

**Regra de ouro desse fluxo:** um tema, três formatos, um CTA. O artigo trabalha o Google,
o carrossel e o Reel trabalham o Instagram, e o GMB pega a sobra local. O custo marginal
de produzir os 3 é baixo depois que a pesquisa e a validação técnica estão feitas.

---

## 5. FLUXO COMPLETO 3 — LEAD NO WHATSAPP → SERVIÇO → AVALIAÇÃO

```
DONO (WhatsApp) recebe "Olá! Vim pelo site..."
   │
   ├─ 1. Resposta em até 30 min no horário comercial (template T01 — `G-templates-mensagens.md`)
   │     "Oi, {{nome}}! Que bom te atender. Me manda uma foto da panela de lado e uma
   │      do fundo, e me diz seu bairro/cidade."
   │
   ├─ 2. Cliente manda foto → MAESTRO/OFICINA classifica o problema e o serviço
   │     (mapa problema → serviço da ficha)
   │
   ├─ 3. DONO confirma o valor (o agente NUNCA dá preço sozinho)
   │
   ├─ 4. Cliente aprova → coleta por Uber ou entrega na oficina
   │     template T20 (coleta por Uber — como funciona)
   │
   ├─ 5. Serviço executado → foto do antes/depois (com autorização) → vira conteúdo
   │
   ├─ 6. Entrega → templates T26 (panela pronta) e T28 (garantia)
   │
   ├─ 7. D+1 → template T32 pedindo avaliação no Google com link direto
   │
   ├─ 8. Avaliação recebida → MAESTRO aciona BÚSSOLA para responder em 24h
   │     (template T37 se for positiva ou T38 se for negativa)
   │
   └─ 9. D+30 → template T39 de reativação ("sua panela está precisando de revisão?")
```

**Onde os agentes entram:** passos 1, 4, 6, 7, 8 e 9 podem ser semi-automatizados
(seção G); passos 2 e 3 são sempre humanos. O conteúdo gerado no passo 5 alimenta o
fluxo 1, fechando o ciclo.

---

## 6. FLUXO COMPLETO 4 — CONTA EMPRESARIAL (B2B)

```
BÚSSOLA identifica busca "manutenção de panelas para restaurante BH"
   │
   ▼
MAESTRO briefa: conteúdo B2B + página + proposta
   │
   ├─ OFICINA define a lista de serviços de manutenção e a frequência segura
   │  (revisão de válvulas/borrachas, limpeza pesada, teste de vedação)
   │
   ├─ VITRINE + LENTE criam 1 carrossel B2B e 1 Reel de bastidor
   │
   ├─ BÚSSOLA cria página "manutenção de panelas para restaurantes" + post GMB
   │
   └─ MAESTRO monta a proposta comercial (sem preço fechado: faixas + visita)
        │
        ▼
DONO recebe lead B2B → visita/WhatsApp → proposta → contrato mensal
        │
        ▼
MAESTRO cria rotina: 1 post B2B/mês + 1 e-mail/WhatsApp de reativação trimestral
```

**Ativo estratégico:** cada restaurante atendido gera fotos de caldeirão e um depoimento
B2B — matéria-prima para os 3 canais e prova social de maior ticket.

---

## 7. ESTADOS, EXCEÇÕES E RETRABALHO

| Situação | Quem age | Ação |
|---|---|---|
| Envelope incompleto | Receptor | Devolve com lista do que falta (não tenta adivinhar) |
| Dúvida técnica | OFICINA | Parecer com "pode afirmar / não pode afirmar / ajustar para..." |
| Conflito de ângulo entre VITRINE e BÚSSOLA | MAESTRO | Decide com base no objetivo do mês (alcance vs. busca) |
| Dono pede mudança depois de aprovado | MAESTRO | Reabre a tarefa, registra feedback, versiona (v2) |
| Material bruto insuficiente | LENTE | Sugere alternativa com o que existe; não inventa |
| Prazo estourado | MAESTRO | Aciona buffer, reagenda, avisa o dono |
| Avaliação negativa | BÚSSOLA | Responde em 24 h + escalona ao dono + propõe correção |
| Erro publicado | MAESTRO | Corrige, registra, comunica; se grave, pausa publicação |
| Ferramenta fora do ar | MAESTRO | Plano B manual (checklist em papel/planilha) |

### Loop de melhoria

```
medir → comparar com meta → identificar a peça de melhor e pior desempenho
      → escrever 1 aprendizado → atualizar o guia de marca e o banco de conteúdo
      → repetir no mês seguinte
```

O MAESTRO mantém `00-contexto/historico-feedback.md` com: data, peça, feedback do dono,
métrica, decisão. Depois de 3 meses, esse arquivo vira o manual real do negócio.

---

## 8. RITUAL OPERACIONAL (rotina semanal de 1 pessoa)

| Dia | Tempo | O que acontece | Agente |
|---|---|---|---|
| Segunda 8h | 30 min | MAESTRO apresenta o pacote da semana (5 peças + 1 artigo) | Dono + MAESTRO |
| Segunda 10h | 15 min | Dono aprova/ajusta; agendamentos são feitos | MAESTRO |
| Terça–sexta | 20 min/dia | Dono grava 1 vídeo curto do serviço do dia (insumo) | Dono |
| Quarta | 10 min | BÚSSOLA responde avaliações novas + publica post GMB | BÚSSOLA |
| Quinta | 10 min | VITRINE responde DMs/comentários e agenda stories | VITRINE |
| Sexta 16h | 20 min | MAESTRO fecha relatório da semana (métricas + aprendizados) | MAESTRO |
| Sexta 17h | 10 min | Dono lê o relatório e responde 3 perguntas | Dono |

**Total do dono: ~2h/semana + o tempo de gravar.** Todo o resto é executado pelos agentes.

---

## 9. CONTRATOS DE ENTREGA (resumo executável)

| Entrega | Quem entrega | Formato mínimo aceito |
|---|---|---|
| Briefing | MAESTRO | Envelope YAML + insumo + objetivo + prazo |
| Parecer técnico | OFICINA | "pode afirmar / não pode / ajustar para" + fonte de segurança |
| Roteiro de mídia | LENTE | Cena a cena com timestamps, textos de tela, música, capa |
| Legenda | VITRINE | Texto final + hashtags + horário + checklist |
| Artigo/FAQ | BÚSSOLA | Markdown com H1/H2/H3, meta, FAQ, links internos, CTA |
| Post GMB | BÚSSOLA | Texto até 1.500 caracteres + imagem + CTA |
| Pacote semanal | MAESTRO | 5 peças + 1 artigo + métricas + próximo passo |
| Relatório mensal | MAESTRO | Funil, KPIs, top 3 conteúdos, 3 decisões do próximo mês |
