let bookingLock = false;

async function acquireLock() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (!bookingLock) {
        bookingLock = true;
        clearInterval(interval);
        resolve();
      }
    }, 10);
  });
}

function releaseLock() {
  bookingLock = false;
}

module.exports = { acquireLock, releaseLock };
