# Inventário de imagens e referências

Registro inicial: 21/09/2026. Todos os 14 arquivos iniciais foram inspecionados individualmente. Em 26/09/2026, o autor adicionou um mapa regional como 15ª referência. **Nenhum foi confirmado como ativo final/autorizado para publicação comercial.** O uso descrito abaixo é para avaliação local do conceito. Manter originais e proveniência.

Atualizado em 26/09/2026 para a arquitetura de quatro rotas. A coluna de uso registra o destino atual. A renderização de `/estrutura` foi revisada em 320, 375, 390, 430, 768 e 1440 px: proporções naturais, borda editorial fina e ausência de barras pretas criadas pelo layout. A faixa de controles de captura foi removida dos derivados exibidos, com a origem mantida em texto e documentação. Todos os ativos usados continuam sujeitos a substituição por fotografia profissional autorizada.

## Originais recebidos

Pasta local ignorada pelo Git: `gymbro_reference_pack/`. O README desta pasta descreve o conjunto, sem comprovar direitos. “Pessoas” inclui pessoas ao fundo ou refletidas em espelhos; não concluir que baixa resolução elimina possibilidade de identificação.

| Arquivo | O que efetivamente aparece | Classificação / risco | Uso nesta versão |
|---|---|---|---|
| `01_gym-floor-overview.png` | Máquinas, pilares/vigas, iluminação azul, várias pessoas, baixa resolução e margens de captura | Referência temporária; pessoas; substituição necessária | Pesquisa visual; sem uso planejado |
| `02_pilates-room-overview.png` | Equipamentos de Pilates em madeira/metal, sala aparentemente vazia | Referência temporária; operação atual não confirmada; substituição necessária | Omitido |
| `03_group-class-studio-blue-light.png` | Sala vazia, grande espelho, piso de borracha, steps/acessórios, teto metálico e luz azul | Referência temporária; captura de origem a confirmar; substituição necessária | Hero e ambiente local; recorte só das margens de interface/captura |
| `04_pilates-equipment-close-view.png` | Equipamento de Pilates e pessoas no reflexo do espelho | Referência temporária; pessoas; operação atual não confirmada; substituição necessária | Omitido |
| `05_building-facade.png` | Fachada com marca anterior, traço vermelho desenhado e pessoa na calçada | Referência temporária/histórica; pessoas; marca anterior; substituição necessária | Prioridade de pesquisa, **sem renderização pública/local do site**: proibição de reutilizar a marca anterior prevalece; futura foto da fachada atual |
| `06_open-interior-blue-light.png` | Área vazia, pilares, estrutura escura, piso e luz azul | Referência temporária; possível contexto histórico; função atual desconhecida; substituição necessária | Omitido |
| `07_weight-floor-wide-view.png` | Pesos/máquinas, vigas, várias pessoas, navegação e marca Google Maps | Referência Google Maps; pessoas; substituição necessária | `/estrutura`: pesos e visão geral; quadro completo |
| `08_weight-floor-machines.png` | Máquinas/cabos, pessoas, espelhos e Google Maps | Referência Google Maps; pessoas; substituição necessária | `/estrutura`: máquinas/cabos; quadro completo |
| `09_gymbro-logo.png` | Marca Gymbro Club sobre fundo branco, dentro de captura com Maps, mapa e notificação do sistema | Referência de logo; referência Google Maps; substituição necessária por arquivo autorizado | Recorte raster exato da marca para preview local; original preservado |
| `10_weight-floor-linear-lights.png` | Máquinas, piso de madeira/borracha, teto alto com luminárias lineares, pessoas e Google Maps | Referência Google Maps; pessoas; substituição necessária | `/estrutura`: máquinas e luz linear; preparado anteriormente, mas **não renderizado na home anterior** |
| `11_spinning-room-rgb-lighting.png` | Bicicletas, praticantes proeminentes, espelhos e LEDs verdes/vermelhos/azuis, Google Maps | Referência Google Maps; pessoas; substituição necessária | `/estrutura`: spinning, quadro completo de referência local; não tratar como divulgação final autorizada |
| `12_strength-area-blue-red-lighting.png` | Máquinas, piso escuro, vigas com luz azul/vermelha, pessoas nas bordas, Google Maps | Referência Google Maps; pessoas; substituição necessária | Prévia de estrutura e `/estrutura`: musculação, quadro completo |
| `13_treadmills-cardio-area.png` | Esteiras/equipamento de cardio, janela, teto com LEDs, pessoas, Google Maps | Referência Google Maps; pessoas; substituição necessária | Prévia de estrutura e `/estrutura`: cardio, quadro completo |
| `14_cardio-and-machine-floor.png` | Corredor de cardio e máquinas, pessoas, vigas com LEDs azuis/vermelhos, Google Maps | Referência Google Maps; pessoas; substituição necessária | `/estrutura`: continuidade do salão e luz, quadro completo |
| `15_location-map-original.png` | Mapa regional 1271 ×382 com pin “Gymbro Club” e marcadores de outros pontos, incluindo o marcador privado indicado pelo autor | Captura fornecida pelo usuário; substituição necessária antes de publicação | Base visual da localização; original preservado apenas no pack local ignorado |

Não há imagem original de promoção ou grade do Instagram entre os 14 arquivos. Informações de promoção e grade vieram da transcrição no briefing e do texto de análise.

## Derivados locais e decisões de uso

