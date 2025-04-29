const genTicket = (n) => {
  let ticket = new Array(n);
  for (let i = 0; i < n; i++) {
    ticket[i] = Math.floor(Math.random() * 10);
  }
  return ticket;
};

const sum = (ticket) => {
  let sum = 0;
  ticket.forEach((num) => {
    sum += num;
  });
  return sum;
};
export { genTicket, sum };
