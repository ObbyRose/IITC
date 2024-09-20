const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 600 },
    { id: 3, name: 'Headphones', price: 100 },
    { id: 4, name: 'Keyboard', price: 50 },
    { id: 5, name: 'Mouse', price: 30 },
    { id: 6, name: 'Monitor', price: 300 },
    { id: 7, name: 'Printer', price: 150 },
    { id: 8, name: 'Webcam', price: 80 },
    { id: 9, name: 'USB Cable', price: 10 },
    { id: 10, name: 'External Hard Drive', price: 120 },
  ];
  
  const productList = document.getElementById('product-list');
  const productTableBody = document.querySelector('#product-table tbody');
  const totalPriceElement = document.getElementById('total-price');
  
  let cart = {};
  
  // Generate product list
  function generateProductList() {
    products.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        ${product.name} - $${product.price}
        <button onclick="addToTable(${product.id})">Add</button>
      `;
      productList.appendChild(div);
    });
  }
  
  // Add or update product in the table
  function addToTable(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!cart[productId]) {
      cart[productId] = { ...product, quantity: 1 };
      const row = document.createElement('tr');
      row.setAttribute('data-id', productId);
      row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>
          <button onclick="updateQuantity(${productId}, -1)">-</button>
          <span>${cart[productId].quantity}</span>
          <button onclick="updateQuantity(${productId}, 1)">+</button>
        </td>
        <td class="product-total">$${product.price}</td>
        <td><button onclick="removeFromTable(${productId})">Remove</button></td>
      `;
      productTableBody.appendChild(row);
    } else {
      updateQuantity(productId, 1);
    }
    updateTotalPrice();
  }
  
  // Update quantity of a product in the table
  function updateQuantity(productId, amount) {
    if (cart[productId]) {
      cart[productId].quantity += amount;
      if (cart[productId].quantity <= 0) {
        removeFromTable(productId);
      } else {
        const row = document.querySelector(`tr[data-id="${productId}"]`);
        row.querySelector('span').innerText = cart[productId].quantity;
        row.querySelector('.product-total').innerText = `$${(cart[productId].quantity * cart[productId].price).toFixed(2)}`;
        updateTotalPrice();
      }
    }
  }
  
  // Remove product from the table
  function removeFromTable(productId) {
    delete cart[productId];
    const row = document.querySelector(`tr[data-id="${productId}"]`);
    row.remove();
    updateTotalPrice();
  }
  
  // Calculate and update total price
  function updateTotalPrice() {
    let total = 0;
    Object.values(cart).forEach(product => {
      total += product.quantity * product.price;
    });
    totalPriceElement.innerText = `$${total.toFixed(2)}`;
  }
  
  // Initialize the product list
  generateProductList();
  