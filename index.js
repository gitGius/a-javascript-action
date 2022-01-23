const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const lastOneGreeted = core.getInput("last-one-greeted");

async function run() {
  try {
    if (firstGreeting) {
      core.setOutput("last-one-greeted",firstGreeting);
    } else if (secondGreeting) {
      core.setOutput("last-one-greeted",secondGreeting);
    } else if (thirdGreeting) {
      core.setOutput("last-one-greeted",thirdGreeting);
    }
  } catch(error) {
    core.setFailed(error.message);
  }
}

run();
console.log(${firstGreeting})
console.log(${secondGreeting})
console.log(${thirdGreeting})
