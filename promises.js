var promise = new Promise(function(resolve, reject) {
     const x = "geeksforgeeks";
     const y = "geeksforgeeks"
     if(x === y) {
       resolve();
     } else {
       reject();
     }
   });
      
   promise.
       then(function () {
           console.log('Success, You are a GEEK');
       }).
       catch(function () {
           console.log('Some error has occurred');
       });

// 2.
     //   var promise = new Promise(function(resolve, reject) {
     //      throw new Error('Some error has occurred')
     //  })
         
     //  promise
     //      .then(function(successMessage) {
     //          console.log(successMessage);
     //      })
     //      .catch(function(errorMessage) {
     //         //error handler function is invoked
     //          console.log(errorMessage);
     //      });



// let prom = new Promise(function(resolve,reject){
// array=[45,8,54,76,92]
// for (i of array){
//       if (i%2==0){
//           resolve()
//       }
//       else{
//           reject()
//       }
//       }
//  })
//  let onfulfilment=(result)=>{
//       console.log(result)   
//  }
//  let onrejection=(result)=>{
//       console.log(result)
//  }
//  prom.then(onfulfilment)
//  prom.catch(onrejection)
 