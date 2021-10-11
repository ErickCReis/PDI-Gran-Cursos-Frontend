# Expressões regulares

### Aula 1: Começando com Regex

- Regex, ou expressões regulares, é uma linguagem para encontrar padrões de texto.
- Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python ou Ruby.
- Uma classe de caracteres predefinida é `\d`, que significa qualquer dígito.
- Existem vários meta-char, como `.` ou `*`.
- Existem quantifiers que definem quantas vezes um caractere deve aparecer:
  - `{1}` é um quantifier que significa uma vez.
  - `*` é um quantifier que significa zero, uma ou mais vezes
- `.` é um meta-char que significa qualquer char.
- Com `\` podemos escapar meta-chars, por exemplo `\.`.

### Aula 2: Classes de caracteres

`?` - zero ou uma vez.
`*` - zero ou mais vezes.
`+` - uma ou mais vezes.
`{n}` - exatamente n vezes.
`{n,}` - no mínimo n vezes.
`{n,m}` - no mínimo n vezes, no máximo m vezes.

- Podemos definir facilmente a classe de qualquer caractere com o `[A-Z]`.
- Conhecemos todos os quantifiers como `?`, `+`, `*` e `{n}`.
- `\s` significa whitespace e é um atalho para `[ \t\r\n\f]`.
- `\w` significa word char e é uma atalho para `[A-Za-z0-9_]`.

### Aula 3: Encontrando a posição certa com âncora

- Existem âncoras predefinidas que selecionam uma posição dentro do alvo.
- `\b` é uma âncora que seleciona um _word boundary_, isso é o início ou fim da palavra.
- `^` é uma âncora que seleciona o início da string alvo.
- `$` é uma âncora que seleciona o fim do alvo.

### Aula 4: Trabalhando com grupos

- Declaramos um grupo com `()`.
- Podemos ter grupos e subgrupos.
- Um grupo é retornado na hora de executar, são úteis para selecionar uma parte do _match_.
- Através do `?:`, dizemos que não queremos ver esse grupo na resposta
