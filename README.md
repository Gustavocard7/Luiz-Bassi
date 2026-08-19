# Luiz Bassi & Márcia Moreira Odontologia

Site institucional da clínica Luiz Bassi & Márcia Moreira Odontologia, com foco em cuidado personalizado, benefícios para o paciente e conexão sutil com o laboratório parceiro Fábrica do Sorriso.

## Desenvolvimento local

Instale as dependências e inicie o ambiente de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Para verificar tipos e gerar a versão de produção:

```bash
pnpm check
pnpm build
```

## Publicação no Render

O arquivo `render.yaml` configura o projeto como um **Static Site**. No Render, crie um novo **Blueprint**, conecte este repositório e confirme o serviço identificado pelo arquivo de configuração.

O build publica `dist/public` e mantém a regra de reescrita para a aplicação de página única. As imagens institucionais usam URLs públicas para serem carregadas também fora do ambiente de desenvolvimento.

Veja `RENDER_DEPLOY.md` para o passo a passo resumido.
