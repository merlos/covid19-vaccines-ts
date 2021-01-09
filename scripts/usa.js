const puppeteer = require("puppeteer")
const { dateAsYyyyMmDd } = require("./lib/date")
const fs = require("fs")

;(async () => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    //Go to the url
    await page.goto("https://covid.cdc.gov/covid-data-tracker/#vaccinations")

    // if you want to trigger some function in the page use evaluate
    //console.log(await page.evaluate("ml5.version"))

    // Display browser console messages on screen
    //page.on("console", msg => console.log(">", msg.text()))
    //Allow download
    await page._client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: "./",
    })
    await page.setViewport({ width: 1280, height: 800 })
    //await page.screenshot({ path: "./image.jpg", type: "jpeg" })

    await page.click("#prntVaccinations")
    await page.waitForSelector("#btnVaccinationsExport")
    //Click on button Download Data button in COVID-19 Vaccinations in the United States​ table
    await page.click("#btnVaccinationsExport")

    const finalPath = `../raw/usa`
    fs.renameSync(
      `covid19_vaccinations_in_the_united_states.csv`,
      `${finalPath}/${dateAsYyyyMmDd()}-usa.csv`
    )
    console.log("USA DONE!")
    await page.close()

    process.exit(1)
  } catch (e) {
    console.log(e)
    process.exit(-1)
  }
})()
