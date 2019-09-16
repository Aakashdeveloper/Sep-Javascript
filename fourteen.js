document.getElementsByTagName('h2')
HTMLCollection [h2]
document.getElementsByTagName('p')
HTMLCollection(15) [p, p, p, p, p, p, p, p, p, p, p, p, p, p, p]
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1').innerText
undefined
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I'm From NareshIT"
"I'm From NareshIT"
document.getElementsByTagName('h1')[0].style.color="green"
"green"
document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0].innerText="Home"
"Home"
document.getElementById('one')
<a href=​"#work" id=​"one">​Experience​</a>​
document.getElementById('one').innerText = "About"
"About"