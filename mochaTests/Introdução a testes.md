# Testes TDD  e BDD :heavy_check_mark:

## Testes Automatizados

- Testes unitários: Tem como objetivo testar a menor unidade de código possível.
  - Testa blocos de código como funções,classes, entre outros componentes. Cada um de forma individual.
- Testes integrados: Testa a integração entre as partes testadas no teste anterior.
  - Visa integrar as partes do programa entre si, não com programas externos.
- Testes funcionais: Testes de regras de negócios de ponta a ponta.
  - Os testes são realizados como se o programa estivesse sendo utilizado pelo usuário, não se preocupando com o funcionamento interno do programa. Testando se o produto satisfaz as regras de negocio.

## Testes manuais e automatizados

- Teste de usabilidade;
- Testes de aceitação do usuário;
- Protótipos;
- Testes funcionais;
- Exemplos;
- Alpha e beta;
- Etc.

## Ferramentas de teste

- Teste de carga e performance: Testa os limites que o sistema suporta, como por exemplo número de requisições, quantidade de usuários logados e etc.
- Testes de segurança: Tem objetivo de procurar vulnerabilidades no código entre outros assuntos relacionados á segurança do sistema.

## TDD (Test Driven Development)

Sendo um dos pilares do Extreme Programing, consiste em testar e refatorar o código em pequenos ciclos, onde pensamos no teste antes mesmo de escrever o código. Primeiro estipulamos e escrevemos um teste depois fazemos com que o código passe no teste, após isso voltamos ao código para refatoração (ver oque pode melhorar no código).

### Vantagens

- Feedback rápido.
  - Erros são descobertos e tratados mais rapidamente.
- Maior segurança em alterações e implementação de novas funcionalidades.
  - Ao alterar alguma parte do código caso algo de errado algum teste será quebrado.
- Código mais limpo.
- Mais produtividade.
  - O código fica pronta para produção mais rápido, pois os bugs são resolvidos no mesmo momento do desenvolvimento, diminuindo a quantidade de revisões necessários até o código ficar pronto.

## BDD (Behavior Driven Development)

Essa técnica tem como objetivo juntar regras de negócio com a linguagem de programação. Como fazer isso ? Os testes são feitos de maneira declarativa e descritiva, deixando o código bem comentado, descrevendo oque cada teste faz. Uma boa ferramenta usada para essa técnica em JavaScript é o Mocha.js.

### Pilares

- Testes;
- Documentação;
- Exemplos;

### Vantagens

-  Compartilhamento de conhecimento;
  - Código usando essa técnica é de fácil entendimento para outros desenvolvedores
- Documentação dinâmica;
  - Por possuir testes bem declarativos a documentação é feita de forma dinâmica.
- Visão do todo;



