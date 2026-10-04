const form = document.getElementById('visitorForm');

if (form) {
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const visitor = {
            visitorName: document.getElementById('visitorName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            company: document.getElementById('company').value.trim(),
            purpose: document.getElementById('purpose').value.trim(),
            visitorType: document.getElementById('visitorType').value,
            visitDate: document.getElementById('visitDate').value,
            visitTime: document.getElementById('visitTime').value
        };

        const requiredFields = Object.values(visitor);
        if (requiredFields.some((field) => field === '')) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(visitor.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const phonePattern = /^[0-9+()\-\s]{7,20}$/;
        if (!phonePattern.test(visitor.phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/visitors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(visitor)
            });

            if (!response.ok) {
                throw new Error('Failed to submit visitor');
            }

            alert('Visitor registered successfully!');
            form.reset();
        } catch (error) {
            console.error(error);
            alert('Could not connect to the backend. Please check whether the Spring Boot server is running.');
        }
    });
}
