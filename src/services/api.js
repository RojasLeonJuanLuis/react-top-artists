const API_KEY = '9a50d1427cc112a73cc8b67f003afaa9'
const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&api_key=http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=${API_KEY}&format=json&format=json`
const api = {
  artists: {
    async getArtists() {
      const response = await fetch(`${url}`)
      const data = await response.json()
      return data
    }
  }
}
export default api
