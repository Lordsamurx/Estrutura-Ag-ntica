# Estrutura 2: Site, Agência de Instagram e Atendimento no WhatsApp

Conserto de Panelas BH · versão 1.1 · 12/11/2026 (com as decisões do Samuel)
Documento de referência para todas as conversas do projeto.

---

## 1. Em uma frase

O Google já traz clientes. Agora a gente monta três frentes de agentes em cima disso: **um agente cuida do site**, **uma agência de agentes cuida do Instagram** (a partir das fotos e vídeos brutos do Cleonilton) e **um agente faz o pré-atendimento no WhatsApp**. Samuel só alimenta e aprova; Cleonilton só grava e atende.

---

## 2. Onde estamos hoje (a base)

| Peça | Situação em 12/11/2026 |
|---|---|
| Perfil do Google (Conserto de Panelas BH) | Funcionando, nota 5,0. Já gera ligações e mensagens sozinho. É a principal fonte de clientes. |
| Site | Quase pronto. Publicado em https://conserto-de-panelas-bh.netlify.app, mas a versão mais nova (Uber, garantia de 1 mês, robots.txt, sitemap.xml) ainda precisa do deploy: `netlify deploy --prod --dir site-novo`. Depois, colocar o link no perfil do Google. |
| WhatsApp (31) 98739-6336 | Canal de venda. Todo botão do site e todo post leva para cá. Hoje quem responde é o dono. |
| Instagram @consertopanelasbh | Plano pronto (pilares, grade), mas nenhum post publicado com a estrutura ainda. |
| Estrutura 1 (5 agentes) | Pasta "Estrutura Agentica" no PC: MAESTRO, BÚSSOLA, VITRINE, LENTE, OFICINA. É um manual (prompts e regras), não um sistema rodando. |

---

## 3. O desenho geral

```
                 CLIENTES
                    │
     ┌──────────────┼──────────────────────┐
     ▼              ▼                      ▼
 Perfil Google    SITE  ◄── Agente do Site   INSTAGRAM ◄── Agência de Instagram
 (ligações)        │       (BÚSSOLA)           │            (MAESTRO + LENTE +
     │             │                           │             VITRINE + OFICINA)
     │             └────────────┬──────────────┘                   ▲
     │                          ▼                                  │
     │               WhatsApp (31) 98739-6336               Samuel sobe fotos/vídeos
     │                          │                           do Cleonilton e aprova
     │                          ▼
     │             Agente de Atendimento (BALCÃO)
     │             pede foto + pergunta onde a pessoa está
     │                          │
     └──────────► CLEONILTON (dono) ◄──┘
                  dá orçamento, prazo, fecha o serviço
```

Quem prefere ligar, liga direto para o dono. O agente de atendimento é só uma opção a mais para quem chama no WhatsApp.

---

## 4. Frente 1: Agente do Site

**Quem é:** a BÚSSOLA da estrutura 1, agora com o site como responsabilidade principal (além do Google).

**O que faz:**
- Mantém o site no ar e atualizado (textos, fotos de antes e depois, serviços, FAQ).
- Garante que todo botão leve ao WhatsApp, com mensagem pronta por origem (site, Google, Instagram), para a gente saber de onde veio cada cliente.
- Cuida do básico de Google: robots.txt, sitemap, Search Console, Analytics, posts semanais no perfil do Google, respostas a avaliações (o dono aprova antes de publicar).
- Cria páginas por serviço com o tempo (polimento primeiro, porque é o serviço prioritário).

**O que Samuel faz:** roda o deploy quando há mudança (ou libera o comando para o Claude rodar no PC), coloca o link do site no perfil do Google, aprova mudanças de texto.

**Pendências imediatas:** deploy da versão nova; link no perfil do Google; domínio próprio (opcional, hoje é netlify.app).

---

## 5. Frente 2: Agência de Instagram

### Como funciona, do jeito que o Samuel descreveu

1. **Cleonilton grava**: fotos e vídeos dos procedimentos, limpezas, polimentos, antes e depois, bastidores da bancada. Material bruto, sem edição.
2. **Samuel sobe tudo** numa "caixa de entrada" única (ver seção 8).
3. **Um comando** ("Monta o pacote da semana") e os agentes trabalham:
   - separam e classificam o material (o que é antes/depois, processo, dica, bastidor);
   - editam: cortam, colocam na vertical, texto na tela, legenda queimada no vídeo, capa;
   - transformam em formatos: **posts**, **carrosséis**, **reels**, **vídeos editados** e **stories**;
   - escrevem a legenda (copy), hashtags e o chamado para o WhatsApp;
   - encaixam tudo na **grade de horários**.
