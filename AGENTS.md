# Regras permanentes — Gymbro Club concept

## Antes de trabalhar

- Inspecione o estado real do projeto, Git e alterações existentes. Leia `BRIEFING.md`, `SOURCE_NOTES.md`, `CASE_STUDY.md` e `AI_HANDOFF.md` antes de trabalho relevante. Abra a versão renderizada antes de alterações estruturais. Continue do próximo passo registrado; não recrie a aplicação nem seções funcionando sem motivo.
- Este projeto é uma proposta independente e não oficial para uma empresa real. Nunca chamar a Gymbro de cliente, afirmar encomenda/aprovação ou usar “site oficial” sem confirmação explícita.
- Mantenha `conceptMode: true` e `noindex,nofollow` até autorização explícita do usuário. Não fazer push, configurar remoto ou publicar esta versão por iniciativa própria.
- A regra geográfica do diretório pai continua válida: não inventar bairros, vias ou pontos de localização. O endereço completo existente é provisório e não pode ser promovido a confirmado.

## Negócio e conteúdo

- Todo conteúdo público deve ser pt-BR, inclusive navegação, metadados, mensagens de erro, acessibilidade e datas/horários. Código e documentação técnica podem usar inglês.
- Centralize informações, links, CTAs, fontes, status e regras de visibilidade em dados tipados. Alterar uma aula, telefone ou endereço não deve exigir vários componentes.
- Preserve quatro rotas principais: `/` cinematográfica e curta; `/estrutura` com galeria detalhada; `/grade` com grade completa; `/planos` com consulta segura. Use cabeçalho/rodapé compartilhados e navegação central; home tem prévias, sem duplicar páginas completas.
- CTAs de estrutura, grade completa e planos levam às rotas correspondentes. Localização deve funcionar ao vir de qualquer página. Não criar URLs desnecessárias.
- A loja `https://www.usegymbro.com.br/`, fornecida pelo usuário, é externa e abre em nova aba. Não substituir o e-commerce nem afirmar integração oficial. Centralize `storeUrl`.
- Dados públicos/navegação ficam em `src/config/business.ts`; pesquisa, endereço pendente, promoção e grade provisória em `src/config/research.ts` com `server-only`. Envie ao cliente apenas a grade cuja exibição foi permitida; não vaze pesquisa por imports cliente.
- Preserve o contato comercial fornecido: +55 21 99691-7085 e @gymbrocluboficial. Nunca substituir pelo contato pessoal do autor.
- Exiba “Serra Grande • Niterói/RJ” enquanto o endereço completo aguarda visita. Não expor um mapa exato como confirmado. Não mencionar publicamente o negócio anterior da fachada de referência.
- Não invente preços, horários, equipe, resultados de saúde, depoimentos, dimensões, serviços, equipamentos, estatísticas ou parcerias.
- Mantenha preços/promos ocultos e grade pública desativada até verificação. Demonstração local de grade precisa se identificar como ilustrativa. Pilates e plataformas de acesso permanecem pendentes.
- Preserve o status das fontes: fotografias históricas e transcrições de posts não comprovam operação atual. Registre toda confirmação nova em `SOURCE_NOTES.md` com origem e data.
- O headline “SEU TREINO. OUTRA ATMOSFERA.” é texto de conceito, não slogan aprovado.

## Design e ativos

- Preserve a especificidade da Gymbro: espaço, máquinas, piso, espelhos, estrutura e luz real. Não transformar em template de SaaS, boate/cyberpunk ou academia fictícia.
- Não gerar pessoas ou interiores artificiais. Não usar Seedance/MiniMax. Pessoas reais são secundárias e precisam de autorização para uso final.
- Não redesenhar a marca ou fabricar um SVG oficial. O raster é referência substituível por arquivo autorizado.
- Não remover marcas-d’água para esconder proveniência. Manter originais e registrar cada derivado e seu uso em `ASSET_INVENTORY.md`.
- Priorize 07/08/10/11/12/13/14 na galeria de `/estrutura`, com quadros completos e proporção natural. A fachada05 continua só na pesquisa porque contém marca anterior; sua prioridade não revoga a proibição de reutilizar essa marca. Fotos profissionais devem substituir os ativos sem refazer componentes.
- Pesquisa e derivados de direitos incertos ficam fora do caminho público de produção e ignorados pelo Git. Referências locais só podem aparecer com a chave específica de preview. Nunca ligar essa chave por padrão em produção.
- A API de referência local deve aceitar apenas ativos conhecidos pelo manifesto, sem caminhos arbitrários. A troca por imagens autorizadas deve ser feita no manifesto, preservando componentes.
- Não redesenhar seções aprovadas sem motivo relacionado à tarefa. Manter a direção grafite/branco suave/azul, vermelho pontual, Barlow Condensed + Manrope e composições editoriais angulares.

## Engenharia e acessibilidade

- Use npm e um único lockfile. Next.js + TypeScript; GSAP/ScrollTrigger para os momentos principais; CSS para foco/hover/transições pequenas. Evite dependências desnecessárias.
- Não adicionar Framer Motion/Lenis apenas por preferência. Rolagem nativa é a base.
- Escopar GSAP, limpar efeitos/timelines/ScrollTriggers também nas trocas de rota e impedir inicialização duplicada, pin residual ou problemas de hidratação.
- Preserve comportamento completo com movimento reduzido. Sem flash/estrobo, scroll sequestrado, horizontal forçado no mobile ou interação dependente de hover.
- HTML semântico, hierarquia de títulos, texto alternativo descritivo, foco visível, controles por teclado, bom contraste e áreas de toque adequadas.
- Grade centralizada e acessível, com identificação do dia selecionado e atualização correta para teclado/leitor de tela. Não duplicar aulas em componentes.
- Imagens proporcionais/responsivas, hero eficiente, carregamento tardio abaixo da dobra. Não expor segredos nem colocar `.env` com valores locais no Git.

## Verificação e continuidade

- Após mudanças relevantes, execute lint, typecheck e build. Não desligue regras ou ignore erros apenas para obter verde. Teste o comportamento afetado no navegador.
- Revise as quatro rotas em desktop/mobile, 320–430 px, tablet e desktop largo. Cheque navegação de ida/volta, loja externa, overflow, proporção/recorte, foco, menu, links, grade, console, hidratação e movimento reduzido.
- Documente somente verificações realmente feitas. Não invente métricas, resultados de Lighthouse, conversão, aprovação do negócio ou acesso a fontes.
- Atualize `AI_HANDOFF.md` após cada marco e antes de tarefa longa/arriscada. Registre o que está completo, parcial, restante, arquivos importantes, decisões visuais, decisões de animação, problemas, verificações pendentes e **ONE NEXT EXACT STEP**. Atualizar o checkpoint não é motivo para parar.
- Se houver interrupção iminente, pare trabalho novo e salve estado suficiente para retomar. Não repetir trabalho concluído ao retomar.
- Preserve histórico Git existente e use branch `main`; identidade **Juan Rodriguez <jrodriguez@id.uff.br>**. Nunca usar identidades inventadas ou “Codex”. Faça commit somente depois da implementação, revisão de navegador, QA responsivo, lint, typecheck e build. Não invente histórico se o diretório ainda não for repositório.
- Manter `CASE_STUDY.md` honesto sobre trabalho especulativo, restrições de ativos e validações. Atualizar afirmações pendentes quando houver evidência.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
