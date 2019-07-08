'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC=[];
  var value=objectB.value;
  for(var i in collectionA){
    for(var k in collectionA[i]){
    for(var j in value){
      if(collectionA[i][k]==value[j]){
        collectionC.push(collectionA[i][k]);
       
      }
    }
  }
  }
 
  return collectionC;
}