4. **Samuel aprova** cada peça (aprovar / ajustar / pular). Nada vai ao ar sem aprovação.
5. **Publica ou agenda** (no começo, Samuel agenda no Meta Business Suite; depois pode ser automático, ver seção 8).
6. **Relatório** no fim do mês: o que deu mais mensagem no WhatsApp, o que repetir.

### O time da agência

| Agente | Papel na agência | O que muda em relação à estrutura 1 |
|---|---|---|
| **MAESTRO** | Gerente. Recebe o comando, organiza o lote, monta o pacote e entrega para aprovação. Único que fala com o Samuel. | Igual. |
| **LENTE** | Editor. Separa o material bruto, escolhe os melhores trechos e **entrega o arquivo editado** (reel, carrossel, capa, story). | Antes entregava só o roteiro de edição. Agora entrega o arquivo pronto. |
| **VITRINE** | Social media. Legenda, hashtags, CTA, horário, sequência de stories. | Agora também monta a grade de postagem da semana a partir do material que chegou. |
| **OFICINA** | Técnico. Confere se o que se diz sobre a panela está certo e seguro (pressão principalmente). | Igual. |

### Stories

O Cleonilton já posta stories por conta própria. A agência entrega um **kit de stories** junto com o pacote: exemplos prontos (bastidor do dia, enquete, caixinha de perguntas, repost de avaliação, "o que chegou na bancada hoje") que ele pode postar como estão ou usar de modelo.

### Grade de postagem (ponto de partida)

Vem do calendário da estrutura 1. Começa com 3 posts por semana no primeiro mês e sobe para 5 quando houver material suficiente.

| Dia | Horário | Formato | Tema |
|---|---|---|---|
| Segunda | 11h45 | Reel | Antes e depois (polimento de preferência) |
| Terça | 11h45 | Carrossel | Dica (conservação, segurança, erro comum) |
| Quarta | 18h10 | Reel | Bastidores da oficina |
| Quinta | 11h45 | Carrossel ou foto | Prova social real (com autorização) |
| Sexta | 18h10 | Reel | Antes e depois mais forte da semana |
| Sábado | 10h30 | Stories | Plantão de dúvidas, repost de avaliação |
| Todos os dias | — | Stories | Kit de stories do Cleonilton |

Rampa do mês 1: segunda, quarta e sexta. Horários são ponto de partida; depois de 4 semanas, ajustar pelo que trouxe mais mensagem.

### O que Samuel faz

Sobe o material, dá o comando, aprova (cerca de 15 a 30 minutos por semana) e agenda. O Cleonilton grava.

---

## 6. Frente 3: Agente de Atendimento no WhatsApp (BALCÃO)

**Nome sugerido:** BALCÃO (segue o padrão dos outros nomes; pode trocar).

**Papel:** pré-atendimento bem simples no (31) 98739-6336, antes de passar para o dono. Não vende, não dá preço, não diagnostica.

### Roteiro

```
Cliente manda mensagem
   │
   ▼
BALCÃO: "Oi! Aqui é o Conserto de Panelas BH. Para adiantar seu orçamento,
         me manda uma foto da panela (de lado e do fundo) e me diz em que
         bairro/cidade você está?"
   │
   ├─ mandou foto + local ──► "Recebi! O Cleonilton já vai te responder com
   │                           o orçamento." ──► passa para o dono
   │
   ├─ quer falar com pessoa / prefere ligar ──► passa para o dono na hora
   │
   ├─ pergunta preço ou prazo ──► "O valor e o prazo dependem da panela; o
   │                              Cleonilton te passa junto com o orçamento,
   │                              pela foto." ──► pede a foto
   │
   └─ panela industrial grande ──► avisa com educação que esse tipo a
                                    oficina não atende
```

### O que o BALCÃO pode responder (fatos confirmados)

| Pergunta | Resposta |
|---|---|
| Quanto custa? | Orçamento pela foto, quem passa é o dono. Nunca dar preço. |
| Quanto tempo demora? | Varia conforme o serviço; o prazo é confirmado junto com o orçamento. |
| Tem garantia? | Sim, 1 mês no serviço. |
| Como pago? | Pix, débito ou crédito. |
| Tem nota fiscal? | Não afirmar. Ainda não emitimos; se perguntarem, passar ao dono. |
| Preciso levar aí? | Não precisa vir: você chama um Uber para trazer a panela até a oficina e outro para levar de volta (o cliente chama e paga). Atende toda a Grande BH. |
| Vocês são certificados? | O dono tem certificado de curso de conserto de panelas. Nunca falar em Inmetro. |
| Panela industrial? | Panela industrial grande não atendemos. Restaurante com panela comum, sim. |

