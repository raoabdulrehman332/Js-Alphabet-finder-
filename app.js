//    var text = document.getElementById("text").innerText;
      // console.log(text);
      // function a1() {
      //   var arr = ["Apple", "Ant", "Airoplane", "Ali", "Asad"] ;
      //   console.log(arr.length);
      //   var random = Math.floor(Math.random() * arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      
      // console.log(text);
      // function b1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function c1() {
      //   var arr = ["Cat","Crow","Call","Chair" ,"Choir"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function d1() {
      //   var arr = ["Dip","Doll","Date",Dish,Dock];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function e1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function f1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function g1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function h1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function i1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      // function j1() {
      //   var arr = ["Ball", "Baloon", "Bat","bar", "bear"];
      //   var random = Math.floor(Math.random() * arr.length);
      //   console.log(arr.length);
      //   var text = document.getElementById("text").innerText = arr[random];
      // }

      
      
      // function sum(...a){
      //       var total =''
      //       for(index of a){
            //             total += index
            
            //             return total.split(",")[0][0]
            //       }
            
            //       for (i =0 ; i < total.length ; i++){
                  //             return 
                  //       }
                  // }
                  
                  // console.log(sum(['ali','asad','fahad','dilshad']));
                  
              
                  
                  
                  var btn;
                  var letter;
                  var text;
                  var result;
                  var alphaArr;
                  
                  
                  function foo(a1){

                   text = document.getElementById('display1')
                   btn =  document.getElementById('btn')
                  
                   letter = []

                   alphaArr =["ball", "baloon", "bat","bar", "bear","apple", "ant", "airoplane", "ali", "asad",
                  "cat","crow","call","chair" ,"choir", "dip","doll","date","dish","dock","eagle", "eon", "elate", "example", "ether",
                  "fall", "friend", "frog", "farm", "fence", "goose", "games", "group", "grump", "grill", "habit","hands","honey",
                  "happy","haste",'icebox', 'iron', 'intercom', 'inhaler', 'instrument','jacket', 'jar', 'jeep', 'jigsaw', 'jukebox', 'jewelry', 'jet',
                  'key', 'knife', 'kite', 'keyboard', 'kickstand','lamp', 'laptop', 'ladder', 'lightbulb', 'lantern', 'lens','mirror', 'microscope', 'magnet', 'motorcycle', 'mixer', 'mask', 'megaphone', 'mailbox',
                  'necklace', 'notebook', 'nail', 'needle', 'napkin', 'net', 'nest','oven', 'organizer', 'opener', 'orange',
                  'pen', 'pencil', 'plate', 'phone', 'pillow', 'piano', 'printer', 'picture', 'purse','quilt', 'quill', 'queue', 'quarter', 'quartz', 'quackster',
                  'radio', 'refrigerator', 'remote', 'rifle', 'recorder', 'razor', 'rock',
                  'sofa', 'spoon', 'shoe', 'sunglasses', 'statue', 'scissors', 'suitcase', 'skateboard', 'speaker',
                  'table', 'television', 'telephone', 'telescope', 'towel',
                  'umbrella', 'ukulele', 'utensils', 'uSB','violin', 'vacuum', 'volleyball', 'video','watch', 'windmill', 'wallet', 'wrench',
                  'x-ray', 'xenon', 'xbox','yogurt', 'yurt', 'yo-yo', 'yardstick','zebra', 'zipper', 'zoster', 'zigzag', 'zucchini']
                        
                  
                  result = letter[random]
                  for (i=0 ; i < alphaArr.length; i++){
                        
                       
                        
                        if (a1 == alphaArr[i][0]){
                              letter.push(alphaArr[i].toUpperCase())
                              
                        }

                        text.innerHTML = letter[Math.floor(Math.random()*letter.length)]
                       
                        
                        
                  }

                    
                  
                        
            
                  }
                  
                  

                    

