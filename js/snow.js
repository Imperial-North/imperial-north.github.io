const container = document.querySelector('.snowfall');

function createLeaf() {
  const leaf = document.createElement('div');
  leaf.classList.add('leaf');
  leaf.innerText = '🍁';

  // Random horizontal start
  leaf.style.left = Math.random() * 100 + 'vw';

  // Random size
  const size = Math.random() * 1.5 + 1;
  leaf.style.fontSize = size + 'rem';

  // Random animation duration
  const duration = Math.random() * 5 + 5;
  leaf.style.animationDuration = duration + 's';

  // Optional random delay
  leaf.style.animationDelay = Math.random() * 3 + 's';

  container.appendChild(leaf);

  // Remove the leaf after it falls
  leaf.addEventListener('animationend', () => {
  leaf.remove();
});

}

// Spawn a new leaf every 300 ms
setInterval(createLeaf, 300);
