# MAPA DO PROJETO — o que é cada arquivo e onde encontrar

> Use este mapa para navegar sem abrir tudo. Para operar, leia
> `PROMPT-ORQUESTRADOR.md`. Para o status atual, `ESTADO-DO-PROJETO.md`.

---

## 1. ÁRVORE COMENTADA

```
Estrutura Agentica DeepSeek/
│
├── 00-COMECE-AQUI.md                      Entrada do projeto: o que é, para que serve, como usar
├── MANIFEST.json                          Inventário máquina-legível: caminho, papel, tamanho, sha256
│
├── 01-CONVERSA/                           Histórico que originou o projeto
│   ├── CONVERSA-COMPLETA.md                 Transcrição legível (3 turnos, 188 ferramentas resumidas)
│   ├── RESUMO-E-DECISOES.md                Decisões, correções do QA, pendências e próximos passos
│   └── conversa-bruta.jsonl.gz             Log original completo da sessão DSH (.jsonl.gz)
│
├── 02-ESTRUTURA-AGENTICA/                 O PACOTE OPERACIONAL (o que os agentes usam)
│   ├── README.md                            Índice do pacote + instalação em 20 min + regras
│   ├── ESTRUTURA-AGENTICA-COMPLETA.md       Tudo em um arquivo (capa + sumário, leitura/impressão)
│   ├── COMO-FUNCIONA.md                     Explicação leiga da estrutura (para o dono entender)
│   ├── 00-contexto/
│   │   ├── ficha-negocio.md                 FONTE DA VERDADE: fatos, serviços, cidades, keywords, dados faltantes
│   │   ├── guia-marca-e-tom.md              Tom de voz, copy, hashtags, identidade visual, exemplos
│   │   └── roster-e-handoff.md              Time, envelope de handoff, SLAs, escalonamento
│   ├── B-prompts/                           OS 5 PROMPTS DE SISTEMA (cada um autossuficiente)
│   │   ├── 01-maestro.md                    Orquestrador
│   │   ├── 02-seo-google.md                 BÚSSOLA — SEO local + Google Meu Negócio
│   │   ├── 03-instagram-manager.md          VITRINE — Instagram
│   │   ├── 04-editor-midia.md               LENTE — roteiros de Reels/carrosséis/stories
│   │   └── 05-especialista-panelas.md       OFICINA — técnica e segurança
│   ├── A-analise-estagio-atual.md           Diagnóstico: o que existe, lacunas P0/P1/P2, riscos, quick wins
│   ├── C-fluxos-trabalho.md                 Comunicação entre agentes, handoffs, 4 fluxos completos
│   ├── D-calendario-editorial.md            Semana IG, mês GMB, trimestre SEO, datas sazonais, cadência canônica
│   ├── E-banco-conteudo/
│   │   ├── 01-reels.md                      30 ideias de Reel com roteiro (R01–R30)
│   │   ├── 02-carrosseis.md                 20 carrosséis educativos (C01–C20)
│   │   ├── 03-legendas-antes-depois.md      15 legendas prontas (L01–L15)
│   │   ├── 04-google-meu-negocio.md         10 posts GMB prontos (P1–P10)
│   │   └── 05-artigos-seo.md                10 pautas (ART-01–ART-10) + artigo modelo completo
│   ├── F-plano-implementacao.md             30/60/90 dias, ferramentas e custos, KPIs, riscos
│   ├── G-automacao.md                       Automação ponta a ponta (Make × n8n × Zapier, LGPD)
│   ├── G-templates-mensagens.md             55 templates de mensagens (T01–T55)
│   └── n8n-workflows.json                   2 workflows importáveis no n8n (JSON validado)
│
├── 03-ORQUESTRADOR/                       Instruções para o agente que administra o projeto
│   ├── PROMPT-ORQUESTRADOR.md               System prompt pronto para colar (+ protocolo de leitura)
│   ├── MAPA-DO-PROJETO.md                   Este arquivo
│   └── ESTADO-DO-PROJETO.md                 Status, pendências, próximos 7 dias/30 dias
│
└── 04-REFERENCIA/                         Material de consulta
    ├── SITE-ATUAL/                          Snapshot do site publicado (index.html, script.js, style.css)
    ├── INVENTARIO-DE-MIDIA.md               31 fotos brutas + 10 imagens do site (caminhos e tamanhos)
    └── FONTES-E-ACESSOS.md                  Links, origem de cada dado, o que confirmar
```

**Total:** 23 arquivos no pacote + 3 da conversa + 3 do orquestrador + 5 de referência
+ entrada/manifesto = pasta pronta para abrir como projeto.

---

## 2. ONDE ESTÁ CADA COISA (busca rápida)

