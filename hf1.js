let orders = [];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const order = {
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        address: data.get('address'),
        product: data.get('product'),
      };
      orders.push(order);
      alert("Order placed! Thank you!");
      form.reset();
    });
  }
});

function downloadCSV() {
  const headers = ['Name', 'Email', 'Phone', 'Address', 'Product'];
  const rows = orders.map(order =>
    [order.name, order.email, order.phone, order.address, order.product].join(',')
  );
  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'shipping_labels.csv';
  link.click();
}

