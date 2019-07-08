'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC=[];
  for(var i in collectionA){
    for(var j in collectionB){
      if(collectionA[i]==collectionB[j]){
        collectionC.push(collectionA[i]);
      }
    }
  }
  console.log(collectionC);
  return collectionC;
}
