const arr = [1,2,3,4,5,6,7,8,9]

const newArr = arr.filter(function(n){

      if(n%2 == 0){
            return true;
      }
      else{
            false
      }
}

)

console.log(newArr);