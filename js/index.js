// ITERATION 1

const updateSubtotal = (product) => {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');

  const calculate = (price.innerText) * quantity.value;
  const result = (subTotal.innerText) = calculate;

  return result;
}

 // ITERATION 2
 const calculateAll = () => {
  const products = document.querySelectorAll('.product');
  let counter = 0;
  products.forEach((products) => {
    counter += updateSubtotal(products);
  });

  // ITERATION 3
const total = document. querySelector('#total-value span');
total.innerHTML = counter;
 };

// ITERATION 4

const removeProduct = (event) => {
  const target = event.currentTarget.parentElement.parentElement;
  target.parentElement.removeChild(target);
  calculateAll();
}

// ITERATION 5

const createProduct = () => {
  let inputText = document.querySelector(".create-product input[type='text']");
  let inputPrice = document.querySelector(".create-product input[type='number']");
  let newList = document.createElement('tr');
  newList.setAttribute("class", "product")
  newList.innerHTML =   `<td class="name">
                          <span>${inputText.value}</span>
                        </td>
                        <td class="price">$<span>${inputPrice.value}</span></td>
                        <td class="quantity">
                          <input type="number" value="0" min="0" placeholder="Quantity"/>
                        </td>
                        <td class="subtotal">$<span>0</span></td>
                        <td class="action">
                          <button class="btn btn-remove">Remove</button>
                        </td>`;
  let tbody = document.querySelector('tbody');
  tbody.appendChild(newList);

  inputText.value = ""
  inputPrice.value = 0

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
  button.addEventListener('click', removeProduct);
  
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const newProduct = document.querySelector('#create');
  newProduct.addEventListener('click', createProduct);
});