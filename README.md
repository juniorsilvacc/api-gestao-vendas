# Cadastro de clientes

**RF**

- Deve ser possível cadastrar um cliente.

**RN**

- Não deve ser possível cadastrar um cliente com o e-mail já existente.
- O usuário responsável pelo cadastro deve ser um usuário autenticado.

# Listagem de clientes

**RF**

- Deve ser possível listar todos os clientes.

**RN**

- O usuário responsável pela listagem deve ser um usuário autenticado.

# Exibir um cliente

**RF**

- Deve ser possível exibir um cliente específico especifico.

**RN**

- O usuário responsável pela exibição deve ser um usuário autenticado.

# Deletar de cliente

**RF**

- Deve ser possível deletar clientes.

**RN**

- O usuário responsável por deletar o cliente deve ser um usuário autenticado.

# Atualizar de cliente

**RF**

- Deve ser possível atualizar clientes.

**RN**

- O usuário responsável por atualizar o cliente deve ser um usuário autenticado.

# Cadastro de produtos

**RF**

- Deve ser possível cadastrar um produto.

**RN**

- Não deve ser possível cadastrar um produto com o nome já existente.
- O usuário responsável pelo cadastro deve ser um usuário autenticado.

# Listagem de produtos

**RF**

- Deve ser possível listar todos os produtos.

**RN**

- O usuário responsável pela listagem deve ser um usuário autenticado.

# Exibir um produtos

**RF**

- Deve ser possível exibir um produto específico especifico.

**RN**

- O usuário responsável pela exibição deve ser um usuário autenticado.

# Deletar de produtos

**RF**

- Deve ser possível deletar produtos.

**RN**

- O usuário responsável por deletar o produto deve ser um usuário autenticado.

# Atualizar de produtos

**RF**

- Deve ser possível atualizar produtos.

**RN**

- O usuário responsável por atualizar o produto deve ser um usuário autenticado.

# Cadastro de pedidos

**RF**

- Deve ser cadastrar os pedidos dos usuários.

**RN**

- O usuário responsável por cadastrar o pedido deve ser um usuário autenticado.
- O produto deve está cadastrado para fazer o pedido.
- Ao realizar o pedido dos produtos, a quantidade dos produtos devem ser atualizado.
- Caso não tenha a quantidade de produtos necesssários, o usuário deve ser comunicado.

# Exibir um pedido

**RF**

- Deve ser possível exibir um pedido específico especifico.

**RN**

- O usuário responsável pela exibição deve ser um usuário autenticado.

# Recuperação um senha

**RF**

- Deve ser possível o usuário recuperar a senha informado o e-mail.
- O usuário deve receber um e-mail com o passo a passo para a recuperação de senha.
- O usuário deve conseguir inserir uma nova senha

**RN**

- O usuário precisa informar uma nova senha.
- O link enviado para a recuperação deve expirar em 2 horas.

# Perfil um usuário

**RF**

- Deve ser possível atualizar informações de usuários.

**RN**

- O usuário responsável pela atualização deve ser o usuário autenticado.

# Upload de avatar

**RF**

- Deve ser possível fazer upload do avatar.

**RN**

- O usuário responsável por o upload deve ser o usuário autenticado.

**RNF**

- Utilizar o multer para upload dos arquivos.
