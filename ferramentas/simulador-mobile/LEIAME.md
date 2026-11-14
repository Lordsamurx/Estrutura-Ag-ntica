# Simulador Mobile

Página para ver sites em vários celulares ao mesmo tempo e comparar versões lado a lado, com checklist mobile por site. Cartão no Linear: PRJ-26.

## Como abrir

**Jeito completo (com diagnóstico e "Rolar junto"):** dois cliques em `abrir.bat`.
Ele sobe um servidor da pasta `Estrutura Agentica` na porta 5190 e abre
http://localhost:5190/ferramentas/simulador-mobile/ no navegador. Precisa do Node instalado.
Para fechar, feche a janela preta do servidor.

**Jeito rápido (sem diagnóstico):** dois cliques em `index.html`. Funciona com qualquer
endereço (Netlify, `localhost:5180`), mas sem os selos automáticos.

## Endereços

| O que testar | Endereço para colar |
|---|---|
| Site do Conserto de panelas, com diagnóstico | `/Conserto%20de%20panelas/site-novo/` |
| Site de um cliente em `Sites/`, com diagnóstico | `/Sites/clientes/<cliente>/site/` (o caminho da pasta do site) |
| Servidor local de uma tarefa | `localhost:5180` |
| Site publicado | `conserto-de-panelas-bh.netlify.app` |

Um caminho que começa com `/` é lido da pasta da agência, por isso tem diagnóstico.

Também dá para abrir já com as janelas prontas, repetindo `url=`:
`.../simulador-mobile/?url=/Conserto%20de%20panelas/site-novo/&url=https://conserto-de-panelas-bh.netlify.app/`

## O que ele faz

- **Aparelhos:** cerca de 40 modelos (Apple, Samsung, Motorola, Xiaomi, Google, tablets e computadores),
  com busca por modelo, marca ou largura (ex.: `galaxy a`, `moto g`, `390`, `popular`).
  Atalhos: Populares no Brasil, Menor e maior, Celular + tablet + PC, Só iPhone. Também aceita largura livre.
  Modelos com a mesma tela aparecem juntos (ex.: "Galaxy S22 / S23 / S24"). As medidas dos Android são aproximadas.
- **Dividir tela:** até 3 janelas (A, B, C) lado a lado. Cada janela carrega um site; os aparelhos são os mesmos
  nas três, então o iPhone SE da janela A fica na mesma altura do iPhone SE da janela B. Bom para comparar
  a versão nova com a publicada, ou duas propostas de layout.
- **Rolar junto:** rolar um aparelho rola todos os outros na mesma proporção. Só funciona nos sites com diagnóstico.
- Girar, zoom (caber na tela, 100%, 75%, 50%), recarregar, abrir em nova aba.
- **Diagnóstico automático** (só com o servidor da agência), por aparelho:
  - rolagem para o lado e quais elementos passam da tela (passe o mouse no selo);
  - botões e links menores que 40px;
  - textos abaixo de 13px;
  - links de WhatsApp, se há números diferentes e se o CTA aparece na primeira tela.
- **Checklist** de 12 itens por site, com anotações. Com a tela dividida, escolha no topo do checklist qual janela
  está sendo conferida (ou clique na janela). "Copiar relatório" gera um texto em Markdown para colar no PR ou no Linear.

O checklist e as escolhas ficam salvos só neste navegador.

## Limites

O iframe tem a largura real do aparelho, então o CSS de celular é aplicado igual ao do aparelho. Ele **não** simula
toque, teclado virtual, a barra do navegador do celular nem o Safari. A conferência final continua sendo
no celular de verdade. Links de WhatsApp clicados dentro do simulador ficam em branco porque o WhatsApp
não deixa ser aberto dentro de outra página; use o botão de abrir em nova aba.
