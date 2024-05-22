
                  

                  
                  
                  function foo(a1){

                   text = document.querySelector('#display1')
                   btn =  document.querySelector('.btn')
                  
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
                        
                  
                  for (i=0 ; i < alphaArr.length; i++){
                        
                       
                        
                        if (a1 == alphaArr[i][0]){
                              letter.push(alphaArr[i].toUpperCase())
                              
                        }

                        text.innerHTML = letter[Math.floor(Math.random()*letter.length)]
                       
                        
                        
                  }

                    
                  
                        
            
                  }
                  
                  

                    

