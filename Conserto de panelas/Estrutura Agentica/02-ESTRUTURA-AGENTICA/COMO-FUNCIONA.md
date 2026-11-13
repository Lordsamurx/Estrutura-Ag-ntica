# Como funciona a estrutura agêntica

Explicação simples da pasta `estrutura-agentica`, feita para quem não é da área de tecnologia.

## Em uma frase

A pasta é um **manual de uma equipe de 5 assistentes de IA** que cuidam do marketing da oficina (Google, Instagram, site e WhatsApp). Você manda fotos e vídeos dos consertos, a equipe prepara tudo, e você só aprova uma vez por semana.

**Importante:** hoje ela é um conjunto de textos e instruções, não um programa que roda sozinho. Os "agentes" ganham vida quando você cola cada instrução em um assistente de IA (ChatGPT, Claude ou Gemini). A única parte que roda de verdade, depois de configurada, são as 2 automações do n8n.

## A ideia por trás

Pense numa pequena agência de marketing dentro do celular:

- Existe **um gerente** (MAESTRO) que é o único que fala com você.
- Ele **distribui o trabalho** para 4 especialistas.
- Os especialistas fazem cada um a sua parte e **devolvem para o gerente**.
- O gerente **junta tudo num pacote** e te entrega pronto para publicar.

Assim você não precisa conversar com 5 robôs diferentes nem ficar cobrando ninguém.

## A equipe (os 5 agentes)

| Agente | É como se fosse... | O que faz |
|---|---|---|
| **MAESTRO** | O gerente | Recebe seu material, organiza a semana, distribui tarefas, monta o pacote e o relatório. Único que fala com você. |
| **BÚSSOLA** | O especialista em Google | Cuida de aparecer no Google: posts no perfil do Google, artigos para o site, respostas a avaliações, ajustes de SEO. |
| **VITRINE** | O social media | Cuida do Instagram: legendas, hashtags, melhor horário, respostas a comentários e mensagens. |
| **LENTE** | O editor de vídeo | Transforma suas fotos e vídeos brutos em roteiro de Reels, carrosséis, stories e capas (cena por cena, com texto na tela e música). |
| **OFICINA** | O técnico de panelas | Confere se tudo o que vai ao ar está tecnicamente certo e seguro, principalmente sobre panela de pressão. |

Cada agente tem o seu "manual de instruções" na pasta `B-prompts/` (um arquivo para cada).

## Como o trabalho anda (passo a passo)

1. **Você manda material bruto** para o MAESTRO: fotos, vídeo, um áudio dizendo "quero postar essa panela essa semana".
2. **O MAESTRO pergunta só o que falta** (ex.: autorização da foto, qual foi o problema).
3. **Ele distribui:**
   - foto/vídeo vai para a **LENTE** fazer o roteiro;
   - o texto do Instagram vai para a **VITRINE**;
   - artigo e post do Google vão para a **BÚSSOLA**;
   - qualquer coisa técnica passa pela **OFICINA** antes de seguir.
4. **Cada um devolve a sua parte** para o MAESTRO.
5. **O MAESTRO monta o pacote da semana**: até 5 posts + 1 artigo a cada 10 dias, cada peça com texto pronto para copiar, horário sugerido e botões "aprovar / ajustar / pular".
6. **Você aprova** (cerca de 10 a 15 minutos) e publica ou agenda.
7. **Na sexta, o MAESTRO faz o relatório**: o que deu certo, números e o que mudar.

```
VOCÊ → MAESTRO → (LENTE, VITRINE, BÚSSOLA, OFICINA) → MAESTRO → pacote → VOCÊ aprova → publica
```

## A "ficha de passagem" entre agentes

Quando um agente passa uma tarefa para outro, ele usa sempre o mesmo formulário (o "envelope de handoff"): o que é a tarefa, quais fotos usar, o que **não** pode aparecer (rosto de cliente, preço), prazo e como saber se ficou bom. Se faltar informação, a tarefa volta. Isso evita que um agente "invente" ou que algo se perca no caminho. Está descrito em `00-contexto/roster-e-handoff.md`.

## A base de fatos (pasta `00-contexto`)

São 3 arquivos que todos os agentes leem antes de trabalhar, para não inventar nada:

- **ficha-negocio.md**: endereço, telefone, cidades atendidas, serviços que vocês fazem e **não** fazem, perguntas frequentes dos clientes, palavras-chave.
- **guia-marca-e-tom.md**: jeito de falar (português mineiro leve e confiável), cores, hashtags.
- **roster-e-handoff.md**: quem é quem na equipe e as regras de passagem de tarefa.

Se um dado não estiver na ficha, o agente pergunta para você em vez de chutar.

## As regras que ninguém pode quebrar

1. Nunca inventar preço: orçamento sempre por foto no WhatsApp.
2. Nunca prometer prazo ou garantia sem você confirmar.
3. Todo post termina chamando para o WhatsApp (31) 98739-6336.
4. Segurança da panela de pressão em primeiro lugar.
5. Não inventar avaliação, prêmio ou número de clientes.
6. Não falar mal de concorrente.
7. Foto de cliente só com autorização.
8. Nada sai como rascunho: tudo chega pronto para publicar.

