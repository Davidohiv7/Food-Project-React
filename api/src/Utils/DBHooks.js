const fetch = require("node-fetch");

async function fetchBlobImg(imgLink) {
    const response = await fetch(imgLink)
    const blob = await response.blob()
    return URL.createObjectURL(blob)
  }

  module.exports = {
    fetchBlobImg
  }