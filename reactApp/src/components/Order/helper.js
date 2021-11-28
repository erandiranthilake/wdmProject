function showForm(){
    document.getElementsByClassName('options')[0].classList.toggle('active');
    document.getElementsByClassName('forms')[0].classList.toggle('active');
  }

  function placeOrder(){
    let id = document.getElementsByName('cust_id')[0].value;
    let item = document.getElementsByName('item')[0].value;
    let quant = document.getElementsByName('quantity')[0].value;

    document.getElementById('cust_id').innerHTML = id;
    document.getElementById('item').innerHTML = item;
    document.getElementById('quantity').innerHTML = quant;

    document.getElementsByClassName('modal')[0].classList.add('active');
  }

  function modal(){
    document.getElementsByClassName('modal')[0].classList.toggle('active');
  }