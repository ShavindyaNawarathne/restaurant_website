import { useMemo } from "react";

export default function TestimonialsComp() {
  const reviews = [
    { id: 1, name: "John Doe", value: "Amazing foods! Highly recommend it." , src:"images/john_doe.jpeg"},
    { id: 2, name: "Jane Smith", value: "Great quality and fast delivery.", src:"images/jane_smith.webp" },
    { id: 3, name: "Alice Johnson", value: "Not bad, but could be improved.", src:"images/alice_johnson.jpeg" },
    { id: 4, name: "Michael Brown", value: "Exceeded my expectations! 5 stars." , src:"images/michael_brown.webp"},
    { id: 5, name: "Emily Davis", value: "Good value for money.", src:"images/emily_davis.jpeg" },
    { id: 6, name: "Chris Wilson", value: "The staff was very helpful.", src:"images/chris_wilson.webp" },
    { id: 7, name: "Daniel Martinez", value: "Loved the taste and friendly staff", src:"images/daniel_martinez.jpeg" },
    { id: 8, name: "Olivia Taylor", value: "Okay product, but delivery was slow.", src:"images/olivia_taylor.jpeg" },
    { id: 9, name: "William Anderson", value: "Fantastic experience, will come again.", src:"images/william_anderson.webp" },
    { id: 10, name: "Sophia Thomas", value: "Decent quality but a bit overpriced.", src:"images/sophia.jpeg" },
  ];

  const filterReviews = useMemo(() => {
    const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5);
    return shuffledReviews.slice(0, 4);
  }, []);

  return (
    <div id="reviews">
      <h1 className="section-title">Customer Reviews</h1>
      <div className="review_box">
        {filterReviews.map((review) => (
          <article key={review.id}>
            <img src={review.src} alt="reviewer"></img>
            <p className="highlight-text">{review.value}</p>
            <h4 className="card-title">{review.name}</h4>
          </article>
        ))}
      </div>
    </div>
  );
}
