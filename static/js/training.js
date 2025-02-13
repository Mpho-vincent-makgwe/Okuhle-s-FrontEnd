    // Training steps and feedback content
    const trainingSteps = [
        {
            title: "Step 1: Identifying Hazards",
            content: "Imagine you are entering a new work area. Look around and identify any potential hazards. Common hazards include loose wires, slippery floors, or unmarked obstacles."
        },
        {
            title: "Step 2: Safety Equipment Check",
            content: "Ensure you have all necessary safety equipment, including a hard hat, gloves, and safety goggles. Check that each item is in good condition and fits securely."
        },
        {
            title: "Step 3: Responding to Emergencies",
            content: "In the event of an emergency, follow the designated escape route and notify a supervisor immediately. Avoid panicking and follow safety protocols."
        },
        {
            title: "Step 4: Equipment Handling",
            content: "Handle equipment with care. Inspect each tool for any damages before use. Report any faulty equipment to the maintenance team."
        },
        {
            title: "Training Complete",
            content: "You've completed the VR training simulation! Practice these steps regularly to stay prepared for real-life scenarios."
        }
    ];

    let currentStep = 0;

    // Function to display the next step
    function nextStep() {
        currentStep++;
        if (currentStep < trainingSteps.length) {
            document.getElementById("training-step").innerHTML = `
                <h2>${trainingSteps[currentStep].title}</h2>
                <p>${trainingSteps[currentStep].content}</p>
            `;
            if (currentStep === trainingSteps.length - 1) {
                document.querySelector(".training-controls").style.display = 'none';
                showFeedback("Good job! You've successfully navigated through the training simulation.");
            }
        }
    }

    // Function to display feedback at the end of training
    function showFeedback(message) {
        document.getElementById("feedback-text").textContent = message;
        document.getElementById("feedback").style.display = 'block';
    }