import React from 'react';

// Sports Icon Components using the actual provided images
const SportIcons = {
  Football: ({ className = "w-6 h-6" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752138619015-football-icon.png.png" 
        alt="Football" 
        className={className}
        onError={(e) => {
          // Fallback to emoji if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline';
        }}
      />
      <span style={{display: 'none'}} className={className.replace('w-', 'text-').replace('h-', '')}>⚽</span>
    </>
  ),

  Basketball: ({ className = "w-6 h-6" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752138623944-basketball-icon.png.png" 
        alt="Basketball" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline';
        }}
      />
      <span style={{display: 'none'}} className={className.replace('w-', 'text-').replace('h-', '')}>🏀</span>
    </>
  ),

  Fighting: ({ className = "w-6 h-6" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752138628672-fighting-icon.png.png" 
        alt="Fighting Sports" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline';
        }}
      />
      <span style={{display: 'none'}} className={className.replace('w-', 'text-').replace('h-', '')}>🥊</span>
    </>
  ),

  Tennis: ({ className = "w-6 h-6" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752138633165-tennis-icon.png.png" 
        alt="Tennis" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline';
        }}
      />
      <span style={{display: 'none'}} className={className.replace('w-', 'text-').replace('h-', '')}>🎾</span>
    </>
  ),

  Racing: ({ className = "w-6 h-6" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752138636210-racing-icon.png.png" 
        alt="Racing Sports" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline';
        }}
      />
      <span style={{display: 'none'}} className={className.replace('w-', 'text-').replace('h-', '')}>🏎️</span>
    </>
  )
};

export default SportIcons;