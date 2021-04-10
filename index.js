
  function superbowlWin(array) {
    let win;
    if (array.find(x => x.result === 'W')){
        win = array.find(x => x.result === 'W').year
    } else { 
        win = 'undefined'
    }
    return win 
  }

  