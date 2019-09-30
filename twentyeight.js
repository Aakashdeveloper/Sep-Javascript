function testcode(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('hiii')
        },2000)
    })
}


async function test1(){
    const out = await testcode()
    console.log(out)
}
//testcode()
test1()