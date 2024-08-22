const puppeteer = require('puppeteer');
const {HOT_100_URL} = require('./constants')

const getHot100Entries = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(HOT_100_URL,{waitUntil: 'load'})
    await page.evaluate(() => {
        window.scrollTo(0,document.body.scrollHeight)
    })

    const chartData = await page.evaluate(() => {
        const songs = Array.from(document.querySelectorAll('.o-chart-results-list-row-container'))
        const data = songs.map((song) => (
            {
            artist: song.querySelector('ul li ul li span').textContent.trim(),
            song: song.querySelector('ul li ul li h3').textContent.trim(),
            // lazy loading issue tbf imagePath: song.querySelector('ul li div div img').getAttribute('src'),
            currentPosition: song.querySelector('ul li span').textContent.trim(),
            lastWeek: song.querySelectorAll('ul li ul li')[3].querySelector('span').textContent.trim(),
            peakPosition: song.querySelectorAll('ul li ul li')[4].querySelector('span').textContent.trim(),
            weeksOnChart: song.querySelectorAll('ul li ul li')[5].querySelector('span').textContent.trim()
        }))
        return data
    })
    await browser.close()
    return chartData
}

module.exports = {getHot100Entries}