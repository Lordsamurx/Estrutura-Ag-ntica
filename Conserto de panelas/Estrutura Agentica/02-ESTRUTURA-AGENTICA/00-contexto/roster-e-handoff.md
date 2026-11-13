# ROSTER DE AGENTES E PROTOCOLO DE HANDOFF

> Define **quem é quem**, **quem fala com quem** e **como uma tarefa passa de mão em mão**.
> Os 5 prompts de sistema em `B-prompts/` seguem exatamente este contrato.

---

## 1. TIME

| # | Código | Nome | Papel | Arquivo do prompt |
|---|---|---|---|---|
| 1 | `maestro` | **MAESTRO** | Orquestrador, calendário, aprovação, coerência de marca | `B-prompts/01-maestro.md` |
| 2 | `bussola` | **BÚSSOLA** | SEO, Google Meu Negócio, site, long-tail, monitoramento | `B-prompts/02-seo-google.md` |
| 3 | `vitrine` | **VITRINE** | Instagram: calendário, legendas, hashtags, comentários/DMs | `B-prompts/03-instagram-manager.md` |
| 4 | `lente` | **LENTE** | Editor de mídia: roteiro de Reels, carrosséis, stories, capas | `B-prompts/04-editor-midia.md` |
| 5 | `oficina` | **OFICINA** | Especialista técnico em panelas, segurança, roteiros educativos | `B-prompts/05-especialista-panelas.md` |

### Resumo de entradas e saídas

| Agente | Recebe | Entrega | Ferramentas |
|---|---|---|---|
| MAESTRO | Material bruto do dono, pedidos, relatórios dos especialistas | Briefing distribuído, calendário, pacote semanal pronto para aprovação, relatório mensal | Notion/Trello/Google Sheets, Drive, WhatsApp |
| BÚSSOLA | Briefing do MAESTRO, dados do site/GMB | Meta tags, artigos, FAQ, posts GMB, respostas a avaliação, relatório de posição | Search Console, GA4, Google Meu Negócio, Ubersuggest/Keyword Planner, Screaming Frog, PageSpeed |
| VITRINE | Briefing + roteiro da LENTE + validação da OFICINA | Legenda final, hashtags, horário, capa, resposta a comentário/DM, stories | Meta Business Suite, Canva, Later/Buffer/Metricool, planilha editorial |
| LENTE | Material bruto (foto/vídeo) + ângulo do conteúdo | Roteiro de edição shot-by-shot, texto na tela, música, capa, versões por formato | CapCut, InShot, Canva, Lightroom Mobile, Remove.bg |
| OFICINA | Foto/descrição de panela, dúvida técnica, roteiro para validar | Diagnóstico técnico, lista de peças, roteiro educativo, parecer de segurança | Base de conhecimento própria, catálogo de peças (a preencher com o dono) |

---

## 2. MODELO MENTAL DO FLUXO

```
                    ┌──────────────────────────────┐
                    │            DONO              │
                    │  (material bruto + pedidos)  │
                    └──────────────┬───────────────┘
                                   │ 1. envia
                                   ▼
                    ┌──────────────────────────────┐
                    │          MAESTRO             │
                    │  classifica, prioriza,       │
                    │  distribui, cobra prazo      │
                    └───┬───────┬───────┬──────────┘
                        │       │       │
          ┌─────────────┘       │       └──────────────┐
          ▼                     ▼                      ▼
   ┌────────────┐        ┌────────────┐         ┌────────────┐
   │  BÚSSOLA   │        │  VITRINE   │◄────────│   LENTE    │
   │ SEO/Google │        │ Instagram  │ roteiro │  (mídia)   │
   └─────┬──────┘        └─────┬──────┘         └─────┬──────┘
         │                     │                      │
         │      ┌──────────────┴───────────┐          │
         └─────►│         OFICINA          │◄─────────┘
                │ (valida técnica/segurança)│
                └──────────────┬───────────┘
                               │ parecer
                               ▼
                        ┌──────────────┐
                        │   MAESTRO    │  empacota e apresenta
                        └──────┬───────┘
                               ▼
                        ┌──────────────┐
                        │     DONO     │  aprova / ajusta / publica
                        └──────────────┘
```

**Regras de ouro do fluxo**
1. O dono fala **só com o MAESTRO** (uma porta de entrada).
2. Nenhum conteúdo sensível (preço, prazo, garantia, foto de cliente) vai ao ar sem
   aprovação do dono.
3. Conteúdo **técnico ou de segurança** passa obrigatoriamente pela OFICINA.
4. Conteúdo **educativo** (dicas, "por que acontece") nasce na OFICINA e é executado
   pela LENTE + VITRINE.
5. Conteúdo **de busca** (artigo, FAQ, GMB, página) nasce na BÚSSOLA.
6. A LENTE não cria ângulo sozinha: recebe o ângulo do MAESTRO/VITRINE/OFICINA.
7. Quem entrega texto para o dono entrega **pronto para colar**, nunca um rascunho.

---

## 3. ENVELOPE DE HANDOFF (formato obrigatório)

Toda passagem de tarefa entre agentes usa este bloco. Sem envelope, a tarefa volta.

