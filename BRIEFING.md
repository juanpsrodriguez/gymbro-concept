# Gymbro Club — briefing do conceito

Atualizado em 26/09/2026: continuação do projeto existente, com home mais curta e páginas práticas. Preservar a aplicação e as seções que funcionam; não reiniciar o projeto.

## Natureza e objetivo

Projeto especulativo, não oficial e iniciado de forma independente por Juan Rodriguez para a Gymbro Club, em Serra Grande, Niterói/RJ. A empresa não encomendou nem aprovou este trabalho. O objetivo é apresentar uma proposta comercial concreta e construir um estudo de caso de portfólio honesto, mesmo que não haja contratação.

Nesta etapa, a entrega é local. Não configurar remoto, publicar, fazer push ou implantar o site sem autorização posterior do usuário. Manter `conceptMode: true` até autorização explícita, com `noindex,nofollow` e a atribuição discreta: “Projeto conceitual não oficial • desenvolvido por Juan Rodriguez”.

## Ideia visual

“Gymbro Club online should feel like walking into the gym at night: dark, energetic, blue-lit, equipment-forward, direct and social.”

O lugar real é o protagonista: máquinas, halteres, bancos, espelhos, piso de borracha, concreto, madeira, estrutura aparente e geometria da iluminação. As referências mostram um clube urbano de treinamento; não justificam uma estética de boate, hotel de luxo, videogame ou fisiculturismo exclusivo.

Direção escolhida: grafite, preto, branco suave e cinza de aço; azul como luz ambiental, vermelho pontual. Composição editorial, títulos grandes, cortes angulares, poucos cantos arredondados e fotografias em escala generosa. Barlow Condensed nos títulos/etiquetas e Manrope no texto. Não espalhar gradientes, partículas, laser, fumaça ou efeitos de neon.

Preservar exatamente a marca fornecida: símbolo geométrico, “Gymbro” e “Club”. Usar o recorte raster como referência local e permitir substituição por arquivo oficial. Não redesenhar, vetorizar por aproximação ou fabricar um SVG “oficial”.

## Hero e conteúdo

Imagem principal planejada: referência 03, estúdio vazio com espelho, piso escuro e teto com iluminação azul. O recorte local remove apenas margens da captura; não remove marca-d’água. Texto conceitual proposto: **“SEU TREINO. OUTRA ATMOSFERA.”** Esta frase é criação de conceito, não slogan aprovado pela Gymbro. Deve permanecer fácil de substituir.

O visitante precisa reconhecer rapidamente a Gymbro Club, a região e a proposta de musculação/aulas/estrutura. Informações e CTA devem aparecer sem esperar uma sequência longa. Todos os textos públicos, metadados, rótulos e recursos de acessibilidade em português brasileiro natural.

Usar comunicação curta e direta. Evitar promessas de transformação, resultados físicos ou de saúde, slogans genéricos e estatísticas inventadas. Não inventar professores, horários de funcionamento, preços atuais, área, estacionamento, histórico, depoimentos ou parcerias.

## Arquitetura de páginas

| Rota | Função | Conteúdo |
|---|---|---|
| `/` | Impacto, atmosfera e narrativa | Hero preservado, prévia curta da estrutura, acesso à grade/modalidades e planos, ambiente azul, região e contato |
| `/estrutura` | Conhecer o lugar em detalhe | Galeria editorial de musculação, pesos, máquinas, cardio, spinning, sala de aulas e iluminação |
| `/grade` | Informação prática | Grade semanal completa e acessível; demonstração ilustrativa local ou consulta à equipe conforme flags |
| `/planos` | Orientar a conversa comercial | Página completa de consulta, com valores, promoções e condições incertas ocultos |

“Conhecer a estrutura” leva a `/estrutura`; “Ver grade completa” a `/grade`; “Ver planos” a `/planos`. Cabeçalho e rodapé são compartilhados pelo layout; navegação e CTAs vêm da configuração central. Localização continua na home e deve funcionar ao chegar de qualquer rota. Não criar uma URL para cada seção nem duplicar as páginas completas na home.

A home anterior media 7.704 px na revisão de 1280 × 720 relatada pela execução principal, antes das mudanças de 26/09. A nova organização busca reduzir esse percurso sem descartar hero, atmosfera ou movimento que funcionam. O resultado precisa ser medido e revisado no navegador; nenhuma redução final está confirmada neste briefing.

Uma entrada discreta “Loja ↗” abre `https://www.usegymbro.com.br/` em nova aba. Esse endereço de vestuário foi fornecido pelo usuário; a experiência da academia não o substitui e não deve alegar integração oficial ou compartilhar carrinho, conta ou planos. Não adicionar conteúdo de comércio eletrônico ao projeto.

## Dados e verificação

Centralizar os dados em estruturas tipadas: marca, `conceptMode`, Instagram, WhatsApp, links, loja, navegação, mensagens, região, endereço, status, Maps, modalidades, grade, promoção, visibilidade, CTAs, atribuição e fontes. Toda rota consome as mesmas configurações.

Contato fornecido pelo usuário: **+55 21 99691-7085**, **@gymbrocluboficial**. Mensagem sugerida: “Olá! Vim pelo site e gostaria de saber mais sobre a Gymbro Club.” Nunca usar o telefone pessoal de Juan.

Exibir **Serra Grande • Niterói/RJ** como rótulo compacto e **R. Francisco Nascimento, 26 - Serra Grande, Niterói - RJ, 24342-702** na seção de localização. O autor forneceu explicitamente o endereço e o mapa em 26/09/2026 para esta etapa; registrar a origem como informação do usuário, sem alegar verificação presencial independente. Não mencionar o negócio anterior em nenhuma superfície pública.

