'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC=[];
  for(var i in collectionA){
    for(var j in collectionB[0]){
      if(collectionA[i]==collectionB[0][j]){
        collectionC.push(collectionA[i]);
      }
    }
  }
  return collectionC;
}
