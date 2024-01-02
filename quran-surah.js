fetch('https://fauzi8162.github.io/quran/quran-surah.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Mencetak JSON yang sudah diformat dengan rapi
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
