# ESTRUTURA AGÊNTICA DEEPSEEK
## Projeto completo — Conserto de Panelas em Geral (BH e Grande BH)

> **O que é esta pasta:** o projeto inteiro salvo como um pacote autônomo — a conversa que o
> originou, o pacote estratégico (seções A–G), os 5 prompts de agentes, o banco de conteúdo e
> as instruções para um **agente orquestrador** ler, entender e operar tudo.
>
> **Versão:** 1.0 · **Salvo em:** 25/10/2026 · **Pasta:** `Área de Trabalho/Estrutura Agentica DeepSeek/`

---

## 1. EM UMA FRASE

Uma oficina de conserto de panelas em BH ganhou um **manual operacional de marketing com 5
agentes de IA**, dois funis (Google → site → WhatsApp e Instagram → WhatsApp) e conteúdo
pronto para 3 meses — tudo documentado, com a conversa que gerou o projeto e um orquestrador
para colocar em prática.

---

## 2. PARA QUE SERVE CADA PARTE

| Pasta/arquivo | Para quem | Serve para |
|---|---|---|
| `00-COMECE-AQUI.md` | humano e agente | Visão geral e ponto de entrada (este arquivo) |
| `MANIFEST.json` | agente/ferramenta | Inventário com papéis e hashes (leitura por máquina) |
| `01-CONVERSA/` | humano e agente | Entender o histórico, as decisões e as correções |
| `02-ESTRUTURA-AGENTICA/` | agente e dono | O pacote operacional: prompts, calendário, conteúdo, plano, automação |
| `03-ORQUESTRADOR/` | agente | Como ler o projeto, operar e saber o estado atual |
| `04-REFERENCIA/` | consulta | Snapshot do site publicado, inventário de mídia e fontes |

---

## 3. TRÊS FORMAS DE USAR

### A) Você quer entender o projeto (15–30 min)
1. Leia este arquivo.
2. `01-CONVERSA/RESUMO-E-DECISOES.md` — o que foi decidido e por quê.
3. `02-ESTRUTURA-AGENTICA/COMO-FUNCIONA.md` — explicação simples da estrutura.
4. `03-ORQUESTRADOR/ESTADO-DO-PROJETO.md` — o que está pronto e o que falta.

### B) Você quer colocar os agentes para trabalhar (20 min)
1. Abra um Projeto no ChatGPT, Claude ou Gemini.
2. Cole `03-ORQUESTRADOR/PROMPT-ORQUESTRADOR.md` como instrução do projeto.
3. Anexe os arquivos de `02-ESTRUTURA-AGENTICA/00-contexto/` e os prompts de `B-prompts/`
   (ou aponte os caminhos, se a ferramenta lê arquivos).
4. Mande: *"Monte o pacote da semana com o material que existe hoje."*

### C) Você quer automação de verdade
1. Leia `02-ESTRUTURA-AGENTICA/G-automacao.md` §6 (automações P0).
2. Importe `02-ESTRUTURA-AGENTICA/n8n-workflows.json` no n8n (1 workflow por arquivo; comando
   de separação no §8 do G).
3. Use os templates de `G-templates-mensagens.md` no WhatsApp Business (respostas rápidas).

---

## 4. O QUE ESTÁ PRONTO (resumo)

- **Análise:** 20 lacunas priorizadas, 7 P0, quick wins de 7 dias, 10 riscos, maturidade 1,8/5.
- **5 agentes:** MAESTRO, BÚSSOLA (SEO/Google), VITRINE (Instagram), LENTE (mídia), OFICINA (técnica/segurança).
- **Conteúdo:** 30 Reels, 20 carrosséis, 15 legendas, 10 posts GMB, 10 artigos SEO (1 modelo completo).
- **Operação:** calendário com datas sazonais 2026–2027, 55 templates de mensagens, 2 workflows n8n.
- **Plano:** 30/60/90 dias, custo R$ 0 no 1º mês, KPIs com fórmula, checklist D1–D14.
- **Histórico:** conversa completa (3 turnos) + decisões + log bruto da sessão.

---

## 5. O QUE FALTA (depende do dono ou do site)

- **14 dados do negócio** (prazo, garantia, pagamento, NF, Uber, acesso ao Google, autorização
  de fotos, nº atual de avaliações, verba, marcas, atendimento, link curto, estoque de vídeo).
- **10 pendências técnicas do site:** `robots.txt` (404), `sitemap.xml`, GA4/Search Console,
  `areaServed` incompleto, `og:url`/`twitter:card`, schema `FAQPage`/`Service`, formulário B2B
  que não persiste lead, domínio próprio.
- **Primeiro pacote semanal** publicado (marco inicial da operação).

Detalhes: `03-ORQUESTRADOR/ESTADO-DO-PROJETO.md` §4 e §5.

---

## 6. REGRAS QUE ATRAVESSAM O PROJETO

1. Nunca inventar preço, prazo ou garantia — orçamento sempre por foto no WhatsApp.
2. Todo CTA → (31) 98739-6336 · `https://wa.me/5531987396336` com `?text=` pré-preenchido.
3. Segurança de panela de pressão acima de tudo (borracha, válvula, pino, teste de vedação).
4. Não inventar avaliação, prêmio, cliente ou depoimento.
5. Foto de cliente só com autorização; sem banco de imagens genérico.
6. Português brasileiro, tom mineiro leve e confiável; o dono aprova antes de publicar.

---

## 7. CONVENÇÕES E AVISOS

- **Caminhos na conversa:** a transcrição cita caminhos do workspace original
  (`panela-precisa-online-main/...`). Aqui o pacote está copiado em `02-ESTRUTURA-AGENTICA/`;
  a referência ao site está em `04-REFERENCIA/SITE-ATUAL/`.
- **Log bruto:** `01-CONVERSA/conversa-bruta.jsonl.gz` (JSONL comprimido; abra com qualquer
  descompactador e leia como texto).
- **Encoding:** todos os arquivos em UTF-8 sem BOM; markdown com fim de linha LF.
- **Manutenção:** ao mudar cadência, regra ou dado do negócio, atualize a ficha e o
  `RESUMO-E-DECISOES.md`; depois regenere o arquivo consolidado (comando no README do pacote).
- **Nada aqui foi publicado automaticamente:** o projeto é documental até o dono aprovar e
  publicar o primeiro pacote.

---

## 8. PRÓXIMO PASSO RECOMENDADO

Abra `03-ORQUESTRADOR/PROMPT-ORQUESTRADOR.md`, cole em um Projeto de IA e envie:

```
Leia o projeto e me diga: (1) o que já está pronto, (2) o que você precisa de mim
para montar o primeiro pacote semanal, (3) qual é o primeiro passo de site/Google.
```

O agente deve responder com o intake (máx. 4 perguntas) e o pacote da semana.
