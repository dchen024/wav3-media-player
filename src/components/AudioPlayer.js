import React from 'react';

const AudioPlayer = () => {
  const s3Link =
    'https://divhacks-fall-24.s3.amazonaws.com/20241006085325717765_9192736c-9de0-4dc1-a3ab-1f29005e6f3a?AWSAccessKeyId=AKIA4MTWJRXE2CFOWCWF&Signature=vwdnGrnz2OI6eLW4lmHBNSqSk8E%3D&Expires=1728222807'; // Replace with your S3 link

  return (
    <div>
      <h1>Audio Player</h1>
      <audio controls>
        <source src={s3Link} type='audio/wav' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
