console.log('20200723 4:02 pm');

fetch('https://www.sans.org/tip-of-the-day/rss')
			.then(response => console.log(response.text()));

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
    }
  };
  xhttp.open("GET", 'https://www.sans.org/tip-of-the-day/rss', true);
  xhttp.send();
}

loadDoc();

function loadJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
    }
  };
  xhttp.open("GET", 'https://ipapi.co/json/', true);
  xhttp.send();
}

loadJson();
