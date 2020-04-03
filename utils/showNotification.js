export default function showNotification({ title, options, callback = () => null }) {
  console.log('notification', notification);

  if (!('Notification' in window)) {
    console.log('Notifications are not supported.');
    return;
  }

  const onNotificationClick = e => {
    e.preventDefault();
    if (typeof callback === 'function') callback(e);
  };

  const notification = new Notification(title, options);

  notification.onclick = onNotificationClick;
}
