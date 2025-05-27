const getCurrentTime = (timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeStyle: 'full',
      dateStyle: 'long'
    }).format(new Date());
  };
  
  console.log("Clock App - Current Times:\n");
  
  console.log("Asia/Kolkata:", getCurrentTime('Asia/Kolkata'));
  console.log("America/New_York:", getCurrentTime('America/New_York'));
  console.log("Europe/London:", getCurrentTime('Europe/London'));
  