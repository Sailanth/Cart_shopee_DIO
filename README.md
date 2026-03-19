<div align="center"> 
<img width="600" height="300" alt="image" src="https://github.com/user-attachments/assets/7d6ab831-445a-4e1a-b359-38704519a6bf" />
</div>


# 🛒 Shopee Cart (Simulação de Carrinho de Compras)

Este projeto é uma simulação simples de um carrinho de compras, inspirado no funcionamento de e-commerces como a Shopee. Ele permite adicionar, remover, atualizar itens e calcular o total da compra com suporte a descontos.

---

# 🚀 Funcionalidades

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Diminuir quantidade de itens
- Atualizar quantidade diretamente
- Listar itens do carrinho
- Calcular total da compra
- Aplicar desconto percentual

---

# 🔧 Melhorias Implementadas/ Bugs arrumados no meu End

## 1. 🧠 `addItem` inteligente
Antes:
- Adicionava itens duplicados

Agora:
- Verifica se o item já existe
- Soma a quantidade automaticamente

```js
addItem(cart, item);
````
## Baseado no código de [Felipe Aguiar](https://github.com/felipeAguiarCode)
