function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyTZRfSCiZSTNRFbULup0J-SlXAcyfWCFg-KFl4hb3aJaPxi0CKxHzCtrldHNIMHcGp/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
            alert('Success submitting to Google sheet!', response) })
        .catch(error => {
            alert('Error submitting to Google sheet!', error.message)})
    
      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
