// ITERATION 1

const updateSubtotal = (product) => {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let priveValue = parseFloat(price.innerHTML);
  let quantityValue = quantity.value;

  let subTotalValue = priveValue * quantityValue;
  let subTotalContainer = product.querySelector('.subtotal span')

  subTotalContainer.innerHTML = subTotalValue;

  return subTotalValue;
}


 // ITERATION 2
 const calculateAll = () => {
  const products = document.querySelectorAll('.product');
  let totalValue = 0;
  products.forEach((products) => {
    totalValue += updateSubtotal(products);
  });

  // ITERATION 3
const total = document.querySelector('#total-value span');
total.innerHTML = totalValue;
 };

// ITERATION 4

const removeProduct = (event) => {
  let target = event.currentTarget.parentElement.parentElement;
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

  let removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  let newProduct = document.querySelector('#create');
  newProduct.addEventListener('click', createProduct);
});