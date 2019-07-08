'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC=[];
  var value=objectB.value;
  for(var i in collectionA){
    for(var j in value){
      if(collectionA[i]==value[j]){
        collectionC.push(collectionA[i]);
      }
    }
  }
  return collectionC;
}
