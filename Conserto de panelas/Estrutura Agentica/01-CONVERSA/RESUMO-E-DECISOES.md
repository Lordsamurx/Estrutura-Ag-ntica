# RESUMO DA CONVERSA E DECISÕES DO PROJETO

> Síntese do que aconteceu na sessão que criou este projeto, das decisões tomadas e do que
> ficou pendente. A conversa completa está em `CONVERSA-COMPLETA.md`; o log bruto, em
> `conversa-bruta.jsonl.gz`.

---

## 1. LINHA DO TEMPO

| Turno | Data/hora (BRT) | Pedido | O que foi feito |
|---|---|---|---|
| 1 | 22/10/2026 21:23 | Criar toda a estrutura agêntica (A–G) para o negócio de conserto de panelas | Inspeção do site e do material bruto; definição de 5 agentes; 5 tarefas paralelas para teammates; produção de 21 arquivos; QA e correções; consolidação em arquivo único |
| 2 | 22/10/2026 21:49 | Colocar tudo dentro de uma pasta no projeto | Arquivo consolidado movido para dentro de `estrutura-agentica/`; README e caminhos atualizados |
| 3 | 25/10/2026 19:26 | Criar pasta na Área de Trabalho com a conversa + arquivos, organizada para um agente orquestrador entender | Pasta `Estrutura Agentica DeepSeek/` criada; transcrição gerada a partir do log da sessão; pacote copiado; documentação de orquestração; manifesto com hashes |

---

## 2. COMO FOI PRODUZIDO (turno 1)

1. **Inspeção real** do workspace: site em `site-novo/` (HTML/CSS/JS estático, Netlify),
   31 fotos em `Fotos e Videos/Conserto de panelas/`, projeto React antigo sem uso.
2. **Site publicado verificado:** HTTP 200; `robots.txt` retorna **404** (lacuna confirmada).
3. **5 agentes** definidos e escritos em paralelo por 5 teammates, cada um com escopo de
   arquivos disjunto e tarefa no quadro compartilhado.
4. **Contexto canônico** criado antes de tudo: ficha do negócio, guia de marca/tom e
   roster/handoff — para evitar inconsistência entre agentes.
5. **QA independente** revisou 21 arquivos: corrigiu 7 arquivos (índices, referências,
   encoding, schema, typo) e apontou conflitos de cadência entre seções.
6. **Consolidação e validação final**: encoding, contagens, JSON, links e fatos canônicos.

---

## 3. O TIME DEFINIDO

| Código | Nome | Função | Prompt |
|---|---|---|---|
| `maestro` | MAESTRO | Orquestra, mantém calendário, empacota e apresenta ao dono | `B-prompts/01-maestro.md` |
| `bussola` | BÚSSOLA | SEO local, site, Google Meu Negócio, artigos | `B-prompts/02-seo-google.md` |
| `vitrine` | VITRINE | Instagram: legendas, hashtags, stories, DMs | `B-prompts/03-instagram-manager.md` |
| `lente` | LENTE | Roteiros de Reels, carrosséis, stories, capas | `B-prompts/04-editor-midia.md` |
| `oficina` | OFICINA | Técnica, diagnóstico por foto e **segurança** (pode vetar) | `B-prompts/05-especialista-panelas.md` |

---

## 4. DECISÕES DE ESTRATÉGIA

1. **Dois funis, um destino:** Google/SEO → site → WhatsApp e Instagram → WhatsApp.
   Todo CTA aponta para `https://wa.me/5531987396336` com mensagem pré-preenchida.
2. **O dono fala só com o MAESTRO**; especialistas conversam entre si apenas no eixo de
   produção (VITRINE ↔ LENTE) e validação (todos → OFICINA).
3. **Nada publica sem aprovação** do dono na fase inicial (1 pacote por semana).
4. **Preço nunca em conteúdo**: orçamento sempre por foto, valor confirmado pelo dono.
5. **Segurança de panela de pressão** tem prioridade absoluta e poder de veto (OFICINA).
6. **Foco no que já existe:** não refazer o site, não migrar o projeto React antigo,
   alimentar Google e Instagram e medir.
7. **Pilares do Instagram:** Antes/Depois 40% · Dicas 25% · Prova Social 20% · Bastidores 15%.

---

## 5. DECISÕES DE CADÊNCIA (unificadas após o QA)