Os agentes só te chamam em 5 casos: preço/prazo/garantia, autorização de imagem, caso técnico duvidoso, crise (avaliação ruim, reclamação) e gastar dinheiro (anúncio, ferramenta paga).

## Os outros arquivos da pasta

| Arquivo | Para que serve |
|---|---|
| `README.md` | Porta de entrada e guia rápido de 20 minutos |
| `A-analise-estagio-atual.md` | Diagnóstico: o site está bonito, mas falta "motor" (postar com constância, medir resultados, rotina de follow-up). Nota de maturidade: 2 de 5. |
| `C-fluxos-trabalho.md` | Como os agentes conversam, com 4 exemplos completos (foto até post, palavra-chave até artigo, cliente no WhatsApp até avaliação, restaurante/B2B) |
| `D-calendario-editorial.md` | O que postar em cada dia da semana, no mês do Google e no trimestre do site, mais datas sazonais |
| `E-banco-conteudo/` | Conteúdo já pronto: 30 ideias de Reels, 20 carrosséis, 15 legendas de antes/depois, 10 posts para o Google, 10 pautas de artigo |
| `F-plano-implementacao.md` | Plano de 30/60/90 dias, ferramentas (começa com R$ 0), metas e números para acompanhar |
| `G-automacao.md` | O que pode ser automático e o que deve continuar com você, e cuidados com a LGPD |
| `G-templates-mensagens.md` | 55 respostas prontas para WhatsApp e Instagram (saudação, pedir foto, "está caro", coleta por Uber, pós-serviço) |
| `n8n-workflows.json` | As 2 automações para importar no n8n |
| `ESTRUTURA-AGENTICA-COMPLETA.md` | Todos os arquivos juntos em um só, para ler ou imprimir |

## A parte automática (n8n)

O n8n é uma ferramenta que liga um aplicativo no outro, como um "se acontecer isso, faça aquilo". O arquivo traz 2 automações:

1. **Novo pedido de orçamento pelo site:** quando alguém preenche o formulário do site, o pedido é salvo numa planilha do Google (o "CRM") e você recebe um aviso no Telegram. Se for urgente, o aviso vem destacado.
2. **Lembretes da semana:** toda segunda às 8h você recebe um lembrete de conteúdo; todo dia às 9h a automação olha na planilha quem recebeu a panela ontem e te avisa para pedir a avaliação no Google.

Repare numa escolha de segurança: **a automação te avisa, mas quem manda a mensagem para o cliente é você**, pelo seu WhatsApp. Isso porque usar programas não oficiais para enviar mensagens em massa pode fazer o WhatsApp bloquear o número, e o número é o negócio. Por isso as versões que enviariam direto pelo WhatsApp vêm desligadas.

Para funcionar, ainda é preciso: ter o n8n instalado/ativo, criar a planilha, criar um robô no Telegram e ligar o formulário do site ao n8n.

## O que fica sempre com você

Preço, prazo, garantia, diagnóstico final, desconto para parceiro, resposta pública a avaliação, cliente insatisfeito e autorização de imagem. O resto (organizar, lembrar, escrever, agendar, relatar) pode ficar com os agentes e as automações.

## Quanto do seu tempo

A estimativa da pasta é de **cerca de 2 horas por semana**, mais o tempo de gravar um vídeo curto do serviço do dia:

| Quando | O quê |
|---|---|
| Segunda | Ver e aprovar o pacote da semana (cerca de 30 a 45 min) |
| Terça a sexta | Gravar 1 vídeo curto do conserto do dia |
| Sexta | Ler o relatório e responder 3 perguntas (cerca de 10 min) |

## Como começar na prática

1. Criar 5 projetos no ChatGPT, Claude ou Gemini (um por agente) e colar em cada um o arquivo dele de `B-prompts/`.
2. Subir os 3 arquivos de `00-contexto/` em cada projeto.
3. Mandar a primeira mensagem para o MAESTRO: "Tenho fotos e vídeos de conserto. Monte o pacote da semana: 5 posts + 1 artigo."
4. Fazer o básico do Google (Search Console, Google Analytics, completar o perfil do Google).
5. Seguir o calendário e usar o banco de conteúdo.

## Pontos de atenção

- **Faltam respostas suas** para os agentes trabalharem melhor: prazo médio, tempo de garantia, formas de pagamento, nota fiscal, quem paga o Uber e autorização das fotos (lista em `ficha-negocio.md`, seção 10). Até lá, eles usam frases seguras sem prometer nada.
- **Os agentes não conversam sozinhos entre si.** No modo "copiar e colar", quem leva a tarefa de um projeto para o outro é você (ou um único assistente fazendo todos os papéis). Para eles trabalharem de forma realmente automática, seria preciso montar isso numa ferramenta como o n8n.
- **Pequena diferença entre arquivos:** o README diz que o pacote chega sexta às 12h e é aprovado segunda às 10h; o ritual em `C-fluxos-trabalho.md` fala em apresentar o pacote na segunda às 8h. Vale escolher um dos dois.
- **Pendências do site** citadas na pasta: robots.txt, sitemap.xml, Google Analytics, formulário de restaurantes que não salva o contato e domínio próprio (hoje é netlify.app).
