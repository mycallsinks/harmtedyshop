document.addEventListener("DOMContentLoaded", function () {
  const titles = [
      'Boost Your Work with Our <span>High-Performance Laptops</span>',
      'Enjoy Top-Notch Sound <span>With Our AirPods</span>',
      'Earn with Our <span>Refer and Earn Program</span>',
  ];

  const subheadings = [
      'Power up your productivity and gaming.',
      'Superior sound quality and comfort await.',
      'Get a K100 reward for every successful referral.',
  ];

  const links = [
      'Explore Laptops',
      'Shop AirPods',
      'Start Referring',
  ];

  const backgrounds = [
      'welcome-images/laptophomeimage1.jpg',
      'welcome-images/airpodsimage.jpg',
      'welcome-images/homeimage2.jpg',
  ];

  let currentIndex = 0;

  // Preload images function
  const preloadImages = (urls) => {
      return Promise.all(urls.map(url => {
          return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = reject;
          });
      }));
  };

  // Function to update content
  function updateContent() {
      document.getElementById('dynamicTitle').innerHTML = titles[currentIndex];
      document.getElementById('dynamicSubheading').innerHTML = subheadings[currentIndex];
      document.getElementById('dynamicLink').innerHTML = links[currentIndex];
      document.querySelector('.home').style.backgroundImage = `url(${backgrounds[currentIndex]})`;
  }

  // Function to change content
  function changeContent() {
      document.getElementById('dynamicTitle').classList.add('fade');
      document.getElementById('dynamicSubheading').classList.add('fade');
      document.getElementById('dynamicLink').classList.add('fade');

      setTimeout(() => {
          currentIndex = (currentIndex + 1) % titles.length;

          updateContent();

          document.getElementById('dynamicTitle').classList.remove('fade');
          document.getElementById('dynamicSubheading').classList.remove('fade');
          document.getElementById('dynamicLink').classList.remove('fade');
      }, 500);
  }

  // Preload all images, then hide spinner and show content
  preloadImages(backgrounds).then(() => {
      document.getElementById('spinner').style.display = 'none'; // Hide spinner
      document.querySelector('.home').style.visibility = 'visible'; // Show home content
      updateContent(); // Initial content update
      setInterval(changeContent, 5000); // Change content every 5 seconds
  }).catch(error => {
      console.error("Failed to preload images:", error);
  });
});
