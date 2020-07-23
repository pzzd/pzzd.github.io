fetch('https://www.sans.org/tip-of-the-day/rss')
			.then(response => console.log(response.text()));
