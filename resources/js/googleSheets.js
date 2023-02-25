function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwFs8KJwUyRpgXqJm1fRE7z39gEsXYT_96j_5yzjMrUZ8HYpJHlh2a5KtUn4NZaTG_h/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = false
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})
    
      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
