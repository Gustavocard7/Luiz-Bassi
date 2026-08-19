# Publicação no Render

O projeto está configurado como um **Static Site**. O arquivo `render.yaml` na raiz automatiza a instalação, a compilação e a publicação da pasta `dist/public`.

No painel do Render, selecione **New > Blueprint**, conecte a conta GitHub e escolha o repositório `Gustavocard7/Luiz-Bassi`. O Render identificará o arquivo `render.yaml`; confirme o serviço `luiz-bassi-marcia-moreira` e inicie a publicação.

Após o primeiro deploy, abra a URL provisória gerada pelo Render e teste os links de WhatsApp, Instagram, Fábrica do Sorriso e mapa. Para usar um domínio próprio, adicione-o em **Settings > Custom Domains** no serviço criado e siga as instruções de DNS exibidas no painel.

> O repositório contém uma regra de rewrite para que quaisquer rotas futuras da aplicação continuem abrindo corretamente em uma hospedagem estática.

As imagens institucionais usam URLs públicas absolutas para que continuem disponíveis quando o site for servido pelo domínio do Render. Elas não precisam ser enviadas novamente ao repositório para o primeiro deploy.

## Nota de compatibilidade

O Render já disponibiliza `pnpm` no ambiente de build. Por isso, o comando de publicação usa diretamente `pnpm install --frozen-lockfile && pnpm build`, sem executar `corepack enable`, que tenta alterar arquivos protegidos do ambiente de hospedagem.
