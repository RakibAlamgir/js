                                                                         
                                                                                                                     <div style="border:#88cc55 3px dashed;">            
                                                        

<!DOCTYPE html>
<html>
<head>
  
  <style>
    body {
      transition: background-color 0.3s ease;
      text-align: center;
      padding-top: 50px;
    }
    button {
      padding: 7px 15px;
      margin: 7px;
      font-size: 10px;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 5px;
    }
    .violet { background-color: violet; color: black; }
    .indigo { background-color: indigo; }
    .blue { background-color: blue; }
    .green { background-color: green; }
    .yellow { background-color: yellow; color: black; }
    .orange { background-color: orange; color: black; }
    .red { background-color: red; }
    .black { background-color: black; }
  </style>
</head>
<body>

  <h1>Select a Background Color</h1>

  <button class="violet" onclick="changeColor('violet')">Violet</button>
  <button class="indigo" onclick="changeColor('indigo')">Indigo</button>
  <button class="blue" onclick="changeColor('blue')">Blue</button>
  <button class="green" onclick="changeColor('green')">Green</button>
  <button class="yellow" onclick="changeColor('yellow')">Yellow</button>
  <button class="orange" onclick="changeColor('orange')">Orange</button>
  <button class="red" onclick="changeColor('red')">Red</button>
  <button class="black" onclick="changeColor('black')">Black</button>

  <script>
    function changeColor(color) {
      document.body.style.backgroundColor = color;
    }
  </script>

</body>
</html>    
                                                      
                                                      
                                                      
                                                      
      

<!DOCTYPE html>
<html>
<head>
  
  <style>
    body {
      text-align: center;
      padding-top: 40px;
      transition: color 0.3s ease;
    }
    body * {
      transition: color 0.3s ease;
    }

    h1, p, a, button {
      margin: 10px;
      font-size: 18px;
    }

    button {
      padding: 7px 15px;
      margin: 5px;
      font-size: 10px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      color: white;
    }

    .violet { background-color: violet; color: black; }
    .indigo { background-color: indigo; }
    .blue { background-color: blue; }
    .green { background-color: green; }
    .yellow { background-color: yellow; color: black; }
    .orange { background-color: orange; color: black; }
    .red { background-color: red; }
    .black { background-color: black; }

    a {
      text-decoration: none;
    }
  </style>
</head>
<body>

  


  <h1><font color="red">Choose Font Color:</font></h1>
  <button class="violet" onclick="changeFontColor('violet')">Violet</button>
  <button class="indigo" onclick="changeFontColor('indigo')">Indigo</button>
  <button class="blue" onclick="changeFontColor('blue')">Blue</button>
  <button class="green" onclick="changeFontColor('green')">Green</button>
  <button class="yellow" onclick="changeFontColor('yellow')">Yellow</button>
  <button class="orange" onclick="changeFontColor('orange')">Orange</button>
  <button class="red" onclick="changeFontColor('red')">Red</button>
  <button class="black" onclick="changeFontColor('black')">Black</button>

  <script>
    function changeFontColor(color) {
      const elements = document.querySelectorAll("body *");
      elements.forEach(el => {
        el.style.color = color;
      });
    }
  </script>

</body>
</html>                                                
                                                      
             
                                                         
               

<!DOCTYPE html>
<html lang="bn">
<head>
  
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali&family=Poppins&family=Roboto&family=Playfair+Display&family=Lobster&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      
      padding: 15px;
      color: #333;
      transition: font-family 0.5s ease;
    }
    h1 {
      margin-bottom: 15px;
    }
    button {
      margin: 8px;
      padding: 8px 15px;
      border: none;
      border-radius: 8px;
    
      color: white;
      cursor: pointer;
      font-size: 10px;
      background-color: #007bff;
      transition: background-color 0.3s;
    }
    button:hover {
      
    }
  </style>
</head>
<body>
  <h1> <font color="green">Change Font Style</font></h1>
 

  <!-- বাটনগুলো -->
  <button onclick="changeFont('Poppins')">Poppins</button>
  <button onclick="changeFont('Roboto')">Roboto</button>
  <button onclick="changeFont('Noto Sans Bengali')">Noto Sans</button>
  <button onclick="changeFont('Playfair Display')">Playfair</button>
  <button onclick="changeFont('Lobster')">Lobster</button>
  <button onclick="changeFont('Courier New')">Courier New</button>

  


  <script>
    function changeFont(font) {
      document.body.style.fontFamily = font;
    }
  </script>
</body>
</html>


                                          
                                                         
                                                      
                                                      
                                                 </div>                                                                 
                                                                                                                                 
                                                                                                                                 
                                                                                                                                 
                                                                                                                                 
                                                                     

                                                            
                                                                                                                                
                                                                                           
