module.exports = () => {
  return new Promise((resolve, reject) => {
    process.stdin.on('data', data => {
      const dataWithNBar = data.toString();
      const dataSanitized = dataWithNBar.replace(/\n\r/gi, '');
      resolve(dataSanitized);
    });
  });
};
