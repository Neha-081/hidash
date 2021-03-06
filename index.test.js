const assert=require('assert')   //for repeatition of codes
const {forEach,map}=require('./index');
// const test=(desc,fn)=>{
//   console.log('---',desc);
//  try{
//   fn();
//  }catch(err){
//      console.log(err.message);
//  }
// }

//using mocha now  -- on terminal write mocha in index.test.js
//mocha is replacement of above test code and result in very nice way

it('The forEach function',()=>{
    let sum=0;
    forEach([1,2,3],(value)=>{
     sum+=value;
    })

    assert.strictEqual(sum,6,'Expected forEach to sum the array')   //result,expected value,err message
});

it('The map function',()=>{
    const result=map([1,2,3],value=>{
        return value * 2;
    
    });

assert.deepStrictEqual(result,[2,4,6])
//or
    // assert.strictEqual(result[0],2)
    // assert.strictEqual(result[1],4)
    // assert.strictEqual(result[2],6)
    
    
})





