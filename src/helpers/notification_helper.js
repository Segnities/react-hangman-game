export const showNotification = (show) => {
  console.log('I worked');
  show(true);
  setTimeout(() => {
    show(false);
  }, 2000);
};
