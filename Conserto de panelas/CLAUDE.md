# Conserto de Panelas (cliente: Clenilton)

Primeiro case da agência. Sem cobrança, usado como portfólio completo. O Clenilton é pai do Samuel.
Trabalhando aqui, altere só arquivos desta pasta.

## O negócio
Restauração completa de panelas: pega uma panela bem antiga e devolve como nova.
Mensagem central: **"Sua panela velha volta nova."**

Serviços: conserto em geral, limpeza, polimento, troca de cabos, troca de pinos, conserto de borracha (vedação, inclusive de panela de pressão).

## Fonte de verdade
`Estrutura Agentica/02-ESTRUTURA-AGENTICA/00-contexto/ficha-negocio.md` tem endereço, WhatsApp, Instagram, cidades atendidas e respostas já confirmadas. Consulte antes de escrever qualquer dado. Não copie esses dados para outros arquivos de contexto; aponte para a ficha.

Resumo (confirmado em 13/11/2026): Instagram @consertopanelasbh, WhatsApp (31) 98739-6336, oficina no Belmonte (BH), foco inicial em BH. A maioria chama Uber para levar e buscar, ou deixa na oficina; entrega pela oficina só caso a caso (não prometer). Orçamento sai na hora, pela foto ou na oficina.

## Em aberto (não inventar)
- Preços: site e bot não mostram valores. Orçamento só pelo WhatsApp com foto da panela.
- Prazo: depende do serviço; sempre "confirmamos o prazo no orçamento".
- Garantia: o site diz 1 mês (a validar com o Clenilton).
- Fotos novas de antes e depois.

## Ordem das frentes
1. **Site** (agora): polir, colocar informações reais e publicar.
2. **Instagram**: antes e depois, com a equipe de agentes de marketing.
3. **Bot de WhatsApp**: pergunta o serviço, pede foto e bairro, passa o resumo ao Clenilton. Nunca informa preço. Fica só no assunto panelas (regra da Meta contra chatbot de uso geral).

Medir quantos contatos chegam por semana pelo Google antes das mudanças: é o número do case.

## Pastas
| Pasta | O que é | Agente pode |
|---|---|---|
| `site-novo/` | Site em produção (HTML/CSS/JS estático, Netlify) | Alterar, em branch, dentro da tarefa |
| `Estrutura Agentica/` | Pacote de marketing: 5 agentes, conteúdo, calendário, automação | Ler. Só atualizar `03-ORQUESTRADOR/ESTADO-DO-PROJETO.md` |
| `Estrutura Agentica/04-REFERENCIA/SITE-ATUAL/` | Retrato antigo do site publicado | Só ler |
| `Fotos e Videos/` | Material bruto do Clenilton | Só ler. Fotos de clientes só com autorização |
| `.netlify/` | Ligação local com o Netlify | Não mexer |