### Quando passa para o dono (sempre)

Foto recebida, pedido de preço ou prazo depois da foto, reclamação, cliente que quer falar com pessoa, restaurante/parceria, qualquer dúvida técnica.

---

## 7. O que muda em relação à estrutura 1

| Tema | Estrutura 1 (docs no PC) | Estrutura 2 (este doc) | Ação |
|---|---|---|---|
| LENTE | Entrega roteiro de edição | Entrega o arquivo editado | Atualizar `04-editor-midia.md` |
| Atendimento no WhatsApp | Só recursos nativos (saudação, ausência, respostas rápidas); automação só avisa o dono; nunca API não oficial no número principal | Novo agente BALCÃO fazendo a triagem | Criar prompt do BALCÃO. A regra de segurança continua: **nada de API não oficial no número principal** (ver seção 8) |
| Site | BÚSSOLA cuida de Google e SEO | BÚSSOLA vira também "agente do site" | Ajustar o papel no roster |
| Aprovação | Pacote semanal aprovado de uma vez (sexta 12h / segunda 10h, os arquivos divergem) | Samuel aprova **cada peça** dentro do pacote | Fixar um dia (sugestão: pacote sai sexta, Samuel aprova até segunda) |
| Quem publica | `C-fluxos` diz que o MAESTRO publica; roster diz o dono | Samuel publica/agenda; automação só depois de aprovado | Corrigir `C-fluxos-trabalho.md` |
| Panela industrial | Vários prompts e o banco de conteúdo ainda dizem que atende (105 menções) | NÃO atende panela industrial grande | Limpar prompts e banco de conteúdo |
| Uber | Calendário (quarta) diz "a gente busca e entrega por Uber" | O cliente chama e paga o Uber | Corrigir CTA da quarta no `D-calendario-editorial.md` |
| Nome | "Conserto de Panelas em Geral" na ficha | "Conserto de Panelas BH" (confirmado) | Ficha corrigida em 12/11 |
| Stories | Plano de stories feito pela agência | Cleonilton posta os dele; agência entrega kit de exemplos | Ajustar VITRINE |

---

## 8. Como implementar (recomendação)

### Caixa de entrada do material

Uma pasta única no Google Drive (ou a pasta do projeto aqui no Claude), com subpastas por semana: `2026-11-semana-3/bruto`, `/editado`, `/aprovado`. Samuel joga o material bruto ali, e o resto sai de lá.

### Comparação

| Frente | Aqui no Claude (conversa/projeto) | MCP (Claude ligado a Canva, Drive, Instagram) | n8n (automação rodando sozinha) |
|---|---|---|---|
| Agência de Instagram | Funciona já. Samuel sobe o material e dá o comando; Claude separa, edita os vídeos (cortes, vertical, legenda no vídeo) e escreve tudo. | Canva já está conectado: carrosséis, capas e stories com a identidade (azul-marinho e dourado). Drive como caixa de entrada. | Bom para a última etapa: agendar e publicar no Instagram depois do "aprovado". |
| Atendimento no WhatsApp | Não serve: precisa responder 24h sem ninguém abrir conversa. | Não serve sozinho. | É onde o BALCÃO roda de verdade (já há n8n conectado ao projeto). |
| Site | Funciona já (edição dos arquivos e deploy pelo PC). | — | Opcional (formulário do site para planilha + aviso). |

### Recomendação

1. **Agência de Instagram: começar aqui no Claude + Canva, sem esperar.** Primeiro lote assim que o Samuel subir o material. A publicação continua manual no Meta Business Suite no primeiro mês. Depois que o fluxo estiver redondo, o n8n entra só para agendar o que foi aprovado (exige conta profissional do Instagram ligada a uma página do Facebook).
2. **Atendimento: duas fases.**
   - **Fase 1 (esta semana, R$ 0):** o roteiro do BALCÃO vira a mensagem de saudação, a mensagem de ausência e as respostas rápidas do próprio WhatsApp Business. Já pede foto e local para todo mundo, sem risco nenhum ao número.
   - **Fase 2 (agente de verdade):** BALCÃO como agente no n8n ligado à **API oficial do WhatsApp (Meta Cloud API)**. Hoje a Meta permite usar o mesmo número no app do WhatsApp Business e na API ao mesmo tempo (o recurso se chama "coexistência"), então o dono continua atendendo pelo celular. Precisa de conta no Meta Business verificada e tem custo pequeno por conversa iniciada pela empresa (responder cliente dentro de 24h é grátis). **Nunca** usar API não oficial (Evolution, Baileys etc.) no número principal: se o WhatsApp bloquear, o negócio perde o canal de venda.
