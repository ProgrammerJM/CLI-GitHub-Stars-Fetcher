const axios = require("axios");
const { program } = require("commander");

program
  .option("-s, --search <search>", "Start date (YYYY-MM-DD)")
  .option("-e, --end <end>", "End date (YYYY-MM-DD)");

program.parse(process.argv);

const options = program.opts();

let query = "stars:>1";

if (options.start && options.end) {
  query += `created:${options.start}..${options.end}`;
}

axios
  .get(
    `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`
  )
  .then((response) => {
    const { items } = response.data;
    items.forEach((item) => {
      console.log(`Name: ${item.name}, Stars: ${item.stargazers_count}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
