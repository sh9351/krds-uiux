const fs = require('fs')

const cssBody = fs.readFileSync('./resources/cdn/krds.min.css', 'utf-8')

const split = cssBody.split('url(https://www.krds.go.kr')

const output = split.shift() + split.map(t => {
    const split2 = t.split(')')
    const svgBody = fs.readFileSync(`.${split2.shift()}`, { encoding: 'base64' })
    return `url("data:image/svg+xml;charset=utf-8;base64,${svgBody}")${split2.join(')')}`
}).join('')

fs.writeFileSync('./resources/cdn/krds.min.embed.css', output)