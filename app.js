// Select elements
const ratings = document.querySelectorAll('.rating'); // changed to class selector
const group1 = document.querySelector('#group_1');
const group2 = document.querySelector('#group_2');
const btn = document.querySelector('#btn');
const span = document.querySelector('.para_2 span');

let selectedValue = null;

// Handle rating click
ratings.forEach(rating => {
  rating.addEventListener('click', function () {
    // Remove style from all
    ratings.forEach(r => {
      r.style.backgroundColor = '';
      r.style.color = '';
    });

    // Add active style to clicked one
    rating.style.backgroundColor = 'var(--White)';
    rating.style.color = 'var(--Grey-950)';

    // Store selected value
    selectedValue = rating.dataset.value;
  });
});

// Handle submit button click
btn.addEventListener('click', function () {
  if (!selectedValue) {
    return;
  }

  // Update text
  span.textContent = selectedValue;

  // Switch to thank-you section
  group1.style.display = 'none';
  group2.style.display = 'flex';
});
