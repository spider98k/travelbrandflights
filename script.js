// Reviews data
const reviews = [
    {
        name: 'Sarah Johnson',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        review: 'Amazing service! Found me the perfect flight at an unbeatable price. The booking process was so smooth.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        review: 'TravelBrandFlights saved me hundreds on my business trip. Professional and reliable service every time.',
        rating: 5
    },
    {
        name: 'Emily Rodriguez',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        review: 'Best flight booking experience ever! Quick, easy, and the customer service is outstanding.',
        rating: 5
    },
    {
        name: 'David Thompson',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        review: 'I\'ve used many booking sites, but TravelBrandFlights is by far the best. Great deals and excellent support.',
        rating: 5
    },
    {
        name: 'Lisa Wang',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        review: 'Fantastic experience from start to finish. They found me a last-minute flight when others couldn\'t.',
        rating: 5
    }
];

let currentReview = 0;

// Call now function
function callNow() {
    window.location.href = 'tel:+1-866-227-8298';
}

// Review carousel functions
function updateReview() {
    const review = reviews[currentReview];
    document.getElementById('reviewImage').src = review.image;
    document.getElementById('reviewImage').alt = review.name;
    document.getElementById('reviewText').textContent = `"${review.review}"`;
    document.getElementById('reviewName').textContent = `- ${review.name}`;
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentReview);
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview();
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview();
}

function setReview(index) {
    currentReview = index;
    updateReview();
}

// Auto-advance reviews
let reviewInterval = setInterval(nextReview, 5000);

// Pause auto-advance when user interacts
function pauseAutoAdvance() {
    clearInterval(reviewInterval);
    reviewInterval = setInterval(nextReview, 5000);
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    updateReview();
    
    // Add click listeners to carousel buttons
    document.querySelector('.next-btn').addEventListener('click', () => {
        nextReview();
        pauseAutoAdvance();
    });
    
    document.querySelector('.prev-btn').addEventListener('click', () => {
        prevReview();
        pauseAutoAdvance();
    });
    
    // Add click listeners to dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setReview(index);
            pauseAutoAdvance();
        });
    });
});

// Smooth scrolling for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});