Grade e promoção são provisórias. `scheduleVisible` e a visibilidade da promoção começam em `false` para produção. A grade pode ser apresentada no modo local com indicação inequívoca de demonstração. A promoção de R$99, plano semestral, entrada entre 11h30 e 16h e permanência até 17h permanece oculta até confirmação. Pilates e plataformas de acesso também dependem de confirmação atual.

Consultar [SOURCE_NOTES.md](SOURCE_NOTES.md) antes de alterar qualquer status. Nunca promover informações a verificadas apenas porque aparecem em fotografias ou em conteúdo antigo.

`src/config/business.ts` contém os dados públicos, endereço, navegação, `storeUrl` e CTAs. `src/config/research.ts` é exclusivo do servidor: status/fontes, promoção e grade provisória. O componente servidor da grade só envia ao cliente o conteúdo permitido quando a exibição está habilitada; não importar pesquisa privada em componentes cliente. Promoção deve manter valor, condições, verificação, visibilidade e última checagem, sem inventar uma data de confirmação.

`src/config/media.ts` é o manifesto de mídia, com `authorizedSrc` por ativo. `src/lib/assets.ts` e `src/app/api/reference/[id]/route.ts` controlam referências no servidor. As chaves `LOCAL_REFERENCE_ASSETS` e `LOCAL_SCHEDULE_PREVIEW` ficam em `0` no exemplo de ambiente e só são ligadas no `.env.local` ignorado para esta revisão.

## Imagens

Não gerar pessoas ou interiores artificiais como substituição padrão. Exceção registrada em 26/09/2026: o autor autorizou uma restauração generativa controlada do estúdio03 para hero/atmosfera depois que o upscale simples continuou borrado. O derivado deve permanecer identificado como reconstrução local, com original preservado, e não vira fotografia documental/final. Não usar Seedance ou MiniMax. As imagens entregues são referências, não um banco de imagens comerciais autorizado.

Prioridade da continuação: referências **07, 08, 10, 11, 12, 13 e 14** em `/estrutura`, com quadros completos, proporções naturais e marcas de origem preservadas. Usar grid editorial e bordas discretas para resolver os formatos, sem alongar imagens ou encaixá-las em caixas pretas excessivas. O estúdio03 permanece no hero/atmosfera; logo09 é o recorte exato do raster sobre branco. A referência10 estava preparada, mas não era renderizada na home anterior; seu uso na galeria é parte da continuação.

Originais preservados e derivados em `.local/assets`, ignorados pelo Git, acessíveis pelo mecanismo local. As fotos profissionais futuras substituem o manifesto sem redesenhar componentes. Todas as referências atuais usadas precisam de substituição/autorização antes de publicação comercial.

A imagem05 recebeu prioridade no novo pedido, mas mostra marca anterior; por isso fica na pesquisa, cumprindo a proibição explícita de reutilizar essa marca publicamente. A composição não depende dela. Fotografar letreiro/fachada atuais depois. O ambiente vazio06 e o Pilates02/04 também ficam fora da apresentação. Não remover marcas-d’água para disfarçar a origem. Consulte [ASSET_INVENTORY.md](ASSET_INVENTORY.md) e [VISIT_CHECKLIST.md](VISIT_CHECKLIST.md).

## Engenharia e movimento

Next.js, TypeScript, npm, GSAP + ScrollTrigger e CSS. Fontes locais. Sem Framer Motion, Lenis ou biblioteca de componentes sem necessidade demonstrada. Servidor/componentes cliente separados conforme responsabilidade; imagens responsivas e carregamento prioritário limitado ao hero.

Três momentos principais: revelação curta de hero; progressão breve do espaço com conteúdo parcialmente fixo no desktop; transição de atmosfera com fotografia ampla e parallax discreto. `/estrutura` pode usar revelações contidas; `/grade` troca dias suavemente. GSAP deve ter escopo e limpeza também ao navegar entre rotas, sem inicializações duplicadas, pin residual ou divergência de hidratação.

Rolagem nativa. No mobile, sequência natural de blocos em lugar de uma longa seção presa. `prefers-reduced-motion` entrega todo o conteúdo sem depender de animação. Nada de estrobos, scroll forçado ou informação presa em uma interação.

## Critérios de entrega

Revisar as quatro rotas no navegador, navegação de ida/volta, cabeçalho/rodapé, Loja, WhatsApp, Instagram, menu, grade, teclado, movimento reduzido, scroll, console e imagens. Verificar 320, 375, 390, 430 px, tablet, desktop e aproximadamente 1920 px. Sem overflow, títulos cortados, colisões, CTAs ocultos, imagens esticadas ou áreas vazias acidentais.

Executar `npm run lint`, `npm run typecheck` e `npm run build`, corrigindo problemas reais. Avaliar performance e acessibilidade com ferramentas disponíveis, sem inventar resultados. Atualizar `AI_HANDOFF.md` a cada marco e antes de tarefas longas.

Preservar qualquer histórico Git existente. Somente após implementação, revisão visual, navegador, responsividade e verificações aprovadas: criar commit profissional na branch `main`, com **Juan Rodriguez <jrodriguez@id.uff.br>**. Se ainda não houver repositório, não inventar histórico/commit anterior. Manter o servidor local se possível e informar URL, hash, mensagem do commit e estado do working tree.

Este briefing define a intenção; não comprova que implementação ou QA já foram concluídos. O estado operacional está em [AI_HANDOFF.md](AI_HANDOFF.md).
