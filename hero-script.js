/* ========================================
   A TOWN LIMO - HERO SECTION
   JavaScript Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const form = document.getElementById('townLimoForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });

        // Get Quote button
        const getQuoteBtn = document.querySelector('.btn-secondary');
        if (getQuoteBtn) {
            getQuoteBtn.addEventListener('click', function() {
                handleGetQuote();
            });
        }
    }

    // Set minimum date to today
    setMinimumDate();

    // Add scroll listener for indicator
    addScrollListener();

    // Smooth form interactions
    addFormInteractions();
});

/**
 * Set minimum date to today for date input
 */
function setMinimumDate() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const minDate = `${year}-${month}-${day}`;
        dateInput.min = minDate;
    }
}

/**
 * Handle form submission (Book Now)
 */
function handleFormSubmit() {
    const form = document.getElementById('townLimoForm');
    let isValid = true;
    
    // Collect form data
    const formData = {
        pickup: document.getElementById('pickup').value.trim(),
        dropoff: document.getElementById('dropoff').value.trim(),
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        vehicle: document.getElementById('vehicle').value,
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim()
    };

    // Clear previous errors
    document.getElementById('phone-error').textContent = '';
    document.getElementById('email-error').textContent = '';

    // Validation with detailed error messages
    if (!formData.pickup) {
        showFieldError('pickup', 'Pickup location is required');
        isValid = false;
    }

    if (!formData.dropoff) {
        showFieldError('dropoff', 'Drop-off location is required');
        isValid = false;
    }

    if (!formData.date) {
        showFieldError('date', 'Please select a date');
        isValid = false;
    }

    if (!formData.time) {
        showFieldError('time', 'Please select a time');
        isValid = false;
    }

    if (!formData.vehicle) {
        showFieldError('vehicle', 'Please select a vehicle');
        isValid = false;
    }

    if (!formData.phone) {
        document.getElementById('phone-error').textContent = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhone(formData.phone)) {
        document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
        isValid = false;
    }

    if (!formData.email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (!isValid) {
        showNotification('Please fix the errors above and try again', 'error');
        return;
    }

    // In WordPress environment, this would send to your backend API
    console.log('Booking submitted:', formData);
    showNotification('✓ Booking request submitted! Our team will contact you shortly.', 'success');
    
    // Reset form after success
    setTimeout(() => {
        form.reset();
        document.getElementById('phone-error').textContent = '';
        document.getElementById('email-error').textContent = '';
    }, 1500);
}

/**
 * Show field error
 */
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
        
        const errorId = fieldId + '-error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }
}

/**
 * Handle Get Quote button
 */
function handleGetQuote() {
    const form = document.getElementById('townLimoForm');
    
    // Collect form data if fields are filled
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;

    if (pickup || dropoff) {
        // Pre-fill data in quote request
        const quoteData = {
            pickup: pickup || 'Not specified',
            dropoff: dropoff || 'Not specified',
            date: document.getElementById('date').value || 'Not specified',
            time: document.getElementById('time').value || 'Not specified',
            vehicle: document.getElementById('vehicle').value || 'Not specified'
        };
        
        console.log('Quote requested:', quoteData);
        showNotification('Quote request sent to our specialists!', 'success');
    } else {
        showNotification('Please enter at least your pickup location', 'info');
    }
}

/**
 * Validate phone number
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Validate email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show notification message with enhanced styling
 */
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    // Create notification
    const notif = document.createElement('div');
    notif.className = `notification notification-${type}`;
    notif.setAttribute('role', 'status');
    notif.setAttribute('aria-live', 'polite');
    notif.textContent = message;
    
    // Styles for notification
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        z-index: 9999;
        animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        max-width: 400px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        letter-spacing: 0.3px;
    `;

    if (type === 'success') {
        notif.style.background = '#4CAF50';
        notif.style.color = '#fff';
        notif.style.boxShadow = '0 8px 24px rgba(76, 175, 80, 0.3)';
    } else if (type === 'error') {
        notif.style.background = '#f44336';
        notif.style.color = '#fff';
        notif.style.boxShadow = '0 8px 24px rgba(244, 67, 54, 0.3)';
    } else {
        notif.style.background = '#2196F3';
        notif.style.color = '#fff';
        notif.style.boxShadow = '0 8px 24px rgba(33, 150, 243, 0.3)';
    }

    document.body.appendChild(notif);

    // Auto remove after 4 seconds with fade out
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s cubic-bezier(0.4, 0, 0.6, 1)';
        setTimeout(() => notif.remove(), 300);
    }, 4000);
}

/**
 * Add scroll listener for indicator
 */
function addScrollListener() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

/**
 * Add smooth interactions to form fields
 */
function addFormInteractions() {
    const inputs = document.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        // Add labels on focus/blur for better UX
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Format phone number
        if (input.type === 'tel') {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    if (value.length <= 3) {
                        value = `(${value}`;
                    } else if (value.length <= 6) {
                        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                    } else {
                        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                    }
                }
                e.target.value = value;
            });
        }
    });
}

/**
 * CSS animations for notifications
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .form-group.focused label {
        color: #d4af37;
    }

    @media (max-width: 480px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(style);
