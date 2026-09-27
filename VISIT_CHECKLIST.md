# Visita à Gymbro — verificação e captação

A visita presencial está planejada pelo usuário e ainda não foi confirmada como realizada. Atualizado em 26/09/2026 para as quatro rotas. O usuário pretende fazer fotos profissionais se a Gymbro se interessar pelo projeto; este roteiro cobre confirmação do negócio e substituição dos ativos temporários sem redesenhar componentes.

## Confirmar com a equipe

- [ ] Letreiro atual, grafia da marca e arquivo oficial do logo, preferencialmente vetorial.
- [ ] Revalidar entrada correta, número, CEP e pin/link do Google Maps. Endereço fornecido pelo autor em 26/09/2026: R. Francisco Nascimento, 26 - Serra Grande, Niterói - RJ, 24342-702.
- [ ] WhatsApp +55 21 99691-7085 e Instagram @gymbrocluboficial; canal que a equipe prefere receber contatos do site.
- [ ] Como apresentar o link externo `https://www.usegymbro.com.br/` de vestuário. Não presumir integração oficial, conta/carrinho compartilhados ou vínculo comercial adicional.
- [ ] Horários atuais de funcionamento em dias úteis, sábado, domingo e feriados. Não confundir com janela de entrada de um plano.
- [ ] Modalidades efetivamente disponíveis hoje, incluindo a situação de Pilates.
- [ ] Grade semanal vigente: dias, horários, nomes exatos e significado das combinações “Spinning + Yoga”, “Lift + GAP” etc.
- [ ] Se quarta/sexta realmente repetem segunda; eventuais aulas de fim de semana.
- [ ] Se aulas exigem reserva, têm restrições de acesso ou estão incluídas nos planos — não presumir respostas.
- [ ] Planos atuais, valores, duração/contrato e condições que a empresa deseja divulgar.
- [ ] Se a antiga oferta de R$99 no plano semestral continua válida; entrada 11h30–16h e permanência até 17h. Registrar validade, sem assumir renovação.
- [ ] Aceitação atual de Wellhub, TotalPass e GuruPass, níveis/regras se aplicáveis. Não inserir logos apenas por conversa informal incompleta.
- [ ] Comodidades atuais e acesso: recepção, vestiários, estacionamento e acessibilidade somente se existentes e confirmados.
- [ ] Permissão para fotografar e usar as imagens no conceito, apresentação comercial e portfólio; registrar limites e autorização.
- [ ] Interesse/aceitação do conceito em separado. Uma visita ou permissão de fotografia não torna o projeto oficial.

Para cada resposta, anotar data, pessoa/canal responsável, texto exato e eventual validade. Atualizar `SOURCE_NOTES.md`, depois os dados tipados. Deixar incertezas pendentes.

## Fotos prioritárias

| Prioridade | Enquadramento | O que precisa mostrar | Uso no site |
|---|---|---|---|
| 1 | Estúdio vazio: horizontal e vertical | Espelho, piso escuro, acessórios e desenho do teto azul, sem reflexos de pessoas | Substituir hero/ref. 03 e ambiente |
| 1 | Piso de musculação: plano aberto | Máquinas, vigas, espelhos e luz azul/vermelha real | Prévia da home e `/estrutura`, ref. 12 |
| 1 | Cardio: plano aberto e médio | Fileira de esteiras, relação com janelas e teto | Prévia da home e `/estrutura`, ref. 13 |
| 1 | Área de máquinas com luzes lineares | Equipamento, pé-direito e linhas de iluminação | `/estrutura`, ref. 10 |
| 1 | Letreiro e entrada atuais | Marca reconhecível e acesso correto | Substituir pesquisa05, que não aparece no site; localização após confirmação |
| 1 | Halteres/bancos/pesos livres | Rack inteiro e composição de equipamento vazio | `/estrutura`, ref. 07 |
| 1 | Máquinas/cabos | Fileiras, relações com vigas, espelhos e piso | `/estrutura`, ref. 08 |
| 1 | Spinning vazio | Bikes, espelhos, iluminação real e organização da sala | `/estrutura`, ref. 11; evitar pessoas proeminentes |
| 1 | Continuidade do salão | Relação entre cardio, máquinas e iluminação azul/vermelha | `/estrutura`, ref. 14 |
| 2 | Sala de aulas/funcional vazia | Steps, piso, acessórios e espelho | Modalidades/aulas |
| 2 | Detalhes | Halteres, anilhas, barras, cabos, pegadores, pilhas de peso e textura do piso | Ritmo editorial e transições |
| 2 | Arquitetura | Vigas, linhas de luz, espelhos, concreto e madeira | Atmosfera |
| Condicional | Recepção/entrada interna | Apenas se confirmada na visita | Chegada ao local |
| Condicional | Pilates | Apenas se continuar pertencendo à Gymbro e autorizado | Conteúdo futuro, não prometido agora |

Fotografar os ambientes prioritários com a iluminação azul/vermelha real e, quando possível, também com luz ambiente mais clara. A atmosfera noturna não deve sugerir horário de funcionamento não confirmado.

## Como capturar

- Fazer versões horizontais amplas (aproximadamente 16:9) e verticais (4:5 ou 3:4) dos enquadramentos prioritários; manter resolução original.
- Reservar algum espaço negativo para títulos sem deixar a arquitetura irreconhecível. Fazer uma alternativa com o assunto à direita e outra mais central.
- Evitar pessoas e conferir espelhos; se houver pessoas identificáveis, obter autorização adequada para o uso pretendido.
- Limpar a lente, manter verticais retas e evitar zoom digital, HDR exagerado, filtros de cor ou luz azul estourada. Preservar o aspecto real.
- Não fotografar telas/dados pessoais, documentos ou situações privadas. Combinar com a equipe um momento tranquilo para o ambiente vazio.
- Guardar originais, autoria, data e autorização. Não enviar apenas imagens recomprimidas por mensageiro.
- Opcional, se autorizado: pequenos movimentos de câmera estáveis mostrando teto/equipamentos, sem inventar movimento de luz ou pessoas. Vídeo não é requisito desta versão.

## Após a visita

1. Separar informação confirmada de pendências e registrar as fontes.
2. Atualizar dados públicos em `src/config/business.ts` e verificação/grade/promoção em `src/config/research.ts`, exclusivo do servidor. Habilitar somente informações confirmadas e adequadas à divulgação.
3. Classificar as fotos em `ASSET_INVENTORY.md`, preencher `authorizedSrc` em `src/config/media.ts` e preservar os originais fora do repositório público quando necessário.
4. Testar `/`, `/estrutura`, `/grade` e `/planos`, navegação compartilhada, loja externa, imagens, metadados, mapa, grade e contatos no navegador, sem referências locais habilitadas. Conferir formatos móveis e desktop.
5. Manter `conceptMode` até autorização explícita para mudar a natureza do projeto. Publicação ainda depende da decisão do usuário.
