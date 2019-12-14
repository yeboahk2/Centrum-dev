module.exports = {
  "outputDir": "C:\\Users\\koyeboa\\Desktop\\school\\Centrum\\server\\public",
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://localhost:3000"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}