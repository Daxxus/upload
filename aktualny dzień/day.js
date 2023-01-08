const currentDay = document.querySelector(".current-day")
const funFact = document.querySelector(".fun-fact")

const facts = [
	"Krokodyl nie potrafi wystawić języka.",
	"Każdy człowiek spędził około pół godziny jako pojedyncza komórka.",
	"Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.",
	"Leniwce potrzebują dwóch tygodni na strawienie jedzenia.",
	"Goryle śpią nawet czternaście godzin dziennie.",
	"Język kameleona jest dwukrotnie dłuższy od jego ciała.",
	"Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.",
	"Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.",
] //generalnie takie info powyżej bierzemy by API, nie robimy tak/tylko do przykładu

const day = new Date() //zwraca bieżącą date z godziną
currentDay.textContent = day.toLocaleDateString("pl", {
	weekday: "long",
	month: "long",
	day: "numeric",
}) //przypisujemy ciąg z dniem i datą do zmiennej która jest w spanie zawartym w h1

const showFacts = () => {
	const number = Math.floor(Math.random() * facts.length) //zmienna sprowadza liczy do całkowitych w dół (floor) a jednocześnie wprowadza przypadkowość (random) z zakresu tablicy facts
	funFact.textContent = facts[number]
}

showFacts()