Os derivados ficam em `.local/assets/`, ignorada pelo Git. A geração é responsabilidade de `scripts/prepare-references.mjs`. Consulte o script para os nomes exatos e dimensões finais; não criar cópias não inventariadas em `public/`.

| Origem | Transformação prevista | Limite |
|---|---|---|
| 03 | `studio.webp`: remoção de margens; `studio-hero.webp`: mesmo quadro ampliado de 442 ×445 para1326 ×1335 com Lanczos; `studio-hero-ai.webp`: restauração generativa 1254 ×1254 autorizada pelo autor para hero/atmosfera | A restauração melhora textura, luz e definição, mas reconstrói detalhes finos e continua sendo referência local, não fotografia documental/autorizada. Original e derivado determinístico foram preservados para reversão |
| 09 | `logo.webp`: recorte integral de referência; `mark.webp`: recorte exato do símbolo G para o lockup conceitual | Sem redesenho, traçado vetorial, alteração geométrica ou alegação de arquivo oficial; tipo ao lado do símbolo é apresentação HTML/CSS |
| 07 | Laterais removidas; quadro fotográfico 688 ×790, encerrado antes da faixa inferior de navegação | Conteúdo/pessoas preservados; origem declarada na legenda e neste inventário |
| 08 | Laterais removidas; quadro fotográfico 688 ×800, encerrado antes da faixa inferior de navegação | Mesmo limite; sem retoque de pessoas/equipamentos |
| 10 | Laterais removidas; quadro fotográfico 688 ×810, encerrado antes da faixa inferior de navegação | Mesmo limite; sem síntese |
| 11 | Laterais removidas; quadro fotográfico 688 ×800, encerrado antes da faixa inferior de navegação | Mesmo limite; praticantes preservados; substituição prioritária |
| 12 | Laterais removidas; quadro fotográfico 688 ×800, encerrado antes da faixa inferior de navegação | Mesmo limite; sem retoque |
| 13 | Laterais removidas; quadro fotográfico 688 ×800, encerrado antes da faixa inferior de navegação | Mesmo limite; sem retoque |
| 14 | Laterais removidas; quadro fotográfico 688 ×770, encerrado antes da faixa inferior de navegação | Mesmo limite; sem retoque |
| 15 | `15_location-map-clean-ai.png`: edição generativa restrita para remover marcadores/POIs alheios e recompor o fundo cartográfico; `location-map.webp`: conversão WebP 2171 ×724 com nitidez leve | Mantém apenas o pin Gymbro como foco. A edição pode reconstruir detalhes cartográficos e serve como composição visual, não como fonte de navegação; original preservado e link do Maps usa o endereço textual |

As imagens prioritárias devem usar enquadramento proporcional ao arquivo, grid editorial e bordas discretas. Evitar grandes caixas com vazios criados pelo layout. Não esticar nem usar `cover`/parallax de modo que a marca de origem desapareça. Guardar o quadro completo não basta se o CSS o esconder. Os rótulos locais devem deixar claro o caráter de referência. A UI do Maps faz parte da limitação temporária, sem virar elemento clicável fictício.

Na implementação revisada, os contêineres recebem a razão intrínseca do manifesto e `object-fit: cover`; como a razão do contêiner coincide com a do derivado, o estado final não recorta o quadro. A faixa de controles/“Google Maps” deixou de integrar o bitmap exibido em26/09 a pedido do autor, mas a proveniência permanece textual em cada legenda e documental aqui — o recorte não autoriza publicação. Em 320 px, 07 e 08 ficam em linhas de largura completa para preservar leitura de máquinas/pesos; a partir de 375 px formam o par editorial. A revelação animada é aplicada ao quadro inteiro e termina sem máscara ou transformação.

O crop do estúdio03 continua restrito às margens de captura, e o logo09 ao raster exato. O tratamento de fotos profissionais futuras pode usar enquadramento adequado ao novo arquivo sem carregar a UI das referências.

## Separação entre preview e ativos finais

- `src/config/media.ts`: manifesto central; cada entrada tem caminho de referência e campo `authorizedSrc` para fotografia autorizada futura.
- `src/lib/assets.ts`: resolução do ativo e controle de acesso no servidor.
- `src/app/api/reference/[id]/route.ts`: rota local restrita a IDs conhecidos. Não aceitar caminhos arbitrários.
- `.env.local`: chaves locais `LOCAL_REFERENCE_ASSETS=1` e `LOCAL_SCHEDULE_PREVIEW=1`; arquivo ignorado. `.env.example` usa `0` para ambas.
- A chave de referências locais nunca é uma autorização de publicação. Deve ficar desligada em qualquer ambiente público.
- Nenhum conteúdo de imagem de direitos incertos deve ser versionado. Originais e derivados locais precisam permanecer disponíveis nesta máquina para o preview; um clone novo exigirá restauração privada das referências ou ativos autorizados.
- A ausência de imagens finais deve ser tratada com apresentação neutra, sem gerar um interior fictício como substituto.

## Substituição antes de publicação comercial

Obter fotos originais autorizadas da Gymbro e arquivo oficial da marca, registrar quem autorizou, data, escopo e restrições. Registrar consentimento apropriado quando houver pessoas identificáveis. Substituir os `authorizedSrc` no manifesto; conferir crop, descrição alternativa, dimensões responsivas e contraste; testar os componentes novamente sem a chave de referências locais.

Não marcar automaticamente um novo arquivo como autorizado por ter sido recebido. Origem e autorização devem estar documentadas. A aprovação do uso de fotos, confirmação dos dados e aprovação do conceito são três verificações distintas.
