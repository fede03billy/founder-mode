function handleLinkedIn() {
    // Select a broader scope that definitely includes the main tag but is less likely to be completely replaced
    const container = document.body;

    // Function to apply modifications, simplified to act only if on the homepage
    const modifyPage = () => {
        const url = window.location.href;
        const mainTag = document.querySelector('main');
    
        if (url.includes('/feed') && mainTag && mainTag.children.length > 2) {
            // Find the target element whose styles we want to copy
            const targetElement = mainTag.children[0].children[1]; // Second sibling of the first child
    
            // Create the Founder Mode div
            const founderModeDiv = document.createElement('div');
            founderModeDiv.innerText = 'Founder Mode';
            if (targetElement) {
                // Copy classes from the target element
                founderModeDiv.className = targetElement.className;
            }
            // Add additional styling for Founder Mode div
            founderModeDiv.style.cssText += 'font-size: 24px; text-align: center; margin-top: 40px; padding: 1rem;';
    
            // Replace the second child of the main tag with the Founder Mode div
            const secondChild = mainTag.children[1];
            if (secondChild) {
                secondChild.replaceWith(founderModeDiv);
            }
    
            // Remove the third child of the main tag
            const thirdChild = mainTag.children[2];
            if (thirdChild) {
                thirdChild.remove();
            }
        }
    };
    

    // Initialize modifications immediately if on the correct page
    modifyPage();

    // Observer setup
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                modifyPage();  // Reapply modifications if children are added/removed or attributes change
            }
        }
    });

    // Observe both childList changes and attribute changes in the body or potentially broader container
    observer.observe(container, {
        childList: true,
        subtree: true, // Observes the descendants of the container
        attributes: true,
        attributeFilter: ['href'] // Optionally filter to observe only changes in href attribute if it's relevant
    });
}

const hostname = window.location.hostname;
if (hostname.includes('linkedin.com')) {
    handleLinkedIn();
}