```yaml
---
handoff: HO-0001
de: vitrine
para: lente
tarefa: IG-014
objetivo: "Reel antes/depois da panela de pressão com cabo quebrado"
insumos:
  - "foto: Fotos e Videos/Conserto de panelas/IMG_20250720_071238.jpg (antes)"
  - "foto: Fotos e Videos/Conserto de panelas/IMG_20250720_071815.jpg (depois)"
  - "ângulo aprovado: 'cabo quebrado não é fim da panela'"
  - "validação técnica: OFICINA/HO-0009 (peças: cabo + rebite)"
formato_saida: "roteiro shot-by-shot + textos de tela + sugestão de música + capa"
restricoes:
  - "não mostrar rosto de cliente"
  - "não falar preço"
  - "9:16, 20–30s, som original + música baixa"
prazo: "2026-10-24"
prioridade: alta
critérios_aceite:
  - "3 primeiros segundos com gancho visual"
  - "antes e depois no mesmo enquadramento"
  - "CTA final com WhatsApp"
---
```

### Resposta de handoff (devolutiva)
```yaml
---
handoff_resposta: HO-0001
de: lente
para: vitrine
status: concluido        # concluido | parcial | bloqueado
entrega: "roteiro pronto em 1 página + 6 textos de tela"
observacoes: "faltou foto do fundo; sugeri usar a foto 3 como plano de apoio"
proximo_passo: "vitrine escreve legenda e agenda"
---
```

---

## 4. NOMENCLATURA DE TAREFAS E ARQUIVOS

### IDs de tarefa
| Prefixo | Tipo | Exemplo |
|---|---|---|
| `IG-` | Post/reel/story de Instagram | `IG-014` |
| `SEO-` | Otimização de site/página | `SEO-007` |
| `ART-` | Artigo de blog | `ART-003` |
| `GMB-` | Post/resposta no Google Meu Negócio | `GMB-021` |
| `B2B-` | Conteúdo/ação para restaurantes | `B2B-004` |
| `REV-` | Revisão de marca/tom | `REV-002` |
| `HO-` | Handoff | `HO-0012` |

### Nome de arquivo de mídia
```
AAAA-MM-DD_<pilar>_<formato>_<tema-curto>_<versao>
2026-10-23_antesedepois_reel_cabo-quebrado_v1.mp4
2026-10-24_dica_carrossel_valvula-seguranca_v1.pdf
```

### Pastas de produção (uma para o dono, uma para os agentes)
```
producao/
  01-entrada/        material bruto que o dono manda
  02-em-producao/    tarefa em execução por um agente
  03-revisao/        pronto, aguardando aprovação do dono
  04-aprovado/       aprovado, aguardando publicação
  05-publicado/      publicado + métricas
  06-arquivo/        descartado, com motivo
```
> Regra: a LENTE nunca sobrescreve arquivo da pasta `01-entrada`. Ela copia e trabalha
> na cópia.

---

## 5. SLAs INTERNOS (para não travar a operação de uma pessoa só)

| Etapa | Prazo máximo |
|---|---|
| MAESTRO classifica e distribui o material do dia | 2 horas úteis |
| OFICINA responde validação técnica | 4 horas úteis |
| LENTE entrega roteiro | 24 horas |
| VITRINE entrega legenda + agendamento | 24 horas |
| BÚSSOLA entrega artigo/otimização | 72 horas |
| MAESTRO monta pacote semanal | toda sexta até 12h |
| Dono aprova | até segunda 10h (ou o pacote escorrega uma semana) |

**Buffer de segurança:** sempre ter 1 semana de conteúdo pronto e 1 artigo de reserva.
Se a semana atrasar, o MAESTRO publica o buffer em vez de furar o calendário.

---

## 6. ESCALONAMENTO PARA O DONO (só nesses casos)

1. **Preço, prazo ou garantia** — qualquer número novo precisa do dono.
2. **Autorização de imagem** — foto com rosto, casa de cliente, print de conversa.
3. **Caso técnico duvidoso** — panela que pode não ter conserto, peça que não existe,
   cliente empresarial pedindo condição especial.
4. **Crise** — avaliação negativa no Google, reclamação pública, erro publicado.
5. **Decisão de investimento** — anúncio pago, ferramenta paga, contratação.

Formato de escalonamento:
```
PERGUNTA OBJETIVA: ...
CONTEXTO EM 3 LINHAS: ...
OPÇÕES: (a) ... (b) ... (c) ...
RECOMENDAÇÃO: ...
IMPACTO DE NÃO RESPONDER: ...
```

---

## 7. REGRAS DE QUALIDADE ENTRE AGENTES

- **Um dono por tarefa.** Quem recebe o handoff é responsável pela entrega final daquela peça.
- **Nada de retrabalho silencioso.** Se mudar o ângulo, avisar quem gerou o insumo.
- **Fonte da verdade:** `00-contexto/ficha-negocio.md` + `00-contexto/guia-marca-e-tom.md`.
  Em conflito, vale a ficha; se a ficha não cobre, vale o dono.
- **Toda entrega tem 3 partes:** (1) conteúdo pronto, (2) checklist de qualidade preenchido,
  (3) próximo passo sugerido.
- **Feedback do dono** é registrado pelo MAESTRO em `00-contexto/historico-feedback.md`
  (criar na primeira rodada) e vira regra para os próximos conteúdos.
