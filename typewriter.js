// setTimeout(callback, delay)

const sentence = "hello there from lighthouse labs";

 
for (let i = 0; i < sentence.length; i++) {
  // console.log(sentence[i])
  setTimeout(() => {
    process.stdout.write(sentence[i]); 
    // console.log(sentence[i]);
  }, i * 50); // <= this is the delay
};

setTimeout(() => {
  console.log(`\n`)
}, sentence.length * 50);
