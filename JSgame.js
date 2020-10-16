alert("Welkom op dungeon escape!")
alert("In het doolhof moet je verschillende keuze maken.")

var antwoord = prompt("Je bent in het begin van het doolhof ga je link of rechts af. typ links of rechts")

if (antwoord == "rechts") {
	document.write("Je gaat rechtsaf")
	prompt("Je komt bij een splitsing je kunt kiezen uit link of rechts")
	if (antwoord == "rechts") {
		document.write("<br>Je gaat rechtsaf en vind een zwaard op de grond.")
		antwoord = prompt("Je vind een zwaard op de grond en pakt die op. Je komt bij een splitsing je kunt kiezen uit link of rechts")
		if (antwoord == "rechts") {
			document.write("<br>Je gaat rechtsaf en ziet een man op 15 meter van je afstaan.")
			antwoord = prompt("Je ziet een man staan ga je vechten met de man of roep je naar hem. Vul in vechten of roepen.")
			if (antwoord == "vechten") {
				document.write("<br>Je gaat met de man vechten. Je wint het gevecht en vind een map in zijn zak.")
				alert("Je wint het gevecht door het zwaard dat je gevonden heb ook vind je een map in de rechter achter zak van de man. Met behulp van de map kom je het doolhof uit hebt. Je hebt gewonnen.")
				document.write("<br>Je hebt gewonnen")
			}			
		} else {
			document.write("<br>Je gaat links. Er komt een wolf op je afgerent")
			antwoord = prompt("Je gaat linksaf. Er komt een wolf op je afgerent ga je met de wolf vechten of vluchten. vul in vechten of vluchten.")
			if (antwoord == "vechten") {
				document.write("<br>Je overleeft het gevecht met erge wonden en je kan moeilijk lopen en sterft na een tijdje rond dwaalen in het doolhof.")
				alert("Je overleeft het gevecht met erge wonden en je kan moeilijk lopen en sterft na een tijdje rond dwaalen in het doolhof. Je hebt verloren.")
				document.write("<br>Je hebt verloren")
			} else {	
				document.write("<br>Je rent terug de gangen door links, rechts, rechts, links en rechts toen stond er een man voor je. De man zag de wolf en schoot de wolf dood. De man is een boswachter en helpt je uit het doolhof.")
				alert("Je rent terug de gangen door links, rechts, rechts, links en rechts toen stond er een man voor je. De man zag de wolf en schoot de wolf dood.")
				alert("De man is een boswachter en helpt je uit het doolhof. Je hebt gewonnen")
				document.write("<br>Je hebt gewonnen")
			}	
		}
	} else {
		document.write("<br>Je gaat links of en ziet een man staan.")
		antwoord = prompt("Je gaat links af en ziet een man verderop staan. Ga je met de man vechten of roep je naar hem")
		if (antwoord == "roepen") {
			document.write("<br>Je roept naar de man en je loopt elkaars richting op.")
			alert("Je loopt richting elkaar en praat een beetje samen zoeken jullie de uitgang met geluk was die maar 2 gangen verder. Je hebt gewonnen")
			document.write("<br>Je hebt gewonnen")
		} else {
			document.write("<br>Je gaat met de man vechten. Je verrast de man maar hij draait zich om en trekt een mes. Je bent doodgegaan je hebt verloren.")
		}	alert("Je gaat met de man vechten.")
			alert("Je verrast hem van achter maar de man draait zich met een snelle reactie om en trekt een mes. met 2 mes steken blijf je liggen op de grond. Je hebt verloren")
			document.write("<br>Je hebt verloren")
	}
} 
else if (antwoord == "links") {
	document.write("Je gaat linksaf")
	prompt("Je komt bij een splitsing je kunt kiezen uit link of rechts.")
	if (antwoord == "rechts") {
		document.write("<br>Je gaat rechtsaf en je ziet een geweer op de grond liggen.")
		antwoord = prompt("Je gaat rechtsaf en ziet een geweer op de grond liggen pak je het geweer op of niet. Vul in oppakken of looptdoor")
		if (antwoord == "oppakken") {
			document.write("<br>Je pakt het geweer op en loopt door.")
			prompt("Je pakt het geweer op en loopt door. Je komt bij een splitsing je kunt kiezen uit link of rechts.")
			if (antwoord == "rechts") {
				document.write("Je gaat rechtsaf met alle zelfvertrouwen. Je rent over een groot diep gat en valt dood op een steen.")
				alert("Je gaat snel rechtsaf je helpt veel zelfvertrouwen omdat je nu een geweer heb waarmee je jezelf kan verdedigen. Je let niet goed op de grond en valt in een diep gat je komt terecht op een steen met een punt. Door de impact ben je doodgegaan. Je hebt verloren.")
				document.write("<br>Je hebt verloren")
			} 
		} else {
			document.write("<br>Je laat het geweer liggen want je vertrouwt jezelf er niet mee. Je loopt door.")
			prompt("Je laat het geweer liggen want je vertrouwt jezelf er niet mee. Je komt bij een splitsing je kunt kiezen uit link of rechts.")
			if (antwoord == "rechts") {
				document.write("<br>Je gaat rechtsaf en komt een hond tegen. Je volgt de hond en vind de uitweg.")
				alert("Je gaat rechtaf en komt een hond tegen. Je volgt de hond en vind de uitweg.")
				document.write("<br>Je hebt gewonnen")
			} else {
				document.write("<br>Je gaat linksaf en je komt een vrouw tegen.")
				prompt("Je gaat linksaf en komt een vrouw tegen. Ze heeft zwarte kleding aan met een zwarte puntmuts. Ga je naar de vrouw toe of ren je weg. Vul in rechtdoor of terug.")
				if (antwoord == "rechtdoor") {
					document.write("<br>Je loopt naar de vrouw en praat voor een paar seconden. Je legt uit dat je vast zit in het doolhof en de uitgang niet weet.")
					alert("Je loopt naar de vrouw en praat voor een paar seconden. je legt uit dat je vast zit in het doolhof en de uitweg niet weet. De vrouw helpt je naar de uitgang. Je hebt gewonnen.")
					document.write("<br>Je hebt gewonnen")
				} else {
					document.write("<br>Je rent weg van de vrouw en loopt dagen rond in het doolhof uiteindelijk ga je dood van de honger.")
					alert("Je rent weg van de vrouw en loopt dagen rond in het doolhof uiteindelijk ga je dood van de honger. Je hebt verloren.")
					document.write("<br>Je hebt verloren")
				}
			}
		}
	} else {
		document.write("<br>Je gaat linksaf. Je komt bij een splitsing je kunt kiezen uit link of rechts.")
		prompt("Je komt bij een splitsing je kunt kiezen uit link of rechts.")
		if (antwoord == "rechts") {
			document.write("<br>Je gaat rechtsaf. Je ziet een man op de grond liggen met een mes door zijn borst")
			antwoord = prompt("Je gaat rechtsaf. Je ziet een man op de grond liggen met een mes door zijn borst. pak je het mes of laat je het liggen. Vul in oppakken of doorlopen.")
			if (antwoord == "oppakken") {
				document.write("<br>Je pakt het mes met bloed eraan. Je komt de politie tegen in het doolhof en ze vinden jou. Je word opgepakt voor verdachting van moord.")
				alert("Je pakt het mes met bloed eraan uit de borstkast van de man. Je komt de politie tegen in het doolhof en ze vinden jou met een mes die onder het bloed zit. Je word opgepakt voor verdachting van moord. Je hebt verloren.")
				document.write("<br>Je hebt verloren")
			} else {
				document.write("<br>Je laat het mes liggen. Je komt de politie tegen in het doolhof en vertelt ze over het lichaam. Je bent veilig uit het doolhof gekomen. Je hebt gewonnen.")
				alert("Je laat het mes liggen. Je komt de politie tegen in het doolhof en vertelt ze over het lichaam. Je bent veilig uit het doolhof gekomen. Je hebt gewonnen.")
				document.write("<br>Je hebt gewonnen")
			}
		} else {
			document.write("<br>Je gaat linksaf en vind een map op de grond.")
			alert("Je gaat linksaf en vind een map tegen de muur van het doolhof aan je bekijkt de map aandachtig. Met een snelle sprint ga je naar de uitgang maar je let niet goed op. Je valt in een diep gat waar speren uitsteken. Je bent dood... en hebt verloren.")
			document.write("<br>Je hebt verloren")
		}
	}
}
else {
	alert("ERROR.001")
}