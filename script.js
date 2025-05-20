async function lookup() {
  const ip = document.getElementById('ipInput').value;
  const resultDiv = document.getElementById('result');
  if (!ip.trim()) {
    resultDiv.style.display = "none";
    return;
  }
  resultDiv.style.display = "block";
  resultDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();

    if (data.status === "success") {
      resultDiv.innerHTML = `
        <strong>IP Address:</strong> ${data.query}<br>
        <strong>Country:</strong> ${data.country} (${data.countryCode})<br>
        <strong>Region:</strong> ${data.regionName}<br>
        <strong>City:</strong> ${data.city}<br>
        <strong>ZIP:</strong> ${data.zip}<br>
        <strong>Timezone:</strong> ${data.timezone}<br>
        <strong>ISP:</strong> ${data.isp}<br>
        <strong>Organization:</strong> ${data.org}<br>
        <strong>Latitude:</strong> ${data.lat}<br>
        <strong>Longitude:</strong> ${data.lon}<br>
      `;
    } else {
      resultDiv.innerHTML = `Error: ${data.message}`;
    }
  } catch (err) {
    resultDiv.innerHTML = "Request failed.";
  }
}
