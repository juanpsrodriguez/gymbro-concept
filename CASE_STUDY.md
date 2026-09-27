# Gymbro Club — conceito independente de presença digital

**Natureza:** estudo especulativo, não oficial, iniciado por Juan Rodriguez. A Gymbro não encomendou nem aprovou este trabalho. Não há resultado comercial, impacto de conversão ou aprovação do negócio demonstrados.

**Estado em 26/09/2026:** continuação da aplicação existente. Pesquisa e direção preservadas; quatro rotas implementadas e revisadas localmente. A home antiga foi aberta e inspecionada antes das mudanças. Hero, cabeçalho, galeria, localização e navegação entre rotas passaram por uma nova revisão responsiva; consultar `AI_HANDOFF.md` para o escopo e as evidências atuais.

## Oportunidade observada

O material fornecido reúne um espaço visualmente marcante e informações práticas dispersas: ambiente de treinamento, aulas, uma grade e uma promoção de validade desconhecida. A proposta é transformar esse material em uma experiência móvel legível, com caminhos claros para entender a estrutura e falar com a equipe.

Não houve entrevista com usuários, acesso a analytics ou auditoria completa dos canais atuais. Portanto, “informação dispersa” é uma hipótese de projeto apoiada no conjunto recebido, não uma conclusão de pesquisa quantitativa ou prova de perda de vendas.

## Pesquisa e contexto

Foram lidos o briefing detalhado do autor, a análise fornecida e o README de referências. As 14 imagens iniciais e o mapa regional adicionado depois foram vistos individualmente. Elas mostram máquinas, pesos, cardio, sala de spinning, estúdio de aulas, espelhos, pisos escuros, vigas e iluminação azul/vermelha. Também incluem pessoas, interface Google Maps, uma fachada antiga e espaços cuja operação atual é incerta.

Os dados de contato, a região e o endereço completo vieram do usuário. Grade e promoção são transcrições de trabalho; os posts originais não estavam no pacote. O endereço passou a ser exibido por instrução explícita do autor em 26/09/2026, sem alegação de verificação presencial independente. O controle dessas diferenças é parte da solução, registrado em `SOURCE_NOTES.md`.

No briefing de continuação, o usuário informou `https://www.usegymbro.com.br/` como experiência existente de vestuário. A proposta para a academia inclui apenas um link externo discreto; não substitui essa loja nem afirma integração oficial.

## Direção visual

O conceito é entrar na Gymbro à noite: ambiente escuro, luz azul, equipamento presente e comunicação direta. A execução evita transformar essa influência em estética de boate. O teto, a estrutura e o equipamento oferecem identidade suficiente.

Preto/grafite e branco suave constroem contraste, azul aparece como ambiente e vermelho funciona como detalhe. Barlow Condensed dá escala aos títulos; Manrope mantém o corpo legível. Composições editoriais, imagens amplas e elementos angulares substituem a sequência genérica de cartões arredondados.

O hero usa como referência principal a imagem 03: um estúdio vazio com espelho, piso escuro e teto iluminado de azul. Depois de constatar que o upscale determinístico ainda preservava o borrado da fonte pequena, o autor autorizou uma restauração generativa para hero/atmosfera. Ela melhora textura e definição, mas permanece identificada como referência local reconstruída e não como fotografia documental final. O headline **“SEU TREINO. OUTRA ATMOSFERA.”** é texto experimental da proposta, não um slogan oficial. O símbolo continua sendo um recorte exato do raster; o cabeçalho apenas o combina com tipografia viva em um lockup conceitual, sem redesenhar a marca.

## De uma página extensa para uma jornada com destinos claros

A home anterior media 7.704 px em uma janela de 1280 × 720 na inspeção relatada pela execução principal, antes das mudanças de 26/09. O usuário pediu menos rolagem, mantendo os momentos visuais fortes. A decisão foi redistribuir detalhes, preservando a aplicação e a direção existente.

