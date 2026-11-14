# Simulador Mobile

Página para ver um site em vários celulares ao mesmo tempo, com checklist mobile por site. Cartão no Linear: PRJ-26.

## Como abrir

**Jeito completo (com diagnóstico automático):** dois cliques em `abrir.bat`.
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
Também dá para abrir direto: `.../simulador-mobile/?url=/Conserto%20de%20panelas/site-novo/`.

## O que ele mostra

- Aparelhos: iPhone SE (375), iPhone 15 (393), iPhone Pro Max (430), Galaxy S (360), Galaxy A (384), Pixel (412), iPad mini (768), notebook (1366) e largura livre.
- Girar, zoom, recarregar, abrir em nova aba.
- **Diagnóstico automático** (só com o servidor da agência), por aparelho:
  - rolagem para o lado e quais elementos passam da tela (passe o mouse no selo);
  - botões e links menores que 40px;
  - textos abaixo de 13px;
  - links de WhatsApp, se há números diferentes e se o CTA aparece na primeira tela.
- **Checklist** de 12 itens por site, com anotações. "Copiar relatório" gera um texto em Markdown para colar no PR ou no Linear.

O checklist fica salvo só neste navegador.

## Limites

O iframe tem a largura real do aparelho, então o CSS de celular é aplicado igual ao do aparelho. Ele **não** simula
toque, teclado virtual, a barra do navegador do celular nem o Safari. A conferência final continua sendo
no celular de verdade. Links de WhatsApp clicados dentro do simulador ficam em branco porque o WhatsApp
não deixa ser aberto dentro de outra página; use ↗.
