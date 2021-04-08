<kbd>[&larr; README](../README.md)</kbd>

<div align='justify'>

<h1 align=center>

**🌱 Contribuindo Com o Projeto**

</h1>

## **Índice**

- [Começando](#começando)
  - [Boas Vindas](#boas-vindas)
  - [Linguagem](#linguagem)
  - [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
  - [Documentação](#documentação)
  - [Issues](#issues)
  - [Feedback](#feedback)
  - [Código](#código)
- [Convenção de Commit](#convenção-de-commit)
- [Enviando um Pull Request](#enviando-um-pull-request)
- [Passo a Passo](#passo-a-passo)
- [Motivo das Regras](#motivo-das-regras)

<br>
<br>


## **Começando**

### **Boas Vindas**

Primeiramente, gostaria de agradecer por tirar um tempo para contribuir e tornar esse projeto cada vez melhor!

Aqui possui um conjunto de instruções e diretrizes para tornar o processo de contribuição padronizado.

Espero que esse guia torne claro como funciona o processo de contribuição e responda qualquer dúvida que você possa ter.

### **Linguagem**

Por favor, ao contribuir ou interagir de alguma forma neste projeto, evite usar qualquer outro idioma que não seja o inglês. Principalmente se tratando do código.

> Para os nativos ou fluentes em inglês, procure utilizar palavras e sentenças símples. Não tire sarro de quem não é nativo ou não é fluente no idioma, se você encontrar alguma coisa errada na maneira como eles se expressam!

### **Código de Conduta**

Esperamos que os participantes do projeto sigam o [Código de Conduta](./CODE_OF_CONDUCT.md). Você deve ler o texto completo para que possa entender o tipo de conduta que esperamos e quais ações serão ou não toleradas.

> Ao participar desse projeto, você concorda em cumprir os termos contidos no [Código de Conduta](./CODE_OF_CONDUCT.md).

## **Como Contribuir**

Existem algumas maneiras de contribuir com esse repositório.

### **Documentação**

Como usuário desse repositório, você é um candidato perfeito para contribuir e nos ajudar a melhorar cada vez mais a documentação, tornando ainda mais fácil a utilização para todos e, principalmente, os novos usuários.

Você pode contribuir com:

- Erros de digitação;
- Falta de exemplos;
- Traduções;
- ...

Esses são apenas alguns exemplos de coisas que podem ser corrigidas e/ou aprimoradas.

Você pode até fazer melhorias neste guia! =)

Ao documentar, tente manter as coisas símples e claras.

### **Issues**

- Pesquise por alguma Issue similar ao que você está pensando antes de abrir uma nova;
- Utilize o template de Issue correspondente;
- Utilize um título claro e descritivo;
- Inclua o máximo de informações possíveis, preenchendo todo o template de Issue fornecido;
- Na maioria das vezes, a melhor maneira de relatar um problema é um teste de falha que o comprove.

### **Feedback**

Quanto mais feedback, melhor! Estamos sempre buscando sugestões e opiniões em discussões. Essa é uma ótima oportunidade para influenciar uma nova direção para esse projeto.

Isso inclui o envio de uma sugestão de melhoria, incluindo recursos completamente novos e pequenas melhorias na funcionalidade existente.

A label `question` é um bom lugar para encontrar discussões em andamento.

### **Código**

Você pode utilizar essas labels de Issues para descobrir problemas em que pode ajudar:

- `bug` issues: são bugs conhecidos que gostaríamos de corrigir;
- `enhancement` issues: são funcionalidades (features) novas que estão abertas e gostaríamos de incluir.

As labels `help wanted` e `good first issue` são especialmente úteis.

Quando você ver uma Issue que já foi assinada, verifique se não há alguém trabalhando nela (talvez tente perguntar na própria Issue). Isso evita trabalho desnecessário para todos os envolvidos.

## **Convenção de Commit**

A mensagem de commit consiste em um **header**, **body** e **footer**. O **header** é a única parte obrigatória e consiste em um tipo e assunto. O **body** é utilizado para uma descrição mais completa da alteração. O **footer** é o lugar para referenciar alguma Issue ou Pull Request relacionado ao commit.

Dito isso, terminamos com um modelo como esse:

```
<type>: <subject> (#issue)

[optional body]

[optional footer]
```

Para garantir que um commit seja válido, fácil de ler e pronto para o log de mudanças, temos um **lint** que bloqueia a mensagem de commit antes de permitir que um commit passe. Este linter verifica o seguinte:

- O **header** (primeira linha) é a única parte obrigatória da mensagem de confirmação;
- O **body** e o **footer** são opcionais, mas utilizá-los é altamente recomendado;

- O **header** deve conter:
  - O type:
    - Deve ser em letra minúscula (lowercase);
    - Deve ser do tipo:
      - **chore:** Uma mudança que não corrige um bug nem adiciona um recurso;
      - **feat:** Uma nova funcionalidade no projeto;
      - **ci:** Uma alteração no CI;
      - **docs:** Uma mudança/correção na documentação;
      - **fix:** Corrigir um bug;
      - **test:** Uma mudança/correção ou criação de testes;
  - O subject:
    - Deve ser em letra minúscula (lowercase);
    - Deve ter um limite de no máximo 50 caracteres;
    - Não deve conter pontuação final.
  - O (#issue):
    - Deve ser adicionado o id da Issue referente ao commit;
    - Exemplo: (#256);
  - O body:
    - Deve ter uma linha em branco inicial;
    - Cada linha deve ter um limite de 72 caracteres ou menos.
  - O footer:
      - Deve ter uma linha em branco inicial;
      - Cada linha deve ter um limite de 72 caracteres ou menos;
      - Se o seu commit é sobre documentação ou arquivos meta, por favor adicione a tag [skip ci] para pular o processo de construção;
      - Se for necessário referenciar Issues ou Pull Requests, faça isso na última linha;

Você também deve seguir essas diretrizes de escrita do seu commit:
- Utilize o tempo presente ("adiciona feature" e não "adicionada feature");
- Utilize o tempo imperativo ("move o cursor para..." e não "mover o cursor para...");
- Tente responder as seguintes questões:
  - Porque essa alteração é necessária?
  - Como isso resolve o problema?
  - Quais efeitos colaterais (se houver) essa mudança pode ter?

Exemplo de mensagem de commit:

```
feat: adiciona funcionalidade nova (#43)

Essa funcionalidade nova foi necessária para realizar tal coisa no software, fazendo com que tal coisa seja melhorada.

A funcionalidade foi implementada utilizando tal tecnologia, solucionando o problema x.

É possível ocorrer tal efeito colateral se acontecer y.

Close #43
```

## **Enviando um Pull Request**

Antes de enviar um Pull Request, certifique-se de fazer o seguinte:

- Faça um [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) do repositório e crie a sua branch através da **master/main**.
  - Exemplo: `feature/my-awesome-feature` ou `fix/solving-bug`;
- Rode o comando `yarn` ou `npm install` na raíz do repositório;
- Se você corrigiu um bug ou adicionou código que deve ser testado, adicione testes;
- Certifique-se de que o conjunto de testes seja aprovado;
- Certifique-se de que seu commit seja validado.

## **Passo a Passo**

- Verifique as Issues que estão abertas, se já não existe alguma com a sua feature;
- Abra uma Issue com o nome e descrição da sua feature;
- Faça um Fork do repositório;
- Crie uma branch com o nome da sua feature: `git checkout -b feature/minhaFeature`;
- Faça as alterações necessárias seguindo a [Convenção de Commit](#convenção-de-commit);
- Instale as dependências do commitlint na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
- Faça um push para a sua branch: `git push origin feat/minha-feature`/
- Agora é só abrir um pull request no repositório que você fez o fork e assim que acontecer o merge, sua Issue será fechada e suas alterações irão fazer parte do projeto;
- Depois que o merge da sua Pull Request for feito, você pode deletar a sua branch.

## **Motivo das Regras**

Tentamos fazer cumprir as regras pelos seguintes motivos:

- Geração automática de changelog;
- Comunicar melhor a natureza das mudanças;
- Processos automatizados de construção e publicação (deploy);
- Determinar automaticamente um aumento de `semantic version bump` (com base nos tipos de commits);
- Facilitar a contribuição das pessoas, permitindo que explorem um histórico de commits mais organizado e estruturado.

</div>
