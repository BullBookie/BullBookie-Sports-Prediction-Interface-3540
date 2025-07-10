import React from 'react';

// BullBookie Brand Logo Components using actual uploaded assets
const BrandLogo = {
  // Main horizontal logo with text - for headers and main branding
  Horizontal: ({ className = "h-8" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752140132183-bullbookie-horizontal-logo.png.png" 
        alt="BullBookie" 
        className={className}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline-flex';
        }}
      />
      <span 
        style={{display: 'none'}} 
        className={`font-caprasimo font-bold text-bull-red ${className.includes('h-') ? className.replace('h-', 'text-') : 'text-2xl'}`}
      >
        BullBookie
      </span>
    </>
  ),

  // Square/compact logo - for favicons, small spaces
  Square: ({ className = "w-8 h-8" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752140129426-blob" 
        alt="BullBookie Logo" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline-flex';
        }}
      />
      <div 
        style={{display: 'none'}} 
        className={`bg-bull-red rounded flex items-center justify-center ${className}`}
      >
        <span className="text-bull-white font-bold text-xs">BB</span>
      </div>
    </>
  ),

  // Just the mascot/icon - for avatars, small branding elements
  Icon: ({ className = "w-8 h-8" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752140122156-bullbookie-icon.png.png" 
        alt="BullBookie Icon" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline-block';
        }}
      />
      <span 
        style={{display: 'none'}} 
        className={`${className.replace('w-', 'text-').replace('h-', '')} flex items-center justify-center`}
      >
        🐂
      </span>
    </>
  ),

  // BBWIN Token logo - using the square logo as token representation
  BBWINToken: ({ className = "w-6 h-6" }) => (
    <>
      <img 
        src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752140129426-blob" 
        alt="BBWIN Token" 
        className={className}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline-flex';
        }}
      />
      <div 
        style={{display: 'none'}} 
        className={`bg-bull-yellow rounded-full flex items-center justify-center ${className}`}
      >
        <span className="text-bull-black font-bold text-xs">BB</span>
      </div>
    </>
  )
};

export default BrandLogo;