document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.querySelector("#quote");
  
    // Fetch quotes from the API
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Log the fetched data (optional)
        // console.log(data);
  
        // Select a random quote
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
  
        // Log the random quote text (optional)
        // console.log(randomQuote.text);
  
        // Update the quote element with the random quote text
        if (quoteElement) {
          quoteElement.innerHTML = "\" "+ randomQuote.text + " ✨\"";
        } else {
          console.error("Quote element not found");
        }
      })
      .catch(function (error) {
        console.error("Error fetching quotes:", error);
        // Optionally, display an error message in the quote element
        if (quoteElement) {
          quoteElement.innerHTML =
            "Failed to fetch quotes. Please try again later.";
        }
      });
  });
  