# FONTES, LINKS E ACESSOS

> De onde veio cada dado deste projeto e o que precisa ser confirmado antes de publicar.

---

## 1. PRESENÇA DIGITAL DO NEGÓCIO

| Canal | Endereço | Situação em 25/10/2026 |
|---|---|---|
| Site (produção) | https://conserto-de-panelas-bh.netlify.app/ | HTTP 200 · site estático de uma página (`site-novo/`) |
| Instagram | https://www.instagram.com/consertopanelasbh/ | perfil ativo (conteúdo a produzir) |
| Google (avaliações) | https://share.google/4yfzvqiftgoAKwqah | nota 5,0 com 31 avaliações (conferir antes de publicar) |
| WhatsApp | https://wa.me/5531987396336 | número (31) 98739-6336 |
| Endereço | Rua Jornalista Abrahão Sadi Saad, 436 — Belmonte, BH/MG, 31870-010 | confirmar CEP e complemento no Google |
| Mapa | https://www.google.com/maps/search/?api=1&query=Rua+Jornalista+Abrah%C3%A3o+Sadi+Saad%2C+436%2C+Belmonte%2C+Belo+Horizonte+MG | usado nos CTAs "como chegar" |

---

## 2. ORIGEM DOS DADOS DESTE PROJETO

| Dado | Origem | Observação |
|---|---|---|
| Contexto do negócio | Briefing do dono (conversa que originou o projeto) | copiado para `00-contexto/ficha-negocio.md` |
| Estrutura e seções do site | Leitura de `site-novo/index.html`, `script.js`, `style.css` | snapshot em `04-REFERENCIA/SITE-ATUAL/` |
| Estado do site publicado | Verificação HTTP em 22/10/2026 | `robots.txt` respondeu **404**; `sitemap.xml` inexistente |
| Seção de imagens | `site-novo/img/` (10 webp/jpg + logos) | listado em `INVENTARIO-DE-MIDIA.md` |
| Fotos de serviços | `Fotos e Videos/Conserto de panelas/` (31 JPG, jun–jul/2025) | não copiadas (material bruto); caminhos no inventário |
| Depoimentos | Texto transcrito no site (Rafaela Cerqueira, Soraia Melo, Adriane Paz, Marcelo Nunes) | usar como prova real; não editar conteúdo |
| Projeto React antigo | `panela-precisa-online-main/` | **não é o site publicado**; candidato a arquivo morto |
| Conversa e decisões | Sessão DSH `session-df1765cb…` (22–25/10/2026) | transcript em `01-CONVERSA/` |

---

## 3. O QUE CONFIRMAR ANTES DE PUBLICAR (checagem rápida)

- [ ] Número de avaliações e nota atuais no Google (textos citam 31 / 5,0).
- [ ] Horário de funcionamento e endereço batem com o perfil do Google.
- [ ] Telefone/WhatsApp continua o mesmo.
- [ ] Perfil do Google Meu Negócio está verificado e com acesso do dono.
- [ ] Autorização de uso das fotos com clientes (rosto, casa, print de conversa).
- [ ] Serviços do catálogo vigentes (não prometer o que não faz).
- [ ] Prazo, garantia e formas de pagamento (se for citar, só com confirmação).
- [ ] Domínio próprio (se/quando mudar, atualizar todos os links de CTA).

---

## 4. FERRAMENTAS CITADAS NO PLANO

| Ferramenta | Uso | Custo de referência |
|---|---|---|
| Google Business Profile (Meu Negócio) | perfil no Maps, posts, avaliações, fotos | gratuito |
| Google Search Console | indexação, consultas, posição | gratuito |
| Google Analytics 4 | visitas e eventos de WhatsApp | gratuito |
| Meta Business Suite | agendar Instagram, DMs, insights | gratuito |
| Canva | capas, carrosséis, cartelas | gratuito (pago opcional) |
| CapCut / InShot | edição de Reels no celular | gratuito |
| n8n (self-hosted) / Make / Zapier | automações (formulário → planilha → aviso) | R$ 0 a ~R$ 250/mês |
| Metricool / Later / Buffer | agendamento e relatório | gratuito limitado / pago |
| Google Sheets | CRM simples e KPIs | gratuito |

> Valores são referência (2026) e mudam: verificar no site oficial antes de assinar.
> A diretriz do projeto é **começar com R$ 0** e só pagar ferramenta quando houver gargalo medido.

---

## 5. OBSERVAÇÕES SOBRE O SNAPSHOT DO SITE

`04-REFERENCIA/SITE-ATUAL/` contém uma cópia de leitura de `index.html`, `script.js` e
`style.css` **do site publicado em 22/10/2026**, para consulta offline. Ele **não** substitui o
projeto real (`panela-precisa-online-main/site-novo/`) nem o site no ar; qualquer alteração
publicada deve ser feita no projeto original e reenviada ao Netlify.

Imagens e vídeos **não** foram copiados para esta pasta (material pesado/bruto). Os caminhos,
tamanhos e datas estão em `INVENTARIO-DE-MIDIA.md`.
