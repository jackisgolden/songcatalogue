import React, { useState } from 'react';

const CreateReview: React.FC = () => {
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    console.log('Review Submitted:', review); // Replace with actual submission logic
    setReview('');
  };

  return (
    <div>
      <textarea value={review} onChange={e => setReview(e.target.value)} />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default CreateReview;
