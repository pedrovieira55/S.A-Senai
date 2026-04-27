 FitAcessível: S.A. SENAI (API Backend)

> "A saúde e o bem-estar físico não devem ser um privilégio, mas sim um direito acessível a todos."

 Sobre o Projeto e Impacto Social

O FitAcessível é um projeto de cunho social desenvolvido para a Situação de Aprendizagem (S.A.) do SENAI. O objetivo principal é criar uma plataforma de academia online totalmente gratuita, voltada especificamente para pessoas de baixa renda que não possuem condições financeiras de arcar com as mensalidades de uma academia tradicional ou acompanhamento profissional particular.

Acreditamos que a tecnologia pode ser uma ponte para a inclusão. Por isso, nossa aplicação permite que qualquer pessoa, utilizando apenas o espaço e os recursos que tem em casa, consiga treinar, melhorar seu condicionamento físico e cuidar da sua saúde preventiva.

 Como Funciona? (A Experiência do Usuário)

Para tornar a experiência engajadora e altamente personalizada, o sistema foge do modelo de "treinos genéricos". A jornada do usuário funciona da seguinte forma:

1 Cadastro Inclusivo: O usuário cria sua conta na plataforma de forma rápida e intuitiva.
2 Avaliação Física Gamificada: Ao invés de formulários chatos, o usuário passa por uma espécie de "jogo de perguntas e respostas" interativo. Neste quiz, ele informa:
    Seu nível de atividade física atual (Sedentário, Iniciante, etc.).
    O físico que almeja alcançar (Perda de peso, Ganho de massa, Condicionamento).
    Possíveis limitações físicas (Dores articulares, problemas de mobilidade).
3 O Cronograma Mágico: Com base nas respostas do jogo, a nossa API (Back-end) processa essas informações e gera, automaticamente, um cronograma de treinos personalizado. O usuário recebe um guia diário de quais exercícios fazer para chegar o mais perto possível do corpo que almeja ter.

---

Arquitetura e Tecnologias Utilizadas

Este diretório contém o código-fonte da API (Back-end) da aplicação, responsável por toda a regra de negócio, processamento do quiz e gerenciamento do banco de dados. 

As tecnologias escolhidas atendem rigorosamente ao Check-list de aprovação da Prova Prática:

 Node.js: Ambiente de execução para rodar o JavaScript no servidor.
 Express: Framework minimalista e rápido para a criação das rotas da API RESTful.
 Docker: Ferramenta de conteinerização utilizada para garantir que a aplicação rode perfeitamente em qualquer máquina, isolando o ambiente e suas dependências.

---

Funcionalidades Técnicas (Operações CRUD)

A API foi construída seguindo o padrão REST e possui um CRUD de usuários operando corretamente via requisições HTTP. As principais funcionalidades incluem:

 CREATE (POST /users): Criação de uma nova conta de usuário e envio das respostas iniciais do jogo de avaliação física.
 READ (GET /users e GET /users/:id): Leitura dos dados do perfil do usuário e resgate do cronograma de treinos gerado especificamente para ele.
 UPDATE (PUT /users/:id): Atualização de dados cadastrais ou a opção de refazer o jogo de perguntas caso o usuário mude de objetivo físico.
 DELETE (DELETE /users/:id): Exclusão permanente da conta e de todos os dados do usuário do sistema.

---

 Instruções de Build e Run (Como rodar o projeto)

A aplicação foi totalmente conteinerizada. Para rodar a API localmente na sua máquina, certifique-se de ter o Docker instalado e siga os passos abaixo.

1 Clone o repositório:
Abra o seu terminal e faça o clone do projeto para a sua máquina local:
```bash
git clone [https://github.com/pedrovieira55/S.A-Senai.git](https://github.com/pedrovieira55/S.A-Senai.git)
cd S.A-Senai