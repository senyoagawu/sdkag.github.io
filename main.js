window.addEventListener('DOMContentLoaded', ()=> {
 
  const dealWithNavElements = {
    repos,
    videos,
    about,
    contact,
  }
  const navEl = document.getElementById('nav')
  const submitButton = document.getElementById('submit')
  Array.from(navEl.children).forEach(child => child.addEventListener('click', navigate))
  
  submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    alert('thanks, look forward to working with you')
  })

  function repos(){
    alert('this will link to repos')
  }

  function videos(){
    alert('this will link to videos')
  }
  function about(){
    alert('this will link to about')
  }

  function contact(){
    alert('this will pull up a modal to send email')
  }
  function navigate(event){
    const whichListener = event.target.id
    dealWithNavElements[whichListener]()
  }
})

// name
// first last
// email
// subject
// message