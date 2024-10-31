export const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
    return `${minutes}:${formattedSeconds}`;
  };