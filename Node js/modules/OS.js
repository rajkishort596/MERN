const OS = require("os"); //
//os.uptime()
const systemUpTime = OS.uptime();
//os.userInfo()
const userInfo = OS.userInfo();
//some other information
const otherInfo = {
  name: OS.type(),
  release: OS.release(),
  totalMem: OS.totalmem(),
  freeMem: OS.freemem(),
};
console.log(systemUpTime);
console.log(userInfo);
console.log(otherInfo);