| Eu quero… | Vá para |
|---|---|
| Saber os fatos do negócio (endereço, preço, cidades) | `02-ESTRUTURA-AGENTICA/00-contexto/ficha-negocio.md` |
| Escrever no tom certo | `02-ESTRUTURA-AGENTICA/00-contexto/guia-marca-e-tom.md` |
| Entender quem faz o quê e como se passam tarefas | `00-contexto/roster-e-handoff.md` + `C-fluxos-trabalho.md` |
| Copiar o prompt de um agente | `B-prompts/` (5 arquivos) |
| Saber o que postar e quando | `D-calendario-editorial.md` |
| Pegar conteúdo pronto (Reel, carrossel, legenda, GMB, artigo) | `E-banco-conteudo/` |
| Instalar medicação/SEO e seguir 30/60/90 | `F-plano-implementacao.md` |
| Automatizar WhatsApp/site/relatórios | `G-automacao.md` + `n8n-workflows.json` |
| Responder cliente sem errar | `G-templates-mensagens.md` |
| Entender o histórico do projeto | `01-CONVERSA/CONVERSA-COMPLETA.md` |
| Ver o site como está hoje | `04-REFERENCIA/SITE-ATUAL/index.html` |
| Ver quantas fotos/vídeos existem | `04-REFERENCIA/INVENTARIO-DE-MIDIA.md` |

---

## 3. ORDEM DE LEITURA POR PERFIL

> Caminhos a partir da raiz da pasta `Estrutura Agentica DeepSeek/`.

**Agente orquestrador (primeira execução):**
`00-COMECE-AQUI.md` → `03-ORQUESTRADOR/PROMPT-ORQUESTRADOR.md` →
`02-ESTRUTURA-AGENTICA/00-contexto/ficha-negocio.md` →
`02-ESTRUTURA-AGENTICA/00-contexto/guia-marca-e-tom.md` →
`02-ESTRUTURA-AGENTICA/00-contexto/roster-e-handoff.md` →
`02-ESTRUTURA-AGENTICA/C-fluxos-trabalho.md` → `03-ORQUESTRADOR/ESTADO-DO-PROJETO.md`.

**Dono com 15 minutos:**
`00-COMECE-AQUI.md` → `02-ESTRUTURA-AGENTICA/A-analise-estagio-atual.md` §1 e §5 →
`02-ESTRUTURA-AGENTICA/F-plano-implementacao.md` §0 e §9.

**Dono para começar a postar hoje:**
`02-ESTRUTURA-AGENTICA/D-calendario-editorial.md` §1 →
`02-ESTRUTURA-AGENTICA/E-banco-conteudo/03-legendas-antes-depois.md` →
`02-ESTRUTURA-AGENTICA/E-banco-conteudo/01-reels.md` (primeiros 3) →
`02-ESTRUTURA-AGENTICA/G-templates-mensagens.md` T01/T02.

**Quem cuida de SEO/site:**
`02-ESTRUTURA-AGENTICA/B-prompts/02-seo-google.md` →
`02-ESTRUTURA-AGENTICA/E-banco-conteudo/05-artigos-seo.md` →
`02-ESTRUTURA-AGENTICA/A-analise-estagio-atual.md` §3 →
`02-ESTRUTURA-AGENTICA/F-plano-implementacao.md` Fase 1.

**Quem cuida de automação:**
`02-ESTRUTURA-AGENTICA/G-automacao.md` §6 (P0) → `02-ESTRUTURA-AGENTICA/n8n-workflows.json` →
`02-ESTRUTURA-AGENTICA/G-templates-mensagens.md`.

---

## 4. COMO AS PEÇAS SE CONECTAM

```
DONO ──material bruto──► ORQUESTRADOR (MAESTRO)
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   BÚSSOLA (SEO/GMB)     VITRINE (Instagram)    LENTE (mídia)
        │                     │                     │
        └──────────────┬──────┴─────────────────────┘
                       ▼
                  OFICINA (valida técnica e segurança)
                       │
                       ▼
              PACOTE SEMANAL ──► DONO aprova ──► publica
```

- As **regras** vêm de `00-contexto/` (ficha + guia + roster).
- As **entregas** seguem `B-prompts/` (especialistas) e `C` (fluxos).
- O **ritmo** vem de `D`; a **matéria-prima** de `E`; a **operação e medição** de `F` e `G`.
- A **memória do projeto** está em `01-CONVERSA/` (histórico + decisões).

---

## 5. CONVENÇÕES

- **IDs:** `IG-` Instagram · `SEO-` página/site · `ART-` artigo · `GMB-` Google ·
  `B2B-` empresarial · `REV-` revisão · `HO-` handoff.
- **Arquivos de mídia:** `AAAA-MM-DD_<pilar>_<formato>_<tema>_v1` (ex.:
  `2026-10-26_antesedepois_reel_cabo-quebrado_v1.mp4`).
- **Pastas de produção:** `producao/01-entrada → 02-em-producao → 03-revisao → 04-aprovado →
  05-publicado → 06-arquivo` (criar no workspace de trabalho; descrito no roster).
- **Encoding:** todos os `.md`/`.json` em UTF-8 sem BOM, fim de linha LF.
- **Idioma:** pt-BR em todo conteúdo de cliente.
