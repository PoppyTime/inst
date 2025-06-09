// Follow toggle
const followBtn = document.querySelector('.follow');
followBtn.addEventListener('click', () => {
  if (followBtn.innerText === "Following") {
    followBtn.innerText = "Follow";
    followBtn.style.backgroundColor = "#f5f5f5";
  } else {
    followBtn.innerText = "Following";
    followBtn.style.backgroundColor = "#e6e0dc";
  }
});

// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Highlight modal
document.querySelectorAll('.highlight img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modalImage').src = img.src;
    document.getElementById('highlightModal').classList.remove('hidden');
  });
});
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('highlightModal').classList.add('hidden');
});

// Menu modal
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('menuModal').classList.remove('hidden');
});
document.getElementById('closeMenu').addEventListener('click', () => {
  document.getElementById('menuModal').classList.add('hidden');
});

// Message redirect
document.querySelector('.message').addEventListener('click', () => {
  window.location.href = 'https://xat.com/test';
});

// Followers card
document.getElementById('followersBtn').addEventListener('click', () => {
  document.getElementById('followersCard').classList.remove('hidden');
});
document.getElementById('closeFollowers').addEventListener('click', () => {
  document.getElementById('followersCard').classList.add('hidden');
});

// Follower name links redirect
document.querySelectorAll('#followersCard a').forEach(a => {
  a.addEventListener('click', e => {
    window.location.href = a.href;
  });
});