3. **Site:** fazer o deploy pendente e colocar o link no Google antes de qualquer outra coisa. É o passo que mais traz cliente pelo menor esforço.

### Ordem sugerida

| Semana | O quê |
|---|---|
| 1 | Deploy do site + link no Google. Ativar saudação/ausência/respostas rápidas (BALCÃO fase 1). Samuel sobe o primeiro lote de material. |
| 2 | Primeiro pacote da agência (3 posts + kit de stories), aprovação peça a peça, agendamento manual. Corrigir os docs da estrutura 1 (seção 7). |
| 3 e 4 | Repetir o pacote. Medir quais posts trouxeram mensagem no WhatsApp. Começar a verificação da conta no Meta Business. |
| Mês 2 | BALCÃO fase 2 no n8n. Agendamento automático do que for aprovado. Grade sobe para 5 posts/semana. |

---

## 9. Decisões do Samuel (12/11/2026)

1. **Caixa de entrada:** Samuel junta os conteúdos brutos numa pasta e sobe aqui no projeto.
2. **Instagram:** é conta profissional ligada a uma página do Facebook (dá para agendar automático no futuro).
3. **API oficial do WhatsApp:** não vai usar de início. O BALCÃO fica na **fase 1** (saudação, ausência e respostas rápidas do WhatsApp Business). Continua valendo: nada de API não oficial no número principal.
4. **Horário de atendimento:** seg a sex 8h às 18h, sáb 8h às 13h (confirmado).
5. **Nome oficial:** Conserto de Panelas BH.
6. **Imagem:** o Cleonilton aparece nos vídeos, geralmente com o equipamento trabalhando. Clientes não aparecem sem autorização.
7. **Dia do pacote:** pacote sai na sexta, Samuel aprova até segunda.

**Próximo passo:** Samuel sobe a primeira pasta de material bruto; a agência monta o primeiro pacote (3 posts + kit de stories).

---

## 10. Regras que valem para todos os agentes

- Nunca dar preço. Orçamento sempre pela foto, quem passa é o dono.
- Prazo: "varia conforme o serviço; confirmamos junto com o orçamento".
- Garantia de 1 mês. Pagamento Pix, débito ou crédito. Sem nota fiscal por enquanto.
- O cliente chama e paga o Uber (coleta e entrega). Atende toda a Grande BH.
- NÃO atende panela industrial grande.
- "Certificado" = certificado de curso de conserto de panelas do dono. Nunca dizer Inmetro.
- Polimento é o serviço prioritário (mais margem e mais visual).
- Todo CTA leva ao WhatsApp (31) 98739-6336.
- Nada é publicado sem aprovação do Samuel. Nada de depoimento inventado.

---

## 11. Resumo para colar em outras conversas

> **Estrutura 2 do Conserto de Panelas BH (12/11/2026).** O perfil do Google já gera clientes; o site (Netlify) está pronto e falta o deploy da versão nova + link no Google. Em cima disso, três frentes: (1) **Agente do Site** (BÚSSOLA): mantém o site e leva todo cliente ao WhatsApp (31) 98739-6336. (2) **Agência de Instagram** (MAESTRO gerencia, LENTE edita e entrega arquivo pronto, VITRINE faz legenda e grade, OFICINA confere a parte técnica): Samuel sobe fotos/vídeos brutos do Cleonilton numa caixa de entrada e, com um comando, recebe posts, carrosséis, reels, vídeos editados, kit de stories e grade de horários; aprova cada peça antes de publicar. (3) **Agente de Atendimento** (BALCÃO) no WhatsApp: pré-atendimento simples, pede foto da panela e onde a pessoa está, depois passa ao dono; quem prefere ligar liga direto. Implementação: agência começa aqui no Claude + Canva; BALCÃO fica, por decisão do Samuel, só com saudação/ausência/respostas rápidas do WhatsApp Business (sem API oficial por enquanto; nunca API não oficial no número principal). Material bruto: Samuel sobe numa pasta no projeto. Pacote sai sexta, aprovação até segunda. Cleonilton aparece nos vídeos trabalhando. Fatos fixos: sem preço fora do orçamento, prazo confirmado no orçamento, garantia 1 mês, Pix/débito/crédito, sem NF, cliente chama e paga o Uber, não atende panela industrial grande, certificado é de curso (nunca Inmetro), polimento é prioridade. Doc completo: `estrutura-agentica/ESTRUTURA-2-AGENCIA-E-ATENDIMENTO.md` (projeto) e pasta "Estrutura Agentica" no PC.