| Destino | Papel na continuação |
|---|---|
| `/` | Hero, narrativa curta do espaço, prévias de grade/modalidades e planos, atmosfera, região e contato |
| `/estrutura` | Galeria detalhada do espaço e equipamento com imagens prioritárias |
| `/grade` | Grade completa, troca de dias acessível e indicação provisória quando em demonstração |
| `/planos` | Consulta de planos e condições, sem preços ou vantagens inventados |

Cabeçalho e rodapé compartilhados conectam as rotas. A navegação e os destinos dos CTAs são centralizados. “Conhecer a estrutura”, “Ver grade completa” e “Ver planos” levam às páginas correspondentes; localização continua acessível na home. Um reset associado ao pathname abre cada nova rota no topo e preserva o destino intencional de `/#localizacao`; o comportamento foi verificado em desktop e mobile.

Copy curta em português brasileiro, sem promessas físicas, depoimentos inventados ou alegações de superioridade. A home mantém prévias, não cópias completas das páginas internas.

Em vez de transformar informação provisória em verdade, o projeto mantém verificação e visibilidade em dados centrais. O público recebe contato, endereço fornecido e caminhos para consultar condições. O preview local permite avaliar a grade completa com indicação ilustrativa. Preço promocional, horários e parcerias não confirmados permanecem ocultos.

## Espaço real e direitos de imagem

A proposta não usa atletas artificiais nem fabrica o interior. O hero/atmosfera preserva o estúdio 03; logo 09 permanece um recorte exato do raster. `/estrutura` amplia a pesquisa visível com 07/08/10/11/12/13/14: pesos, cabos, máquinas, spinning, musculação e cardio. A referência 10 estava preparada, mas não aparecia na home anterior; agora abre a galeria detalhada.

Os derivados preservam a fotografia e sua proporção natural. A faixa inferior de navegação da captura foi recortada para retirar setas, controles e texto de interface; cada quadro continua identificado na própria página como `Google Maps · referência temporária`, e a linhagem permanece documentada. Um sharpening discreto melhora a leitura sem fabricar detalhes. A fachada 05 foi priorizada no novo briefing, mas contém marca anterior cuja reutilização pública foi proibida pelo próprio usuário; ela permanece na pesquisa até uma foto atual. O design não depende dela.

Esses materiais são temporários. Nenhuma autorização de publicação comercial foi presumida. Originais/derivados ficam fora do Git, uma rota com controle de acesso serve o preview e `authorizedSrc` permite fotos profissionais futuras sem refazer componentes. Pilates não confirmado e área vazia possivelmente histórica também são omitidos.

Essa limitação tem consequência visual real: capturas com interface/pessoas e resolução limitada não substituem uma sessão de fotos. O trabalho demonstra direção e frontend; não apresenta as imagens temporárias como material final de campanha.

## Movimento planejado

Três momentos concentram a animação:

1. **Entrada:** tipografia revelada por máscara, ambiente aparecendo rapidamente e CTA acessível desde o início.
2. **Percurso breve pelo espaço:** conteúdo parcialmente fixo no desktop enquanto fotografias avançam; mobile recebe sequência natural. Detalhes ficam em `/estrutura`, sem alongar o pin da home.
3. **Atmosfera:** imagem ampla, escala/parallax discreto e transição para a luz azul, chegando ao contato final.

A grade em `/grade` troca os dias com movimento curto; a galeria pode receber revelações contidas. GSAP + ScrollTrigger cuidam dos momentos principais, com limpeza ao sair das rotas. Hover/foco e detalhes menores ficam em CSS. Rolagem nativa, sem Lenis/Framer Motion, conteúdo completo com `prefers-reduced-motion` e sem depender de animação para aparecer.

Em `/estrutura`, as figuras recebem uma única revelação curta, sem pin ou parallax. A revisão confirmou limpeza dos estilos ao ativar movimento reduzido, rolagem nativa e composição estática completa. A etapa de refinamento revisou home, estrutura, grade, planos e localização em 320, 390, 430, 768, 1280 e 1440 px, sem overflow; o menu fecha com Escape e devolve foco, e uma aba nova ficou sem avisos/erros no console. A grade continuou mudando o dia selecionado por teclado.

## Arquitetura

