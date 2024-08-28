const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'kakashki.png';
  link.download = 'kakashki.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});