O QA apontou números divergentes entre seções (D, F, E e A). A decisão foi **uma tabela
canônica**, registrada no topo de `D-calendario-editorial.md`:

| Parâmetro | Decisão |
|---|---|
| Instagram (feed) | 5 posts/semana = 20/mês (rampa de 3/semana no 1º mês) |
| Google Meu Negócio | 1 post/semana = 4–5/mês |
| Blog / SEO | 1 artigo a cada 10 dias ≈ 3/mês (mínimo 2/mês) + 3 FAQs/mês |
| 1ª resposta no WhatsApp | ≤30 min no horário comercial |
| Pedido de avaliação | D+1 após a entrega |
| Aprovação do dono | pacote sexta 12h → aprovação segunda 10h |
| Nota no Google | meta 5,0; piso de alerta 4,8 |
| Tempo do dono | ~2h/semana + gravações |

Arquivos ajustados para refletir isso: `D-calendario-editorial.md`, `F-plano-implementacao.md`,
`E-banco-conteudo/04-google-meu-negocio.md`, `E-banco-conteudo/05-artigos-seo.md`,
`A-analise-estagio-atual.md`, `C-fluxos-trabalho.md`, `G-automacao.md`, `G-templates-mensagens.md`,
`B-prompts/01-maestro.md` e `B-prompts/03-instagram-manager.md` (horários e grade semanal).

---

## 6. CORREÇÕES FEITAS PELO QA

- Índice de templates com faixas erradas (`G-templates-mensagens.md`).
- Referências a templates desatualizadas (`C-fluxos-trabalho.md`).
- Seções LGPD/riscos trocadas (`G-automacao.md`).
- Títulos H1 duplicados em blocos (`E-banco-conteudo/01` e `02`).
- Schema apontando para imagem inexistente (`pressao.jpg` → `pressao.webp`).
- Promessa não confirmada ("não há taxa de orçamento") suavizada.
- README com comando de consolidação incompleto.
- Encoding: 100% UTF-8 sem BOM e sem mojibake.
- JSON n8n: 2 workflows, 21 nós, conexões e IDs validados.

---

## 7. FATOS DESCOBERTOS NA AUDITORIA DO SITE

- `robots.txt` → **404**; `sitemap.xml` inexistente.
- Sem GA4, sem Search Console, sem tag de anúncio.
- `title` com 77 caracteres e meta description com 172 (longos).
- JSON-LD `LocalBusiness` com `areaServed` de **10 cidades** (a operação atende 16).
- Faltam `og:url`, `twitter:card`, `FAQPage`, `Service`, `BreadcrumbList`.
- Formulário B2B (`#formEmpresa`) **não é capturado** (só abre WhatsApp; sem `name`/`method`/
  `data-netlify`).
- Site é de uma página só — limita SEO long-tail e páginas locais.

---

## 8. PENDÊNCIAS ABERTAS

1. **14 dados do dono** (prazo, garantia, pagamento, NF, Uber, acesso ao GMB, autorização de
   imagens, avaliações atuais, verba, marcas, atendimento, link curto, estoque de vídeo) —
   `02-ESTRUTURA-AGENTICA/00-contexto/ficha-negocio.md` §10.
2. **Lacunas técnicas do site** (10 itens) — ver `ESTADO-DO-PROJETO.md` §4.
3. **Decisão sobre o formulário B2B:** persistir lead (Netlify Forms/planilha) ou assumir que
   só abre WhatsApp.
4. **Estoque de vídeo:** os 30 Reels dependem de gravação; até formar estoque, priorizar
   carrossel, foto e stories.
5. **Primeiro pacote semanal** ainda não executado — é o próximo marco do projeto.

---

## 9. ARQUIVOS DESTA PASTA DE CONVERSA

| Arquivo | O que é |
|---|---|
| `CONVERSA-COMPLETA.md` | Transcrição legível dos 3 turnos (pedidos, respostas, ferramentas resumidas) |
| `RESUMO-E-DECISOES.md` | Este resumo |
| `conversa-bruta.jsonl.gz` | Log original completo da sessão (formato `.jsonl.gz`, ~900 KB) |

> O log bruto contém eventos internos do harness (raciocínio, chamadas de ferramenta, mensagens
> de teammates). Para ler: `gunzip conversa-bruta.jsonl.gz` e abrir como texto/JSONL.