- Next.js com TypeScript e npm; scripts de lint, typecheck e build.
- `src/app/layout.tsx` compartilha cabeçalho/rodapé; cada rota tem conteúdo próprio no mesmo projeto Next.js.
- `src/config/business.ts` concentra dados públicos, navegação, loja externa e CTAs.
- `src/config/research.ts`, com `server-only`, guarda status/fontes, promoção e grade provisória. O endereço público e o link de mapa ficam na configuração pública central. O servidor envia ao componente interativo apenas a grade que pode ser exibida.
- `src/config/media.ts` concentra referências e `authorizedSrc` para substituição futura.
- `src/lib/assets.ts` e `src/app/api/reference/[id]/route.ts` isolam o acesso às referências locais no servidor.
- `scripts/prepare-references.mjs` prepara os derivados documentados.
- GSAP/ScrollTrigger e CSS sem biblioteca visual adicional. Fontes locais pelos pacotes `@fontsource/barlow-condensed` e `@fontsource/manrope`.
- `.env.example` mantém preview de referências/grade desligado; `.env.local`, ignorado, permite revisão nesta máquina.

As versões exatas devem ser consultadas em `package.json` e no lockfile. A descrição acima registra o contrato de arquitetura; consultar a implementação e os resultados de QA para confirmar seu estado.

## Responsividade, acessibilidade e performance

Planejamento de revisão das quatro rotas em 320, 375, 390 e 430 px, tablet, desktop e aproximadamente 1920 px, incluindo navegação entre páginas e destinos externos. Mobile evita longas seções presas, conserva CTAs visíveis e prioriza uma grade legível e operável por toque. A navegação precisa funcionar por teclado e sem hover.

HTML semântico, títulos em hierarquia, foco perceptível, controles com nomes claros, imagens com alternativas adequadas e contraste suficiente são requisitos. O movimento reduzido mantém a composição completa. Imagens responsivas, carregamento seletivo e componentes cliente restritos reduzem o custo de execução.

**Ainda não há pontuação de Lighthouse, Web Vitals ou resultado de teste declarado neste documento.** Registrar apenas medições reais, com contexto local quando aplicável; não apresentar simulação como resultado de usuários reais.

## Revisão crítica necessária

Pela perspectiva da Gymbro: a marca e o ambiente devem ser reconhecíveis, a abordagem respeitosa e o caráter não oficial claro, sem dados incorretos. Pela perspectiva de um cliente do portfólio: o projeto deve mostrar pesquisa, direção, boa engenharia responsiva e movimento intencional, além de aparência.

A revisão final deve responder a essas perguntas no navegador e registrar o que foi corrigido. Não atribuir reação ou opinião ao proprietário antes que ele veja a proposta.

## Próximos materiais para o estudo de caso

Na captação profissional futura, priorizar fachada/letreiro atuais, pesos e cabos, máquinas sob luz azul/vermelha/linear, cardio, spinning vazio e estúdio. Fotografar espelhos sem pessoas e obter logo/autorizações. Todos os ativos temporários usados devem ser substituídos. O roteiro completo está em `VISIT_CHECKLIST.md`.

Depois da validação, capturar para portfólio:

- Hero desktop e mobile com fotos autorizadas.
- Home e rotas internas lado a lado, mostrando como o detalhe foi distribuído sem perder identidade; registrar a nova altura no mesmo viewport do baseline.
- Um vídeo curto de rolagem mostrando os três momentos principais, sem cortes que escondam problemas.
- Navegação real entre `/`, `/estrutura`, `/grade` e `/planos`, incluindo voltar ao início sem animações residuais.
- Grade com troca de dias por toque/teclado e sua versão móvel.
- Tela de movimento reduzido e comparação clara dos comportamentos responsivos.
- Detalhe da arquitetura de dados/verificação e do manifesto de ativos, sem segredos.
- Evidências reais de lint/typecheck/build e métricas medidas, identificando ambiente e limitações.

Até a autorização, todo material deve continuar apresentado como conceito independente e não oficial. Não publicar capturas com referências de terceiros como se fossem ativos comerciais próprios.
