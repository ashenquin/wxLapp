var ways = function(pizza, k) {
  var programmeCount = 0;
  function cutting(pizza, k) {
      var pizzaWidth = pizza[0].length;
      var pizzaHeight = pizza.length;
      if(k > pizzaWidth + pizzaHeight - 2){
          console.log('你切的次数太多啦！');
      } else if(k == 0) {
          programmeCount += 1;
      }
      hengCut:for(var i = 0; i < pizzaHeight; i++){
          if(i == 0) {
              shuCut:for(var j = 0; j < pizzaWidth; j++) {
                  if(i == 0 && j == 0) {
                      //i和j都为0表示没有动刀，直接跳过
                      continue shuCut;
                  }
                  //纵向切分披萨，定义切分后左右两边的披萨
                  var pizzaLeft = [];
                  for(m = 0; m < pizza.length; m ++) {
                      var pizzaItem = pizza[m].split('');
                      pizzaLeft.push(pizzaItem.splice(0,j));
                      pizza[m] = pizzaItem;
                  }
                  //将切剩下的披萨进行递归
                  if(pizzaLeft.length > pizza.length) {
                      if (hasA(pizza)) {
                          cutting(pizzaLeft, k - 1)
                      } else if(pizzaLeft.length == pizza.length) {
                          if (!hasA(pizza) && !hasA(pizzaLeft)) {
                              continue shuCut;
                          } else if (hasA(pizzaLeft)) {
                              cutting(pizzaLeft, k - 1)
                          } else {
                              cutting(pizza, k - 1)
                          }
                      }
                  }
              }
          } else {
              //横向切分披萨，定义切分后上下两边的披萨
              var pizzaTop = [];
              for (var l = 0; l < i; l++) {
                  pizzaTop.push(pizza.shift())
              }
              //将切剩下的披萨进行递归
              if(pizzaTop.length > pizza.length) {
                  if (hasA(pizza)) {
                      cutting(pizzaTop, k - 1)
                  } else if(pizzaTop.length == pizza.length) {
                      if (!hasA(pizza) && !hasA(pizzaTop)) {
                          continue hengCut;
                      } else if (hasA(pizzaTop)) {
                          cutting(pizzaTop, k - 1)
                      } else {
                          cutting(pizza, k - 1)
                      }
                  }
              }
          }
      }
  }
  cutting(pizza, k).then(function(){
      return programmeCount;
  })
};

function hasA(arr) {
  for(var a = 0; a < arr.length; a++) {
      if(arr[a].includes('A')) {
          return true;
      } 
  }
  return false;
}