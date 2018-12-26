const express = require('express')
const fs = require('fs');
const path = process.cwd();    
const app = express();
const md = require( "markdown" );
const port = 3000

app.get('/md', function(req, res) {

    var buffer = fs.readFileSync(path + "/world.md", 'utf8');
    console.log('pinttttbeofree')

    var md_contnet = buffer.toString();

    // res.send('printtttt tesitng' + buffer.toString());
    var html_content =  md.markdown.toHTML( md_contnet )

    // res.type('html');
    // res.send( html_content);

    fs.writeFileSync("world.html", html_content, (err) => {
        if(err) throw err;
        console.log('HTML file has beed saved.');
    })

})

app.listen(port, () => 
    console.log(`app listioning port ${port}`)
);
