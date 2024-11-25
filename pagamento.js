function showPaymentFields(method) {
    document.getElementById('credit-card-form').style.display = 'none';
    document.getElementById('pix-form').style.display = 'none';
    document.getElementById('boleto-form').style.display = 'none';

    if (method === 'credit-card') {
        document.getElementById('credit-card-form').style.display = 'block';
    } else if (method === 'pix') {
        document.getElementById('pix-form').style.display = 'block';
    } else if (method === 'boleto') {
        document.getElementById('boleto-form').style.display = 'block';
    }
}

window.onload = function() {
    const total = localStorage.getItem('cartTotal');
    if (total) {
        document.getElementById('payment-total').textContent = total;
    }
};

function confirmPayment() {
    alert("Pagamento Confirmado!");
    localStorage.removeItem('cartTotal');
    window.location.href = "index.html";
}

document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Endereço salvo com sucesso!");
});
