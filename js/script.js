function showGradient(type) {
    const gradientDisplay = document.getElementById('gradient-display');
    let gradient = '';
  
    if (type === 'morandi') {
      gradient = 'linear-gradient(to right, #D8CFC4, #C3B1A3)';
    } else if (type === 'chinese') {
      gradient = 'linear-gradient(to right, #9E3D3F, #D94F4F)';
    } else {
      gradient = '#fff';
    }
  
    gradientDisplay.style.background = gradient;
  }
  