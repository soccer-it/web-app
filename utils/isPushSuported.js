export default () =>
  'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
