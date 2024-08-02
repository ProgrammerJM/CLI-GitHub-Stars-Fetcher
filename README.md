# Most Starred GitHub Projects within Date Range

This project contains a script (`index.js`) that searches for GitHub repositories based on specified criteria and sorts them by the number of stars.

## Description

The `index.js` file uses the GitHub API to search for repositories created within a specified date range and sorts them by the number of stars in descending order. The results are then logged to the console.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/repo-name.git
   ```
2. Navigate to the project directory:
   ```sh
   cd repo-name
   ```
3. Install the dependencies:
   ```sh
   npm install axios commander
   ```

## Usage

1. Run the script with the desired date range:
   ```sh
   node index.js -s <start-date> -e <end-date>
   ```
   Replace `<start-date>` and `<end-date>` with the desired dates in [`YYYY-MM-DD`] format.

## Example

Example command:

```sh
node index.js -s 2022-01-01 -e 2022-12-31
```
