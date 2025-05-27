export function getTimeInZone(timeZone) {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeStyle: 'short',
      dateStyle: 'short'
    }).format(new Date());
  }
  