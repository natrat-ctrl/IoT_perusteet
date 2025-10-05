<script>
    const url = "https://api.thingspeak.com/channels/3088143/feeds.json?api_key=3E5SCJNQ6QWIDDL4"; // Replace with your actual ThingSpeak URL

    fetch(url)
  .then(response => response.json())
  .then(data => {
    const feeds = data.feeds;
    const temperatures = feeds.map(feed => ({
        time: feed.created_at,
    temp: parseFloat(feed.field1) // Assuming temperature is in field1
    }));

    document.getElementById("output").textContent = JSON.stringify(temperatures, null, 2);
  })
  .catch(error => {
        console.error("Error fetching data", error);
    document.getElementById("output").textContent = "Error loading data";
  });
</script>