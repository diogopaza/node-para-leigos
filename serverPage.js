var http = require('http')
fs = require('fs')

var server = http.createServer(function(request, response){
    
        
       
        
       fs.readFile('./index.html', function(err, html){
        
        response.writeHead(200, {"Content-Type" : "text/html"})
        if(err) return response.write('Pagina nao localizada')    
            response.write(html)
            response.end()

       })
    
    
    })
    
    server.listen(3000, function(){
        console.log('Escutando 3000')
    })